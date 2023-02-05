import Card from "../UI/Card";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostsDiagram";

const Costs = ({ costs }) => {

    const currentYear = new Date().getFullYear().toString();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = selectedYear === 'all' ? costs : costs.filter((cost) => cost.date.getFullYear().toString() === selectedYear)

    return (
        <>
            <Card className="costs">
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} />
                <CostDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts} />

            </Card >
        </>
    )
}

export default Costs;