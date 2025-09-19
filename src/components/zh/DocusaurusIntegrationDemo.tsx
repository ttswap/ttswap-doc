import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

/**
 * Docusaurus集成演示组件
 * 展示TTSwap如何在Docusaurus页面中独立运行而不影响其他内容
 */
export function DocusaurusIntegrationDemo() {
  return (
    <div className="ttswip-demo-container">
      {/* 演示区域标题 */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          🔗 Docusaurus 集成演示
        </h2>
        <p className="text-blue-700">
          这个区域展示TTSwap应用如何与Docusaurus内容和谐共存，互不干扰。
        </p>
      </div>

      {/* 模拟Docusaurus内容 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            📚 Docusaurus原生内容
          </h3>
          <div className="prose prose-gray max-w-none">
            <p>这是典型的Docusaurus文档内容，使用标准的Markdown样式和主题配色。</p>
            <ul>
              <li>使用Docusaurus默认主题</li>
              <li>标准的排版和间距</li>
              <li>文档站点的常规样式</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-0">
              💡 <strong>提示：</strong>这些样式完全独立于下面的TTSwap应用，不会相互影响。
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            🎯 集成优势
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800">样式隔离</h4>
                <p className="text-sm text-green-600">完全独立的CSS作用域</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-800">性能优化</h4>
                <p className="text-sm text-yellow-600">按需加载，不影响页面性能</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-purple-800">精确控制</h4>
                <p className="text-sm text-purple-600">可选择性地展示特定组件</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TTSwap应用隔离区域 */}
      <div className="border-2 border-dashed border-orange-300 rounded-xl p-1">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-orange-900 mb-1">
                🚀 TTSwap 应用区域
              </h3>
              <p className="text-orange-700 text-sm">
                下面的内容使用完全隔离的样式系统，拥有独立的设计语言
              </p>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              隔离作用域
            </Badge>
          </div>
        </div>

        {/* TTSwap应用容器 */}
        <div className="ttswap-app">
          {/* 迷你版TTSwap演示 */}
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h1 className="text-gradient mb-4">TTSwap Protocol</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                创新的去中心化交易协议，通过恒定价值算法消除无常损失，为DeFi生态带来革命性改变。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">无常损失消除</h3>
                  <p className="text-muted-foreground">
                    通过创新的恒定价值算法，彻底解决传统AMM的无常损失问题。
                  </p>
                </div>
              </Card>

              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-warm rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">成本削减</h3>
                  <p className="text-muted-foreground">
                    优化的交易机制大幅降低Gas费用和滑点损失。
                  </p>
                </div>
              </Card>

              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">角色奖励</h3>
                  <p className="text-muted-foreground">
                    基于贡献度的多层奖励机制，让每个参与者都能获得公平回报。
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button className="gradient-primary text-white px-8 py-3 hover:scale-105 transition-transform">
                开始体验 TTSwap
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部说明 */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🔧 技术实现细节
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">样式隔离机制</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>所有TTSwap样式都包含在 <code>.ttswap-app</code> 作用域内</li>
              <li>独立的CSS变量系统避免命名冲突</li>
              <li>Tailwind类前缀确保样式不泄露</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">集成方式</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>导入隔离的CSS文件: <code>ttswap-isolated.css</code></li>
              <li>在目标容器添加 <code>ttswap-app</code> 类名</li>
              <li>正常使用所有TTSwap组件和功能</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}