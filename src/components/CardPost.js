import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardPost({ title, body, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>Autor: {author}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FCD1E6',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
  },
});
