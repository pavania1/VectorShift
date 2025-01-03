// frontend/src/nodes/ImageNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ImageNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Image" handles={handles} />;
};