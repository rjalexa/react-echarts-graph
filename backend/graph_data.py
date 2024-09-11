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

def edge_save(edge_data):
    file_path = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'src', 'data', 'graphData.js')
    
    with open(file_path, 'r') as file:
        js_code = file.read()

    # Find the links array in the JavaScript code
    links_match = re.search(r'export const links = \[(.*?)\];', js_code, re.DOTALL)
    if links_match:
        links_str = links_match.group(1)
        links = []
        for link in re.finditer(r'\{[^}]+\}', links_str):
            link_dict = {}
            for pair in re.finditer(r'(\w+):\s*[\'"]?([^\'"}\s]+)[\'"]?', link.group(0)):
                key, value = pair.groups()
                link_dict[key] = value
            links.append(link_dict)

        # Update the matching link
        for i, link in enumerate(links):
            if link['source'] == edge_data['source'] and link['target'] == edge_data['target']:
                links[i]['value'] = edge_data['value']
                break

        # Convert the updated links back to a JavaScript string
        updated_links_str = ',\n  '.join([f"{{ source: '{link['source']}', target: '{link['target']}', value: '{link['value']}' }}" for link in links])
        updated_js_code = js_code.replace(links_str, updated_links_str)

        # Write the updated JavaScript code back to the file
        with open(file_path, 'w') as file:
            file.write(updated_js_code)
    else:
        raise ValueError("Links array not found in the JavaScript file")

# Test the function
if __name__ == "__main__":
    data = get_graph_data()
    print(f"Nodes: {len(data['nodes'])}")
    print(f"Links: {len(data['links'])}")
    print("First node:", data['nodes'][0])
    print("First link:", data['links'][0])
