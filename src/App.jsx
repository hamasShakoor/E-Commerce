import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import { getCategories } from "./api/categories/getCategories";
import { getProducts } from "./api/products/getProducts";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategoriesCaller();
    getProductsCaller();
  }, []);

  const getCategoriesCaller = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
      setError("");
    } catch (e) {
      console.log("==============================error: ", e.message);
      setError(e.message);
      setCategories([]);
    }
  };

  useEffect(() => {}, []);

  const getProductsCaller = async () => {
    try {
      const res = await getProducts();
      setError("");
    } catch (e) {
      console.log("==============================error: ", e.message);
      setError(e.message);
      setProducts([]);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2
            className="text-3xl font-bold text-indigo-500 mb-6 text-center"
            style={{ color: error && "red" }}
          >
            {error ? error : "Browse Jobs"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {categories.map((category) => (
              <Card category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
