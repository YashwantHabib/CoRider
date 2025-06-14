import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Video as VideoIcon, FileText } from 'lucide-react-native';

export default function AttachmentMenu() {
  const onSelect = (type: string) => {
    console.log('Selected', type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.btn} onPress={() => onSelect('camera')}>
          <Camera size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onSelect('gallery')}
        >
          <VideoIcon size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onSelect('file')}>
          <FileText size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.triangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#008000',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btn: {
    borderRadius: 30,
  },
  triangle: {
    width: 12,
    height: 12,
    backgroundColor: '#008000',
    transform: [{ rotate: '45deg' }],
    marginTop: -6,
  },
});
