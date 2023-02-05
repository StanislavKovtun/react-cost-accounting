import './CostDate.css';

const CostDate = (props) => {

    //console.log('CostDate');
    //console.log(props.date);

    const date = props.date.toLocaleString("en-US", { day: '2-digit' });
    const month = props.date.toLocaleString("en-US", { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className='cost-date'>
            <div className='cost-date__day'>{date}</div>
            <div className='cost-date__month'>{month}</div>
            <div className='cost-date__year'>{year}</div>
        </div>
    )
}

export default CostDate;