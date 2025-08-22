import React, { useCallback, useEffect, useMemo, useState } from "react";
import useProductSearch from "./useProductsSearch";
import featureFlags from "../utils.js/featureFlagManager";

const mockProducts = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Pixel 7" },
  { id: 4, name: "OnePlus Nord" },
];
export default function ProductList() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCart] = useState([]);

  useEffect(() => {
    console.log("featureFlags", featureFlags);
    setTimeout(() => {
      setProducts(mockProducts);
    }, 1000);
  }, []);

  const filteredProducts = useProductSearch(products, search);

  const cartCount = useMemo(() => {
    return cartItems.length;
  }, [cartItems]);

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  });

  return (
    <div>
      <h2>📱Products</h2>
      {featureFlags.isEnable("betaSearch") ? (
        <input
          placeholder="Search for products"
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        <input
          placeholder="V2: Search for products"
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <div>
        <ul>
          {filteredProducts?.map((product) => (
            <li>
              <button onClick={() => handleAddToCart(product)}>
                🛒 Add to cart
              </button>
              {product.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>🛒Cart Items: {cartCount}</h2>
        <ul>
          {cartItems?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
