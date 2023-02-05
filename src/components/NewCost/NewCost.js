import { useState } from 'react';
import CostButton from './CostButton';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const [editMode, setEditMode] = useState(false);

    const editModeHandler = (mode) => {
        // +previous state!!!
        setEditMode(prevMode => {
            return !prevMode;
        });
    }

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Date.now().toString(),
        };
        props.onAddCost(costData);
    };

    return (
        <div className='new-cost'>
            {!editMode && <CostButton changeEditMode={editModeHandler} />}
            {editMode && <CostForm onSaveCostData={saveCostDataHandler} changeEditMode={editModeHandler} />}
        </div>
    )
}

export default NewCost;