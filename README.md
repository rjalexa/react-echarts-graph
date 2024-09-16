# eCharts React Graph Demo with FastAPI Backend

This project demonstrates an advanced React application using Apache eCharts to create an interactive force-directed graph, with a FastAPI backend for data persistence.

## Project Structure

```
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EChartsGraph.js
│   │   │   ├── EditNodeModal.js
│   │   │   └── EditLinkModal.js
│   │   ├── data/
│   │   │   └── graphData.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── main.py
│   └── pyproject.toml
│
├── README.md
└── LICENSE
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or higher)
- pnpm (v9 or higher)
- Python (v3.8 to 3.11) NB Currently 3.12 will break the backend for an incompatibility of the js2py library)
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
   pnpm install
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
   poetry run uvicorn main:app --reload --log-level debug
   ```
   This will start the FastAPI server at `http://localhost:8000`

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   pnpm start
   ```

3. Open your web browser and visit:
   ```
   http://localhost:3000
   ```

You should now see the interactive graph demo displayed in your browser.

## Features

- Force-directed graph layout representing an office ecosystem
- Dynamic node coloring based on group categories (employee, resource, event)
- Interactive draggable nodes
- Zoom and pan functionality
- Legend for filtering nodes by group, with hover and click functions
- Group names are dynamically built when reading the input data
- Hover effects to highlight connected nodes and edges
- Double-click functionality to edit node and link properties
- Modal dialogs for editing node and link details
- Automatic color updates when changing a node's group
- Smooth animations for graph updates
- Responsive design
- Data persistence through FastAPI backend

## Customization

### Modifying Graph Data

Initial graph data is stored in `frontend/src/data/graphData.js`. For persistent changes, use the edit functionality in the UI, which communicates with the backend.

### Changing Node Colors

Node colors are defined in the `groupColors` object in `frontend/src/components/EChartsGraph.js`. To change a group's color, modify the corresponding color value.

## Component Details

### EChartsGraph

The main component that renders the graph and handles most of the interactivity.

### EditNodeModal

A modal component for editing node properties (name and group).

### EditLinkModal

A modal component for editing link properties (value/label).

## Backend Integration

The application communicates with a FastAPI backend for data retrieval and persistence:

- GET `/api/graph`: Fetches the graph data (currently mocked by reading the JS data file)
- `handleSaveNode`: Saves updated node data using POST `/api/nodeSave`
- `handleSaveLink`: Saves updated link data using POST `/api/edgeSave`

Ensure your backend provides these API endpoints.

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