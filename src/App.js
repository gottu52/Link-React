import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1a } from "./Page1a";
import { Page1b } from "./page1b";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
    </BrowserRouter>
  );
}
