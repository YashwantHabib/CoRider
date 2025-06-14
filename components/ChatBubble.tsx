import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ChatBubbleProps {
  message: {
    id: string;
    message: string;
    time: string;
    sender: {
      self: boolean;
      image: string;
    };
  };
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isSelf = message.sender.self;

  return (
    <View style={[styles.container, isSelf ? styles.self : styles.other]}>
      {!isSelf && (
        <Image source={{ uri: message.sender.image }} style={styles.avatar} />
      )}
      <View
        style={[styles.bubble, isSelf ? styles.selfBubble : styles.otherBubble]}
      >
        <Text style={{ color: isSelf ? '#fff' : '#000' }}>
          {message.message.replace(/<br>/g, '\n')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 8, alignItems: 'flex-start' },
  self: { alignSelf: 'flex-end', flexDirection: 'row-reverse' },
  other: { alignSelf: 'flex-start' },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  bubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  selfBubble: { backgroundColor: '#007AFF' },
  otherBubble: { backgroundColor: '#f1f1f1' },
});
