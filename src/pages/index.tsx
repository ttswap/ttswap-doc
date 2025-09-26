import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Index } from "../components/Index";
import "../css/ttswap-isolated.css";


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="TTSwap - 去中心化交易协议"
      description="创新的Web3交易解决方案，消除无常损失，降低交易成本"
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
