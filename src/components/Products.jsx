import React, { useState, useMemo, useRef, useCallback, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Product from './Product';
import Search from './Search';
import '../styles/components/Products.scss';

export default function Products() {
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const { state: { products }, addToCart } = useContext(AppContext);

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  return (
    <div className="Products">
      <Search
        search={search}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />
      {products && search.length >= 12 && (
        <center>
          <p style={{ color: 'red', fontWeight: 'bold' }}>No hay productos</p>
          <span>👀🛒📦</span>
        </center>
      )}
      <div className="Products-items">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
