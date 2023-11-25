import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import { useTaskContext } from '../service/TaskContext';
import { stylesColors } from '../styles/Styles';

const NewTaskScreen = ({navigation}) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useTaskContext();

  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert('Erro', 'Digite o nome da tarefa');
      return;
    }

    const newTask = { id: Date.now().toString(), task, description };
    addTask(newTask);

    // Limpar os campos após adicionar a tarefa
    setTask('');
    setDescription('');

    // Navegar de volta para a tela Home
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text style={NewTask_styles.text}>Nova Tarefa</Text>

      <TextInput
        style={NewTask_styles.input}
        placeholder="Digite sua tarefa"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TextInput
        style={NewTask_styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Button title="Adicionar tarefa" onPress={handleAddTask} />
    </View>
  );
};

const NewTask_styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
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

export default NewTaskScreen;
