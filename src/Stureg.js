import React, { useState } from "react";
import "./studentForm.css";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    study: "",
    institution: "",
    income: "",
  });

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
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
            <label className="label-name" htmlFor="name">
              Name:
            </label>
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
            <label className="label-name" htmlFor="email">
              Email:
            </label>
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
            <label className="label-name" htmlFor="phoneNumber">
              Phone Number:
            </label>
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
            <label className="label-name" htmlFor="study">
              Education:
            </label>
            <input
              className="input"
              type="text"
              id="study"
              name="study"
              value={student.study}
              onChange={handleChange}
              placeholder="Enter your year of study"
            />
          </div>

          <div className="form-group">
            <label className="label-name" htmlFor="institution">
              Institution:
            </label>
            <input
              className="input"
              type="text"
              id="institution"
              name="institution"
              value={student.institution}
              onChange={handleChange}
              placeholder="Enter your institution"
            />
          </div>

          <div className="form-group">
            <label className="label-name" htmlFor="income">
              Father's Income:
            </label>
            <input
              className="input"
              type="number"
              id="income"
              name="income"
              value={student.income}
              onChange={handleChange}
              placeholder="Enter your father's income"
            />
          </div>
          <center>
            <button className="regbtn" type="submit">
              Register
            </button>
          </center>
        </form>
      </div>
    </div>
    </div>
  );
}

export default StudentForm;
