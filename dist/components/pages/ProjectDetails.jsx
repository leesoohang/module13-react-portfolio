import API from "./dist/util/ProjectsAPI";

export function Project1() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[0].img} className="card-img-top" alt={API[0].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[0].title}</h5>
    <p className="card-text">{API[0].desc}</p>
    <a href={API[0].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[0].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
export function Project2() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[1].img} className="card-img-top" alt={API[1].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[1].title}</h5>
    <p className="card-text">{API[1].desc}</p>
    <a href={API[1].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[1].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
export function Project3() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[2].img} className="card-img-top" alt={API[2].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[2].title}</h5>
    <p className="card-text">{API[2].desc}</p>
    <a href={API[2].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[2].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
export function Project4() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[3].img} className="card-img-top" alt={API[3].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[3].title}</h5>
    <p className="card-text">{API[3].desc}</p>
    <a href={API[3].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[3].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
export function Project5() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[4].img} className="card-img-top" alt={API[4].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[4].title}</h5>
    <p className="card-text">{API[4].desc}</p>
    <a href={API[4].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[4].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
export function Project6() {

return (
<div>
<div className="row justify-content-center">
<div className="card col-lg-6 p-3 mb-3">
  <img src={API[5].img} className="card-img-top" alt={API[5].repo}/>
  <div className="card-body">
    <h5 className="card-title">{API[5].title}</h5>
    <p className="card-text">{API[5].desc}</p>
    <a href={API[5].deploy_url} className="card-link" target="_blank">Deployed application</a>
    <a href={API[5].repo_url} className="card-link" target="_blank">Repository</a>
    </div>
</div>
</div>
</div>
)

}
;
