import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { HelpCircle, Home, FileText, Search, ArrowRight } from 'lucide-react';
import styles from './404.module.css';

export default function NotFound(): React.JSX.Element {
    return (
        <Layout
            title="找不到頁面 (404)"
            description="我們找不到您想要尋找的頁面。它可能已被移除或網址有誤。">
            <main className={styles.notFoundPage}>
                <div className="container" style={{ minHeight: 'calc(100vh - var(--ifm-navbar-height) - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.notFoundContent}>
                        <div className={styles.errorCode}>
                            <span className={styles.gradientText}>404</span>
                        </div>

                        <h1 className={styles.title}>哎呀！找不到該頁面</h1>
                        <p className={styles.description}>
                            我們無法找到您要找的頁面，這可能是因為原本的連結已經變更、網址拼寫錯誤，或者該頁面已被移除。
                        </p>

                        <div className={styles.actions}>
                            <Link to="/WPC_Technical_Center/" className={styles.primaryButton}>
                                <Home size={18} style={{ marginRight: '8px' }} />
                                返回首頁
                            </Link>
                            <Link to="/WPC_Technical_Center/sitemap" className={styles.secondaryButton}>
                                <FileText size={18} style={{ marginRight: '8px' }} />
                                瀏覽網站地圖
                            </Link>
                        </div>

                        <div className={styles.helpSection}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <HelpCircle size={20} color="var(--brand-electric-blue)" />
                                需要協助嗎？
                            </h3>
                            <ul className={styles.helpList}>
                                <li>您可以嘗試使用網頁右上角的 <Search size={14} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 2px' }} /> <strong>搜尋功能</strong> 來尋找相關資訊。</li>
                                <li>前往我們的 <Link to="/WPC_Technical_Center/docs/daq-intro">入門指南 <ArrowRight size={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} /></Link>。</li>
                                <li>如果這是一個失效的連結，或是您有任何問題，請聯絡 <a href="mailto:sales@wpc.com.tw">sales@wpc.com.tw</a>。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
