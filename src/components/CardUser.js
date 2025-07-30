import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Company: {company}</Text>
      <Text>Address: {zipcode}</Text>
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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
