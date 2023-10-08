import React, { useState } from "react";



export const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = () => {
    console.log(firstname, lastname, email, comment);
  };
  
  return (
    <div className="container my-4 py-1 border">
      <form className="mt-3 mb-2" id="contactForm" onSubmit={onSubmit}>
        <div>
          <label className="sr-only">First Name</label>
          <input
            type="text"
            name="firstname"
            className="form-control mb-2 mr-sm-3"
            placeholder="First Name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />
          {}
        </div>

        <div>
          <label className="sr-only">Last Name</label>
          <input
            type="text"
            name="lastname"
            className="form-control mb-2 mr-sm-3"
            placeholder="Last Name"
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div>
          <label className="sr-only">Email</label>
          <input
            type="text"
            name="email"
            className="form-control mb-2 mr-sm-3"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="sr-only">Comments</label>
          <textarea
            type="text"
            name="Description"
            className="form-control mb-2 mr-sm-3"
            placeholder="What would you like to say?"
            required
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-primary mb-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
