import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div >
      <input type="checkbox" checked={todo.completed} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;