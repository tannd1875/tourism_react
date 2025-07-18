import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { PaginationProps } from "../../types/type";

const Pagination = ({
  onPageChange,
  totalPage,
  page,
  setPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 items-center justify-center">
        <div
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <Button
            variant="pagination"
            className="rounded-l-md"
            disabled={page === 1}
            onClick={() => {
              const newPage = page - 1 == 0 ? 1 : page - 1;
              setPage(newPage);
              onPageChange(newPage);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <span className="flex items-center justify-center p-2 ring-1 ring-inset ring-gray-300  min-w-10 hover:scale-none text-black font-bold">
            {page}
          </span>
          <Button
            variant="pagination"
            className="rounded-r-md"
            disabled={page === totalPage}
            onClick={() => {
              const newPage = page + 1 == totalPage ? totalPage : page + 1;
              setPage(newPage);
              onPageChange(newPage);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
