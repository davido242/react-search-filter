"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function SearchFilter() {
    const [data, setData] = (0, react_1.useState)([]);
    const [searchApiData, setSearchApiData] = (0, react_1.useState)([]);
    const [filterVal, setFilterVal] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
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
        }
        else {
            const filterResult = searchApiData.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.username.toLowerCase().includes(e.target.value.toLowerCase()));
            if (filterResult.length > 0) {
                setData(filterResult);
            }
            else {
                setData([{ email: "No Data Found" }]);
            }
        }
        setFilterVal(e.target.value);
    };
    return (<div className="p-2 px-8">
      <div className="w-full">
        <input placeholder="Search" value={filterVal} onInput={(e) => handleFilter(e)} className="border outline-2 outline-orange-400 p-2"/>
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
            return (<tr className="border-b border-cyan-400 mt-8">
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>);
        })}
        </tbody>
      </table>
    </div>);
}
exports.default = SearchFilter;
