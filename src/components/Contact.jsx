import React, {  useState } from "react";

export const Contact = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    if (!value?.firstname) {
      setError((error) => ({
        ...error,
        firstname: 'Please enter firstname',
      }));
    }
    if (!value?.lastname) {
      setError((error) => ({
        ...error,
        lastname: 'Please enter lastname'
      }));
    }
    if (!value?.email) {
      setError((error) => ({
        ...error,
        email: 'Please enter email'
      }));
    }
    if (!value?.comment) {
      setError((error) => ({
        ...error,
        comment: 'Please enter comment'
      }));
    }
  };

  const changeEvent = (e) => {
    setValue(
      {
        ...value,
        [e.target.name]: e.target.value,
      },
    );
    if (e?.target?.name === "firstname") {
      setError({
        firstname: "",
      });
    }
    if (e?.target?.name === "lastname") {
      setError({
        lastname: ""
      });
    }
    if (e?.target?.name === "email") {
      setError({
        email: ""
      });
    }
    if (e?.target?.name === "comment") {
      setError({
        lastname: ""
      });
    }
  };

  return (
    <div className="container my-4 py-1 border">
      <form className="mt-3 mb-2" id="contactForm" onSubmit={onSubmit}>
        <div>
          <label for="FirstName" className="sr-only mb-2 mr-sm-3">First Name</label>
          <input
            id="FirstName"
            type="text"
            name="firstname"
            className="form-control mb-2 mr-sm-3"
            placeholder="First Name"
            onChange={(e) => changeEvent(e)}
          />
          <span className="text-danger">{error?.firstname}</span>
        </div>

        <div>
          <label for="LastName" className="sr-only mb-2 mr-sm-3">Last Name</label>
          <input
            id="LastName"
            type="text"
            name="lastname"
            className="form-control mb-2 mr-sm-3"
            placeholder="Last Name"
            onChange={(e) => changeEvent(e)}
          />
          <span className="text-danger">{error?.lastname}</span>
        </div>

        <div>
          <label for="Email" className="sr-only mb-2 mr-sm-3">Email</label>
          <input
            id="Email"
            type="text"
            name="email"
            className="form-control mb-2 mr-sm-3"
            placeholder="Email"
            onChange={(e) => changeEvent(e)}
          />
          <span className="text-danger">{error?.email}</span>
        </div>

        <div>
          <label className="sr-only">Comments</label>
          <textarea
            id="Comments"
            type="text"
            name="comment"
            className="form-control mb-2 mr-sm-3"
            placeholder="What would you like to say?"
            onChange={(e) => changeEvent(e)}
          />
          <span className="text-danger">{error?.comment}</span>
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
