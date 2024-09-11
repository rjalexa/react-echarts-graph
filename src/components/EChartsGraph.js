import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { nodes, links } from '../data/graphData';
import '../App.css';

const EChartsGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const getCSSVariable = (variable) => {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };

    const getColorByGroup = (group) => {
      const colorMap = {
        python: '--python-color',
        react: '--react-color',
        svelte: '--svelte-color',
        styling: '--styling-color',
        bridging: '--bridging-color',
      };
      return getCSSVariable(colorMap[group] || '--default-color');
    };

    const option = {
      title: {
        text: "Technology Ecosystem",
        left: 'center'
      },
      tooltip: {
        formatter: function(params) {
          if (params.dataType === 'edge') {
            return `${params.data.source} ${params.data.value} ${params.data.target}`;
          }
          return `${params.data.name} (${params.data.group})`;
        }
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            repulsion: 1500,
            gravity: 0.05,
            edgeLength: 250,
            layoutAnimation: true,
          },
          draggable: true,
          symbolSize: 30,
          roam: true,
          label: {
            show: true,
            position: "right",
            fontSize: 10,
            color: "#333",
          },
          edgeSymbol: ["", "arrow"],
          edgeSymbolSize: [0, 8],
          edgeLabel: {
            fontSize: 8,
            show: true,
            formatter: "{c}",
            color: getCSSVariable('--edge-label-color'),
          },
          data: nodes.map(node => ({
            ...node,
            itemStyle: { color: getColorByGroup(node.group) }
          })),
          links: links,
          lineStyle: {
            opacity: 0.7,
            width: 1.5,
            curveness: 0.3,
          },
          focus: 'adjacency',
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 3,
            },
          },
          blur: {
            itemStyle: {
              opacity: 0.1,
            },
            lineStyle: {
              opacity: 0.1,
            },
          },
        },
      ],
    };

    chart.setOption(option);

    const resizeHandler = () => {
      chart.resize();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "800px" }} />;
};

export default EChartsGraph;