import React from 'react';
import { Todo } from '../models/Todo'

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'Ir ao supermercado', done: false},
        {id: 2, title: 'Ir a academia', done: false},
        {id: 3, title: 'Jantar', done: true}
    ];
    
    
    return(
        <div>TodoList</div>
    );
}

export default TodoList;