import React, { useEffect, useState } from "react";

export default function SearchFilter() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>            
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          </tr>
          {
            data.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
