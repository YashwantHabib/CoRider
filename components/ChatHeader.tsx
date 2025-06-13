import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, MoreVertical } from 'lucide-react-native';
import TopMenu from './TopMenu';

export default function ChatHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <ArrowLeft size={24} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title}>Trip No. 37</Text>
        <Text>
          From <Text style={styles.bold}>Rajajinagar</Text> to{' '}
          <Text style={styles.bold}>Koramangala</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <MoreVertical size={24} />
      </TouchableOpacity>

      {menuVisible && <TopMenu onClose={() => setMenuVisible(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
  bold: { fontWeight: 'bold' },
});
