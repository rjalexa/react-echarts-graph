import React, { useEffect, useRef, useState, useMemo } from "react";
import * as echarts from "echarts";
import { nodes as initialNodes, links as initialLinks } from '../data/graphData';
import '../styles/App.css';
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
  const groups = useMemo(() => [...new Set(initialNodes.map(node => node.group))], []);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const groupColors = {
      employee: '#4B8BBE',
      resource: '#61DAFB',
      event: '#FF3E00',
    };

    const getColorByGroup = (group) => {
      return groupColors[group] || '#999999';
    };

    const legendData = groups.map(group => ({
      name: group,
      itemStyle: {
        color: getColorByGroup(group)
      }
    }));

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
      legend: {
        data: legendData,
        orient: 'vertical',
        left: 10,
        top: 10,
        textStyle: {
          color: '#333'
        },
        selected: groups.reduce((acc, group) => ({ ...acc, [group]: true }), {}),
        selectedMode: 'single'
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
            color: '#000000',
          },
          data: nodes.map(node => ({
            ...node,
            itemStyle: { color: getColorByGroup(node.group) },
            category: node.group
          })),
          links: links,
          categories: groups.map(group => ({ name: group })),
          lineStyle: {
            opacity: 0.7,
            width: 1.5,
            curveness: 0.3,
          },
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

    chart.on('legendselectchanged', function (params) {
      const selectedGroup = params.name;
      const newOption = {
        series: [{
          data: nodes.map(node => ({
            ...node,
            itemStyle: {
              opacity: node.group === selectedGroup ? 1 : 0.1,
              color: getColorByGroup(node.group)
            }
          })),
          links: links.map(link => ({
            ...link,
            lineStyle: {
              opacity: nodes.find(n => n.id === link.source).group === selectedGroup ||
                       nodes.find(n => n.id === link.target).group === selectedGroup ? 0.7 : 0.1
            }
          }))
        }]
      };
      chart.setOption(newOption);
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
  }, [nodes, links, groups]); // Include groups in the dependency array

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
      <div ref={chartRef} style={{ width: "100%", height: "90vh" }} />
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
