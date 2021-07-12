import React, {useContext} from 'react';
import { getTextOfJSDocComment } from 'typescript';
import { TodoContext } from '../contexts/TodoContext';
import TodoLsitItem from './TodoListItem';
import {TodoContextType} from '../contexts/TodoContextType'

const TodoList = () => {
    const {todos}  = useContext<TodoContextType>(TodoContext)
}
    
    
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