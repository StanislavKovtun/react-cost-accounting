import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {
    
    return (
        <Card className='cost-item'>
            <CostDate date={props.cost.date} />
            <div className='cost-item__description'>
                <h2>{props.cost.description}</h2>
                <div className='cost-item__price'>${props.cost.amount}</div>
            </div>
        </Card>
    )
}

export default CostItem;