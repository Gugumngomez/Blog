import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Write from './pages/Write';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/single/:id' element={<SinglePost />} />
        <Route path='/write' element={<Write />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
