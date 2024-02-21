import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import API from './util/ProjectsAPI';
import {Project1, Project2, Project3, Project4, Project5, Project6 } from './components/pages/ProjectDetails';

function App() {
  return (

  <Router>
  <Routes>
  
  <Route path='/' element={<Home />} />
  <Route path="/projects" element={<Projects />} > 
    <Route path={API[0].title} element={<Project1 />} />
    <Route path={API[1].title} element={<Project2 />} />
    <Route path={API[2].title} element={<Project3 />} />
    <Route path={API[3].title} element={<Project4 />} />
    <Route path={API[4].title} element={<Project5 />} />
    <Route path={API[5].title} element={<Project6 />} />
  </Route>
  <Route path="/contact" element={<Contact />} />

</Routes>
    </Router>
  )
}

export default App;
