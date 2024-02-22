// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Home() {

  const homeStyle = {
    backgroundImage: "url('/assets/background.jpg')",
    minHeight: 1000,
  }
  ;
  return (
<div>
<Navbar />
<div className="p-5 mb-7 bg-body-tertiary rounded-3 " style={homeStyle}>
      <div className="container-fluid py-5" >
      <img src="/src/assets/profile.jpg" className="rounded-circle float-end" height={300} alt="profile-picture"/>
      <h1 className="display-5 fw-bold">Hello! My name is Soo. </h1>

      <p className="col-md-8 fs-4 bg-light-subtle bg-opacity-25" >I am an accomplished professional with over 9 years of experience in the education industry from China and the UK. </p>
      <p className="col-md-8 fs-4 bg-light-subtle bg-opacity-25">Currently working in Higher Education to provide advanced technical and administrative support in the maintenance and development of student systems. Motivated and highly-organised individual with a comprehensive ability to streamline administrative processes, work to demanding deadlines, and communicate effectively with people of different cultures.</p>
      <p className="col-md-8 fs-4 bg-light-subtle bg-opacity-25">Welcome to my page! Please have a look at the projects I have done so far!</p>
      </div>
    </div>
<Footer />
</div>
);
}

export default Home;
