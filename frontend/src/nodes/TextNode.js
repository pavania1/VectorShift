import React from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Text" handles={handles} />;
};