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
}

export default function TopMenu({ onClose }: TopMenuProps) {
  return (
    <Modal transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.item}>
              <Users size={20} />
              <Text style={styles.text}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Phone size={20} />
              <Text style={styles.text}>Share Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Flag size={20} />
              <Text style={styles.text}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menu: {
    marginTop: 60,
    marginRight: 16,
    marginLeft: 'auto',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});
