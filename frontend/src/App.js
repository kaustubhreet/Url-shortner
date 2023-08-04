import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Output from './output';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/output" element={<Output/>}/>
</Routes>
</BrowserRouter>
    
  )
}

export default App;