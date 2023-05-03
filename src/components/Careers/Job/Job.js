import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Job.css'
function Job({index,id,responsibilities,qualifications,setIndex,job_description}) {
  const history = useNavigate();

  const handleProceed = (e) => {
    setIndex(id)
    history(`/Careers/${id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="Card_container" key={id}>
      <div className="Card_title">
          <h1>{job_description}</h1>
          <button className='Card_button' onClick={handleProceed}> Apply</button>
      </div>
      <div className="Card_heading">
      <h3>Responsibilities : </h3>
      <ul><li>{responsibilities[0]}</li></ul>
     
      <h3>Qualification : </h3>
      <ul><li>{qualifications[0]} </li></ul>
      </div>
      </div>
  
   
    </>
  )
}

export default Job