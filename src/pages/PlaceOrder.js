import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import CustomerSearch from "../components/CustomerSearch";

export function PlaceOrder() {
  const [customer, setCustomer] = useState("");
  const [itemOne, setItemOne] = useState("");
  const [itemOneQuantity, setItemOneQuantity] = useState("");
  const [itemTwo, setItemTwo] = useState("");
  const [itemTwoQuantity, setItemTwoQuantity] = useState("");
  const [itemThree, setItemThree] = useState("");
  const [itemThreeQuantity, setItemThreeQuantity] = useState("");
  const [orderDateTime, setOrderDateTime] = useState("");
  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");

  const [customerList, setCustomerList] = useState([]);
  const [menuItemList, setMenuItemsList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [paymentList, setPaymentList] = useState([])

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://blueroses-deploy-heroku.herokuapp.com/api/customers/get"
    ).then((response) => {
      setCustomerList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://blueroses-deploy-heroku.herokuapp.com/api/menuitems/get"
    ).then((response) => {
      setMenuItemsList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://blueroses-deploy-heroku.herokuapp.com/api/status/get"
    ).then((response) => {
      setStatusList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://blueroses-deploy-heroku.herokuapp.com/api/employees/get"
    ).then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("").then((response) => {
      setOrdersList(response.data);
    });
  }, []);

  const submitOrder = () => {
    Axios.post("", {
      customer: customer,
      itemOne: itemOne,
      itemOneQuantity: itemOneQuantity,
      itemTwo: itemTwo,
      itemTwoQuantity: itemTwoQuantity,
      itemThree: itemThree,
      itemThreeQuantity: itemThreeQuantity,
      orderDateTime: orderDateTime,
      payment: payment,
      status: status,
      employee: employee,
    }).then(() => {
      alert("successfully placed order");
    });
  };


  return (
    <div className="container">
      <h1>PLACE AN ORDER</h1>
      <div>
        <div>Add a new order for customer</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">Select a customer</label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="customer"
              onChange={(e) => setCustomer(e.target.value)}
            >
              {customerList.map((val) => {
                return (
                  <option value={val.customerId}>
                    {val.firstName} {val.lastName}
                  </option>
                );
              })}
            </select>
            {/* <div>
            {customerList.map((val) => {
                return <div>{val.firstName} {val.lastName}</div>
              })}
            </div> */}
          </div>

          <div className="mb-3">
            <label className="form-label">First Item</label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="itemOne"
              onChange={(e) => setItemOne(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">First Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemOneQuantity"
              onChange={(e) => setItemOneQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">2nd Item</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="itemTwo"
              onChange={(e) => setItemTwo(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">2nd Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemTwoQuantity"
              onChange={(e) => setItemTwoQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">3rd Item</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="itemThree"
              onChange={(e) => setItemThree(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">3rd Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemThreeQuantity"
              onChange={(e) => setItemThreeQuantity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Order Date + Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="orderDateTime"
              onChange={(e) => setOrderDateTime(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Payments</label>
            <input
              type="number"
              className="form-control"
              name="orderDateTime"
              onChange={(e) => setOrderDateTime(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              {statusList.map((val) => {
                return <option value={val.statusId}>{val.statusName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Employee</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="employee"
              onChange={(e) => setEmployee(e.target.value)}
            >
              {employeeList.map((val) => {
                return (
                  <option value={val.employeeId}>
                    {val.employeeFirstName} {val.employeeLastName}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            onClick={submitOrder}
            type="submit"
            className="btn btn-primary"
          >
            Place Order
          </button>
        </form>

        <br />
        <br />
        <h2>List of Orders</h2>
        {ordersList.map((val) => {
          return (
            <div>
              <table className="table table-striped table-hover">
                <tr>
                  <th>Customer</th>
                  <th>1st Item</th>
                  <th>1st Item Qty</th>
                  <th>2nd Item</th>
                  <th>2nd Item Qty</th>
                  <th>3rd Item</th>
                  <th>3rd Item Qty</th>
                  <th>Order Date & Time</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
                <tr>
                  {/* <td>{val.employeeFirstName}</td>
                  <td>{val.employeeLastName}</td>
                  <td>{val.employeePhoneNumber}</td>
                  <td>{val.employeeEmailAddress}</td>
                  <td>{val.employeeTitle}</td>
                  <td>{val.employeeStartDate}</td> */}
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

export default PlaceOrder;
