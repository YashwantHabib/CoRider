import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatInputBar from '../components/ChatInputBar';
import useChat from '../hooks/useChat';
import useHeader from '../hooks/useHeader';
import ChatHeader from '../components/ChatHeader';
import ChatList from '../components/ChatList';

export default function ChatScreen() {
  const { messages, fetchNextPage } = useChat();
  const { from, to, name } = useHeader();

  return (
    <View style={styles.container}>
      <ChatHeader name={name} from={from} to={to} />
      <ChatList messages={messages} onEndReached={fetchNextPage} />
      <ChatInputBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F4' },
});
