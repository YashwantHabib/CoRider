import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatHeader from '../components/ChatHeader';
import ChatInputBar from '../components/ChatInputBar';
import ChatBubble from '../components/ChatBubble';
import useChat from '../hooks/useChat';

export default function ChatScreen() {
  const { messages, fetchNextPage } = useChat();

  return (
    <View style={styles.container}>
      <ChatHeader />
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        inverted
        renderItem={({ item }) => <ChatBubble message={item} />}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.3}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
      />
      <ChatInputBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F4' },
});
