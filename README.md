# eCharts React Graph Demo

This project demonstrates an advanced React application using Apache eCharts to create an interactive force-directed graph. The demo showcases various technologies in the web development ecosystem, their relationships, and provides interactive features for exploring and modifying the graph.

## Features

- Force-directed graph layout representing various web technologies
- Dynamic node coloring based on technology groups
- Interactive draggable nodes
- Hover effects to highlight connected nodes and edges
- Double-click functionality to edit node properties
- Modal dialog for editing node name and group
- Automatic color updates when changing a node's group
- Smooth animations for graph updates
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/echarts-react-graph-demo.git
   ```
2. Navigate to the project directory:
   ```
   cd echarts-react-graph-demo
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application locally:

1. Start the development server:
   ```
   npm start
   ```
2. Open your web browser and visit:
   ```
   http://localhost:3000
   ```

You should now see the interactive graph demo displayed in your browser.

## Interacting with the Graph

- **Pan and Zoom**: Click and drag the background to pan, use the mouse wheel to zoom.
- **Move Nodes**: Click and drag individual nodes to reposition them.
- **Hover Effects**: Hover over a node to highlight its connections and fade out unrelated nodes.
- **Edit Nodes**: Double-click a node to open an edit modal where you can change its name and group.

## Project Structure

- `src/App.js`: The main React component that renders the application
- `src/components/EChartsGraph.js`: The React component that initializes and renders the eCharts graph
- `src/components/EditNodeModal.js`: A modal component for editing node properties
- `src/data/graphData.js`: Contains the node and link data for the graph
- `src/App.css`: Styles for the application, including CSS variables for node colors

## Customization

### Modifying Graph Data

To add or modify nodes and links, edit the `nodes` and `links` arrays in `src/data/graphData.js`.

### Changing Node Colors

Node colors are defined by CSS variables in `src/App.css`. To change a group's color, modify the corresponding CSS variable.

### Adding New Technology Groups

1. Add a new color variable in `src/App.css`
2. Update the `getColorByGroup` function in `src/components/EChartsGraph.js`
3. Add nodes with the new group in `src/data/graphData.js`

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Apache eCharts](https://echarts.apache.org/) for providing the powerful charting library
- [React](https://reactjs.org/) for the frontend framework

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.