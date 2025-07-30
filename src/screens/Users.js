import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import api from '../services/axios';
import CardUser from '../components/CardUser';
import Header from '../components/Header';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   fetchUsers();
  }, []);
  
  async function fetchUsers() {
    try {
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUser
            name={item.name}
            email={item.email}
            company={item.company.name}
            zipcode={item.address.zipcode}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
