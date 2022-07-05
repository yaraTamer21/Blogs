
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Header from './Component/Header';
import About from './Pages/About';
import Blog from './Pages/Blog';
import EditBlog from './Pages/EditBlog';
import Home from './Pages/Home';
import NotFount from './Pages/NotFount';




function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
         
          <Header/>
          < ToastContainer/>
          <Routes>
          <Route  path='/' element={<Home/>} /> 
          <Route  path='/addblog' element={<EditBlog/>} /> 
          <Route  path='/editblog/:id' element={<EditBlog/>} /> 
          <Route  path='/blog/:id' element={<Blog/>} /> 
          <Route  path='/about' element={<About/>} />
          <Route  path='*' element={<NotFount/>} /> 


          </Routes>

        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
