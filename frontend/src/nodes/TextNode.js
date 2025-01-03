import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode {...props} type="Text" handles={handles} />;
};