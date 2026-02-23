import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BentoGrid from '@site/src/components/BentoGrid';
import SearchBar from '@theme/SearchBar';

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
            精確測量 · 智慧控制 · 數據未來的驅動力
          </p>
          <div className={styles.buttons}>
            <div className={styles.heroSearchContainer}>
              {/* @ts-ignore */}
              <SearchBar isHero={true} />
            </div>
          </div>
        </div>

        {/* Abstract 3D/Tech Background Element */}
        <div className={styles.heroVisual}>
          <div className={styles.glowOrb}></div>
          <div className={styles.gridOverlay}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="WPC Systems Technical Documentation Center">
      <HomepageHeader />
      <main>
        <BentoGrid />
      </main>
    </Layout>
  );
}
