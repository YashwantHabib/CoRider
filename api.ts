import axios from 'axios';

export async function fetchChats(page = 0) {
  const res = await axios.get<{ chats: any[] }>(
    `https://qa.corider.in/assignment/chat?page=${page}`,
  );
  return res.data.chats;
}
