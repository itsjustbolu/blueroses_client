import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div class="container">
        <h1>WELCOME TO BLUEROSES RESTAURANT</h1>

        <p>Great Food, Amazing Ambience.</p>

        <p>
          Please navigate the portions of the website using the navbar or links
          below
        </p>

        <ul>
          <li>
            <a href="/place-order">Place an order</a>
          </li>
          {/* <li>
            <a href="orderstatus.html">Get order status</a>
          </li>
          <li>
            <a href="orderdetails.html">Get order details</a>
          </li> */}
          <li>
            <a href="/customers">Add a customer</a>
          </li>
          <li>
            <a href="/suppliers">Add a supplier</a>
          </li>
          <li>
            <a href="employees">Add an employee</a>
          </li>
          <li>
            <a href="/menu">View the menu or add items to menu</a>
          </li>
          <li>
            <a href="/payments">Update or delete payment information</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
