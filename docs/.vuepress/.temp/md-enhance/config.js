import ChartJS from "/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import ECharts from "/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import Mermaid from "/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
};
