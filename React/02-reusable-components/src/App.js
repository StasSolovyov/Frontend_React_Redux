import './App.css';
import OtherComponent from './components/OtherComponent';
import MyComponent from './components/MyComponent';
function App() {
    return (
        <div className="App">
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <OtherComponent />
            <MyComponent />
        </div>
    );
}

export default App;
