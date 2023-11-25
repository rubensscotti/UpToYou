import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NewTaskScreen from './src/screens/NewTaskScreen';
import TaskScreen from './src/screens/TaskScreen';
import { TaskProvider } from './src/service/TaskContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitle: "UpToYou", headerTitleAlign: "center" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewTask" component={NewTaskScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
