import Notes from './components/Notes';
import Add from './components/Add';
import Update from './components/Update';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes/>} />
            <Route path="/add" element={<Add/>} />
            <Route path="/update/:id" element={<Update/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
