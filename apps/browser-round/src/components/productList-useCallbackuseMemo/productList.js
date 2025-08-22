import React, { useCallback, useMemo, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "iPhone 15 Pro", price: 1200 },
  { id: 2, name: "Galaxy S23", price: 1000 },
  { id: 3, name: "Pixel 8 Pro", price: 950 },
  { id: 4, name: "Nothing Phone 2", price: 700 },
];

function ProductListV2() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return PRODUCTS.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => {
      return [...prev, product];
    });
    console.log(`Added ${product.name} to cart`);
  }, []);
  return (
    <div>
      <h2>🛍 Product List</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>

      <h3>🛒 Cart Items: {cart.length}</h3>
    </div>
  );
}

const ProductCard = ({ product, onAddToCart }) => {
  console.log(`Rendering: ${product.name}`);
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default ProductListV2;
