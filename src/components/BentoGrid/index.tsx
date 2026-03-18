import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import {
    Rocket,
    Activity,
    Network,
    Usb,
    Wifi,
    GraduationCap,
    Cpu,
    TerminalSquare,
    Settings2,
    MonitorPlay,
    FileCode2,
    Microchip,
    BookOpen,
} from 'lucide-react';

interface CardLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface CardData {
    title: string;
    description: string;
    icon: React.ReactNode;
    links: CardLink[];
}

const cards: CardData[] = [
    {
        title: 'DAQ (資料擷取)',
        description: '各類型資料擷取裝置的技術文件與教學。',
        icon: <Activity size={20} />,
        links: [
            { label: '入門指南', href: '/docs/daq-intro', icon: <BookOpen size={16} /> },
            { label: 'Ethernet DAQ', href: '/docs/ethan', icon: <Network size={16} /> },
            { label: 'USB DAQ', href: '/docs/usb-daq', icon: <Usb size={16} /> },
            { label: 'WIFI DAQ', href: '/docs/wifi-daq', icon: <Wifi size={16} /> },
            { label: 'STEM', href: '/docs/stem', icon: <GraduationCap size={16} /> },
        ],
    },
    {
        title: '軟體工具',
        description: '搭配 WPC 硬體使用的軟體工具與管理平台。',
        icon: <TerminalSquare size={20} />,
        links: [
            { label: 'WPC Device Manager', href: '/docs/software/wpc-device-manager/intro', icon: <Settings2 size={16} /> },
            { label: 'GECO Manager', href: '/docs/software/geco-manager/intro', icon: <MonitorPlay size={16} /> },
            { label: 'Stand-Alone Editor', href: '/docs/software/wpc-stand-alone-editor/intro', icon: <FileCode2 size={16} /> },
        ],
    },
    {
        title: '嵌入式系統',
        description: '嵌入式控制平台的開發文件與應用範例。',
        icon: <Microchip size={20} />,
        links: [
            { label: '入門指南', href: '/docs/embedded-intro', icon: <BookOpen size={16} /> },
            { label: 'GECO', href: '/docs/embedded_systems/geco/intro', icon: <Cpu size={16} /> },
            { label: 'PYCO', href: '/docs/embedded_systems/pyco/intro', icon: <TerminalSquare size={16} /> },
        ],
    },
    {
        title: '無人機',
        description: 'WPC 無人機產品的規格、指南與常見問題。',
        icon: <Rocket size={20} />,
        links: [
            { label: '入門指南', href: '/docs/drone-intro', icon: <BookOpen size={16} /> },
            { label: '規格', href: '/docs/Drone/specification', icon: <Rocket size={16} /> },
            { label: '起飛指南', href: '/docs/Drone/takeoff-guide', icon: <Rocket size={16} /> },
            { label: 'FAQ', href: '/docs/drone-faq', icon: <Rocket size={16} /> },
        ],
    },
];

function BentoCard({ title, description, icon, links }: CardData) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);

        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const { left, top } = ref.current.getBoundingClientRect();
            ref.current.style.setProperty('--mouse-x', `${e.clientX - left}px`);
            ref.current.style.setProperty('--mouse-y', `${e.clientY - top}px`);
        };
        el.addEventListener('mousemove', handleMouseMove);
        return () => el.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={clsx(styles.bentoItem, isVisible && styles.visible)} ref={ref}>
            <div className={styles.cardHeader}>
                <div className={styles.bentoIcon}>{icon}</div>
                <h3 className={styles.bentoTitle}>{title}</h3>
            </div>
            <p className={styles.bentoDesc}>{description}</p>
            <ul className={styles.linkList}>
                {links.map((link) => (
                    <li key={link.href} className={styles.linkItem}>
                        <Link to={link.href} className={styles.linkAnchor}>
                            <span className={styles.linkIcon}>{link.icon}</span>
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BentoGrid(): React.JSX.Element {
    return (
        <section className={styles.bentoContainer}>
            {cards.map((card) => (
                <BentoCard key={card.title} {...card} />
            ))}
        </section>
    );
}
