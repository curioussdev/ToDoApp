import React from 'react';
import { getTextOfJSDocComment } from 'typescript';
import { Todo } from '../models/Todo'
import TodoLsitItem from './TodoListItem';

const TodoList = () => {
    const todos: Todo[] = [
       
     
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
                        todo => (<TodoLsitItem key={todo.id} todo={todo}></TodoLsitItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;