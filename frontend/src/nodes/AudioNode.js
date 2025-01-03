import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const AudioNode = (props) => {
  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Audio" handles={handles} />;
};