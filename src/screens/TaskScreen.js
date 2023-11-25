import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useTaskContext } from '../service/TaskContext';
import { stylesColors } from '../styles/Styles';

const TaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const { tasks, updateTask } = useTaskContext();

  // Encontrar a tarefa pelo ID
  const currentTask = tasks.find((task) => task.id === taskId);

  const [task, setTask] = useState(currentTask.task);
  const [description, setDescription] = useState(currentTask.description);

  const handleUpdateTask = () => {
    // Atualizar a tarefa diretamente do contexto
    updateTask(taskId, { task, description });

    // Navegar de volta para a tela Home
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text style={TaskScreen_styles.text}>Detalhes da Tarefa</Text>

      <TextInput
        style={TaskScreen_styles.input}
        placeholder="Nome da Tarefa"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TextInput
        style={TaskScreen_styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Button title="Salvar" onPress={handleUpdateTask} />
    </View>
  );
};

const TaskScreen_styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: stylesColors.primary,
  },
  input: {
    height: 40,
    borderColor: stylesColors.primary,
    borderWidth: 1,
    margin: 10,
    padding: 8,
    borderRadius: 5,
  },
});

export default TaskScreen;
