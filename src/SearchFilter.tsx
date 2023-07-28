import React, { useEffect, useState } from "react";

export default function SearchFilter() {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ email: "No Data Found" }]);
      }
    }

    setFilterVal(e.target.value);
  };

  return (
    <div className="p-2 px-8">
      <div className="w-full">
        <input
          placeholder="Search"
          type="search"
          value={filterVal}
          onInput={(e) => handleFilter(e)}
          className="border outline-2 outline-orange-400 p-2 w-2/3"
        />
      </div>
      <table className="w-full p-2">
        <tbody>
          <tr className="text-left border-b-4 border-cyan-400 mb-2">
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {data.map((item) => {
            return (
              <tr className="border-b border-cyan-400 mt-8">
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
