import { useEffect, useCallback } from 'react';

export const useWorker = () => {
  const worker = new Worker(new URL('../workers/compute.worker.ts', import.meta.url), {
    type: 'module'
  });

  useEffect(() => {
    return () => {
      worker.terminate();
    };
  }, [worker]);

  const computeInBackground = useCallback((data: any) => {
    return new Promise((resolve) => {
      const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'COMPUTATION_RESULT') {
          worker.removeEventListener('message', handleMessage);
          resolve(event.data.result);
        }
      };

      worker.addEventListener('message', handleMessage);
      worker.postMessage({ type: 'HEAVY_COMPUTATION', data });
    });
  }, [worker]);

  return { computeInBackground };
}; 