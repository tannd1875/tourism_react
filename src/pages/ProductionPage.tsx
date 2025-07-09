import Button from "../components/Button";
import Input from "../components/Input";
import BrandFilterProduct from "../features/product-filter/BrandFilterProduct";
import ClassifyFilterProduct from "../features/product-filter/ClassifyFilterProduct";
import ProductList from "../features/product-filter/ProductList";
import SortBox from "../features/product-filter/SortBox";
import WithPagination from "../hoc/withPagination";
import useFetchList from "../hooks/useFetchList";
import useQuery from "../hooks/useQuery";
import FilterBox from "../layout/FilterBox";
import ProductFilterProvider from "../store/context/ProductFilterProvider";
import { Product } from "../types/type";

const ProductionPage = () => {
  const [query, updateQuery, resetQuery] = useQuery({ page: 1, limit: 9 });
  const [productList, total] = useFetchList({
    path: "/product",
    query: query,
  });

  const handlePageChange = (newPage: number) => {
    updateQuery({ page: newPage });
  };

  return (
    <ProductFilterProvider
      query={query}
      updateQuery={updateQuery}
      resetQuery={resetQuery}
    >
      <div className="mt-28 lg:w-4/5 mx-auto w-full">
        <div className="text-xl p-12 bg-gradient-to-r from-green-300 to-emerald-500 max-sm:pt-36 relative">
          <h1 className="mb-6 font-bold text-2xl text-center">
            Tìm dụng cụ du lịch bạn cần
          </h1>
          <div className="flex justify-between items-center gap-4 rounded flex-col lg:flex-row">
            <Input
              variant="search_input"
              type="text"
              placeholder="Nhập dụng cụ cần tìm"
            />
            <Button variant="search">Tìm kiếm</Button>
          </div>
        </div>
        <div className="lg:flex gap-10 lg:items-start lg:flex-1 mt-4 max-sm:mx-2">
          <FilterBox submitFor="product">
            <ClassifyFilterProduct />
            <BrandFilterProduct />
          </FilterBox>

          <div className="w-full flex-1">
            <SortBox />
            <ProductList productList={productList as Product[]} />
          </div>
        </div>
        <WithPagination
          submitFor="product"
          totalPage={Math.ceil(total / 8)}
          onPageChange={handlePageChange}
        />
      </div>
    </ProductFilterProvider>
  );
};

export default ProductionPage;
