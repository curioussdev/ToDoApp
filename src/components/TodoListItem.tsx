import { directive } from '@babel/types';
import React from 'react';
import { Todo } from '../models/Todo';

interface TodoLsitItemProps {
    todo: Todo
}

const TodoLsitItem = (props: TodoLsitItemProps) => {

    const handleChange = (event: any) => {
        console.log("Mudou")
    }

    return(
        <tr className="uk-animation-slide-botton-mediun">
            
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" 
                    checked={props.todo.done} 
                    onChange={handleChange}
                    />
                </label>
            </td>
                        
            <td className="uk-width-expand">{props.todo.title}</td>

            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" ></button>
            </td>
        </tr>
    );
};

export default TodoLsitItem;