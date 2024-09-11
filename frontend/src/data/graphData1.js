// graphData.js
export const nodes = [
  { id: "http://mema.ma/Guido_Vetere", name: "Guido", itemStyle: { color: "#ff7f50" } },
  { id: "http://mema.ma/Matteo_Bacci", name: "Matteo", itemStyle: { color: "#87cefa" } },
];

export const links = [
  { source: "http://mema.ma/Guido_Vetere", target: "http://mema.ma/Matteo_Bacci", value: "Non sopporta" },
  { source: "http://mema.ma/Matteo_Bacci", target: "http://mema.ma/Guido_Vetere", value: "Percula" },
];
