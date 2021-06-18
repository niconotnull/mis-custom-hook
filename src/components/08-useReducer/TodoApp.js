import React, { useEffect, useReducer } from 'react';
import { TodoList } from '../08-useReducer/TodoList';
import { TodoAdd } from '../08-useReducer/TodoAdd';
import './styles.css';
import { todoReducer } from './todoReducer';

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
//   },
// ];

const init = () => {
  // si el JSON.parse retorna null el operador || retornara un arreglo vacio
  return JSON.parse(localStorage.getItem('todos')) || [];
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: 'Aprender React',
  //       done: false,
  //     },
  //   ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>
        Todo Appp <small>({todos.length})</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
