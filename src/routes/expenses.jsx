import { Link } from "react-router-dom";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <div>
        <Link to="/">戻るよ</Link>
      </div>
    </main>
  );
}
