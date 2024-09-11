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
  const [selectedGroups, setSelectedGroups] = useState(groups);

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

    const updateChartVisibility = (visibleGroups, hoveredGroup = null) => {
      const newOption = {
        legend: {
          selected: groups.reduce((acc, group) => ({
            ...acc,
            [group]: visibleGroups.includes(group)
          }), {})
        },
        series: [{
          data: nodes.map(node => ({
            ...node,
            itemStyle: {
              opacity: hoveredGroup 
                ? (node.group === hoveredGroup ? 1 : 0.1) 
                : (visibleGroups.includes(node.group) ? 1 : 0.1),
              color: getColorByGroup(node.group)
            }
          })),
          links: links.map(link => ({
            ...link,
            lineStyle: {
              opacity: hoveredGroup 
                ? 0.1 
                : (visibleGroups.includes(nodes.find(n => n.id === link.source).group) && 
                   visibleGroups.includes(nodes.find(n => n.id === link.target).group) ? 0.7 : 0.1)
            }
          }))
        }]
      };
      chart.setOption(newOption);
    };

    const handleWheel = (event) => {
      // Your wheel event handling logic here
    };
    chartRef.current.addEventListener('wheel', handleWheel, { passive: true });

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
        selectedMode: 'multiple'
      },
      animationDurationUpdate: 300,
      animationEasingUpdate: "linear",
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
      const newSelectedGroups = Object.entries(params.selected)
        .filter(([_, isSelected]) => isSelected)
        .map(([group]) => group);
      setSelectedGroups(newSelectedGroups);
      updateChartVisibility(newSelectedGroups);
    });

    chart.on('mouseover', { seriesIndex: 0 }, function (params) {
      if (params.componentType === 'legend') {
        updateChartVisibility(selectedGroups, params.name);
      }
    });

    chart.on('mouseout', { seriesIndex: 0 }, function (params) {
      if (params.componentType === 'legend') {
        updateChartVisibility(selectedGroups);
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

    // Initial visibility update
    updateChartVisibility(selectedGroups);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, [nodes, links, groups, selectedGroups]);

  const handleSaveNode = async (updatedNode) => {
    try {
      console.log('Attempting to save node:', updatedNode);
      const response = await fetch('http://localhost:8000/api/nodeSave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNode),
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to save node: ${responseData.detail || response.statusText}`);
      }

      setNodes(prevNodes => prevNodes.map(node => 
        node.id === updatedNode.id ? updatedNode : node
      ));
      console.log('Node saved successfully');
    } catch (error) {
      console.error('Error saving node:', error);
      alert(`Failed to save node: ${error.message}`);
    }
  };

  const handleSaveLink = async (updatedLink) => {
    try {
      console.log('Attempting to save edge:', updatedLink);
      const response = await fetch('http://localhost:8000/api/edgeSave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLink),
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to save edge: ${responseData.detail || response.statusText}`);
      }

      setLinks(prevLinks => prevLinks.map(link => 
        link.source === updatedLink.source && link.target === updatedLink.target ? updatedLink : link
      ));
      console.log('Edge saved successfully');
    } catch (error) {
      console.error('Error saving edge:', error);
      alert(`Failed to save edge: ${error.message}`);
    }
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