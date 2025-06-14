import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { useState } from "react";

const Pagination = ({
  onPageChange,
  totalPage,
}: {
  onPageChange: (newPage: number) => void;
  totalPage: number;
}) => {
  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLButtonElement).value;
    console.log(value, typeof value);
    onPageChange(Number(value));
    setPage(Number(value));
  };

  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 items-center justify-center">
          <div
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Button
              variant="pagination"
              className="rounded-l-md"
              value={page * 1 - 1 == 0 ? 1 : page * 1 - 1}
              disabled={page == 1}
              onClick={(e) => handlePageChange(e)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <span className="flex items-center justify-center p-2 ring-1 ring-inset ring-gray-300  min-w-10 hover:scale-none text-black font-bold">
              {page}
            </span>
            <Button
              variant="pagination"
              className="rounded-r-md"
              value={page * 1 + 1 > totalPage ? totalPage : page * 1 + 1}
              disabled={page == totalPage}
              onClick={(e) => handlePageChange(e)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
