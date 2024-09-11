from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from graph_data import get_graph_data, edge_save

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EdgeUpdate(BaseModel):
    source: str
    target: str
    value: str

@app.get("/api/graph")
async def read_graph():
    return get_graph_data()

@app.post("/api/edgeSave")
async def save_edge(edge: EdgeUpdate):
    print(f"Received edge update request: {edge}")
    try:
        edge_dict = edge.dict()
        print(f"Edge data as dictionary: {edge_dict}")
        edge_save(edge_dict)
        print("Edge saved successfully")
        return {"message": "Edge updated successfully"}
    except Exception as e:
        print(f"Error saving edge: {str(e)}")
        print(f"Error type: {type(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=str(e))
