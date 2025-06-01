import { useEffect, useRef } from 'react';

interface WebSocketOptions {
  url: string;
  onMessage?: (event: MessageEvent) => void;
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  reconnectAttempts?: number;
  reconnectInterval?: number;
}

export function useWebSocket({
  url,
  onMessage,
  onOpen,
  onClose,
  onError,
  reconnectAttempts = 3,
  reconnectInterval = 1000,
}: WebSocketOptions) {
  const ws = useRef<WebSocket | null>(null);
  const reconnectCount = useRef(0);
  const reconnectTimeout = useRef<NodeJS.Timeout>();

  const connect = () => {
    if (ws.current?.readyState === WebSocket.OPEN) return;

    ws.current = new WebSocket(url);

    ws.current.onopen = (event) => {
      reconnectCount.current = 0;
      onOpen?.(event);
    };

    ws.current.onmessage = (event) => {
      onMessage?.(event);
    };

    ws.current.onclose = (event) => {
      onClose?.(event);
      
      // Attempt to reconnect if not closed normally
      if (event.code !== 1000 && reconnectCount.current < reconnectAttempts) {
        reconnectTimeout.current = setTimeout(() => {
          reconnectCount.current++;
          connect();
        }, reconnectInterval);
      }
    };

    ws.current.onerror = (event) => {
      onError?.(event);
    };
  };

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
      if (ws.current) {
        ws.current.close(1000, 'Component unmounted');
      }
    };
  }, [url]);

  // Handle bfcache restoration
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from bfcache
        if (ws.current?.readyState === WebSocket.CLOSED) {
          connect();
        }
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return {
    send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.send(data);
      }
    },
    close: () => {
      if (ws.current) {
        ws.current.close(1000, 'Manual close');
      }
    },
  };
} 