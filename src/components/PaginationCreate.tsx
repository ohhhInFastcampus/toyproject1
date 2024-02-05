import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const disableClass = "pointer-events-none nopacity-50";

function PaginationCreate({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) {
  const handlePreviousClick = () => {
    setCurrentPage(1);
  };

  const handleNextClick = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination className="nmb-24">
        <PaginationContent>
          <PaginationItem className="ncursor-pointer">
            <PaginationPrevious
              onClick={handlePreviousClick}
              className={currentPage == 1 ? disableClass : ""}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index} className="ncursor-pointer">
              <PaginationLink
                onClick={() => handlePageClick(index + 1)}
                className={currentPage - 1 == index ? "nbg-accent" : ""}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextClick}
              className={currentPage == totalPages ? disableClass : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationCreate;
