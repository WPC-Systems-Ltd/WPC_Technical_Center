import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
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
        title: translate({ message: '無人機', id: 'sitemap.category.drone.title' }),
        icon: <Rocket size={20} />,
        description: translate({ message: 'WPC 無人機產品的規格、指南與常見問題。', id: 'sitemap.category.drone.description' }),
        subSections: [
            {
                heading: translate({ message: '教學與指南', id: 'sitemap.category.drone.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.drone.link.intro' }), href: '/docs/Drone/intro', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '起飛教學', id: 'sitemap.category.drone.link.takeoff' }), href: '/docs/Drone/takeoff-guide', icon: <PlaneTakeoff size={16} /> },
                    { label: translate({ message: '遙控器操作教學', id: 'sitemap.category.drone.link.remote' }), href: '/docs/Drone/remote-control-guide', icon: <Settings2 size={16} /> },
                    { label: translate({ message: '電池充電教學', id: 'sitemap.category.drone.link.battery' }), href: '/docs/Drone/battery-charge', icon: <Activity size={16} /> },
                ],
            },
            {
                heading: translate({ message: '規格', id: 'sitemap.category.drone.section.spec' }),
                links: [
                    { label: translate({ message: '規格總表', id: 'sitemap.category.drone.link.spec_table' }), href: '/docs/Drone/specification', icon: <Gauge size={16} /> },
                    { label: translate({ message: '附錄', id: 'sitemap.category.drone.link.appendix' }), href: '/docs/Drone/appendix', icon: <FileText size={16} /> },
                ],
            },
            {
                heading: translate({ message: '常見問題 (FAQ)', id: 'sitemap.category.drone.section.faq' }),
                links: [
                    { label: translate({ message: '常見問題', id: 'sitemap.category.drone.link.faq' }), href: '/docs/Drone/drone-faq/', icon: <HelpCircle size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'Ethernet DAQ',
        icon: <Network size={20} />,
        description: translate({ message: '高速乙太網路資料擷取系統，支援遠端監控與高頻寬傳輸。', id: 'sitemap.category.ethan.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.ethan.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.ethan.link.intro' }), href: '/docs/daq/ethan/intro', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '硬體外觀及 LED 狀態', id: 'sitemap.category.ethan.link.led' }), href: '/docs/daq/ethan/led_status', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: translate({ message: '規格', id: 'sitemap.category.ethan.section.spec' }),
                links: [
                    { label: translate({ message: '規格總表', id: 'sitemap.category.ethan.link.spec_table' }), href: '/docs/daq/ethan/specification', icon: <Gauge size={16} /> },
                ],
            },
            {
                heading: translate({ message: '產品型號', id: 'sitemap.category.ethan.section.models' }),
                links: [
                    { label: translate({ message: '產品型號', id: 'sitemap.category.ethan.link.models' }), href: '/docs/ethan/products/', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'USB DAQ',
        icon: <Usb size={20} />,
        description: translate({ message: '即插即用的 USB 介面資料擷取卡，適合實驗室與便攜式應用。', id: 'sitemap.category.usb.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.usb.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.usb.link.intro' }), href: '/docs/daq/usbdaq/intro', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '取樣率', id: 'sitemap.category.usb.link.sampling' }), href: '/docs/daq/usbdaq/sampling_rate', icon: <Activity size={16} /> },
                    { label: translate({ message: '相容性', id: 'sitemap.category.usb.link.comp' }), href: '/docs/daq/usbdaq/compatibility', icon: <Cable size={16} /> },
                ],
            },
            {
                heading: translate({ message: '規格', id: 'sitemap.category.usb.section.spec' }),
                links: [
                    { label: translate({ message: '產品尺寸圖', id: 'sitemap.category.usb.link.layout' }), href: '/docs/daq/usbdaq/layout', icon: <LayoutDashboard size={16} /> },
                    { label: translate({ message: '規格總表', id: 'sitemap.category.usb.link.spec_table' }), href: '/docs/daq/usbdaq/specification', icon: <Gauge size={16} /> },
                ],
            },
            {
                heading: translate({ message: '產品型號', id: 'sitemap.category.usb.section.models' }),
                links: [
                    { label: translate({ message: '產品型號', id: 'sitemap.category.usb.link.models' }), href: '/docs/usb-daq/products/', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'WIFI DAQ',
        icon: <Wifi size={20} />,
        description: translate({ message: '無線數據採集的新標準，擺脫線材束縛。', id: 'sitemap.category.wifi.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.wifi.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.wifi.link.intro' }), href: '/docs/daq/wifidaq/product-general', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '硬體外觀及 LED 狀態', id: 'sitemap.category.wifi.link.led' }), href: '/docs/daq/wifidaq/led_status', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '網路連線設定 (AP Mode)', id: 'sitemap.category.wifi.link.setup_ap' }), href: '/docs/daq/wifidaq/pure_apmode_setup', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '變更 Wi-Fi 設定 (使用 WDM)', id: 'sitemap.category.wifi.link.setup_wdm' }), href: '/docs/daq/wifidaq/station_to_apmode_setup', icon: <BookOpen size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'STEM',
        icon: <Network size={20} />,
        description: translate({ message: '4 插槽模組化乙太網路控制器，支援多樣擴充。', id: 'sitemap.category.stem.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.stem.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.stem.link.intro' }), href: '/docs/daq/stem/intro', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '硬體外觀', id: 'sitemap.category.stem.link.layout' }), href: '/docs/daq/stem/layout', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: translate({ message: '支援模組', id: 'sitemap.category.stem.section.modules' }),
                links: [
                    { label: translate({ message: '支援模組', id: 'sitemap.category.stem.link.modules' }), href: '/docs/stem/modules/', icon: <Network size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'Motion',
        icon: <Cpu size={20} />,
        description: translate({ message: '馬達控制與運動驅動解決方案。', id: 'sitemap.category.motion.description' }),
    },
    {
        title: 'GECO',
        icon: <Microchip size={20} />,
        description: translate({ message: '嵌入式控制平台的開發文件與應用範例。', id: 'sitemap.category.geco.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.geco.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.geco.link.intro' }), href: '/docs/embedded_systems/geco/intro', icon: <BookOpen size={16} /> },
                ],
            },
            {
                heading: translate({ message: '規格', id: 'sitemap.category.geco.section.spec' }),
                links: [
                    { label: translate({ message: '控制器規格', id: 'sitemap.category.geco.link.controller' }), href: '/docs/embedded_systems/geco/controller', icon: <Cpu size={16} /> },
                    { label: translate({ message: 'RMC Breakout 規格', id: 'sitemap.category.geco.link.breakout' }), href: '/docs/embedded_systems/geco/rmc_breakout', icon: <Cpu size={16} /> },
                ],
            },
            {
                heading: translate({ message: '支援模組', id: 'sitemap.category.geco.section.modules' }),
                links: [
                    { label: translate({ message: '支援模組', id: 'sitemap.category.geco.link.modules' }), href: '/docs/embedded_systems/geco/modules/', icon: <Boxes size={16} /> },
                ],
            },
        ],
    },
    {
        title: 'PYCO',
        icon: <Microchip size={20} />,
        description: translate({ message: '嵌入式控制平台的開發文件與應用範例。', id: 'sitemap.category.pyco.description' }),
        subSections: [
            {
                heading: translate({ message: '教學', id: 'sitemap.category.pyco.section.guide' }),
                links: [
                    { label: translate({ message: '產品介紹', id: 'sitemap.category.pyco.link.intro' }), href: '/docs/embedded_systems/pyco/intro', icon: <BookOpen size={16} /> },
                    { label: translate({ message: '快速入門', id: 'sitemap.category.pyco.link.gs' }), href: '/docs/embedded_systems/pyco/getting-started', icon: <Rocket size={16} /> },
                ],
            },
            {
                heading: translate({ message: '產品型號', id: 'sitemap.category.pyco.section.models' }),
                links: [
                    { label: translate({ message: '產品型號', id: 'sitemap.category.pyco.link.models' }), href: '/docs/embedded_systems/pyco/products/', icon: <Boxes size={16} /> },
                ],
            },
            {
                heading: translate({ message: '常見問題 (FAQ)', id: 'sitemap.category.pyco.section.faq' }),
                links: [
                    { label: translate({ message: '常見問題', id: 'sitemap.category.pyco.link.faq' }), href: '/docs/embedded_systems/pyco/pyco-faq/', icon: <HelpCircle size={16} /> },
                ],
            },
        ],
    },
    {
        title: translate({ message: '軟體工具', id: 'sitemap.category.software.title' }),
        icon: <TerminalSquare size={20} />,
        description: translate({ message: '搭配 WPC 硬體使用的軟體工具與管理平台。', id: 'sitemap.category.software.description' }),
        subSections: [
            {
                heading: 'WPC Device Manager',
                links: [
                    { label: translate({ message: '快速入門', id: 'sitemap.category.software.link.wdm_intro' }), href: '/docs/software/wpc-device-manager/intro', icon: <Rocket size={16} /> },
                    { label: translate({ message: '主畫面', id: 'sitemap.category.software.link.wdm_main' }), href: '/docs/software/wpc-device-manager/main-screen', icon: <LayoutDashboard size={16} /> },
                    { label: translate({ message: '常用功能', id: 'sitemap.category.software.link.wdm_func' }), href: '/docs/software/wpc-device-manager/general-functions', icon: <Wrench size={16} /> },
                    { label: translate({ message: 'Ethernet 裝置', id: 'sitemap.category.software.link.wdm_eth' }), href: '/docs/software/wpc-device-manager/ethernet-device', icon: <Network size={16} /> },
                    { label: translate({ message: 'USB 裝置', id: 'sitemap.category.software.link.wdm_usb' }), href: '/docs/software/wpc-device-manager/usb-device', icon: <Usb size={16} /> },
                    { label: translate({ message: 'WIFI 裝置', id: 'sitemap.category.software.link.wdm_wifi' }), href: '/docs/software/wpc-device-manager/wifi-device', icon: <Wifi size={16} /> },
                    { label: translate({ message: '測試面板', id: 'sitemap.category.software.link.wdm_panels' }), href: '/docs/software/wpc-device-manager/test-panel/', icon: <Settings2 size={16} /> },
                    { label: translate({ message: '常見問題 (FAQ)', id: 'sitemap.category.software.link.wdm_faq' }), href: '/docs/software/wpc-device-manager/wdm-faq/', icon: <HelpCircle size={16} /> },
                ],
            },
            {
                heading: 'GECO Manager',
                links: [
                    { label: translate({ message: '快速入門', id: 'sitemap.category.software.link.gm_intro' }), href: '/docs/software/geco-manager/intro', icon: <Rocket size={16} /> },
                    { label: translate({ message: '介面說明', id: 'sitemap.category.software.link.gm_interface' }), href: '/docs/software/geco-manager/interface', icon: <LayoutDashboard size={16} /> },
                    { label: translate({ message: '進階功能', id: 'sitemap.category.software.link.gm_func' }), href: '/docs/software/geco-manager/functions', icon: <Wrench size={16} /> },
                ],
            },
            {
                heading: 'Stand-Alone Editor',
                links: [
                    { label: translate({ message: '快速入門', id: 'sitemap.category.software.link.sa_intro' }), href: '/docs/software/wpc-stand-alone-editor/intro', icon: <Rocket size={16} /> },
                    { label: translate({ message: '介面說明', id: 'sitemap.category.software.link.sa_interface' }), href: '/docs/software/wpc-stand-alone-editor/interface', icon: <LayoutDashboard size={16} /> },
                    { label: translate({ message: '常用功能', id: 'sitemap.category.software.link.sa_func' }), href: '/docs/software/wpc-stand-alone-editor/functions', icon: <Wrench size={16} /> },
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
            title={translate({ message: '網站地圖 (Sitemap)', id: 'sitemap.page.title' })}
            description={translate({ message: 'WPC Technical Center 網站地圖與資源導覽', id: 'sitemap.page.description' })}
        >
            <main className={styles.sitemapPage}>
                {/* Hero */}
                <section className={styles.heroSection}>
                    <div className="container">
                        <div className={styles.heroIcon}><Map size={36} /></div>
                        <h1 className={styles.heroTitle}>
                            <Translate id="sitemap.hero.title">網站地圖</Translate>
                        </h1>
                        <p className={styles.heroDesc}>
                            <Translate id="sitemap.hero.subtitle">快速瀏覽 WPC Technical Center 的所有資源</Translate>
                        </p>
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
                            <h2>
                                <Translate id="sitemap.cta.title">還是不確定從哪裡開始？</Translate>
                            </h2>
                            <p>
                                <Translate id="sitemap.cta.subtitle">我們的技術團隊隨時準備為您提供協助。</Translate>
                            </p>
                            <a href="mailto:sales@wpc.com.tw" className={styles.ctaButton}>
                                <Translate id="sitemap.cta.button">聯繫技術支援</Translate>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
