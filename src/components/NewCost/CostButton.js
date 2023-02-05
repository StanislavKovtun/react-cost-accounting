const CostButton = (props) => {

    const newCostClick = () => {
        //console.log('click');
        props.changeEditMode();
    }

    return (
        <button onClick={newCostClick}>Add new cost</button>
    )
};

export default CostButton;