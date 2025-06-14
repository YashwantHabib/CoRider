import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ChatBubble from './ChatBubble';

interface Message {
  id: string;
  message: string;
  time: string;
  sender: {
    self: boolean;
    image: string;
  };
}

interface ChatListProps {
  messages: Message[];
  onEndReached?: () => void;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function isSameDay(date1Str: string, date2Str: string) {
  const d1 = new Date(date1Str);
  const d2 = new Date(date2Str);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export default function ChatList({ messages, onEndReached }: ChatListProps) {
  const renderItem = ({ item, index }: { item: Message; index: number }) => {
    const currentDate = item.time;
    const prevDate =
      index < messages.length - 1 ? messages[index + 1].time : null;

    const showDate = !prevDate || !isSameDay(currentDate, prevDate);

    return (
      <View>
        {showDate && (
          <View style={styles.dateWrapper}>
            <View style={styles.line} />
            <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
            <View style={styles.line} />
          </View>
        )}
        <ChatBubble message={item} />
      </View>
    );
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id}
      inverted
      renderItem={renderItem}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
    />
  );
}

const styles = StyleSheet.create({
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dateText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#B7B7B7',
  },
});
