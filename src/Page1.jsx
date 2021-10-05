import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/a">page1a</Link>
      <br />
      <Link to="/page1/b">page1b</Link>
    </div>
  );
};
