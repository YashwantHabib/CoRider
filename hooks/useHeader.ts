// hooks/useHeader.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useHeader() {
  const [headerData, setHeaderData] = useState({
    name: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    axios
      .get('https://qa.corider.in/assignment/chat?page=0')
      .then(res => {
        const { name, from, to } = res.data;
        setHeaderData({ name, from, to });
      })
      .catch(err => {
        console.error('Header fetch failed', err);
      });
  }, []);

  return headerData;
}
