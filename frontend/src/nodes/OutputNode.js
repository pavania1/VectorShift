import React from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = (props) => {
  const handles = [
    { id: `${props.id}-value`, type: 'target', position: 'left' },
  ];

  return <BaseNode {...props} type="Output" handles={handles} />;
};