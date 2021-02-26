import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

export function Customers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/customers/get").then((response) => {
      setCustomerList(response.data);
    });
  }, []);

  const submitCustomer = () => {
    Axios.post("http://localhost:3001/api/customers/post", {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      email: email,
    }).then(() => {
      alert("Successfully added customer");
    });
  };

  return (
    <div className="container">
      <h1>CUSTOMERS</h1>

      <div>
        <div>Add a New Customer</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="lastName">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Zip</label>
            <input
              type="number"
              className="form-control"
              name="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* <div>Add your payment method below</div>
            <p></p>

            <div className="mb-3">
              <label for="cardNumber" className="form-label">
                Card Number
              </label>
              <input type="number" className="form-control" id="cardNumber" />
            </div>

            <div className="mb-3">
              <label for="expMonth" className="form-label">
                Exp Month
              </label>
              <input type="number" className="form-control" id="expMonth" />
            </div>

            <div className="mb-3">
              <label for="expYear" className="form-label">
                Exp Year
              </label>
              <input type="number" className="form-control" id="expYear" />
            </div>

            <div className="mb-3">
              <label for="securityCode" className="form-label">
                Security Code
              </label>
              <input type="number" className="form-control" id="securityCode" />
            </div> */}

          <button
            onClick={submitCustomer}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <br />
        <br />
        <h2>List of Customers</h2>
        {customerList.map((val) => {
          return (
            <div>
              <table className="table table-striped table-hover">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.address}</td>
                  <td>{val.city}</td>
                  <td>{val.state}</td>
                  <td>{val.zipCode}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.email}</td>
                  <td>
                    <input type="button" value="Update" />
                    <input type="button" value="Delete" />
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
