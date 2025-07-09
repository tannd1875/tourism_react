import { useContext } from "react";
import {
  DirectionFilterContext,
  ProductFilterContext,
} from "../store/context/context";
import { PaginationProps } from "../types/type";
import Pagination from "../features/pagination/Pagination";

const WithPagination = ({
  submitFor,
  totalPage,
  onPageChange,
}: {
  submitFor: "direction" | "product";
  totalPage: number;
  onPageChange: (page: number) => void;
}) => {
  const DirectionContext = useContext(DirectionFilterContext);
  const ProductContext = useContext(ProductFilterContext);
  let paginationProps: PaginationProps;

  switch (submitFor) {
    case "direction":
      paginationProps = {
        page: DirectionContext.page,
        setPage: DirectionContext.setPage,
        totalPage: totalPage,
        onPageChange: onPageChange,
      };
      break;
    case "product":
      paginationProps = {
        page: ProductContext.page,
        setPage: ProductContext.setPage,
        totalPage: totalPage,
        onPageChange: onPageChange,
      };
      break;
  }
  return <Pagination {...paginationProps} />;
};

export default WithPagination;
