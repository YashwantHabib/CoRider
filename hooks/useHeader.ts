import { useEffect, useState } from 'react';
import { fetchHeaders } from '../api';

export default function useHeader() {
  const [headerData, setHeaderData] = useState({
    name: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    async function getHeaderData() {
      try {
        const data = await fetchHeaders();
        let { name, from, to } = data;
        name = name.replace(/\bno\.\s*/i, '').trim();
        setHeaderData({ name, from, to });
      } catch (error) {
        console.error('Header fetch failed', error);
      }
    }

    getHeaderData();
  }, []);

  return headerData;
}
