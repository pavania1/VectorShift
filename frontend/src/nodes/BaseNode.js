import { useState } from 'react';
import React from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, type, handles }) => {
  const [nodeData, setNodeData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{type}</span>
      </div>
      <div>
        {Object.keys(nodeData).map((key) => (
          <label key={key}>
            {key}:
            <input
              type="text"
              name={key}
              value={nodeData[key]}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
        />
      ))}
    </div>
  );
};