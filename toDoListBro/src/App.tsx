import { useState } from 'react';
// https://www.youtube.com/watch?v=9wiWzu_tRB0
//import ToDoList from './components/toDoList';

import styles from './global.module.css';

export default function App() {
  const [task, setTask] = useState([
    'Eat',
    'take a black coffee',
    'programming',
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(evt: any) {
    setNewTask(evt.target.value);
  }
  function addTask() {
    setTask((t) => [...t, newTask]);
    setNewTask('');
  }
  function deleteTask(id) {}
  function deleteTask(id) {}
  function moveTaskUp(id) {}
  function moveTaskDown(id) {}

  return (
    <div className={styles.todoList}>
      <h1>To Dooling</h1>
      <div className={styles.formControl}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol className={styles.listContainer}>
        {task.map((task, id) => (
          <li key={id} className={styles.listItem}>
            <span>{task}</span>
            <div className={styles.todoButton}>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  deleteTask(id);
                }}
              >
                DEL
              </button>

              <button
                className={styles.deleteButton}
                onClick={() => {
                  moveTaskUp(id);
                }}
              >
                🔼
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  moveTaskDown(id);
                }}
              >
                🔽
              </button>
            </div>
          </li>
        ))}
      </ol>
      {/* <ToDoList /> */}
    </div>
  );
}
