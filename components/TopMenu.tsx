import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Users, Phone, Flag } from 'lucide-react-native';

interface TopMenuProps {
  onClose: () => void;
  x: number;
  y: number;
}

export default function TopMenu({ onClose, x, y }: TopMenuProps) {
  return (
    <Modal transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={[styles.menuContainer, { top: y - 40, left: x - 180 }]}>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.item}>
                <Users size={20} />
                <Text style={styles.text}>Members</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.item}>
                <Phone size={20} />
                <Text style={styles.text}>Share Number</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.item}>
                <Flag size={20} />
                <Text style={styles.text}>Report</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menuContainer: {
    position: 'absolute',
    zIndex: 1000,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 6,
    paddingVertical: 4,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 12,
  },
});
