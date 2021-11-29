import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "./components/ListItem";

const TITLES = [
  "FIRST item with index 0",
  "SECOND item with index 1",
  "THIRD item with index 2",
  "FOURTH item with index 3",
  "FIFTH item with index 4",
];

interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

const BACKGROUND_COLOR = "#FAFBFF";

export default function App() {
  const [tasks, setTasks] = useState(TASKS);

  const onDismiss = (task: TaskInterface) => {
    setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
  };

  const scrollRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Tasks</Text>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {tasks.map((task) => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: "5%",
  },
});

export { TaskInterface };
