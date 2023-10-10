import { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Links from './components/Links'
import Post from './components/Post'
import { BrowserRouter, Routes, Route } from "react-router-dom";

Chart.register(CategoryScale);

function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  },[])


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Post />} />
        <Route path="links" element={<Links />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
