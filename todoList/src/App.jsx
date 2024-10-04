import React, { useState } from 'react';
import Todo from './components/Todo';

const initialTodos = [
  { id: 1, text: 'Walk the dog', completed: false },
  { id: 2, text: 'Write app', completed: true },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onAdd = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = { id: todos.length + 1, text: newTodoText, completed: false };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={onAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;