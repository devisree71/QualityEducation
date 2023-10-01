import React from 'react'
import './career.css'
function Career() {
  return (
    <div className="pic" >
      <h1 className='ff'>Carrer Guidance</h1>
      <div className="flex">
        <img src="https://media.istockphoto.com/id/909025844/photo/help-support-advice-guidance-assistance-and-info-crossroad-signpost.jpg?s=612x612&w=0&k=20&c=Y_n8DSlXLhGIOIpeg6EgyPTB_-OnbqYvVN5tf9i5qHE="  className='yu'/>
        <div className="box">
          <h2>Speak to a Mentor</h2>
          <img
            className="inimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcjcIB06bQRR-951ISNz8JItn8XixnOeWdQ&usqp=CAU"
          ></img>
          <p>
            <a href="#" class="link" className='iu'>
              Call Now <i class="phone icon"></i>
            </a>
          </p>
        </div>
        <div className="box">
          <h2>Text to a Mentor</h2>
          <img
            className="inimg"
            src="https://www.mentoring.org/wp-content/uploads/2022/09/VMP-email-graphic-768x562.png"
          ></img>
          <p>
            <a href="#" class="link" className='iu'>
              Text Now <i class="comment alternate icon"></i>
            </a>
          </p>
        </div>
      </div>
      <div><p className="quote">“If opportunity doesn't knock, build a door.”</p></div>
    </div>
  );
}
export default Career;