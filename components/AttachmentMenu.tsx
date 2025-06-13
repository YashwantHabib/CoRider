// src/components/AttachmentMenu.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Image as ImageIcon, FileText } from 'lucide-react-native';

export default function AttachmentMenu() {
  const onSelect = (type: string) => {
    console.log('Selected', type);
    // integrate actual logic later
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.btn} onPress={() => onSelect('camera')}>
        <Camera size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => onSelect('gallery')}>
        <ImageIcon size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => onSelect('file')}>
        <FileText size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  btn: {
    backgroundColor: '#00C853',
    padding: 12,
    borderRadius: 30,
  },
});
