import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import { Rocket, Activity, Usb, Wifi, Code } from 'lucide-react';

type BentoItemProps = {
    title: string;
    description: React.ReactNode;
    icon?: React.ReactNode;
    className?: string; // For spanning columns/rows
    to?: string;
};

const BentoList: BentoItemProps[] = [
    {
        title: '入門指南 (Getting Started)',
        description: '快速掌握 WPC 系統的核心概念，並學會如何安裝與配置您的第一個專案。從這裡開始您的精密測量之旅。',
        icon: <Rocket size={24} strokeWidth={1.5} />,
        className: styles.span2,
        to: '/docs/intro',
    },
    {
        title: 'Ethernet-DAQ',
        description: '深入了解我們的高速乙太網數據採集解決方案，支援遠端監控與高頻寬傳輸。',
        icon: <Activity size={24} strokeWidth={1.5} />,
        to: '/docs/daq/ethan/intro',
    },
    {
        title: 'USB-DAQ',
        description: '即插即用的 USB 介面數據採集卡，適合實驗室與便攜式應用，提供極致的採樣精準度。',
        icon: <Usb size={24} strokeWidth={1.5} />,
        to: '/docs/daq/usbdaq/intro',
    },
    {
        title: 'WIFI-DAQ',
        description: '無線數據採集的新標準。擺脫線材束縛，實現靈活的物聯網 (IoT) 部署。',
        icon: <Wifi size={24} strokeWidth={1.5} />,
        to: '/docs/daq/wifidaq/product-general',
    },
    {
        title: '軟體開發套件 (SDK)',
        description: '提供 LabVIEW, C#, Python, C++ 等多語言支援的完整 API 文件與範例程式碼。',
        icon: <Code size={24} strokeWidth={1.5} />,
        className: styles.span2,
        to: '/docs/software/labview/intro',
    },
];

function BentoItem({ title, description, icon, className, to }: BentoItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!itemRef.current) return;
            const { left, top } = itemRef.current.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            itemRef.current.style.setProperty('--mouse-x', `${x}px`);
            itemRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        const el = itemRef.current;
        if (el) {
            el.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (el) {
                el.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const Content = (
        <>
            <div className={styles.bentoIcon}>{icon}</div>
            <div>
                <h3 className={styles.bentoTitle}>{title}</h3>
                <p className={styles.bentoDesc}>{description}</p>
            </div>
        </>
    );

    if (to) {
        return (
            <a href={to} className={clsx(styles.bentoItem, className)} ref={itemRef as any} style={{ textDecoration: 'none' }}>
                {Content}
            </a>
        );
    }

    return (
        <div className={clsx(styles.bentoItem, className)} ref={itemRef}>
            {Content}
        </div>
    );
}

export default function BentoGrid(): React.JSX.Element {
    return (
        <section className={styles.bentoContainer}>
            {BentoList.map((props, idx) => (
                <BentoItem key={idx} {...props} />
            ))}
        </section>
    );
}
