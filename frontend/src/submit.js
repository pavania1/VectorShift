import React from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Number of nodes: ${data.num_nodes}\nNumber of edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
      } else {
        alert('Failed to parse pipeline');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch');
    }
  };

  return (
    <button onClick={handleSubmit}>
      Submit Pipeline
    </button>
  );
};