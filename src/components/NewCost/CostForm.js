import { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    // // вариант с использованием общего стейта
    //const [userInput, setUserInput] = useState({
    //    name: '',
    //    amount: '',
    //    date: '',
    //});

    //const nameChangeHandler = (event) => {
    //    // не надежный способ, может быть не актуальное значение пред. состояния
    //    //setUserInput({
    //    //    ...userInput,
    //    //    name: event.target.value,
    //    //});
    //    // надежный способ:
    //    setUserInput((previousState) => {
    //        return {
    //            ...previousState,
    //            name: event.target.value,
    //        }
    //    });
    //};


    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        //console.log(event.target.value);
        setInputName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        //console.log(event.target.value);
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        //console.log(event.target.value);
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }
        setInputName('');
        setInputAmount('');
        setInputDate('');

        props.onSaveCostData(costData);
        //console.log(costData);
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
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CostForm;