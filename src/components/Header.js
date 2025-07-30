import React from 'react';
import { View,  StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#EF3F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
