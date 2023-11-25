import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTaskContext } from '../service/TaskContext';
import { stylesColors } from '../styles/Styles';

const HomeScreen = ({ navigation }) => {
  const { tasks } = useTaskContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      {tasks.length === 0 ? (
        <Text style={styles.noTasksMessage}>Nenhuma tarefa encontrada.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()} // Use toString() para garantir uma chave de string
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Task', { taskId: item.id })}
            >
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>Tarefa: {item.task}</Text>
                <Text style={styles.taskText}>Descrição: {item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      <Button
        title="Nova Tarefa"
        onPress={() => navigation.navigate('NewTask')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: stylesColors.primary,
  },
  noTasksMessage: {
    fontSize: 16,
    fontStyle: 'italic',
    color: stylesColors.secondary,
  },
  taskContainer: {
    marginBottom: 15,
    backgroundColor: stylesColors.background,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: stylesColors.primary,
  },
  taskText: {
    fontSize: 16,
    color: stylesColors.text,
  },
});


export default HomeScreen;
