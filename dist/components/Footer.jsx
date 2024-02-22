// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
  <div>
  <footer className="navbar fixed-bottom bg-dark opacity-80 ">
  <div className="container-fluid">
    <a className="link-underline link-underline-opacity-0 text-white" href="https://github.com/leesoohang" target="_blank">GitHub</a>
    <a className="link-underline link-underline-opacity-0 text-white" href="https://www.linkedin.com/in/xiuheng-li/" target="_blank">LinkedIn</a>
    <a className="link-underline link-underline-opacity-0 text-white" href="./util/CV.pdf" target="_blank">CV</a>
    <a className="link-underline link-underline-opacity-0 text-white" href="mailto:li_xiuheng@hotmail.com">Email</a>
    <a className="link-underline link-underline-opacity-0 text-white" href="tel: 01610000000">Phone(placeholder)</a>
    </div>

</footer>
</div>
  );
}

export default Footer;
