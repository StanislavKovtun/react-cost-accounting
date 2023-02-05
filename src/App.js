
import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2023, 0, 29),
        description: 'Laptop',
        amount: 699.99,
    },
    {
        id: 'c2',
        date: new Date(2023, 0, 30),
        description: 'Desktop',
        amount: 599.99,
    },
    {
        id: 'c3',
        date: new Date(2023, 0, 31),
        description: 'iPhone',
        amount: 999.99,
    }
];

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (newItem) => {

        // +previous state!!!
        setCosts(prevCosts => {
            return [...prevCosts, newItem];
        });

    };

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
}

export default App;
