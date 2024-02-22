import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./dist/util/ProjectsAPI";

function Projects() {
	const projectStyle = {
		backgroundImage: "url('./dist/assets/project.jpg')",
		minHeight: 1000,
		color: "white",
		backgroundPosition: "center",
		textAlign: "center"
	};


return (
<div>
<Navbar />
<div style={projectStyle}>
<h1 style={{ paddingTop: 90 }}>My Projects</h1>
<h5>Please click for more information: </h5>

<Outlet />

<div className="container-fluid py-5">
	<div className="row">
<div className="card-group">
  <Link to={API[0].title} className="card p-2 m-2 bg-dark text-white">
    <img src={API[0].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[0].repo}/>
    <div className="card-body">
      <h5 className="card-title">{API[0].title}</h5>
    </div>
  </Link>
  <Link to={API[1].title} className="card p-2 m-2 bg-dark text-white">
    <img src={API[1].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[1].repo} />
    <div className="card-body">
      <h5 className="card-title">{API[1].title}</h5>
    </div>
 
  </Link>
  <Link to={API[2].title} className="card p-2 m-2 bg-dark text-white">
      <img src={API[2].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[2].repo} />
    <div className="card-body">
      <h5 className="card-title">{API[2].title}</h5>
 </div>
  </Link>
   </div>
</div>
<div className="row">
<div className="card-group">
  <Link to={API[3].title} className="card p-2 m-2 bg-dark text-white">
      <img src={API[3].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[3].repo} />
    <div className="card-body">
      <h5 className="card-title">{API[3].title}</h5>
</div>
  </Link>
  <Link to={API[4].title} className="card p-2 m-2 bg-dark text-white">
      <img src={API[4].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[4].repo} />
    <div className="card-body">
      <h5 className="card-title">{API[4].title}</h5>
 </div>
  </Link>
  <Link to={API[5].title} className="card p-2 m-2 bg-dark text-white">
      <img src={API[5].img} className="card-img-top" style={{maxHeight: 400, position: top}} alt={API[5].repo} />
    <div className="card-body">
      <h5 className="card-title">{API[5].title}</h5>
 </div>
  </Link>
</div>
</div>
</div>
</div>

<Footer />
</div>
	);
}

export default Projects;
