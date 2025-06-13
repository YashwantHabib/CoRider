import { useState, useEffect } from 'react';
import { fetchChats } from '../api';

export default function useChat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const chats = await fetchChats(page);
      setMessages(prev => [...chats.reverse(), ...prev]);
    })();
  }, [page]);

  return {
    messages,
    fetchNextPage: () => setPage(p => p + 1),
  };
}
