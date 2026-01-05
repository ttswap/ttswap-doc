import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Index } from "../components/Index";
import "../css/ttswap-isolated.css";


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="TTSwap - Efficient & Secure Decentralized Exchange"
      description="TTSwap is a leading decentralized exchange (DEX) providing seamless crypto trading, liquidity mining, and DAO governance. Join the future of DeFi."
      wrapperClassName="ttswap-docusaurus-wrapper"
    >
      <div className="ttswap-app">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Index />
        </main>
      </div>
    </Layout>
  );
}
