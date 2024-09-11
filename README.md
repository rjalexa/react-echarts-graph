# eCharts React Graph Demo with FastAPI Backend

This project demonstrates an advanced React application using Apache eCharts to create an interactive force-directed graph, with a FastAPI backend for serving graph data.

## Project Structure

```
project-root/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EChartsGraph.js
│   │   │   └── EditNodeModal.js
│   │   ├── data/
│   │   │   └── graphData.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── main.py
│   ├── graph_data.py
│   └── pyproject.toml
│
├── .gitignore
├── README.md
└── LICENSE
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or higher)
- npm (v6 or higher)
- Python (v3.8 or higher)
- Poetry (for managing Python dependencies)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/echarts-react-graph-demo.git
   cd echarts-react-graph-demo
   ```

2. Set up the frontend:
   ```
   cd frontend
   npm install
   ```

3. Set up the backend:
   ```
   cd ../backend
   poetry install
   ```

## Usage

1. Start the backend server:
   ```
   cd backend
   poetry run uvicorn main:app --reload
   ```
   This will start the FastAPI server at `http://localhost:8000`

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```
   This will start the React app at `http://localhost:3000`

3. Open your web browser and visit:
   ```
   http://localhost:3000
   ```

You should now see the interactive graph demo displayed in your browser, with data served from the FastAPI backend.

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

## Customization

### Modifying Graph Data

To add or modify nodes and links, edit the `backend/graph_data.py` file.

### Changing Node Colors

Node colors are defined by CSS variables in `frontend/src/App.css`. To change a group's color, modify the corresponding CSS variable.

### Adding New Technology Groups

1. Add a new color variable in `frontend/src/App.css`
2. Update the `getColorByGroup` function in `frontend/src/components/EChartsGraph.js`
3. Add nodes with the new group in `backend/graph_data.py`

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
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework
- [Poetry](https://python-poetry.org/) for Python dependency management

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.