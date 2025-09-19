import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

/**
 * Docusaurus Integration Demo Component
 * Demonstrates how TTSwap runs independently within Docusaurus pages without affecting other content
 */
export function DocusaurusIntegrationDemo() {
  return (
    <div className="ttswip-demo-container">
      {/* Demo area title */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          🔗 Docusaurus Integration Demo
        </h2>
        <p className="text-blue-700">
          This area demonstrates how the TTSwap application coexists harmoniously with Docusaurus content, without mutual interference.
        </p>
      </div>

      {/* Mock Docusaurus content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            📚 Native Docusaurus Content
          </h3>
          <div className="prose prose-gray max-w-none">
            <p>This is typical Docusaurus documentation content, using standard Markdown styles and theme colors.</p>
            <ul>
              <li>Uses Docusaurus default theme</li>
              <li>Standard typography and spacing</li>
              <li>Regular documentation site styling</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-0">
              💡 <strong>Tip:</strong> These styles are completely independent of the TTSwap application below and won't interfere with each other.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            🎯 Integration Advantages
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800">Style Isolation</h4>
                <p className="text-sm text-green-600">Completely independent CSS scope</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-800">Performance Optimized</h4>
                <p className="text-sm text-yellow-600">Lazy loading, no impact on page performance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-purple-800">Precise Control</h4>
                <p className="text-sm text-purple-600">Selective display of specific components</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TTSwap application isolation area */}
      <div className="border-2 border-dashed border-orange-300 rounded-xl p-1">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-orange-900 mb-1">
                🚀 TTSwap Application Area
              </h3>
              <p className="text-orange-700 text-sm">
                The content below uses a completely isolated styling system with an independent design language
              </p>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Isolated Scope
            </Badge>
          </div>
        </div>

        {/* TTSwap application container */}
        <div className="ttswap-app">
          {/* Mini TTSwap demo */}
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h1 className="text-gradient mb-4">TTSwap Protocol</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Innovative decentralized trading protocol that eliminates impermanent loss through constant value algorithms, bringing revolutionary change to the DeFi ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">Impermanent Loss Elimination</h3>
                  <p className="text-muted-foreground">
                    Through innovative constant value algorithms, completely solving the impermanent loss problem of traditional AMMs.
                  </p>
                </div>
              </Card>

              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-warm rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">Cost Reduction</h3>
                  <p className="text-muted-foreground">
                    Optimized trading mechanisms significantly reduce gas fees and slippage losses.
                  </p>
                </div>
              </Card>

              <Card className="p-6 gradient-border">
                <div className="relative z-10">
                  <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">Role-based Rewards</h3>
                  <p className="text-muted-foreground">
                    Multi-tier reward mechanism based on contribution, ensuring fair returns for every participant.
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button className="gradient-primary text-white px-8 py-3 hover:scale-105 transition-transform">
                Start Experiencing TTSwap
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom explanation */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🔧 Technical Implementation Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Style Isolation Mechanism</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>All TTSwap styles are contained within the <code>.ttswap-app</code> scope</li>
              <li>Independent CSS variable system prevents naming conflicts</li>
              <li>Tailwind class prefixes ensure styles don't leak</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Integration Method</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Import isolated CSS file: <code>ttswap-isolated.css</code></li>
              <li>Add <code>ttswap-app</code> class name to target container</li>
              <li>Use all TTSwap components and features normally</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}