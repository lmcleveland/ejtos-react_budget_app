import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, budget, expenses, formatCurrency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        if (budget - 10 < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending value.");
        } else {
            const expense = {
                name: name,
                cost: -10,
            };

            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{formatCurrency(props.cost)}</td>
            <td>
                <button 
                    onClick={() => increaseAllocation(props.name)} 
                    style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
                >
                    +
                </button>
            </td>
            <td>
                <button 
                    onClick={() => decreaseAllocation(props.name)} 
                    style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
                >
                    -
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
