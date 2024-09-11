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
    try:
        edge_save(edge.dict())
        return {"message": "Edge updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
