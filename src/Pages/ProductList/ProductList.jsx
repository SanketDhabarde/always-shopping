import React, { useState, useEffect } from "react";
import { Nav, Filter, ProductCard, Spinner } from "../../Components";
import "./ProductList.css";
import { useProductFilter } from "../../Context/product-filter";
import {
  filterProducts,
  sortProducts,
  rateProducts,
  priceFilter,
} from "../../utils";
import { useDataFetch } from "../../Hooks";

function ProductList() {
  const { state } = useProductFilter();
  const { categories, sortBy, rating, price, includeOutOfStock, fastDelivery } =
    state;
  const [{ data, isLoading, isError }, setUrl] = useDataFetch(
    "/api/products",
    []
  );
  const { products } = data;

  const pricedFiltered = priceFilter(products, price);
  const filteredProducts = filterProducts(
    pricedFiltered,
    categories,
    includeOutOfStock,
    fastDelivery
  );
  const ratedProducts = rateProducts(filteredProducts, rating);
  const sortedProducts = sortProducts(ratedProducts, sortBy);

  return (
    <div className="px-1">
      <Nav />
      <div className="content">
        <div className="content-section grid-1-5-col">
          <Filter />
          <div className="content">
            <main className="p-3">
              <div className="heading p-2 flex center-div">
                <h3>Showing All Products</h3>
                <small className="px-2">
                  (showing {sortedProducts.length} products)
                </small>
              </div>

              <div className="product-list">
                {!isLoading && !isError && sortedProducts.length === 0 && (
                  <p>No products matching the filter😔</p>
                )}
                {isError && <div>Something went wrong 😣</div>}
                {isLoading ? (
                  <Spinner />
                ) : (
                  sortedProducts?.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
