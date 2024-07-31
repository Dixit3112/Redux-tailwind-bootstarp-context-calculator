import { useEffect } from "react";

function usePaginationEffect(
  currentPage,
  limitPerPage,
  setProducts,
  setTotalPages
) {
  useEffect(() => {
    const offset = (currentPage - 1) * limitPerPage;
    fetch(`https://dummyjson.com/products?limit=${limitPerPage}&skip=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limitPerPage));
      });
  }, [currentPage, limitPerPage, setProducts, setTotalPages]);
}

export default usePaginationEffect;
