import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { generatePageNumbers } from "../utils/pageNumbers";

function Pagination() {
    const { state, setPageNumber, setPagePerItem } = useContext(MovieContext);

    const pageNumbers = () => {
        const pagesDetails = generatePageNumbers(
            state.pageNumber,
            state.totalPages
        );
        const pageNumbers = [];
        pagesDetails.start.forEach((page) => {
            pageNumbers.push(
                <li
                    className={
                        page === state.pageNumber
                            ? "page-item active"
                            : "page-item"
                    }
                    onClick={() => setPageNumber(page)}
                    key={page}
                >
                    {page}
                </li>
            );
        });
        pageNumbers.push(pagesDetails.splitter1);
        pagesDetails.middle.forEach((page) => {
            pageNumbers.push(
                <li
                    className={
                        page === state.pageNumber
                            ? "page-item active"
                            : "page-item"
                    }
                    onClick={() => setPageNumber(page)}
                    key={page}
                >
                    {page}
                </li>
            );
        });
        pageNumbers.push(pagesDetails.splitter2);
        pagesDetails.end.forEach((page) => {
            pageNumbers.push(
                <li
                    className={
                        page === state.pageNumber
                            ? "page-item active"
                            : "page-item"
                    }
                    onClick={() => setPageNumber(page)}
                    key={page}
                >
                    {page}
                </li>
            );
        });
        return pageNumbers;
    };

    const handlePreviosPage = () => {
        if (state.pageNumber > 1) {
            setPageNumber(state.pageNumber - 1);
        }
    };
    const handleNextPage = () => {
        if (state.pageNumber < state.totalPages) {
            setPageNumber(state.pageNumber + 1);
        }
    };

    return (
        <div className="paginaton-container">
            <ul className="pagination" type="none">
                <li className="page-item" onClick={handlePreviosPage}>
                    Previous
                </li>
                {pageNumbers()}
                <li className="page-item" onClick={handleNextPage}>
                    Next
                </li>
            </ul>
            <select
                className="page-size"
                value={state.pagePerItem}
                onChange={(e) => setPagePerItem(e.target.value)}
            >
                <option value="8">8 Movies per page</option>
                <option value="16">16 Movies per page</option>
                <option value="32">32 Movies per page</option>
            </select>
        </div>
    );
}

export default Pagination;
