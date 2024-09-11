from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from graph_data import get_graph_data

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/graph")
async def read_graph():
    return get_graph_data()