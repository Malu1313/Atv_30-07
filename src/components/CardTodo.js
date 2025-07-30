import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CardTodos = ({ todo, user, onToggle }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Checkbox
          style={styles.checkbox}
          value={todo.completed}
          onValueChange={onToggle}
        />
        <Text style={styles.title}>{todo.title}</Text>
      </View>
      <Text style={styles.user}>To: {user ? user.name : 'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#FCD1E6',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  user: {
    fontStyle: 'italic',
    marginTop: 8,
  },
});

export default CardTodos;
