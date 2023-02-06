import "./CostsFilter.css";

const CostsFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    const arrayOfYears = props.costs.map(cost => cost.date.getFullYear().toString());
    console.log(arrayOfYears);
    console.log([...new Set(arrayOfYears)]);

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Select a year</label>
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value="all">All</option>
                    {[...new Set(arrayOfYears)].map(year => {
                        return <option key={year} value={year}>{year}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
