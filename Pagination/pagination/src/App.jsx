import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [Products, setProducts] = useState([]);
  const [Page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(Products);
  if (
    (Products && Products.length == 0) ||
    Page <= 0 ||
    Page > Products.length / 5
  )
    return <div>No data found</div>;
  return (
    <div className="container">
      <div className="card">
        <span>Page: {Page}</span>
        {Products.slice(Page * 5 - 5, Page * 5).map((e, idx) => {
          return (
            <div className="y" key={idx}>
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </div>
      {
        <div className="footer">
          <span onClick={() => setPage((prev) => prev + 1)}>👉</span>

          {[...Array(Products.length / 5)].map((_, idx) => {
            return (
              <span onClick={() => setPage(idx + 1)} className="z">
                {idx + 1}
              </span>
            );
          })}
          <span onClick={() => setPage((prev) => prev - 1)}> 👈</span>
        </div>
      }
    </div>
  );
}

export default App;
