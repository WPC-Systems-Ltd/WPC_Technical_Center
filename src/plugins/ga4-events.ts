/**
 * GA4 自訂事件追蹤模組
 *
 * 追蹤以下自訂事件：
 * - doc_view: 文件瀏覽事件，記錄文件分類、文件路徑與語言
 * - search_query: 使用者搜尋行為
 * - scroll_depth: 頁面捲動深度（25%, 50%, 75%, 100%）
 *
 * 內建事件（由 gtag 外掛自動處理，無需額外程式碼）：
 * - page_view, external_link_click, download_click, time_on_page
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// ============================================================
// 型別宣告
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// ============================================================
// 工具函式
// ============================================================

/**
 * 安全地發送 GA4 事件
 */
function sendEvent(eventName: string, params: Record<string, any>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * 從路徑提取文件分類
 * 例如: /WPC_Technical_Center/docs/Drone/xxx → 'Drone'
 */
function extractDocCategory(pathname: string): string {
  const match = pathname.match(/\/docs\/([^/]+)/);
  return match ? match[1] : 'unknown';
}

/**
 * 從路徑判斷目前語系
 * 例如: /WPC_Technical_Center/en/docs/... → 'en'
 *       /WPC_Technical_Center/docs/... → 'zh-Hant'
 */
function extractLocale(pathname: string): string {
  const match = pathname.match(/\/WPC_Technical_Center\/([a-z]{2})\//);
  return match ? match[1] : 'zh-Hant';
}

// ============================================================
// 捲動深度追蹤
// ============================================================

/** 記錄已觸發的捲動深度里程碑 */
let scrollMilestones: Set<number> = new Set();

const SCROLL_THRESHOLDS = [25, 50, 75, 100];

function getScrollPercent(): number {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (scrollHeight <= 0) return 100;
  return Math.round((scrollTop / scrollHeight) * 100);
}

function handleScroll(): void {
  const percent = getScrollPercent();
  for (const threshold of SCROLL_THRESHOLDS) {
    if (percent >= threshold && !scrollMilestones.has(threshold)) {
      scrollMilestones.add(threshold);
      sendEvent('scroll_depth', {
        percent_scrolled: threshold,
        page_path: window.location.pathname,
        doc_category: extractDocCategory(window.location.pathname),
      });
    }
  }
}

// ============================================================
// 搜尋追蹤
// ============================================================

/** 記錄最近一次搜尋關鍵字，避免重複發送 */
let lastSearchQuery = '';

function setupSearchTracking(): void {
  // 使用 MutationObserver 偵測搜尋元件的輸入事件
  // docusaurus-search-local 使用 .search-result-match 或 input[type="search"]
  const observer = new MutationObserver(() => {
    const searchInput = document.querySelector<HTMLInputElement>(
      '.navbar__search-input, input[type="search"], .DocSearch-Input'
    );
    if (searchInput && !searchInput.dataset.ga4Tracked) {
      searchInput.dataset.ga4Tracked = 'true';

      // 使用 debounce 避免過於頻繁的事件發送
      let debounceTimer: ReturnType<typeof setTimeout>;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = searchInput.value.trim();
          if (query.length >= 2 && query !== lastSearchQuery) {
            lastSearchQuery = query;
            sendEvent('search_query', {
              search_term: query,
              locale: extractLocale(window.location.pathname),
            });
          }
        }, 1000); // 1 秒 debounce
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// ============================================================
// Docusaurus Client Module 入口
// ============================================================

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  // 預防 Adblocker 攔截或本地開發環境導致 window.gtag 消失，以防止 @docusaurus/plugin-google-gtag 報錯
  if (typeof window.gtag !== 'function') {
    window.gtag = function (...args: any[]) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[GA4] Google Analytics is blocked or disabled in this environment. Event suppressed:', args);
      }
    };
  }

  // 初始化搜尋追蹤
  setupSearchTracking();

  // 註冊捲動監聽（使用 passive 以提升效能）
  window.addEventListener('scroll', handleScroll, { passive: true });


  return {
    onRouteDidUpdate({ location, previousLocation }) {
      // 僅在文件頁面觸發 doc_view 事件
      if (location.pathname.includes('/docs/')) {
        sendEvent('doc_view', {
          doc_category: extractDocCategory(location.pathname),
          doc_path: location.pathname,
          locale: extractLocale(location.pathname),
        });
      }

      // 路由變更時重置捲動里程碑
      if (previousLocation && location.pathname !== previousLocation.pathname) {
        scrollMilestones = new Set();
      }
    },
  };
})();
