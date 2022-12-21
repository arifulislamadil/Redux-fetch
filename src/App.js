import './App.css';
import Post from './components/Post';
import Counter from './components/Counter';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import BookInfo from './components/BookInfo';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/counter' element={<Counter />} />
          <Route path='/post' element={<Post />} />
          <Route path='/books' element={<Books />}>
            <Route path=':id' element={<BookInfo />} />
            <Route path='admin' element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
