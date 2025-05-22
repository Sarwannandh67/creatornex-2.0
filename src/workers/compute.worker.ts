// Example Web Worker for heavy computations
self.onmessage = (event) => {
  const { data, type } = event.data;
  
  switch (type) {
    case 'HEAVY_COMPUTATION':
      // Perform heavy computation here
      const result = performHeavyComputation(data);
      self.postMessage({ type: 'COMPUTATION_RESULT', result });
      break;
    
    default:
      console.warn('Unknown message type:', type);
  }
};

function performHeavyComputation(data: any) {
  // Your heavy computation logic here
  return data;
} 