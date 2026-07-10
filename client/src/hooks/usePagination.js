import { useState, useMemo } from 'react';

const usePagination = (items = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / itemsPerPage)), [items.length, itemsPerPage]);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return { currentPage, totalPages, currentItems, handlePageChange, setCurrentPage };
};

export default usePagination;
