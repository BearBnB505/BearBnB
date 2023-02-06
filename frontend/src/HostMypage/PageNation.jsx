import React, { useState, useEffect } from "react";
import axios from "axios";

const PageNation = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [prePage, setPrePage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  useEffect(() => {
    axios
      .get(`/AllLodgingList?pageNum=${currentPage}`)
      .then((response) => {
        const { data } = response;
        setTotalPages(data.totalPages);
        setPrePage(data.prePage);
        setNextPage(data.nextPage);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul className="pagination justify-content-end">
        <li className={`page-item ${prePage === 0 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(prePage)}
          >
            &laquo;
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <li
              className={`page-item ${page === currentPage ? "active" : ""}`}
              key={page}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
        <li className={`page-item ${nextPage === 0 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(nextPage)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNation;