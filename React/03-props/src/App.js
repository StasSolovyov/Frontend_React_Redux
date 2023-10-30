import './App.css';
import PetInfo from './components/PetInfo';
function App() {
    return (
        <div className="App">
            <PetInfo animal="Cat" age={4} />
        </div>
    );
}

export default App;
