import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartsGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Graph with Force-Directed Layout",
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            repulsion: 400,
            gravity: 0.2,
            edgeLength: 150,
            layoutAnimation: true,
          },
          draggable: true,
          symbolSize: 50,
          roam: true,
          label: {
            show: true,
            position: "inside",
            fontSize: 12,
            color: "#fff",
          },
          edgeSymbol: ["", "arrow"],
          edgeSymbolSize: [0, 10],
          edgeLabel: {
            fontSize: 12,
            show: true,
            formatter: "{c}",
          },
          data: [
            { id: "http://mema.ma/Guido_Vetere", name: "Guido", itemStyle: { color: "#ff7f50" } },
            { id: "http://mema.ma/Matteo_Bacci",name: "Matteo", itemStyle: { color: "#87cefa" } },
          ],
          links: [
            { source: "http://mema.ma/Guido_Vetere", target: "http://mema.ma/Matteo_Bacci", value: "Non sopporta" },
            { source: "http://mema.ma/Matteo_Bacci", target: "http://mema.ma/Guido_Vetere", value: "Percula" },
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0.2,
          },
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "600px" }} />;
};

export default EChartsGraph;
