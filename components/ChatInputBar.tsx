import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SendHorizonal, Paperclip } from 'lucide-react-native';
import AttachmentMenu from './AttachmentMenu';

export default function ChatInputBar() {
  const [text, setText] = useState('');
  const [attOpen, setAttOpen] = useState(false);
  const [attPosition, setAttPosition] = useState({ x: 0, y: 0 });

  const paperclipRef = useRef<View>(null);

  const toggleAtt = () => {
    if (!attOpen && paperclipRef.current) {
      paperclipRef.current.measure((x, y, width, height, pageX, pageY) => {
        setAttPosition({ x: pageX, y: pageY });
        setAttOpen(true);
      });
    } else {
      setAttOpen(false);
    }
  };

  return (
    <>
      {attOpen && (
        <View
          style={[
            styles.overlay,
            {
              top: attPosition.y - 120,
              left: attPosition.x - 50,
            },
          ]}
        >
          <AttachmentMenu />
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.inputBar}>
            <TextInput
              style={styles.input}
              placeholder="Reply to @Rohit Yadav"
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity ref={paperclipRef} onPress={toggleAtt}>
              <Paperclip size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SendHorizonal size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 999,
  },
  container: {
    paddingBottom: 44,
  },
  parent: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    gap: 16,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
});
