import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Url Parameter</h1>
      <p>パラメパラメーターは{id}</p>
    </div>
  );
};
