import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import api from '../services/axios';
import CardPost from '../components/CardPost';
import Header from '../components/Header';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  async function fetchUsers() {
    try {
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
    }
  }

  async function fetchPosts() {
    try {
      const response = await api.getPosts();
      setPosts(response.data);
    } catch (error) {
      console.log("Erro ao buscar posts", error);
    }
  }


  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPost
            title={item.title}
            body={item.body}
            author={getAuthorName(item.userId)}
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
