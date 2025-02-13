
import { useState } from 'react'
import styles from './todoList.module.css'


function TodoList() {
    /** Lista de tarefas
     * 1 - Uma lisa ou array
     * 2 - Percorrer a lista (map)
     * 3 - Exibir a lista na página
     */

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()

      if(inputValue.trim() !== '') {
        const newTodo = {
          id: Date.now(),
          text: inputValue
        }
        setTodos((prevTodos) => [...prevTodos, newTodo])
        
        setInputValue('')
      }
    }

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Lista De Tarefas</h1>
      <form onSubmit={handleSubmit} className={styles.formRow}>
        <input type="text" 
        placeholder='Adicione uma tarefa' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.addButton} type='submit'>Adicionar</button>
      </form>

      {todos.length === 0 && (
        <p className={styles.empty}>Não há tarefas cadastradas</p>
      )}

      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            {todo.text}
            <buttom className={styles.deleteButton}>Excluir</buttom>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
