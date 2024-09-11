import os
import re
import js2py

def get_graph_data():
    # Assuming the graphData.js file is in the parent directory
    file_path = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'src', 'data', 'graphData.js')
    
    with open(file_path, 'r') as file:
        js_code = file.read()

    # Remove 'export const' statements
    js_code = re.sub(r'export const', 'var', js_code)

    # Create a JavaScript context
    context = js2py.EvalJs()

    # Execute the modified JavaScript code in the context
    context.execute(js_code)

    # Access the nodes and links as Python objects
    nodes = context.nodes.to_list()
    links = context.links.to_list()

    return {"nodes": nodes, "links": links}

# Test the function
if __name__ == "__main__":
    data = get_graph_data()
    print(f"Nodes: {len(data['nodes'])}")
    print(f"Links: {len(data['links'])}")
    print("First node:", data['nodes'][0])
    print("First link:", data['links'][0])