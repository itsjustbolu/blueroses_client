import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

export function Payments() {
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [paymentsList, setPaymentsList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-deploy-heroku.herokuapp.com/api/payments/get").then((response) => {
      setPaymentsList(response.data);
    });
  }, []);

  const submitPayment = () => {
    Axios.post("https://blueroses-deploy-heroku.herokuapp.com/api/customers/post", {
      cardNumber: cardNumber,
      expMonth: expMonth,
      expYear: expYear,
      securityCode: securityCode,
    }).then(() => {
      alert("Successfully added payment");
    });
  };

  return (
    <div className="container">
      <h1>PAYMENTS</h1>

      <div>Add Payment Method</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Card Number</label>
          <input
            type="text"
            class="form-control"
            name="cardNumber"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Exp Month</label>
          <input
            type="number"
            class="form-control"
            name="expMonth"
            onChange={(e) => setExpMonth(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Exp year</label>
          <input
            type="number"
            class="form-control"
            name="expYear"
            onChange={(e) => setExpYear(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Security Code</label>
          <input
            type="number"
            class="form-control"
            name="securityCode"
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>

        <button onClick={submitPayment} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
        <br />
        <div>See Customers Payment Methods</div>
        {paymentsList.map((val) => {
          return (
            <table>
              <tr>
                <th>Card Number</th>
                <th>Exp Month</th>
                <th>Exp Year</th>
                <th>Security Code</th>
              </tr>

              <tr>
                <td>{val.cardNumber}</td>
                <td>{val.expMonth}</td>
                <td>{val.expYear}</td>
                <td>{val.securityCode}</td>
                <td>
                  <input type="button" value="Update" />
                  <input type="button" value="Delete" />
                </td>
              </tr>
              <br />
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default Payments;
