import React, { useState, useEffect } from "react";
import Axios from "axios";

function Suppliers() {
  const [supplierName, setSupplierName] = useState("");
  const [supplierPhoneNumber, setSupplierPhoneNumber] = useState("");
  const [quantity, setQuantity] = useState("");

  const [suppliersList, setSuppliersList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-deploy-heroku.herokuapp.com/api/suppliers/get").then((response) => {
      setSuppliersList(response.data);
    });
  }, []);

  const submitSuppliers = () => {
    Axios.post("https://blueroses-deploy-heroku.herokuapp.com/api/suppliers/post", {
      supplierName: supplierName,
      supplierPhoneNumber: supplierPhoneNumber,
      quantity: quantity,
    }).then(() => {
      alert("Successfully added menu item");
    });
  };

  return (
    <div className="container">
      <h1>SUPPLIERS</h1>

      <div>See List of Suppliers</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Supplier Name</label>
          <input
            type="text"
            class="form-control"
            name="supplierName"
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Supplier Phone Number</label>
          <input
            type="number"
            class="form-control"
            name="supplierPhoneNumber"
            onChange={(e) => setSupplierPhoneNumber(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Quantity</label>
          <input
            type="number"
            class="form-control"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button onClick={submitSuppliers} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
        <div>See what's in stock</div>
        {suppliersList.map((val) => {
          return (
            <table>
              <tr>
                <th>Supplier Name</th>
                <th>Supplier Phone Number</th>
                <th>Quantity</th>
              </tr>

              <tr>
                <td>{val.supplierName}</td>
                <td>{val.supplierPhoneNumber}</td>
                <td>{val.quantity}</td>
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

export default Suppliers;
