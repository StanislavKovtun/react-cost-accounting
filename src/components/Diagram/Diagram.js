import DiagramBar from "./DiagramBar";
import './Diagram.css';

const Diagram = (props) => {

    const datasSetsValues = props.dataSets.map(dataSet => dataSet.value);
    const maxMonthCost = Math.max(...datasSetsValues);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => <DiagramBar
                //key={dataSet.id}
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMonthCost}
                label={dataSet.label}
            />)}
        </div>
    );
};

export default Diagram;