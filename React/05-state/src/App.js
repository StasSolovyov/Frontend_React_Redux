import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
    return (
        <div className="App">
            <RandomNumber maxNum={10000000} />
        </div>
    );
}

export default App;
