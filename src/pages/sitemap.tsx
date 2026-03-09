import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
    Map, Cpu, TerminalSquare, Rocket, BookOpen, Network, Usb, Wifi, Activity, Settings2,
    Microchip, PlaneTakeoff, FileText, HelpCircle, Gauge, Wrench, LayoutDashboard, Cable, ChevronRight, Boxes,
} from 'lucide-react';
import styles from './sitemap.module.css';

/* ──────────────────────────────────────────
   Data
   ────────────────────────────────────────── */

interface SitemapLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface SubSection {
    heading: string;
    links: SitemapLink[];
}

interface SitemapCategory {
    title: string;
    icon: React.ReactNode;
    description: string;
    links?: SitemapLink[];
    subSections?: SubSection[];
}

const categories: SitemapCategory[] = [
    {
        title: '無人機',
        icon: <Rocket size={20} />,
        description: 'WPC 無人機產品的規格、指南與常見問題。',
        subSections: [
            {
                heading: '教學與指南',
                links: [
                    { label: '產品介紹', href: '/docs/Drone/intro', icon: <BookOpen size={16} /> },
                    { label: '起飛教學', href: '/docs/Drone/takeoff-guide', icon: <PlaneTakeoff size={16} /> },
                    { label: '遙控器操作教學', href: '/docs/Drone/remote-control-guide', icon: <Settings2 size={16} /> },
                    { label: '電池充電教學', href: '/docs/Drone/battery-charge', icon: <Activity size={16} /> },
                ],
            },
            {
                heading: '規格',
                links: [
                    { label: '規格總表', href: '/docs/Drone/specification', icon: <Gauge size={16} /> },
                    { label: '附錄', href: '/docs/Drone/appendix', icon: <FileText size={16} /> },
                ],
            },
            {
                heading: '常見問題 (FAQ)',
                links: [
                    { label: '常見問題', href: '/docs/category/drone-faq', icon: <HelpCircle size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'Ethernet DAQ',
        icon: <Network size={20} />,
        description: '高速乙太網路資料擷取系統，支援遠端監控與高頻寬傳輸。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/daq/ethan/intro', icon: <BookOpen size={16} /> },
                    { label: '硬體外觀及 LED 狀態', href: '/docs/daq/ethan/led_status', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: '規格',
                links: [
                    { label: '規格總表', href: '/docs/daq/ethan/specification', icon: <Gauge size={16} /> },
                ],
            },
            {
                heading: '產品型號',
                links: [
                    { label: '產品型號', href: '/docs/category/ethan-產品型號', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'USB DAQ',
        icon: <Usb size={20} />,
        description: '即插即用的 USB 介面資料擷取卡，適合實驗室與便攜式應用。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/daq/usbdaq/intro', icon: <BookOpen size={16} /> },
                    { label: '取樣率', href: '/docs/daq/usbdaq/sampling_rate', icon: <Activity size={16} /> },
                    { label: '相容性', href: '/docs/daq/usbdaq/compatibility', icon: <Cable size={16} /> },
                ],
            },
            {
                heading: '規格',
                links: [
                    { label: '產品尺寸圖', href: '/docs/daq/usbdaq/layout', icon: <LayoutDashboard size={16} /> },
                    { label: '規格總表', href: '/docs/daq/usbdaq/specification', icon: <Gauge size={16} /> },
                ],
            },
            {
                heading: '產品型號',
                links: [
                    { label: '產品型號', href: '/docs/category/usb-產品型號', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'WIFI DAQ',
        icon: <Wifi size={20} />,
        description: '無線數據採集的新標準，擺脫線材束縛。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/daq/wifidaq/product-general', icon: <BookOpen size={16} /> },
                    { label: '硬體外觀及 LED 狀態', href: '/docs/daq/wifidaq/led_status', icon: <BookOpen size={16} /> },
                    { label: '網路連線設定 (AP Mode)', href: '/docs/daq/wifidaq/pure_apmode_setup', icon: <BookOpen size={16} /> },
                    { label: '變更 Wi-Fi 設定 (使用 WDM)', href: '/docs/daq/wifidaq/station_to_apmode_setup', icon: <BookOpen size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'STEM',
        icon: <Network size={20} />,
        description: '4 插槽模組化乙太網路控制器，支援多樣擴充。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/daq/stem/intro', icon: <BookOpen size={16} /> },
                    { label: '硬體外觀', href: '/docs/daq/stem/layout', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: '支援模組',
                links: [
                    { label: '支援模組', href: '/docs/category/支援模組', icon: <Network size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'Motion',
        icon: <Cpu size={20} />,
        description: '馬達控制與運動驅動解決方案。',
    },
    {
        title: 'GECO',
        icon: <Microchip size={20} />,
        description: '嵌入式控制平台的開發文件與應用範例。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/embedded_systems/geco/intro', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: '規格',
                links: [
                    { label: '控制器規格', href: '/docs/embedded_systems/geco/controller', icon: <Cpu size={16} /> },
                    { label: 'RMC Breakout 規格', href: '/docs/embedded_systems/geco/rmc_breakout', icon: <Cpu size={16} /> },
                ],
            },
            {
                heading: '支援模組',
                links: [
                    { label: '支援模組', href: '/docs/category/支援模組-1', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'PYCO',
        icon: <Microchip size={20} />,
        description: '嵌入式控制平台的開發文件與應用範例。',
        subSections: [
            {
                heading: '教學',
                links: [
                    { label: '產品介紹', href: '/docs/embedded_systems/pyco/intro', icon: <BookOpen size={16} /> },
                    { label: '快速入門', href: '/docs/embedded_systems/pyco/getting-started', icon: <Rocket size={16} /> },
                ],
            },
            {
                heading: '產品型號',
                links: [
                    { label: '產品型號', href: '/docs/category/產品型號', icon: <Boxes size={16} /> },
                ],
            },
            {
                heading: '常見問題 (FAQ)',
                links: [
                    { label: '常見問題', href: '/docs/category/pyco-faq', icon: <HelpCircle size={16} /> },
                ],
            },
        ],
    },
    {
        title: '軟體工具',
        icon: <TerminalSquare size={20} />,
        description: '搭配 WPC 硬體使用的軟體工具與管理平台。',
        subSections: [
            {
                heading: 'WPC Device Manager',
                links: [
                    { label: '快速入門', href: '/docs/software/wpc-device-manager/intro', icon: <Rocket size={16} /> },
                    { label: '主畫面', href: '/docs/software/wpc-device-manager/main-screen', icon: <LayoutDashboard size={16} /> },
                    { label: '常用功能', href: '/docs/software/wpc-device-manager/general-functions', icon: <Wrench size={16} /> },
                    { label: 'Ethernet 裝置', href: '/docs/software/wpc-device-manager/ethernet-device', icon: <Network size={16} /> },
                    { label: 'USB 裝置', href: '/docs/software/wpc-device-manager/usb-device', icon: <Usb size={16} /> },
                    { label: 'WIFI 裝置', href: '/docs/software/wpc-device-manager/wifi-device', icon: <Wifi size={16} /> },
                    { label: '測試面板', href: '/docs/category/測試面板', icon: <Settings2 size={16} /> },
                    { label: '常見問題 (FAQ)', href: '/docs/category/wdm-faq', icon: <HelpCircle size={16} /> },
                ],
            },
            {
                heading: 'GECO Manager',
                links: [
                    { label: '快速入門', href: '/docs/software/geco-manager/intro', icon: <Rocket size={16} /> },
                    { label: '介面說明', href: '/docs/software/geco-manager/interface', icon: <LayoutDashboard size={16} /> },
                    { label: '進階功能', href: '/docs/software/geco-manager/functions', icon: <Wrench size={16} /> },
                ],
            },
            {
                heading: 'Stand-Alone Editor',
                links: [
                    { label: '快速入門', href: '/docs/software/wpc-stand-alone-editor/intro', icon: <Rocket size={16} /> },
                    { label: '介面說明', href: '/docs/software/wpc-stand-alone-editor/interface', icon: <LayoutDashboard size={16} /> },
                    { label: '常用功能', href: '/docs/software/wpc-stand-alone-editor/functions', icon: <Wrench size={16} /> },
                ],
            },
        ],
    },
];

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */
export default function Sitemap(): React.JSX.Element {
    return (
        <Layout
            title="網站地圖 (Sitemap)"
            description="WPC Technical Center 網站地圖與資源導覽"
        >
            <main className={styles.sitemapPage}>
                {/* Hero */}
                <section className={styles.heroSection}>
                    <div className="container">
                        <div className={styles.heroIcon}><Map size={36} /></div>
                        <h1 className={styles.heroTitle}>網站地圖</h1>
                        <p className={styles.heroDesc}>快速瀏覽 WPC Technical Center 的所有資源</p>
                    </div>
                </section>

                {/* Categories */}
                <section className={styles.categoriesSection}>
                    <div className="container">
                        <div className={styles.categoriesGrid}>
                            {categories.map((cat) => (
                                <div key={cat.title} className={styles.categoryCard}>
                                    <div className={styles.categoryHeader}>
                                        <div className={styles.categoryIcon}>{cat.icon}</div>
                                        <h2 className={styles.categoryTitle}>{cat.title}</h2>
                                    </div>
                                    <p className={styles.categoryDesc}>{cat.description}</p>

                                    {/* 簡單連結清單 */}
                                    {cat.links && (
                                        <ul className={styles.linkList}>
                                            {cat.links.map((link) => (
                                                <li key={link.href} className={styles.linkItem}>
                                                    <Link to={link.href} className={styles.linkAnchor}>
                                                        <span className={styles.linkIcon}>{link.icon}</span>
                                                        <span>{link.label}</span>
                                                        <ChevronRight size={14} className={styles.linkArrow} />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* 分組式連結清單 */}
                                    {cat.subSections && cat.subSections.map((sub) => (
                                        <div key={sub.heading} className={styles.subSection}>
                                            <h3 className={styles.subHeading}>{sub.heading}</h3>
                                            <ul className={styles.linkList}>
                                                {sub.links.map((link) => (
                                                    <li key={link.href} className={styles.linkItem}>
                                                        <Link to={link.href} className={styles.linkAnchor}>
                                                            <span className={styles.linkIcon}>{link.icon}</span>
                                                            <span>{link.label}</span>
                                                            <ChevronRight size={14} className={styles.linkArrow} />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaCard}>
                            <h2>還是不確定從哪裡開始？</h2>
                            <p>我們的技術團隊隨時準備為您提供協助。</p>
                            <a href="mailto:sales@wpc.com.tw" className={styles.ctaButton}>聯繫技術支援</a>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
