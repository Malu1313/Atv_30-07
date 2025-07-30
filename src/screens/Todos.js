import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/axios';
import Checkbox from 'expo-checkbox';
import CardTodos from '../components/CardTodo';
import Header from '../components/Header';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
    }
  }

  async function fetchTodos() {
    try {
      const response = await api.getTodos();
      const todosWithLocalState = response.data.map((todo) => ({
        ...todo,
        completedLocal: todo.completed,
      }));
      setTodos(todosWithLocalState);
    } catch (error) {
      console.log("Erro ao buscar tarefas", error);
    }
  }

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
<Header/>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const user = users.find(u => u.id === item.userId);

          return (
            <CardTodos
              todo={item}
              user={user}
              onToggle={() => handleToggle(item.id)}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Todos;
