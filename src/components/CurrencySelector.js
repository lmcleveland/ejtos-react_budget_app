import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="alert alert-secondary" style={{ backgroundColor: '#d4edda' }}>
            <span>Currency:</span>
            <select value={currency} onChange={handleCurrencyChange} style={{ marginLeft: '10px', backgroundColor: '#d4edda', border: 'none', padding: '5px 10px', borderRadius: '4px' }}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
