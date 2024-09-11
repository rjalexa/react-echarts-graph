import json
import os

def get_graph_data():
    # Assuming the graphData.js file is in the parent directory
    file_path = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'src', 'data', 'graphData.js')
    
    with open(file_path, 'r') as file:
        content = file.read()
        # Remove the "export const" part and parse the JSON
        nodes_start = content.index('{')
        nodes_end = content.index('];', nodes_start) + 1
        links_start = content.index('[', nodes_end)
        links_end = content.index('];', links_start) + 1
        
        nodes_json = content[nodes_start:nodes_end]
        links_json = content[links_start:links_end]
        
        nodes = json.loads(nodes_json)
        links = json.loads(links_json)
        
    return {"nodes": nodes, "links": links}