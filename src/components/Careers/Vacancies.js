import React,{useEffect} from 'react'
import "./Careers.css"
import Description from './Description/Description'
import {Link} from 'react-router-dom'
function Vacancies({index,data}) {
  // console.log(index,data[index])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="star">
        <div className="job_container">
  
          
  <div className="job" key={index}>
    
      <div className="job_apply">
        <div className="job_title">
          <h1>
            {data[index].job_description}
          </h1>
        </div>
        <div className="apply_button">
          <Link to="/apply">
            <button >Apply</button>
          </Link>
        </div>
      </div>

    

    <Description
      title="Responsibilities"
      requirement={data[index].responsibilities}
    />
    <Description title="Qualifications" requirement={data[index].qualifications} />
    <Description title="Requirements" requirement={data[index].requirement} />
  </div>


</div>
    </div>
    
  )
}

export default Vacancies