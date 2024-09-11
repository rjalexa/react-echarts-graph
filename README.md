# eCharts React Graph Demo

This project demonstrates a simple React application using Apache eCharts to create an interactive force-directed graph. The demo showcases the ability to use URLs as node IDs and arbitrary strings as edge labels.

## Features

- Force-directed graph layout
- Nodes with URL-based IDs
- Edges with custom string labels
- Interactive draggable nodes
- Smooth animations

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

You should now see the graph demo displayed in your browser.

## Project Structure

- `src/App.js`: The main React component that renders the application
- `src/components/EChartsGraph.js`: The React component that initializes and renders the eCharts graph

## Customization

To modify the graph data or appearance, edit the `option` object in `src/components/EChartsGraph.js`. You can add more nodes, change colors, adjust force parameters, or modify edge properties.

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