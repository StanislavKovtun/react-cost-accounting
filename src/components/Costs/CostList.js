import CostItem from "./CostItem";
import './CostList.css';

const CostList = ({ costs }) => {

    if (costs.length === 0) {
        return <h2 className="cost-list__fallback">No costs this year</h2>;
    };

    return (
        <ul className="cost-list">
            {costs.map((cost) =>
                <CostItem
                    key={cost.id}
                    cost={cost} />)}
        </ul>
    )
}

export default CostList;