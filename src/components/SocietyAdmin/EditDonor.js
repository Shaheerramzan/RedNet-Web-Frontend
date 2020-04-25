import React from "react";

const EditDonor = () => {
  return (
    <div>
      <div className="ui container segment">
        <div>
          <h1 className="text-center ui header">Create Donor</h1>
        </div>
        <form className="ui form">
          <div className="field">
            <h4 className="ui dividing header">Name</h4>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  value={"abc"}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  value={"abc"}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="ui dividing header" />
            <div className="two fields">
              <div className="field">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={"abc"}
                />
              </div>
              <div className="field">
                <label>Gender</label>
                <select
                  id="gender"
                  className="ui fluid dropdown-header"
                  name="gender"
                  value={"abc"}
                >
                  <option value="">Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
            </div>
          </div>
          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditDonor;
