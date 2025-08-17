import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2 my-12 px-4">
      {/* First Page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`w-12 h-12 border border-gray-700 transition-all duration-300 group ${
          currentPage === 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
        }`}
      >
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 border-l border-t border-gray-400 transform -rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
          <div className="w-2 h-2 border-l border-t border-gray-400 transform -rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
        </div>
      </button>

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-12 h-12 border border-gray-700 transition-all duration-300 group ${
          currentPage === 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="w-3 h-3 border-l border-t border-gray-400 transform -rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
        </div>
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages).keys()].map((pageNumber) => (
        <button
          key={pageNumber + 1}
          onClick={() => onPageChange(pageNumber + 1)}
          className={`min-w-12 h-12 px-3 border text-sm font-light tracking-wider transition-all duration-300 transform ${
            pageNumber + 1 === currentPage
              ? "border-blue-500 bg-blue-500/20 text-blue-400 scale-110 shadow-lg shadow-blue-500/20"
              : "border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 hover:scale-105"
          }`}
        >
          {pageNumber + 1}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 border border-gray-700 transition-all duration-300 group ${
          currentPage === totalPages
            ? "opacity-30 cursor-not-allowed"
            : "hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="w-3 h-3 border-r border-t border-gray-400 transform rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
        </div>
      </button>

      {/* Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 border border-gray-700 transition-all duration-300 group ${
          currentPage === totalPages
            ? "opacity-30 cursor-not-allowed"
            : "hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105"
        }`}
      >
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 border-r border-t border-gray-400 transform rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
          <div className="w-2 h-2 border-r border-t border-gray-400 transform rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
