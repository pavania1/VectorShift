import React from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = (props) => {
  const handles = [
    { id: `${props.id}-input`, type: 'target', position: Position.Left },
    { id: `${props.id}-output`, type: 'source', position: Position.Right  },
  ];

  return <BaseNode {...props} type="LLM" handles={handles} />;
};