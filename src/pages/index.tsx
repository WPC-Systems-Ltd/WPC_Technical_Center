import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BentoGrid from '@site/src/components/BentoGrid';
import ParticleNetwork from '@site/src/components/ParticleNetwork';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={clsx('hero__title', styles.heroTitle)}>
            {/* Gradient Text */}
            <span className={styles.gradientText}>WPC Technical Center</span>
          </h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {/* Translatable Tagline */}
            WPC Technical Center 提供資料擷取 (DAQ)、嵌入式系統控制 (GECO/PYCO)、無人機及相關軟體 SDK 的完整開發與技術文件。
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="首頁"
      description="WPC Technical Center 提供資料擷取 (DAQ)、嵌入式系統控制 (GECO/PYCO)、無人機及相關軟體 SDK 的完整開發與技術文件。">
      {/* Abstract 3D/Tech Background Element */}
      <div className={styles.heroVisual}>
        <ParticleNetwork />
      </div>
      <div className={styles.pageWrapper}>
        <HomepageHeader />
        <main>
          <BentoGrid />
        </main>
      </div>
    </Layout>
  );
}
