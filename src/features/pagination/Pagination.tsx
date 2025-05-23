import React from "react";

type Prop = {
  onPageChange: (newPage: number) => void;
  currentPage: number;
  end: number;
  length: number;
  numberOfPage: number;
  type: string;
};

const PaginationClassify = {
  current:
    "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  not: "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
};

const Pagination = ({
  onPageChange,
  currentPage,
  end,
  length,
  numberOfPage,
  type,
}: Prop) => {
  const handlePage = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event.target.value);
  };

  return (
    <>
      {numberOfPage ? (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              value={currentPage - 1 == 0 ? numberOfPage : currentPage - 1}
              onClick={handlePage}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Trang trước
            </button>
            <button
              value={
                currentPage * 1 + 1 > numberOfPage ? 1 : currentPage * 1 + 1
              }
              onClick={handlePage}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Trang tiếp
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-l text-gray-700">
                Đã hiển thị
                <span className="font-medium mx-2">{end}</span>/
                <span className="font-medium mx-2">{length}</span>
                {type}
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {numberOfPage != 1 ? (
                  <button
                    value={
                      currentPage - 1 == 0 ? numberOfPage : currentPage - 1
                    }
                    onClick={handlePage}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    Prev
                  </button>
                ) : null}

                {Array.from({ length: numberOfPage }, (_, index) => (
                  <button
                    key={index}
                    value={index + 1}
                    onClick={handlePage}
                    aria-current="page"
                    className={
                      currentPage == index + 1
                        ? PaginationClassify.current
                        : PaginationClassify.not
                    }
                  >
                    {index + 1}
                  </button>
                ))}

                {numberOfPage != 1 ? (
                  <button
                    value={
                      currentPage * 1 + 1 > numberOfPage
                        ? 1
                        : currentPage * 1 + 1
                    }
                    onClick={handlePage}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {" "}
                    Next
                  </button>
                ) : null}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
