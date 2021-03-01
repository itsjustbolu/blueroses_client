import React, { useState, useEffect } from "react";
import Axios from "axios";

function Status() {
  const [statusName, setStatusName] = useState("");

  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://blueroses-deploy-heroku.herokuapp.com/api/status/get"
    ).then((response) => {
      setStatusList(response.data);
    });
  }, []);

  const submitStatus = () => {
    Axios.post(
      "https://blueroses-deploy-heroku.herokuapp.com/api/status/post",
      {
        statusName: statusName,
      }
    ).then(() => {
      alert("Successfully added status");
    });
  };

  return (
    <div className="container">
      <h1>STATUSES</h1>

      <div>See List of Statuses</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Status Name</label>
          <input
            type="text"
            class="form-control"
            name="statusName"
            onChange={(e) => setStatusName(e.target.value)}
          />
        </div>

        <button onClick={submitStatus} type="submit" class="btn btn-primary">
          Add Status
        </button>
      </form>
      <br />
      <br />
      <div>
        <div>LIST OF STATUS</div>
        {statusList.map((val) => {
          return (
            <div>
              <table className="table table-striped table-hover">
                <tr>
                  <th>Status Name</th>
                </tr>

                <tr>
                  <td>{val.statusName}</td>

                  <td>
                    <input type="button" value="Update" />
                    <input type="button" value="Delete" />
                  </td>
                </tr>
              </table>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Status;
