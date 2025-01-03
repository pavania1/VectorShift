import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <PipelineToolbar />
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;