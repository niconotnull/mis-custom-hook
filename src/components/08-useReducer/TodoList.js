import React from 'react';
import { TodoListItem } from '../08-useReducer/TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};
