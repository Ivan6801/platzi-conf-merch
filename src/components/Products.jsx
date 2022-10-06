import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import Product from './Product';
import Search from './Search';
import '../styles/components/Products.scss';

export default function Products({ products }) {
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

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
      <div className="Products-items">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
