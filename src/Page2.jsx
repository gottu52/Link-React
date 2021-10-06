import { Link } from "react-router-dom";

export const Page2 = () => {
  const arr = [...Array(10).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page2</h1>
      <Link to={{ pathname: "/page2/52?name=tapioka", state: arr }}>
        URLpara
      </Link>
    </div>
  );
};
