import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>Page404</h1>
      <p>ページが見つかりません</p>
      <Link to="/">top</Link>
    </div>
  );
};
