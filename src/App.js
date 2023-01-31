
import Costs from "./components/Costs/Costs";

function App() {
    const costs = [
        {
            date: new Date(2023, 0, 29),
            description: 'Laptop',
            amount: 699.99,
        },
        {
            date: new Date(2023, 0, 30),
            description: 'Desktop',
            amount: 599.99,
        },
        {
            date: new Date(2023, 0, 31),
            description: 'iPhone',
            amount: 999.99,
        }
    ]

    return (
        <div className="App">
            <h1>my React app</h1>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
