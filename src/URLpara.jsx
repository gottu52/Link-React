import { useParams, useLocation } from "react-router-dom";

export const URLpara = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>URLpara</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
