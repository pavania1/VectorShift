import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const VideoNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Video" handles={handles} />;
};