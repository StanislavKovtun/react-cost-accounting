import Card from "../UI/Card";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";

const Costs = ({ costs }) => {

    const currentYear = new Date().getFullYear().toString();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = selectedYear === 'all' ? costs : costs.filter((cost) => cost.date.getFullYear().toString() === selectedYear)

    //let costsContent = <p>No costs this year</p>;

    //if (filteredCosts.length > 0) {
    //    costsContent = filteredCosts.map((cost) =>
    //        <CostItem
    //            key={cost.id}
    //            cost={cost} />)
    //};

    return (
        <>
            <Card className="costs">
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} />

                {/*{filteredCosts.length === 0 ? <p>No costs this year</p> : filteredCosts.map((cost) =>
                    <CostItem
                        key={cost.id}
                        cost={cost} />)}*/}

                {/*{filteredCosts.length === 0 && <p>No costs this year</p>}*/}
                <CostList costs={filteredCosts} />

            </Card >
        </>
    )
}

export default Costs;