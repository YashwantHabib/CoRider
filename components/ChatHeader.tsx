import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  UIManager,
  findNodeHandle,
  Image,
} from 'react-native';
import { ArrowLeft, MoreVertical, SquarePen, Users } from 'lucide-react-native';
import TopMenu from './TopMenu';

type ChatHeaderProps = {
  name: string;
  from: string;
  to: string;
};

export default function ChatHeader({ name, from, to }: ChatHeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const moreIconRef = useRef<null | View>(null);

  const showMenu = () => {
    const handle = findNodeHandle(moreIconRef.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
        setMenuPosition({ x: pageX, y: pageY + _height });
        setMenuVisible(true);
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={() => {}}>
          <ArrowLeft size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
        <SquarePen size={24} />
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.avatar}>
          <View style={styles.avatarGroup}>
            <View style={styles.avatarRow}>
              <Image
                source={{
                  uri: 'https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g',
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.avatarRow}>
              <Image
                source={{
                  uri: 'https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8',
                }}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.subText}>
          From <Text style={styles.bold}>{from}</Text>
          {'\n'}
          To <Text style={styles.bold}>{to}</Text>
        </Text>
        <TouchableOpacity ref={moreIconRef} onPress={showMenu}>
          <MoreVertical size={24} />
        </TouchableOpacity>
        {menuVisible && (
          <TopMenu
            x={menuPosition.x}
            y={menuPosition.y}
            onClose={() => setMenuVisible(false)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    gap: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E5E0',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarGroup: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },

  avatarRow: {
    flexDirection: 'row',
    flex: 1,
  },

  image: {
    flex: 1,
    backgroundColor: '#999', // Replace with `Image` and `source` for real images
    borderWidth: 0.5,
    borderColor: '#fff',
  },

  row1: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Mulish-Regular',
    marginBottom: 2,
  },
  row2: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 18,
    color: '#444',
    lineHeight: 22,
    flexShrink: 1,
    flex: 1,
  },
  bold: {
    fontWeight: '800',
    color: '#000',
  },
});
