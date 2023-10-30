import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Reset from './components/Reset';
function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <Counter count={count} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <div>
                <Reset count={count} setCount={setCount} />
            </div>
        </div>
    );
}

export default App;
