import { directive } from '@babel/types';
import React from 'react';

const TodoLsitItem = () => {
    return(
        <tr className="uk-animation-slide-botton-mediun">
            
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" />
                </label>
            </td>
                        
            <td className="uk-width-expand">Item</td>

            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" ></button>
            </td>
        </tr>
    );
};

export default TodoLsitItem;