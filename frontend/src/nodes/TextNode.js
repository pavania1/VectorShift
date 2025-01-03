import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
`;

const NodeContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextNode = (props) => {
  const [text, setText] = useState(props.data.text || '');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const lines = text.split('\n');
    const newHeight = Math.max(100, lines.length * 20);
    const newWidth = Math.max(200, Math.max(...lines.map(line => line.length * 8)));
    setHeight(newHeight);
    setWidth(newWidth);

    const variableMatches = text.match(/{{\s*[\w]+\s*}}/g) || [];
    const newVariables = variableMatches.map(match => match.replace(/{{\s*|\s*}}/g, ''));
    setVariables(newVariables);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <NodeContainer width={width} height={height}>
      <TextArea value={text} onChange={handleChange} />
      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${props.id}-${variable}`}
          style={{ top: `${(index + 1) * 20}px` }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${props.id}-output`}
      />
    </NodeContainer>
  );
};