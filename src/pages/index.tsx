import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
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
            <span className={styles.gradientText}>WPC Technical Center</span>
          </h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            <Translate id="homepage.tagline">
              WPC Technical Center 提供硬體及相關軟體的完整開發與技術文件。
            </Translate>
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
      title={translate({ message: '首頁', id: 'homepage.title' })}
      description={translate({
        message: 'WPC Technical Center 提供硬體及相關軟體的完整開發與技術文件。',
        id: 'homepage.description'
      })}>
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
