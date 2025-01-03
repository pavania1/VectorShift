from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    G = nx.DiGraph()
    G.add_nodes_from([node['id'] for node in pipeline.nodes])
    G.add_edges_from([(edge['source'], edge['target']) for edge in pipeline.edges])

    is_dag = nx.is_directed_acyclic_graph(G)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}