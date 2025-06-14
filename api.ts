import axios from 'axios';

export async function fetchChats(page = 0) {
  const res = await axios.get<{ chats: any[] }>(
    `https://qa.corider.in/assignment/chat?page=${page}`,
  );
  return res.data.chats;
}

export async function fetchHeaders() {
  try {
    const res = await axios.get(`https://qa.corider.in/assignment/chat?page=0`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch chats', error);
    throw error;
  }
}
