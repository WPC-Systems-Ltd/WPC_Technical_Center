import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import { Rocket, Activity, Cpu, TerminalSquare, Microchip, Server, Signal } from 'lucide-react';

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
        title: translate({ message: '無人機', id: 'homepage.bento.drone.title' }),
        description: translate({ message: 'WPC 無人機產品的規格、技術文件、教學與常見問題。', id: 'homepage.bento.drone.description' }),
        icon: <Rocket size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.drone.links.intro' }), href: '/docs/drone-starter-guide', icon: <Rocket size={16} /> },
            { label: translate({ message: '完整規格', id: 'homepage.bento.drone.links.spec' }), href: '/docs/Drone/specification', icon: <Rocket size={16} /> },
            { label: translate({ message: '起飛指南', id: 'homepage.bento.drone.links.takeoff' }), href: '/docs/Drone/takeoff-guide', icon: <Rocket size={16} /> },
            { label: translate({ message: '常見問題', id: 'homepage.bento.drone.links.faq' }), href: '/docs/drone-faq', icon: <Rocket size={16} /> },
        ],
    },
    {
        title: translate({ message: '資料擷取', id: 'homepage.bento.daq.title' }),
        description: translate({ message: 'WPC 資料擷取產品的規格、技術文件與教學。', id: 'homepage.bento.daq.description' }),
        icon: <Activity size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.daq.links.intro' }), href: '/docs/daq-starter-guide', icon: <Activity size={16} /> },
            { label: 'Ethernet DAQ', href: '/docs/daq/ethan/intro', icon: <Activity size={16} /> },
            { label: 'USB DAQ', href: '/docs/daq/usbdaq/intro', icon: <Activity size={16} /> },
            { label: 'WIFI DAQ', href: '/docs/daq/wifidaq/product-general', icon: <Activity size={16} /> },
            { label: 'STEM', href: '/docs/daq/stem/intro', icon: <Activity size={16} /> },
        ],
    },
    {
        title: translate({ message: '馬達驅動', id: 'homepage.bento.motion.title' }),
        description: translate({ message: 'WPC 馬達驅動的規格、技術文件與教學。', id: 'homepage.bento.motion.description' }),
        icon: <Cpu size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.motion.links.intro' }), href: '/docs/motion-starter-guide', icon: <Cpu size={16} /> },
            { label: 'EDriveST', href: '/docs/Motion/EDriveST/intro', icon: <Cpu size={16} /> },
            { label: 'EDriveSRV', href: '/docs/Motion/EDriveSRV/intro', icon: <Cpu size={16} /> },
            { label: 'Emotion', href: '/docs/Motion/Emotion/intro', icon: <Cpu size={16} /> },
        ],
    },
    {
        title: translate({ message: '儀器與控制', id: 'homepage.bento.instrumentation.title' }),
        description: translate({ message: 'WPC 儀器與控制的規格、技術文件與教學。', id: 'homepage.bento.instrumentation.description' }),
        icon: <Server size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.instrumentation.links.intro' }), href: '/docs/instrumentation-starter-guide', icon: <Server size={16} /> },
            { label: 'gStack-RIO', href: 'docs/Instrumentation/intro', icon: <Server size={16} /> },
        ],
    },
    {
        title: translate({ message: '嵌入式系統', id: 'homepage.bento.embedded.title' }),
        description: translate({ message: '嵌入式控制平台的規格、技術文件與教學。', id: 'homepage.bento.embedded.description' }),
        icon: <Microchip size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.embedded.links.intro' }), href: '/docs/embedded-starter-guide', icon: <Microchip size={16} /> },
            { label: 'GECO', href: '/docs/embedded_systems/geco/intro', icon: <Microchip size={16} /> },
            { label: 'PYCO', href: '/docs/embedded_systems/pyco/intro', icon: <Microchip size={16} /> },
        ],
    },
    {
        title: translate({ message: '訊號調節器', id: 'homepage.bento.signal-conditioner.title' }),
        description: translate({ message: '訊號調節器的規格、技術文件與教學。', id: 'homepage.bento.signal-conditioner.description' }),
        icon: <Signal size={20} />,
        links: [
            { label: translate({ message: '入門指南', id: 'homepage.bento.signal-conditioner.links.intro' }), href: '/docs/signal-conditioner-starter-guide', icon: <Signal size={16} /> },
        ],
    },
    {
        title: translate({ message: '軟體工具', id: 'homepage.bento.software.title' }),
        description: translate({ message: '搭配 WPC 硬體使用的軟體工具與管理平台。', id: 'homepage.bento.software.description' }),
        icon: <TerminalSquare size={20} />,
        links: [
            { label: 'WPC Device Manager', href: '/docs/software/wpc-device-manager/intro', icon: <TerminalSquare size={16} /> },
            { label: 'GECO Manager', href: '/docs/software/geco-manager/intro', icon: <TerminalSquare size={16} /> },
            { label: 'gStackRIO Manager', href: '/docs/software/gstack-rio-manager/intro', icon: <TerminalSquare size={16} /> },
            { label: 'Stand-Alone Editor', href: '/docs/software/wpc-stand-alone-editor/intro', icon: <TerminalSquare size={16} /> },
        ],
    },
    {
        title: translate({ message: '驅動程式', id: 'homepage.bento.driver.title' }),
        description: translate({ message: 'WPC 產品的驅動程式。', id: 'homepage.bento.driver.description' }),
        icon: <TerminalSquare size={20} />,
        links: [
            { label: 'LabVIEW Driver', href: '/docs/driver/wpc-device-driver/intro', icon: <TerminalSquare size={16} /> },
            { label: 'Python Driver', href: 'https://github.com/WPC-Systems-Ltd/WPC_Python_driver_release', icon: <TerminalSquare size={16} /> },
            { label: 'C# Driver', href: 'https://github.com/WPC-Systems-Ltd/WPC_CSharp_driver_release', icon: <TerminalSquare size={16} /> },
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
