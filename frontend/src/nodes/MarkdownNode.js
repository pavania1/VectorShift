// frontend/src/nodes/MarkdownNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const MarkdownNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Markdown" handles={handles} />;
};