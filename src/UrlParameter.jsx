import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>Url Parameter</h1>
      <p>パラメパラメーターは{id}</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </div>
  );
};
