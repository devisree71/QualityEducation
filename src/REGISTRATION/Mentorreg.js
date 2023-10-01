import React, { useState } from "react";
import "./studentForm.css";

function Mentor() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    graduation: "",
    experience: ""
  });

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(student);
  };

  return (
    <div
    className="body"
    style={{
      backgroundImage: `url("https://e1.pxfuel.com/desktop-wallpaper/217/938/desktop-wallpaper-reading-books-backgrounds.jpg")`,
    }}
  >
      <div className="rbody">
      <div className="stucard">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Sign up</h2>
          <div className="form-group">
            <label className="label-name" htmlFor="name">Name:</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label  className="label-name" htmlFor="email">Email:</label>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="label-name" htmlFor="phoneNumber">Phone Number:</label>
            <input
              className="input"
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label className="label-name" htmlFor="study">Graduation:</label>
            <input
              className="input"
              type="text"
              id="graduation"
              name="graduation"
              value={student.graduation}
              onChange={handleChange}
              placeholder="Graduation"
            />
          </div>
          <div className="form-group">
            <label className="label-name" htmlFor="study">Experience:</label>
            <input
              className="input"
              type="text"
              id="experience"
              name="experience"
              value={student.experience}
              onChange={handleChange}
              placeholder="Experience"
            />
          </div>
          <center>
            <button
              className="regbtn"
              type="submit"
            >
              Register
            </button>
          </center>
        </form>
      </div>
    </div>
</div>
  );
}

export default Mentor;
