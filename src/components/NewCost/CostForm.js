import { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {

        //console.log('inputDate: ', inputDate);
        //console.log(typeof inputDate);
        
        event.preventDefault();
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate || 0), //??
        };

        setInputName('');
        setInputAmount('');
        //setInputDate('');

        props.onSaveCostData(costData);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <div>
                        <label>Name</label>
                        <input type='text'
                            onChange={nameChangeHandler}
                            value={inputName} />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type='number'
                            min='0.1'
                            step='0.1'
                            onChange={amountChangeHandler}
                            value={inputAmount} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date'
                            min='2020-01-01'
                            onChange={dateChangeHandler}
                            value={inputDate} />
                    </div>
                    <div className='new-cost__actions'>
                        <button type='submit'>
                            Add cost
                        </button>
                        <button type='button' onClick={props.changeEditMode}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CostForm;