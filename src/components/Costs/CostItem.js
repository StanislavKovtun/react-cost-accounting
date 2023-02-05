import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {

    return (
        <li>
            <Card className='cost-item'>
                <CostDate date={props.cost.date} />
                <div className='cost-item__description'>
                    <h2>{props.cost.description || 'empty'}</h2>
                    <div className='cost-item__price'>${(+props.cost.amount || 0).toFixed(2)}</div>
                </div>
            </Card>
        </li>
    )
}

export default CostItem;