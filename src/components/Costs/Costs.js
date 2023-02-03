import Card from "../UI/Card";
import CostItem from "./CostItem";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import { useState } from "react";

const Costs = ({ costs }) => {

    const currentYear = new Date().getFullYear().toString();
    console.log(currentYear);
    console.log(typeof currentYear);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        //console.log(year);
    };

    return (
        <>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                <CostItem cost={costs[0]} />
                <CostItem cost={costs[1]} />
                <CostItem cost={costs[2]} />
            </Card >
        </>
    )
}

export default Costs;