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
            <a href="orders.html">Place an order</a>
          </li>
          <li>
            <a href="orderstatus.html">Get order status</a>
          </li>
          <li>
            <a href="orderdetails.html">Get order details</a>
          </li>
          <li>
            <a href="customers.html">Add a customer</a>
          </li>
          <li>
            <a href="suppliers.html">Add a supplier</a>
          </li>
          <li>
            <a href="suppliers.html">Add an employee</a>
          </li>
          <li>
            <a href="menu.html">View the menu or add items to menu</a>
          </li>
          <li>
            <a href="payments.html">Update or delete payment information</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
