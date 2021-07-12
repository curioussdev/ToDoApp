import React from 'react';
import { getTextOfJSDocComment } from 'typescript';
import { Todo } from '../models/Todo'
import TodoLsitItem from './TodoListItem';

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'Ir ao supermercado', done: false},
        {id: 2, title: 'Ir a academia', done: false},
        {id: 3, title: 'Jantar', done: true}
    ];
    
    
    return(
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoLsitItem key={todo.id}></TodoLsitItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;