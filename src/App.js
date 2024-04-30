import './App.css';
import { ContextProvider } from './Modules/Services/ContextApi/Context';
import Routing from './Router/Routing';

function App() {
  return (
    <ContextProvider>
    <div className="App">
    <Routing/>
    </div>
    </ContextProvider>
  );
}

export default App;
