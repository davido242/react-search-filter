"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SearchFilter_1 = __importDefault(require("/SearchFilter"));
function App() {
    return (<div className="App">
      <h2 className="flex justify-center bg-gray-400 py-4 font-bold text-3xl">Search Filter</h2>
      <SearchFilter_1.default />
    </div>);
}
exports.default = App;
