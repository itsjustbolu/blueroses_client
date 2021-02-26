import React, { useState, useEffect } from "react";
import Axios from "axios";

function Menu() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [currentStock, setCurrentStock] = useState("");

  const [menuItemsList, setMenuItemsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/menuitems/get").then((response) => {
      setMenuItemsList(response.data);
    });
  }, []);

  const submitMenuItems = () => {
    Axios.post("http://localhost:3001/api/menuitems/post", {
      itemName: itemName,
      itemPrice: itemPrice,
      currentStock: currentStock,
    }).then(() => {
      alert("Successfully added menu item");
    });
  };
  return (
    <div className="container">
      <h1>MENU</h1>

      <div>Add items to menu</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Item Name</label>
          <input
            type="text"
            class="form-control"
            name="itemName"
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Item Price</label>
          <input
            type="number"
            class="form-control"
            name="itemPrice"
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Current Stock</label>
          <input
            type="number"
            class="form-control"
            name="currentStock"
            onChange={(e) => setCurrentStock(e.target.value)}
          />
        </div>

        <button onClick={submitMenuItems} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
        <div>See what's in stock</div>
        {menuItemsList.map((val) => {
          return (
            <table>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>

              <tr>
                <td>{val.itemName}</td>
                <td>{val.itemPrice}</td>
                <td>{val.currentStock}</td>
                <td>
                  <input type="button" value="Refresh" />
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

export default Menu;
