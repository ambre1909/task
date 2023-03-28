import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from './pages/AddTask'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import AddProject from './pages/AddProject'
import DisplayTodos from './pages/DisplayTodos'


function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}   ></Route>
        <Route path='/add-task' element={<AddTask></AddTask>}   ></Route>
        <Route path='/add-project' element={<AddProject></AddProject>}   ></Route>
        <Route path='/todos' element={<DisplayTodos></DisplayTodos>}   ></Route>

        {/* <Route path='*' element={<PageNotFound></PageNotFound>}   ></Route> */}


      </Routes>
    </BrowserRouter>
  </>
}

export default App
