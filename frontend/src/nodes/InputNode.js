import React from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Input" handles={handles} />;
};