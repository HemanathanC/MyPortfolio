import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Studies from './components/Studies'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contacts'
import MoreWorks from './components/MoreWorks'

function App() {

  const [tabs,setTabs] = useState(1);

  const tabHandler = (id) =>{
    setTabs(id);
  }

  return (
    <HashRouter>
    <Routes>
      <Route exact path='/' element={
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <h1 class="navbar-brand">Hemanathan</h1>
        <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
          <a class="nav-link" onClick={()=>tabHandler(1)}>HOME</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" onClick={()=>tabHandler(2)}>STUDIES</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" onClick={()=>tabHandler(3)}>SKILLS</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" onClick={()=>tabHandler(4)}>WORKS</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" onClick={()=>tabHandler(5)}>CONTACT</a>
          </li>
        </ul>
        </div>
			</nav>
      <div className='tabContent'>
        {(()=>{
          switch(tabs){
            case 1: return <Home/>
            case 2: return <Studies/>
            case 3: return <Skills/>
            case 4: return <Works/>
            case 5: return <Contact/>
          }
        })()}
      </div>
    </div>}>
      </Route>
      <Route exact path='/moreWorks' element={<MoreWorks/>}></Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
