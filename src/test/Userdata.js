import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Userdata.css";
import FormData from "./FormData";

function Userdata() {
  const url = "https://reqres.in/api/users";
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      const userdata = res.data.data;
      console.log("userdata1", userdata);
      setusers(userdata);
    });
  }, []);
  // console.log(users[0].email);

  return (
    <>
      <div>
        <table className="table-data">
          <thead>
            <tr className="table-row">
              <th>image</th>
              <th>id</th>
              <th colSpan="2">Full name</th>
              <th>email Id</th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele, ind) => {
              return (
                <tr className="table-row" key={ind}>
                  <td>
                    <img src={ele.avatar} alt="no image" />
                  </td>
                  <td>{ele.id}</td>
                  <td colSpan="2">
                    {ele.first_name} {ele.last_name}
                  </td>
                  <td>{ele.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <FormData />
    </>
  );
}

export default Userdata;
