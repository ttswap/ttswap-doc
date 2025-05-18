<template><div><h2 id="_1-概要" tabindex="-1"><a class="header-anchor" href="#_1-概要"><span>1 概要</span></a></h2>
<p>TTSWAP(token-token swap)是建立在支持EVM的区块链上的自动做市协议，意味着它不依赖于中心化的机构或个人来进行交易。它的核心原理是根据用户的行为，自动触发市场价值的转移，形成新的价格，从而构建了一个基于恒定价值交易的自动做市协议。</p>
<p>白皮书解释TTSWAP的设计逻辑，涵盖以下几个方面：</p>
<ol>
<li>Token交易：用户使用Token直接换取任何Token，而不需要通过其他中间Token中转。</li>
<li>价值Token投资与撤资：用户可以投资特定的价值Token，并在需要时撤回他们的投资。</li>
<li>普通Token投资与撤资：除了价值Token外，用户也可以投资普通Token，并随时撤回他们的投资。</li>
<li>Token手续费的产生与分配：在交易过程中产生的手续费会按照一定的规则进行分配，以激励更多的人参与到这个协议中来。</li>
<li>代币经济协议：以维护所有代币持有者(普通用户、市场推广者、服务提供者、社区建设者等)的权益为宗旨的目标下，设计的代币分配，解锁细则，与代币持有者的权利。</li>
</ol>
<p>总之，TTSWAP为普通用户提供了一个简单、透明、高效的加密货币交易协议，这个协议使用的是一个革新地AMM逻辑——恒定价值交易协议。旨在打造一个方便、安全、低GAS费用的协议。
同时TTSWAP社区也期望打造公平，公正，透明的去中心化社区。</p>
<hr>
<h2 id="_2-特点" tabindex="-1"><a class="header-anchor" href="#_2-特点"><span>2 特点</span></a></h2>
<ol>
<li>
<p>恒定价值交易协议
这个协议的核心思想是确保交易的价值在整个过程中保持恒定，这意味着无论交易何时进行，都能客观地反映出币种的市场价值，这可让Token自由、简单、快速地交易。</p>
</li>
<li>
<p>集中流动性，直接交易
无需在多个传统币对中添加，只需要给协议中代币添加流动性，流动性能与协议中其它任何代币共享，用户直接兑换代币，避免流动性碎片化，提升了交易体验。</p>
</li>
<li>
<p>无滑点交易
滑点是指在交易过程中由于市场价格波动导致的交易价格偏离预期的现象。在这个协议中，只要交易数量低于特定的阈值，就不会出现价格滑点，意味着交易在特定条件下是稳定和可靠的。</p>
</li>
<li>
<p>没有无常损失
无常损失是指流动性提供者在提供流动性时因市场波动而遭受的损失。这个交易协议通过其设计逻辑上避免了无常损失的问题，这意味着流动性提供者或者Token投资者在撤资时可以保持原有投资的价值，并且还能获得提供流动性所产生的收益。</p>
</li>
<li>
<p>低Gas费用
Gas费用是在以太坊网络上执行智能合约时需要支付的费用。由于这个交易协议的逻辑相对简单且运算量较少，因此Gas消耗较低，用户在交易过程中可以节省大量的Gas费用，让交易更加经济高效。相比于其他交易协议，可以节省50%至90%的Gas费用。</p>
</li>
<li>
<p>手续费按角色分配
在协议上，手续费根据参与者的不同角色进行分配，这包括商家(Token卖家)、Token投资者（流动性提供者）、门户、推荐者和普通用户。任何人都有机会参与到协议的运作中，并分享协议发展所带来的收益，从而激励更多的用户参与到协议建设中。</p>
</li>
<li>
<p>native ETH支持
协议中支持Native ETH直接兑换成任何代币。</p>
</li>
<li>
<p>投资证明二次TTS挖矿
当用户投资了Token后，协议会根据投资价值自动为用户进行挖矿。</p>
</li>
<li>
<p>支持ETH验证者质押
当用户提供流动性到SETH和SWETH代币时,池子中未使用的流动性会自动添加到rocketpool中进行验证者质押,享受验证者奖励.</p>
</li>
<li>
<p>社区驱动
ttswap拥抱社区，通过社区驱动带动项目的改进，完善。</p>
</li>
</ol>
<hr>
<h2 id="_3-价值守恒交易横型原理" tabindex="-1"><a class="header-anchor" href="#_3-价值守恒交易横型原理"><span>3 价值守恒交易横型原理</span></a></h2>
<h3 id="_3-1-恒定价值交易协议" tabindex="-1"><a class="header-anchor" href="#_3-1-恒定价值交易协议"><span>3.1 恒定价值交易协议</span></a></h3>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi><mo>=</mo><mfrac><msub><mi>V</mi><mi>b</mi></msub><msub><mi>Q</mi><mi>b</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>b</mi><mo>=</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><msub><mi>V</mi><mi>z</mi></msub><msub><mi>Q</mi><mi>z</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>z</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>A</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>Q</mi><mi>a</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>A</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的数量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">Δ</mi><mi>a</mi><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>A</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的购买量或者出售量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>B</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>B</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的数量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">Δ</mi><mi>b</mi><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>B</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的购买量或者出售量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>V</mi><mi>z</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>Z</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>Q</mi><mi>z</mi></msub><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>Z</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的数量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">Δ</mi><mi>z</mi><mo>:</mo><mtext>表示协议中</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><msub><mi>n</mi><mi>Z</mi></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mtext>的购买量或者出售量</mtext></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{align}
    {V_a\over Q_a}*Δa={V_b\over Q_b}*Δb=...&amp;={V_z\over Q_z}*Δz  \\
    V_a:表示协议中Token_A&amp;的市场价值  \\
    Q_a:表示协议中Token_A&amp;的数量  \\
    Δa:表示协议中Token_A&amp;的购买量或者出售量  \\
    V_b:表示协议中Token_B&amp;的市场价值  \\
    Q_b:表示协议中Token_B&amp;的数量  \\
    Δb:表示协议中Token_B&amp;的购买量或者出售量  \\
    V_z:表示协议中Token_Z&amp;的市场价值  \\
    Q_z:表示协议中Token_Z&amp;的数量  \\
    Δz:表示协议中Token_Z&amp;的购买量或者出售量  \\
\end{align}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:16.0408em;vertical-align:-7.7704em;"></span><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:8.2704em;"><span style="top:-10.2704em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">...</span></span></span><span style="top:-8.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-6.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-5.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-0.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord">Δ</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:0.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">Z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:2.2501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">Z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:3.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord cjk_fallback">表示协议中</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">Z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.7704em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:8.2704em;"><span style="top:-10.2704em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span></span></span><span style="top:-8.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-6.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的数量</span></span></span><span style="top:-5.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的购买量或者出售量</span></span></span><span style="top:-3.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-2.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的数量</span></span></span><span style="top:-0.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的购买量或者出售量</span></span></span><span style="top:0.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:2.2501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的数量</span></span></span><span style="top:3.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mord cjk_fallback">的购买量或者出售量</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.7704em;"><span></span></span></span></span></span></span></span><span class="tag"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:8.2704em;"><span style="top:-10.2704em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-8.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-6.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-5.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-3.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-2.2499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-0.7499em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:0.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:2.2501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:3.7501em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.7704em;"><span></span></span></span></span></span></span></span></span></p>
<p>市场价值是衡量用户对于协议中Token的需求程度。用户出售Token，说明对于协议中的Token需求下降，那此Token的市场价值下降。用户购买Token，说明对于协议量的Token需求上升，那此Token的市场价值上升。</p>
<h4 id="_3-1-1-计算逻辑" tabindex="-1"><a class="header-anchor" href="#_3-1-1-计算逻辑"><span>3.1.1 计算逻辑</span></a></h4>
<ul>
<li>交易前Token<sub>a</sub>， Token<sub>b</sub>, 状态</li>
</ul>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>a</mi><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>V</mi><mi>a</mi></msub></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>a</mi><mtext>的</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>数量</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>Q</mi><mi>a</mi></msub></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>b</mi><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>V</mi><mi>b</mi></msub></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>b</mi><mtext>的</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>数量</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{align}
    平台中a的市场价值&amp;:V_a \\
    平台中a的Token数量&amp;:Q_a \\
    平台中b的市场价值&amp;:V_b \\
    平台中b的Token数量&amp;:Q_b \\
\end{align}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:6em;vertical-align:-2.75em;"></span><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:3.25em;"><span style="top:-5.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">a</span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-3.91em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">a</span><span class="mord cjk_fallback">的</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">数量</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">b</span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-0.91em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">b</span><span class="mord cjk_fallback">的</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">数量</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.75em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:3.25em;"><span style="top:-5.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.91em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-0.91em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.75em;"><span></span></span></span></span></span></span></span><span class="tag"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:3.25em;"><span style="top:-5.25em;"><span class="pstrut" style="height:2.84em;"></span><span class="eqn-num"></span></span><span style="top:-3.75em;"><span class="pstrut" style="height:2.84em;"></span><span class="eqn-num"></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:2.84em;"></span><span class="eqn-num"></span></span><span style="top:-0.75em;"><span class="pstrut" style="height:2.84em;"></span><span class="eqn-num"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.75em;"><span></span></span></span></span></span></span></span></span></p>
<p>现在使用Δa购买到Δb后平台中Token状态</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">Δ</mi><mi>a</mi><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>a</mi><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>a</mi><mtext>的</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>数量</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>Q</mi><mi>a</mi></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>b</mi><mtext>的市场价值</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>V</mi><mi>b</mi></msub><mo>+</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>平台中</mtext><mi>b</mi><mtext>的</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>数量</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>:</mo><msub><mi>Q</mi><mi>b</mi></msub><mo>−</mo><mfrac><mrow><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi><mo>∗</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow><msub><mi>V</mi><mi>b</mi></msub></mfrac></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>获得</mtext><mi mathvariant="normal">Δ</mi><mi>b</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi><mo>∗</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow><msub><mi>V</mi><mi>b</mi></msub></mfrac></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{align}
    Δa的市场价值&amp;:{V_a \over Q_a}*Δa \\
    平台中a的市场价值&amp;:V_a-{V_a \over Q_a}*Δa \\
    平台中a的Token数量&amp;:Q_a+Δa \\
    平台中b的市场价值&amp;:V_b+{V_a \over Q_a}*Δa \\
    平台中b的Token数量&amp;:Q_b-{ {V_a \over Q_a}*Δa*Q_b \over V_b}   \\
    获得Δb&amp;={ {V_a \over Q_a}*Δa*Q_b \over V_b} 
\end{align}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:14.9134em;vertical-align:-7.2067em;"></span><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:7.7067em;"><span style="top:-10.1059em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-7.5651em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">a</span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-5.5447em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">a</span><span class="mord cjk_fallback">的</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">数量</span></span></span><span style="top:-3.5244em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">b</span><span class="mord cjk_fallback">的市场价值</span></span></span><span style="top:-0.5844em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord cjk_fallback">平台中</span><span class="mord mathnormal">b</span><span class="mord cjk_fallback">的</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">数量</span></span></span><span style="top:2.3112em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord cjk_fallback">获得</span><span class="mord">Δ</span><span class="mord mathnormal">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.2067em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:7.7067em;"><span style="top:-10.1059em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-7.5651em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-5.5447em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-3.5244em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-0.5844em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.7595em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.8711em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8884em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4101em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.2222em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4811em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span style="top:2.3112em;"><span class="pstrut" style="height:3.7595em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.7595em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.8711em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8884em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4101em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.2222em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4811em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.2067em;"><span></span></span></span></span></span></span></span><span class="tag"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:7.7067em;"><span style="top:-10.1059em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span><span style="top:-7.5651em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span><span style="top:-5.5447em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span><span style="top:-3.5244em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span><span style="top:-0.5844em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span><span style="top:2.3112em;"><span class="pstrut" style="height:3.7595em;"></span><span class="eqn-num"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:7.2067em;"><span></span></span></span></span></span></span></span></span></p>
<h3 id="_3-2-token的市场价值" tabindex="-1"><a class="header-anchor" href="#_3-2-token的市场价值"><span>3.2 Token的市场价值</span></a></h3>
<p>当Token添加到协议时，此时的Token的市场价值与Token的真实价值相同。
例：在协议中添加有2000个Token<sub>a1</sub>，由于此时的真实价值是2000，那么这个Token的市场价值2000。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_STATE.png" alt="Alt text" loading="lazy">
定义：
市场价值V<sub>a1</sub>:2000
Token数量Q<sub>a1</sub>:2000
单位价值P<sub>a1</sub>:1，单位数量的市场价值</p>
<h3 id="_3-3-协议中的token与用户买卖行为的关系" tabindex="-1"><a class="header-anchor" href="#_3-3-协议中的token与用户买卖行为的关系"><span>3.3 协议中的Token与用户买卖行为的关系</span></a></h3>
<ul>
<li>例1：用户花费价值1000购买，购买了Token<sub>a</sub>。</li>
</ul>
<p>用户购买，说明Token的市场价值V增加。V<sub>a1</sub>=2000+1000=3000
用户购买，协议中Token数量Q减少。Q<sub>a1</sub>=2000-1000=1000
协议中Token的单位价值P发生变化成 P<sub>a1</sub>=3
用户购买，导致Token的单位价值上升</p>
<ul>
<li>例2：用户出售价值1000购买，购买了Token<sub>a</sub>。</li>
</ul>
<p>用户出售，说明Token的市场价值V减少。V<sub>a2</sub>=2000-1000=1000
用户出售，协议中Token数量Q增加。Q<sub>a2</sub>=2000+1000=3000
协议中Token的单位价值P发生变化 P<sub>a2</sub>=0.3333
用户出售，导致Token的单位价值下降</p>
<p>展示如下图
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_BUYSELL.png" alt="Alt text" loading="lazy"></p>
<h3 id="_3-4-协议中用户行为与token状态的关系" tabindex="-1"><a class="header-anchor" href="#_3-4-协议中用户行为与token状态的关系"><span>3.4 协议中用户行为与Token状态的关系</span></a></h3>
<p>用户出售与购买，Token的商场价值V与Token数量Q发生变化，Token的单位价值也发生相应变化，Token的市场价值V与Token数量Q的变化如图
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_BUYSELL_CHANGE.png" alt="Alt text" loading="lazy"></p>
<h3 id="_3-5-协议中两种物品的关系" tabindex="-1"><a class="header-anchor" href="#_3-5-协议中两种物品的关系"><span>3.5 协议中两种物品的关系</span></a></h3>
<p>协议中有两种Token，Token<sub>a</sub>(2000,4000)，Token<sub>b</sub>(4000,2000)。</p>
<ul>
<li>用户使用500Token<sub>a</sub>，对于的市场价值为1000。市场价值为1000对应的1000个Token<sub>b</sub>。</li>
</ul>
<p>当用户购买500个Token<sub>a</sub>，就要花费1000个Token<sub>b</sub>，协议中的Token在图中A位置会位移到a1的位置，B会位移到b1的位置。
当用户出售500个Token<sub>a</sub>，就能得到1000个Token<sub>b</sub>，协议中的Token在图中A位置会位移到a2的位置，B会位移到b2的位置。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_TWO_RELATIONS.png" alt="Alt text" loading="lazy">
因为位置发生变化，P(A)与P(B)也发生变化，Token<sub>b</sub>相对Token<sub>a</sub>的单位价值也会发生变化，如果与市场外部单位价值有差异，就会有其它交易促进市场价格与市场外部价格统一。</p>
<blockquote>
<p>备注：如果购买数量占协议中数据比例过大，会造成两Token的相对价格发生强烈波动，因此每个交易会拆分为多个小单进行交易</p>
</blockquote>
<h3 id="_3-6-协议中多种token的关系" tabindex="-1"><a class="header-anchor" href="#_3-6-协议中多种token的关系"><span>3.6 协议中多种Token的关系</span></a></h3>
<p>任意两种Token因为用户交易，造成位置的变化，也会造成这两种Token与其它Token对对位置变化，产生价格的同步变化。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_MULTI.png" alt="Alt text" loading="lazy"></p>
<h3 id="_3-7-协议中token每次交易大小与价格的关系" tabindex="-1"><a class="header-anchor" href="#_3-7-协议中token每次交易大小与价格的关系"><span>3.7 协议中Token每次交易大小与价格的关系</span></a></h3>
<p>现场中Token数量为100 000 000 ，市场价值为100 000 000。</p>
<table>
<thead>
<tr>
<th>交易大小</th>
<th>价格变化</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>0.000000200000</td>
</tr>
<tr>
<td>50</td>
<td>0.000001000000</td>
</tr>
<tr>
<td>100</td>
<td>0.000002000002</td>
</tr>
<tr>
<td>500</td>
<td>0.000010000050</td>
</tr>
<tr>
<td>1000</td>
<td>0.000020000200</td>
</tr>
<tr>
<td>5000</td>
<td>0.000100005000</td>
</tr>
<tr>
<td>10000</td>
<td>0.000200020002</td>
</tr>
<tr>
<td>50000</td>
<td>0.001000500250</td>
</tr>
<tr>
<td>100000</td>
<td>0.002002002002</td>
</tr>
<tr>
<td>500000</td>
<td>0.010050251256</td>
</tr>
<tr>
<td>1000000</td>
<td>0.020202020202</td>
</tr>
<tr>
<td>5000000</td>
<td>0.105263157895</td>
</tr>
</tbody>
</table>
<h3 id="_3-8-无滑点阈值-简称交易阈值" tabindex="-1"><a class="header-anchor" href="#_3-8-无滑点阈值-简称交易阈值"><span>3.8 无滑点阈值(简称交易阈值)</span></a></h3>
<p>为避免用户交易造成协议Token被挤兑。每个Token在初始化时会设置切分数，每份大小即为这个Token的无滑点阈值。因此当用户交易时，如果交易价值小于Token无滑点阈值，无无常损失。如果交易大于Token无滑点阈值。交易会以阈值为单位，拆分成交。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_NOSLIPPAGE.png" alt="Alt text" loading="lazy"></p>
<hr>
<h2 id="_4-token" tabindex="-1"><a class="header-anchor" href="#_4-token"><span>4 Token</span></a></h2>
<h3 id="_4-1-token介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-token介绍"><span>4.1 Token介绍</span></a></h3>
<p>关于Token的描述：协议拥有市场价值3000的15枚Token<sub>a</sub>，那么Token就有两个属性：市场价值与当前数量。如下图
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_INTRO.png" alt="Alt text" loading="lazy"></p>
<ul>
<li>名词解释
市场价值：用来衡量用户对协议Token的需求程度的。如果用户购买某个Token，说明用户对这个Token的需求增加，那么这个Token的市场价值就会上升。相反，如果用户开始卖出某个Token，说明用户对这个Token的需求减少，那么这个Token的市场价值就会下降。
当前数量：记录协议中Token的当前数量。</li>
</ul>
<ul>
<li>可以如下图描述其它任何Token，例如
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKENS.png" alt="Alt text" loading="lazy"></li>
</ul>
<h3 id="_4-2-token分类" tabindex="-1"><a class="header-anchor" href="#_4-2-token分类"><span>4.2 Token分类</span></a></h3>
<table>
<thead>
<tr>
<th>Token分类</th>
<th>说明</th>
<th>交易是否</br>产生手续费</th>
<th>是否可以</br>单独投资自己</th>
<th>是否可以与其它价值Token</br>一同投资</th>
</tr>
</thead>
<tbody>
<tr>
<td>元Token</td>
<td>协议中添加的首个Token</td>
<td>是</td>
<td>是</td>
<td>否</td>
</tr>
<tr>
<td>价值Token</td>
<td>Token得到市场认可，</br>有良好的生态及团队</td>
<td>是</td>
<td>是</td>
<td>否</td>
</tr>
<tr>
<td>普通Token</td>
<td>个人新增Token，</br>市场价值待确认</td>
<td>是</td>
<td>否</td>
<td>是</td>
</tr>
</tbody>
</table>
<h3 id="_4-3-token配置" tabindex="-1"><a class="header-anchor" href="#_4-3-token配置"><span>4.3 Token配置</span></a></h3>
<ul>
<li>Token配置占255位</li>
</ul>
<h4 id="_4-3-1-市场可以调整" tabindex="-1"><a class="header-anchor" href="#_4-3-1-市场可以调整"><span>4.3.1 市场可以调整</span></a></h4>
<table>
<thead>
<tr>
<th>id</th>
<th>配置项</th>
<th>位数</th>
<th>单位</th>
<th>最大值</th>
<th>最小值</th>
<th>起始位</th>
<th>结束位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>市场价值Token</td>
<td>1</td>
<td>BOOLEAN</td>
<td>1</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>预留</td>
<td>28</td>
<td>1</td>
<td>1023</td>
<td>0</td>
<td>2</td>
<td>27</td>
<td>预留字段</td>
</tr>
<tr>
<td>...</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="_4-3-2-用户可以配置" tabindex="-1"><a class="header-anchor" href="#_4-3-2-用户可以配置"><span>4.3.2 用户可以配置</span></a></h4>
<table>
<thead>
<tr>
<th>id</th>
<th>配置项</th>
<th>位数</th>
<th>单位</th>
<th>最大值</th>
<th>最小值</th>
<th>起始位</th>
<th>结束位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>闪电货费率</td>
<td>6</td>
<td>万分之一</td>
<td>63</td>
<td>0</td>
<td>28</td>
<td>33</td>
<td>闪电货费率</td>
</tr>
<tr>
<td>2</td>
<td>投资费率</td>
<td>6</td>
<td>万分之一</td>
<td>63</td>
<td>0</td>
<td>34</td>
<td>39</td>
<td>(0~63)/10000</td>
</tr>
<tr>
<td>3</td>
<td>撤资费率</td>
<td>6</td>
<td>万分之一</td>
<td>63</td>
<td>0</td>
<td>40</td>
<td>45</td>
<td>(0~63)/10000</td>
</tr>
<tr>
<td>4</td>
<td>购买费率</td>
<td>7</td>
<td>万分之一</td>
<td>127</td>
<td>0</td>
<td>46</td>
<td>52</td>
<td>(0~127)/10000</td>
</tr>
<tr>
<td>5</td>
<td>出售费率</td>
<td>7</td>
<td>万分之一</td>
<td>127</td>
<td>0</td>
<td>53</td>
<td>59</td>
<td>(0~127)/10000</td>
</tr>
<tr>
<td>6</td>
<td>交易切片数</td>
<td>10</td>
<td>64</td>
<td>1023</td>
<td>0</td>
<td>60</td>
<td>69</td>
<td>(1~1023)X64</td>
</tr>
<tr>
<td>7</td>
<td>撤资切片数</td>
<td>10</td>
<td>1</td>
<td>1023</td>
<td>0</td>
<td>70</td>
<td>79</td>
<td>(1~1023)</td>
</tr>
</tbody>
</table>
<h2 id="_5-token交换" tabindex="-1"><a class="header-anchor" href="#_5-token交换"><span>5 Token交换</span></a></h2>
<p>Token的交换实际上就是用户用自己手里的Token<sub>a</sub>去交换市场上的Token<sub>b</sub>。当用户选择放弃Token<sub>a</sub>时，这表明市场上Token<sub>a</sub>的价值降低，因为用户不再需要它。而当用户选择购买Token<sub>b</sub>时，这意味着Token<sub>b</sub>的价值上升，因为用户希望得到它。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_SWAP.png" alt="Alt text" loading="lazy"></p>
<ul>
<li>如图所示，当用户放弃Token<sub>a</sub>时，协议中的Token<sub>a</sub>数量增加，而Token<sub>a</sub>的市场价值降低。而当用户获得Token<sub>b</sub>时，协议中的Token<sub>b</sub>数量减少，而Token<sub>b</sub>的市场价值增加。这就导致了相对于Token<sub>a</sub>，Token<sub>b</sub>的价格上升。因此，如果再次进行交易，用相同数量的Token<sub>a</sub>只能换取比上次少一些的Token<sub>b</sub>。</li>
</ul>
<h3 id="_5-1-计算过程" tabindex="-1"><a class="header-anchor" href="#_5-1-计算过程"><span>5.1 计算过程</span></a></h3>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><msub><mi>V</mi><mi>b</mi></msub><msub><mi>Q</mi><mi>b</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>b</mi></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>交易前</mtext><msub><mi>P</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>∗</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow><mrow><msub><mi>Q</mi><mi>a</mi></msub><mo>∗</mo><msub><mi>V</mi><mi>b</mi></msub></mrow></mfrac><mo>=</mo><mn>4</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">Δ</mi><mi>b</mi><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi><mo>∗</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow><mrow><msub><mi>Q</mi><mi>a</mi></msub><mo>∗</mo><msub><mi>V</mi><mi>b</mi></msub></mrow></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><mn>40000</mn><mo>∗</mo><mn>2500</mn><mo>∗</mo><mn>40000</mn></mrow><mrow><mn>20000</mn><mo>∗</mo><mn>20000</mn></mrow></mfrac><mo>=</mo><mn>10000</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>Q</mi><mi>a</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mn>40000</mn><mo>−</mo><mfrac><mn>40000</mn><mn>20000</mn></mfrac><mo>∗</mo><mn>2500</mn><mo>=</mo><mn>35000</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>Q</mi><mi>a</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>a</mi></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>a</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mn>20000</mn><mo>+</mo><mn>2500</mn><mo>=</mo><mn>22500</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><mo>+</mo><mfrac><msub><mi>V</mi><mi>b</mi></msub><msub><mi>Q</mi><mi>b</mi></msub></mfrac><mo>∗</mo><mi mathvariant="normal">Δ</mi><mi>b</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mn>20000</mn><mo>+</mo><mfrac><mn>20000</mn><mn>40000</mn></mfrac><mo>∗</mo><mn>10000</mn><mo>=</mo><mn>25000</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>b</mi></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>b</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mn>40000</mn><mo>−</mo><mn>10000</mn><mo>=</mo><mn>30000</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>交易后</mtext><msub><mi>P</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>∗</mo><msub><mi>Q</mi><mi>b</mi></msub></mrow><mrow><msub><mi>Q</mi><mi>a</mi></msub><mo>∗</mo><msub><mi>V</mi><mi>b</mi></msub></mrow></mfrac><mo>=</mo><mn>1.86666</mn></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr><mtr><mtd class ="mtr-glue"></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mo stretchy="false">(</mo><mtext>实际计算中涉及</mtext><mi>T</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>切分，具体参见智能合约</mtext><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd class ="mtr-glue"></mtd><mtd class ="mml-eqn-num"></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{align}
    {V_a\over Q_a}*Δa&amp;={V_b\over Q_b}*Δb  \\
    交易前P_{ab}&amp;={ {V_a*Q_b} \over {Q_a*V_b}}=4 \\
    Δb={ {V_a*Δa*Q_b} \over {Q_a*V_b}}&amp;={ {40000*2500*40000} \over {20000*20000}}=10000 \\
    V_a=V_a-{V_a\over Q_a}*Δa&amp;=40000-{40000\over 20000}*2500=35000\\
    Q_a=Q_a+Δa&amp;=20000+2500=22500 \\
    V_b=V_b+{V_b\over Q_b}*Δb&amp;=20000+{20000\over 40000}*10000=25000\\
    Q_b=Q_b+Δb&amp;=40000-10000=30000 \\
    交易后P_{ab}&amp;={ {V_a*Q_b} \over {Q_a*V_b}}=1.86666 \\
    (实际计算中涉及Token切分，具体参见智能合约)\\
\end{align}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:19.7446em;vertical-align:-9.6223em;"></span><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:10.1223em;"><span style="top:-12.1223em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-9.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord cjk_fallback">交易前</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ab</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-7.0408em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord">Δ</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span style="top:-4.5em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-2.4796em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">a</span></span></span><span style="top:-0.4592em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">b</span></span></span><span style="top:1.5612em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">b</span></span></span><span style="top:3.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord cjk_fallback">交易后</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ab</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:5.602em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mopen">(</span><span class="mord cjk_fallback">实际计算中涉及</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">切分，具体参见智能合约</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:9.6223em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:10.1223em;"><span style="top:-12.1223em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal">b</span></span></span><span style="top:-9.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">4</span></span></span><span style="top:-7.0408em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">20000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">20000</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">40000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2500</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">40000</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">10000</span></span></span><span style="top:-4.5em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">40000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">20000</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">40000</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2500</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">35000</span></span></span><span style="top:-2.4796em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">20000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2500</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">22500</span></span></span><span style="top:-0.4592em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">20000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">40000</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">20000</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">10000</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">25000</span></span></span><span style="top:1.5612em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">40000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">10000</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">30000</span></span></span><span style="top:3.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">1.86666</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:8.1223em;"><span></span></span></span></span></span></span></span><span class="tag"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:10.1223em;"><span style="top:-12.1223em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-9.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-7.0408em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-4.5em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-2.4796em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:-0.4592em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:1.5612em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:3.5815em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span><span style="top:5.602em;"><span class="pstrut" style="height:3.3603em;"></span><span class="eqn-num"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:9.6223em;"><span></span></span></span></span></span></span></span></span></p>
<hr>
<h2 id="_6-token投资与撤资" tabindex="-1"><a class="header-anchor" href="#_6-token投资与撤资"><span>6 Token投资与撤资</span></a></h2>
<h3 id="_6-1-记录投资和撤资" tabindex="-1"><a class="header-anchor" href="#_6-1-记录投资和撤资"><span>6.1 记录投资和撤资</span></a></h3>
<p>协议中Token的交易，需有用户提供流动性。就应记录Token投资总市场价值与投资总数量。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_INVEST_STATE.png" alt="Alt text" loading="lazy"></p>
<ul>
<li>名词解释
投资价值：用户投资时Token的市场总价值。
投资数量：用户投资时Token的总数量。</li>
</ul>
<h3 id="_6-2-价值token投资与撤资流程" tabindex="-1"><a class="header-anchor" href="#_6-2-价值token投资与撤资流程"><span>6.2 价值Token投资与撤资流程</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_INVESTORDEVIST.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>用户投资价值Token
用户根据当前价值Token的状态，计算投资数量对应的市场价值。方便撤资时计算收益。</li>
<li>用户撤资价值Token
用户根据投资记录，计算投资产生的收益</li>
</ul>
<blockquote>
<p>撤资Token时，取消数量＜Token当前的总数量/撤资切片数 和 取消数量对应的市场价值＜Token总价值/撤资切片数。</p>
</blockquote>
<h3 id="_6-3-普通token投资" tabindex="-1"><a class="header-anchor" href="#_6-3-普通token投资"><span>6.3 普通Token投资</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_NORMAL_INVEST.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>用户投资普通Token
由于普通Token的市场价值波动太大，可能会导致协议内套利，造成Token投资者的损失。为避免这种情况的发生，需要投资等市场价值的价值Token。投资的价值Token和普通Token都会产生投资收益，具体参见手续费分配。</li>
</ul>
<h3 id="_6-4-普通token撤资" tabindex="-1"><a class="header-anchor" href="#_6-4-普通token撤资"><span>6.4 普通Token撤资</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_NORMAL_DIVEST.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>用户撤资普通Token
根据投资记录，计算普通Token和投资Token的收益。具体参见手续费分配。
撤资Token时，取消数量或者取消数量对应的市场价值需要小于Token当前的总数量或者总价值除以最大撤资比例。</li>
</ul>
<hr>
<h2 id="_7-token手续费" tabindex="-1"><a class="header-anchor" href="#_7-token手续费"><span>7 Token手续费</span></a></h2>
<p>当用户进行交易，投资时均会产生手续费，这部份手续存储于池子中，当用户移出流动性时，会触发手续费分配。</p>
<h3 id="_7-1-token手续费记录方式" tabindex="-1"><a class="header-anchor" href="#_7-1-token手续费记录方式"><span>7.1 Token手续费记录方式</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_FEE_STATE.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>名词解释
费用总额=实际产生的手续费汇总+构建手续费汇总
构建手续费=计算用户投资产生的利润而引入虚拟手续费，不实际发生的手续费。具体参见7.4与7.5。</li>
</ul>
<h3 id="_7-2-手续费来源" tabindex="-1"><a class="header-anchor" href="#_7-2-手续费来源"><span>7.2 手续费来源</span></a></h3>
<p><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_FEE_SOURCE.png" alt="Alt text" loading="lazy">
手续费(实际手续费)的来源是根据Token的费率，当用户进行操作时，计算得到。</p>
<h3 id="_7-3-手续费分配" tabindex="-1"><a class="header-anchor" href="#_7-3-手续费分配"><span>7.3 手续费分配</span></a></h3>
<p><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_FEE_ALLOCATION.png" alt="Alt text" loading="lazy">
协议中涉及协议技术、门户运营、推荐人、用户以及流动性提供者。协议会合理分配利润。
其中流动性提供者的手续费分配参见 7.4与7.5手续费流程</p>
<ul>
<li>如果用户填写了推荐者。
按用户的相关角色进行实时分配。</li>
<li>如果用户未填写推荐者。
手续费分配中用户所占比例划归于代币管理员。
手续费分配中推荐者所占比例划归于门户角色。</li>
</ul>
<hr>
<h3 id="_7-4-手续费计算流程-投资" tabindex="-1"><a class="header-anchor" href="#_7-4-手续费计算流程-投资"><span>7.4 手续费计算流程(投资)</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_FEE_COMPUTE_1.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>
<p>图1 用户投资前Token状态
单位手续费指单位投资应该得到多少手续费，单位手续费=手续费总额/总投资数量;
随着交易的进行，手续费不断产生，手续费总额增加，单位手续费就增加。
构建手续费提用户开始投资时，为记录用户不应该享受的手续费总额。
构建手续费=投资数量X投资时单位手续费</p>
</li>
<li>
<p>图2 用户投资后手续费积累增加
当协议中不停有手续费产生时，单位手续费会不停增加。
用户投资产生的收益=单位手续费x投资数量-构建手续费。</p>
</li>
<li>
<p>图3 个人在Token上的多笔投资
当用户在同一下Token上，进行多笔投资，可以合成同一条投资记录。
合并后的构建手续费=合并前的构建手续费汇总
手户投资产生的收益=单位手续费x投资数量-汇总后的构建手续费</p>
</li>
<li>
<p>图4 个人在Token上多笔投资进行合并
该图展示合并后的投资情况</p>
</li>
<li>
<p>图5 多人在Token上的投资
当多个用户进行投资时，就可以汇总成这个Token总投资数量，总投资市场价值，总构建手续费。
该Token当前总共实际投资利润=当前总费用-汇总构建手续费。</p>
</li>
<li>
<p>图6 多人在Token上的投资进行合并</p>
</li>
</ul>
<h3 id="_7-5-手续费计算流程-撤资" tabindex="-1"><a class="header-anchor" href="#_7-5-手续费计算流程-撤资"><span>7.5 手续费计算流程(撤资)</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_FEE_COMPUTE_2.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<ul>
<li>图1 个人Token投资(此图表示如果提供流程性时无无常损失)
此图是个人在此Token的投资情况，当用户进行撤资时，计算逻辑：
Token当前单位手续费=Token当前手续费总额/Token当前投资数量
撤资时构建手续费=构建手续费X(撤资数量/用户投资总量)
当用户撤资时，获得利润= 当前单位手续费X撤资数量-撤资时构建手续费</li>
<li>图2 Token总投资
在Token减去用户撤资时的计算逻辑：
Token当前手续费总额=原Token当前手续费总额-用户撤资时利润-撤资时构建手续费
Token构建手续费=Token构建手续费-撤资时构建手续费
Token投资数量=原Token投资数量-用户撤资数量</li>
</ul>
<hr>
<h3 id="_7-6-token福利" tabindex="-1"><a class="header-anchor" href="#_7-6-token福利"><span>7.6 Token福利</span></a></h3>
<p>项目方或者卖家可以充值Token到手续费中，提升投资年化，增强投资吸引力。
<img src="@source/zh/whitepaper/whitepaper_image_cn/TOKEN_WALEFARE.png" alt="alt text" loading="lazy"></p>
<h2 id="_8-流动性挖矿" tabindex="-1"><a class="header-anchor" href="#_8-流动性挖矿"><span>8 流动性挖矿</span></a></h2>
<p>协议中所有代币会自动进行二次挖矿,根据给代币添加流动性时的价值,折算成算力,
<img src="@source/zh/whitepaper/whitepaper_image_cn/Liquidity_Mining.png" alt="alt text" loading="lazy">
a. 用户把任意代币存入代币池子
b. 用户享受池子产生的手续费返佣
c. 用户享受流动性挖矿TTS代币.</p>
<h2 id="_9-一次质押eth-五份收益原理" tabindex="-1"><a class="header-anchor" href="#_9-一次质押eth-五份收益原理"><span>9 一次质押ETH,五份收益原理</span></a></h2>
<p>协议中的SETH和SWETH两种代币分别对应ETH和WETH,同时这两个代币支持未使用流动性的再质押,提升收益.下图就是
<img src="@source/zh/whitepaper/whitepaper_image_cn/ETHReStaking.png" alt="alt text" loading="lazy">
a. 用户可以质押ETH到SETH池子或者质押WETH到SWETH池子
b. 用户享受池子产生的手续费返佣
c. 用户享受流动性挖矿TTS代币
d. 协议会使用池子中未使用流动性,存入rocketpool进行ETH验证者挖矿.
e. rocketpool返还年化(3%-5%)验证者奖励给质押者.
f. 协议会自动把rocketpool返还reth代币质押到reth池子中.
g. 用户会得到reth池子的手续费返佣.
h. 用户会得到提供流动性reth时挖矿tts代币.</p>
<h2 id="_10-市场配置" tabindex="-1"><a class="header-anchor" href="#_10-市场配置"><span>10 市场配置</span></a></h2>
<table>
<thead>
<tr>
<th>id</th>
<th>配置项</th>
<th>位数</th>
<th>单位</th>
<th>最大值</th>
<th>最小值</th>
<th>起始位</th>
<th>结束位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Token投资者分佣</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>256</td>
<td>251</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>商家分佣</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>250</td>
<td>245</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>门户分佣</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>244</td>
<td>239</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>推荐者分佣</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>238</td>
<td>233</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>用户分佣</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>232</td>
<td>227</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>协议费率</td>
<td>6</td>
<td>百分之一</td>
<td>63</td>
<td>0</td>
<td>226</td>
<td>221</td>
<td></td>
</tr>
<tr>
<td>...</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_11-主要代码实现-参见代码" tabindex="-1"><a class="header-anchor" href="#_11-主要代码实现-参见代码"><span>11 主要代码实现(参见代码)</span></a></h2>
<h3 id="_11-1-合约部署gas" tabindex="-1"><a class="header-anchor" href="#_11-1-合约部署gas"><span>11.1 合约部署GAS</span></a></h3>
<table>
<thead>
<tr>
<th>Deployment Cost</th>
<th>Deployment Size</th>
</tr>
</thead>
<tbody>
<tr>
<td>5644297</td>
<td>26543</td>
</tr>
</tbody>
</table>
<h3 id="_11-2-合约函数-部份主要函数-gas" tabindex="-1"><a class="header-anchor" href="#_11-2-合约函数-部份主要函数-gas"><span>11.2 合约函数(部份主要函数)GAS</span></a></h3>
<table>
<thead>
<tr>
<th>Function Name</th>
<th>first</th>
<th>second or more</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>buyGood(NativeETH)</td>
<td>122675</td>
<td>92377</td>
<td>购买Token</td>
</tr>
<tr>
<td>buyGood(ERC20)</td>
<td>91808</td>
<td>83745</td>
<td>购买Token</td>
</tr>
<tr>
<td>disinvestProof</td>
<td>255412</td>
<td>198512</td>
<td>撤资普通证明</td>
</tr>
<tr>
<td>disinvestProof</td>
<td>166300</td>
<td>129300</td>
<td>撤资价值证明</td>
</tr>
<tr>
<td>initGood</td>
<td>399488</td>
<td></td>
<td>初始化普通Token</td>
</tr>
<tr>
<td>investGood</td>
<td>353318</td>
<td>171611</td>
<td>投资普通Token</td>
</tr>
<tr>
<td>investGood</td>
<td>242021</td>
<td>114414</td>
<td>投资价值Token</td>
</tr>
<tr>
<td>collectProof</td>
<td>238070</td>
<td>80158</td>
<td>获取普通投资证明收益</td>
</tr>
<tr>
<td>collectProof</td>
<td>140453</td>
<td>103453</td>
<td>获取价值投资证明收益</td>
</tr>
<tr>
<td>warefare</td>
<td>69462</td>
<td>52362</td>
<td>增加手续费发福利</td>
</tr>
</tbody>
</table>
<p>当第用户第一次交易一个Token时，GAS费消耗在MEDIAN，用户第二次或者后续交易这个Token时GAS消耗一般在MIN。</p>
<p>为促进项目更好成长，为维护项目支持者的利益，现推出以下代币方案。</p>
<h2 id="_12-协议中角色说明" tabindex="-1"><a class="header-anchor" href="#_12-协议中角色说明"><span>12 协议中角色说明</span></a></h2>
<p>协议中提供对于5种角色的支持，包含：代币管理员、代币流动性提供者、服务提供者、推荐者、用户、社区。</p>
<h3 id="_12-1-代币管理员" tabindex="-1"><a class="header-anchor" href="#_12-1-代币管理员"><span>12.1 代币管理员</span></a></h3>
<p>当用户在平台首次添加代币时，用户就成为这代币的管理员，相当于社区委托用户进行代币相关运营。享受该手续费1%-3%的分佣。非项目亲自运营的代币委托2年评估一次。</p>
<h3 id="_12-2-代币流动性提供者" tabindex="-1"><a class="header-anchor" href="#_12-2-代币流动性提供者"><span>12.2 代币流动性提供者</span></a></h3>
<p>当用户给代币提供流程动性时，自动成为代币的流动性提供者，共同享受手续费的50%-80%的分佣。计算方式参见手续费计算逻辑小节。</p>
<h3 id="_12-3-服务提供者" tabindex="-1"><a class="header-anchor" href="#_12-3-服务提供者"><span>12.3 服务提供者</span></a></h3>
<p>为用户的提供交易，投资等服务的服务提供商，可享受手续费的5%到25%的分佣。</p>
<h3 id="_12-4-推荐者" tabindex="-1"><a class="header-anchor" href="#_12-4-推荐者"><span>12.4 推荐者</span></a></h3>
<p>当用户推荐其它用户，就可以享受被推荐人的手续费的5%-10的分佣。</p>
<h3 id="_12-5-用户" tabindex="-1"><a class="header-anchor" href="#_12-5-用户"><span>12.5 用户</span></a></h3>
<p>当用户添加推荐人后，享受10%的手续费折扣。</p>
<h3 id="_12-6-社区" tabindex="-1"><a class="header-anchor" href="#_12-6-社区"><span>12.6 社区</span></a></h3>
<p>社区提供技术支持，可享受手续费的2%-8%的手续费分佣。</p>
<h2 id="_13-代币经济方案" tabindex="-1"><a class="header-anchor" href="#_13-代币经济方案"><span>13 代币经济方案</span></a></h2>
<ol>
<li>代币名称为<font size=5>TTSwap Token</font>，简称<font size=5>TTS</font>。</li>
<li>初始发行<font size=5>五千万枚。</font>(<font color='red'>均为锁定状态，需达到条件才能解锁</font>)。</li>
<li>每年新增(2亿-已解锁代币数量)* 0.02给流动性提供者。</li>
<li>社区所有收益均用于在市场上购买官方代币进行销毁。禁止用于其它用途。</li>
<li>社区的建设者、运营者、支持者等代币持有者收益均来至代币价值上涨，而不是通过稀释，超发等方式获取收益。</li>
<li>关于代币的社区分配变动均需提前30天以上公示。</li>
<li>代币持有者拥有提案，和提案的投票权，参与社区的成长建设。</li>
<li>推荐关系均维护在本代币中，推荐关系一但确认，就无法修改。同时本项目后续版本均使用本推荐关系。</li>
</ol>
<h3 id="_13-1-初始代币分配原则" tabindex="-1"><a class="header-anchor" href="#_13-1-初始代币分配原则"><span>13.1 初始代币分配原则</span></a></h3>
<ol>
<li>分配时需配置解锁比例(不能高于20%)和初始价格(不能低于当前价格)，当价格涨一倍，用户才可以解锁剩余部份X解锁比例。
例如分配给A用户20000枚，解锁比例为18%，分配时价格为0.05。 当价格达到0.05时才能解锁20,000*0.18枚。当价格达到0.1时才能解锁20,000*0.18*0.18枚。</li>
<li>促进建设者更聚焦于长期利益。代币价格上涨一倍，创建始人解锁比例 &lt; 合伙人解锁比例 &lt; 价值贡献解锁比例 &lt; 资本贡献解锁比例  &lt;= 20%。</li>
</ol>
<h3 id="_13-2-4c成长型社区代币治经济协议" tabindex="-1"><a class="header-anchor" href="#_13-2-4c成长型社区代币治经济协议"><span>13.2 4C成长型社区代币治经济协议</span></a></h3>
<p>4C成长型社区代币角色分为四类：创始人、合伙人、价值贡献、资本贡献。</p>
<h4 id="_13-2-1-创始人部份" tabindex="-1"><a class="header-anchor" href="#_13-2-1-创始人部份"><span>13.2.1 创始人部份</span></a></h4>
<p>创始人部份作为项目发起人提供大量的人力资本，用以开发产品、创立品牌、拓展市场、招募人才、建立管理制度，同时并承担了巨大的失败风险而享受的待遇。(初始价格为0.05，价格上涨一倍，解锁比例1/12)</p>
<h4 id="_13-2-2-合伙人部份" tabindex="-1"><a class="header-anchor" href="#_13-2-2-合伙人部份"><span>13.2.2 合伙人部份</span></a></h4>
<p>合伙人部份作为项目发起初期，在没有资源的情况下，需要充分利用自己团队的强大的执行力，去克服各种困难，一起坚持并坚信把社区做大做好做强的成员享受的待遇。</p>
<ol>
<li>合伙人部份A类型
初始价格为成员加入时确认。代币价格上涨一倍解锁剩余比例为1/10。未解锁部份不因离开社区而销毁。</li>
<li>合伙人部份B类型
初始价格为成员加入时确认。代币价格上涨一部解锁剩余比例的1/8。未解锁部份会因离开社区而销毁。</li>
</ol>
<h4 id="_13-2-3-价值贡献" tabindex="-1"><a class="header-anchor" href="#_13-2-3-价值贡献"><span>13.2.3 价值贡献</span></a></h4>
<p>社区为给社区建设的成员提供激励进行代币预分配，初始价格为分配时价格，价格上涨一部解锁比例不高于1/6，根据具体情况与相应人员进行约定与公示，已分配未解锁部份社区会根据达成效果而调整。当成员不在为社区服务时，已分配未解锁部份会被社区回收。</p>
<ol>
<li>社区岗位部份：
岗位部份由担承社区重要职位的重要程度而决定，这部分分给社区重要职位对应负责人，重要职位对应的比例由每年初的社区确定。社区对于重要职位的合格、优秀的负责人经过社区决策后可转一定比例为合伙人部份A类型和合伙人部份B类型。</li>
<li>社区成员部份：
激励成员为社区一起成长而预留部分。社区对于优秀成员经过社区决策后可转一定比例为合伙人部分B类型</li>
<li>其它部份：
金库、运营、活动、顾问等用途使用。</li>
</ol>
<h4 id="_13-2-4-资本贡献" tabindex="-1"><a class="header-anchor" href="#_13-2-4-资本贡献"><span>13.2.4 资本贡献</span></a></h4>
<p>解锁比例不高于1/5</p>
<ol>
<li>公售部份(参见公售方案)：
为团队建设、产品建设、流动性建设提供资金支持。(公售部份全部为解锁状态，不进行锁定)</li>
<li>投资部份：
为团队精进，产品完善等提供资金支持。关于初始价格与解锁比例沟通中确定。</li>
<li>空投部份：
为弥补协议早期用户风险。关于初始价格与解锁比例根据具体活动方案而定。</li>
</ol>
<h3 id="_13-3-4c成长型社区代币分配细则设计" tabindex="-1"><a class="header-anchor" href="#_13-3-4c成长型社区代币分配细则设计"><span>13.3 4C成长型社区代币分配细则设计</span></a></h3>
<figure><img src="@source/zh/whitepaper/whitepaper_image_cn/partnership_agreement.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<h3 id="_13-4-权利" tabindex="-1"><a class="header-anchor" href="#_13-4-权利"><span>13.4 权利</span></a></h3>
<ol>
<li>代币持有者拥有社区所有决定的知情权。</li>
<li>代币持有者拥有社区所有行为的监督权。</li>
<li>代币持有者拥有提案的投票权。</li>
<li>持有一定数量的代币持有者拥有提案权。</li>
</ol>
<h2 id="_14-法律许可" tabindex="-1"><a class="header-anchor" href="#_14-法律许可"><span>14 法律许可</span></a></h2>
<h3 id="_14-1-说明" tabindex="-1"><a class="header-anchor" href="#_14-1-说明"><span>14.1 说明</span></a></h3>
<p>为了维护项目正常权利，同时也方便其它用户了解协议，对于不同文件不同开源协议。违反协议将得到法律追究。</p>
<h3 id="_14-2-协议说明" tabindex="-1"><a class="header-anchor" href="#_14-2-协议说明"><span>14.2 协议说明</span></a></h3>
<p>采用MIT协议的文件供大家自由使用
采用BUSL-1.1协议的文件才协议有效期内只能用户于学习目标，不能运用于商业用途。具体协议内容参见：
<a href="https://github.com/tt-swap/ttswap-core/blob/529db0eb94ac1c5631beb03c4697222a6ce1cd79/LICENSE" target="_blank" rel="noopener noreferrer">项目中LICENSE文件</a>:https://github.com/tt-swap/ttswap-core/blob/529db0eb94ac1c5631beb03c4697222a6ce1cd79/LICENSE。
如因项目在未知的情况违反其它项目开源协议，及时联系我们，我们尽快调整。</p>
<h3 id="_14-3-文件开源协议信息" tabindex="-1"><a class="header-anchor" href="#_14-3-文件开源协议信息"><span>14.3 文件开源协议信息</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Contract</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── TTSwap_Market.sol(BUSL-1.1)  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── TTSwap_Token.sol(BUSL-1.1)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── TTSwap_StakeETH.sol(BUSL-1.1)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── interfaces  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">│   ├── I_TTSwap_Market.sol(MIT)   </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">│   ├── I_TTSwap_Token.sol(MIT)   </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">│   └── I_TTSwap_StakeETH.sol(MIT)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">└── libraries           </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Currency_Stake.sol (MIT)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Currency.sol (MIT)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Error.sol (MIT)     </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Good.sol(BUSL-1.1)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_GoodConfig.sol(MIT)     </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_MarketConfig.sol(MIT)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Proof.sol(BUSL-1.1)     </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_SignatureVerification.sol(MIT)   </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Transient_Stake.sol (MIT)  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_Transient.sol (MIT)  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_TTSTokenConfig.sol (MIT)     </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ├── L_TTSwapUINT256.sol (MIT)     </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   └── L_UserConfig.sol(MIT)    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">docs</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── ebook</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">├── whitepaper-cn</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">│   └──whitepaper-cn.pdf(BUSL-1.1)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">└── whitepaper-en</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    └──whitepaper-en.pdf(BUSL-1.1)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tests</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-参与和合作联系方式" tabindex="-1"><a class="header-anchor" href="#_15-参与和合作联系方式"><span>15 参与和合作联系方式</span></a></h2>
<p>Twitter:<a href="https://x.com/ttswap_exchange" target="_blank" rel="noopener noreferrer">ttswap_exchange</a><br>
Telegram:<a href="https://t.me/ttswap01" target="_blank" rel="noopener noreferrer">@ttswap01</a><br>
Email:<a href="mailto:ttswap.exchange@gmail.com" target="_blank" rel="noopener noreferrer">ttswap.exchange@gmail.com</a><br>
Discord:<a href="https://discord.gg/XygqnmQgX3" target="_blank" rel="noopener noreferrer">ttswap</a><br>
Website:<a href="http://www.ttswap.io" target="_blank" rel="noopener noreferrer">ttswap.io</a><br>
欢迎来自各个地区的人才加入社区</p>
</div></template>


