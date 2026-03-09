import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Cpu, Download, Play, ArrowRight } from 'lucide-react';
import styles from './styles.module.css';

const steps = [
    {
        title: '選擇硬體',
        desc: 'DAQ 或 嵌入式系統',
        icon: <Cpu size={28} strokeWidth={1.5} />,
    },
    {
        title: '安裝 SDK',
        desc: 'Python, C#, LabVIEW...',
        icon: <Download size={28} strokeWidth={1.5} />,
    },
    {
        title: '執行範例',
        desc: '連接設備並擷取數據',
        icon: <Play size={28} strokeWidth={1.5} />,
    },
];

export default function QuickStartBanner(): React.JSX.Element {
    return (
        <section className={styles.qsSection}>
            <div className={clsx('container', styles.qsContainer)}>
                <div className={styles.qsHeader}>
                    <h2>快速起步指南</h2>
                    <p>只需三個步驟，立即開始您的精密測量專案</p>
                </div>

                <div className={styles.qsStepsWrapper}>
                    {steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div className={styles.qsStepCard}>
                                <div className={styles.qsIconBox}>{step.icon}</div>
                                <div className={styles.qsStepInfo}>
                                    <span className={styles.qsStepNumber}>Step {idx + 1}</span>
                                    <h3 className={styles.qsStepTitle}>{step.title}</h3>
                                    <p className={styles.qsStepDesc}>{step.desc}</p>
                                </div>
                            </div>
                            {/* Arrow between steps (except mobile and last item) */}
                            {idx < steps.length - 1 && (
                                <div className={styles.qsArrow}>
                                    <ArrowRight size={24} strokeWidth={1.5} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className={styles.qsAction}>
                    <Link to="/docs/daq-intro" className={styles.qsButton}>
                        前往完整入門指南
                        <ArrowRight size={18} strokeWidth={2} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
