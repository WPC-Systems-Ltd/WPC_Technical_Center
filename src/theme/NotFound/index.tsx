import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { HelpCircle, Home, FileText, Search, ArrowRight } from 'lucide-react';
import styles from './styles.module.css';

import { translate } from '@docusaurus/Translate';

export default function NotFound(): React.JSX.Element {
    return (
        <Layout
            title={translate({ message: '找不到頁面 (404)', id: 'theme.NotFound.title' })}
            description={translate({ message: '我們找不到您想要尋找的頁面。它可能已被移除或網址有誤。', id: 'theme.NotFound.description' })}>
            <main className={styles.notFoundPage}>
                <div className="container" style={{ minHeight: 'calc(100vh - var(--ifm-navbar-height) - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.notFoundContent}>
                        <div className={styles.errorCode}>
                            <span className={styles.gradientText}>404</span>
                        </div>

                        <h1 className={styles.title}>{translate({ message: '哎呀！找不到該頁面', id: 'theme.NotFound.p1' })}</h1>
                        <p className={styles.description}>
                            {translate({ message: '我們無法找到您要找的頁面，這可能是因為原本的連結已經變更、網址拼寫錯誤，或者該頁面已被移除。', id: 'theme.NotFound.p2' })}
                        </p>

                        <div className={styles.actions}>
                            <Link to="/" className={styles.primaryButton}>
                                <Home size={18} style={{ marginRight: '8px' }} />
                                {translate({ message: '返回首頁', id: 'theme.NotFound.homeLink' })}
                            </Link>
                            <Link to="/sitemap" className={styles.secondaryButton}>
                                <FileText size={18} style={{ marginRight: '8px' }} />
                                {translate({ message: '瀏覽網站地圖', id: 'theme.NotFound.sitemapLink' })}
                            </Link>
                        </div>

                        <div className={styles.helpSection}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <HelpCircle size={20} color="var(--brand-electric-blue)" />
                                {translate({ message: '需要協助嗎？', id: 'theme.NotFound.helpTitle' })}
                            </h3>
                            <ul className={styles.helpList}>
                                <li>{translate({ message: '您可以嘗試使用網頁右上角的', id: 'theme.NotFound.help1' })} <Search size={14} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 2px' }} /> <strong>{translate({ message: '搜尋功能', id: 'theme.NotFound.help2' })}</strong> {translate({ message: '來尋找相關資訊。', id: 'theme.NotFound.help3' })}</li>
                                <li>{translate({ message: '如果這是一個失效的連結，或是您有任何問題，請聯絡', id: 'theme.NotFound.contact' })} <a href="mailto:dolbylee@mail.wpc.com.tw">dolbylee@mail.wpc.com.tw</a>。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
