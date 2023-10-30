import './App.css';
import PetInfo from './components/PetInfo';
function App() {
    return (
        <div className="App">
            <PetInfo animal="Cat" age={4} hasPet={false} />
            <PetInfo animal="Dog" age={3} hasPet={true} />
        </div>
    );
}

export default App;
