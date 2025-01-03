// frontend/src/nodes/CodeNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const CodeNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Code" handles={handles} />;
};