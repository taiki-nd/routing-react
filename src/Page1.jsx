import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/page1detailA">DetailA</Link>
      <br />
      <Link to="/page1/page1detailB">DetailB</Link>
    </div>
  );
};
