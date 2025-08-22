import { useMemo } from "react";

export default function useProductSearch(products, search) {
  return useMemo(() => {
    if (!search) return;
    return products.filter((product) => product.name.includes(search));
  }, [products, search]);
}
