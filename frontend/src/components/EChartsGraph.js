import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { nodes as initialNodes, links } from '../data/graphData';
import '../App.css';
import EditNodeModal from './EditNodeModal';
import EditLinkModal from './EditLinkModal';

const EChartsGraph = () => {
  const chartRef = useRef(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [links, setLinks] = useState(initialLinks);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const groups = [...new Set(initialNodes.map(node => node.group))];

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const getCSSVariable = (variable) => {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };

    const getColorByGroup = (group) => {
      const colorMap = {
        employee: '--employee-color',
        resource: '--resource-color',
        event: '--event-color',
      };
      return getCSSVariable(colorMap[group] || '--default-color');
    };

    const option = {
      title: {
        text: "Office Ecosystem",
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

    chart.on('dblclick', (params) => {
      if (params.dataType === 'node') {
        setSelectedNode(params.data);
        setIsModalOpen(true);
      }
    });

    chart.on('dblclick', (params) => {
      if (params.dataType === 'node') {
        setSelectedNode(params.data);
        setIsModalOpen(true);
      } else if (params.dataType === 'edge') {
        setSelectedLink(params.data);
        setIsLinkModalOpen(true);
      }
    });

    const resizeHandler = () => {
      chart.resize();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, [nodes, links]);

  const handleSaveNode = (updatedNode) => {
    setNodes(prevNodes => prevNodes.map(node => 
      node.id === updatedNode.id ? updatedNode : node
    ));
  };

  const handleSaveLink = (updatedLink) => {
    setLinks(prevLinks => prevLinks.map(link => 
      link.source === updatedLink.source && link.target === updatedLink.target ? updatedLink : link
    ));
  };

  return (
    <>
      <div ref={chartRef} style={{ width: "100%", height: "800px" }} />
      <EditNodeModal 
        node={selectedNode || {}}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNode}
        groups={groups}
      />
      <EditLinkModal 
        link={selectedLink || {}}
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        onSave={handleSaveLink}
      />
    </>
  );
};

export default EChartsGraph;
