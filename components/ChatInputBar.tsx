import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Send,
  Paperclip,
  Camera,
  Image as ImageIcon,
  FileText,
} from 'lucide-react-native';
import AttachmentMenu from './AttachmentMenu';

export default function ChatInputBar() {
  const [text, setText] = useState('');
  const [attOpen, setAttOpen] = useState(false);

  const toggleAtt = () => setAttOpen(!attOpen);

  return (
    <>
      {attOpen && <AttachmentMenu />}
      <View style={styles.inputBar}>
        <TouchableOpacity onPress={toggleAtt}>
          <Paperclip size={24} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Reply"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity>
          <Send size={24} color={text ? '#007AFF' : '#ccc'} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
});
