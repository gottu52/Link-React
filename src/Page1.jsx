import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const history = useHistory();
  console.log(history);
  const onClickToA = () => history.push("/page1/a");
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/a">page1a</Link>
      <br />
      <Link to="/page1/b">page1b</Link>
      <br />
      <button onClick={onClickToA}>a</button>
    </div>
  );
};
