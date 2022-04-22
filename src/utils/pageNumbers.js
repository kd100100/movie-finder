export const generatePageNumbers = (currentPage, totalPages) => {
    let start = [];
    let middle = [];
    let end = [];
    let splitter1 = "";
    let splitter2 = "";

    if (totalPages <= 3) {
        // 123 / 12 / 1
        for (let i = 1; i <= totalPages; i++) {
            start.push(i);
        }
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    }

    if (currentPage < 3) {
        // 123...10
        // 1234
        start = [1, 2, 3];
        end = [totalPages];
        splitter1 = totalPages > 4 ? "..." : "";
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    } else if (currentPage > totalPages - 2) {
        // 1...8910
        // 1...78910
        // 1234
        start = [1];
        end = [totalPages - 2, totalPages - 1, totalPages];
        splitter1 = totalPages > 4 ? "..." : "";
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    } else if (currentPage === 3) {
        // 1234...10
        start = [1, 2, 3, 4];
        end = [totalPages];
        splitter1 = totalPages > 5 ? "..." : "";
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    } else if (currentPage === totalPages - 2) {
        // 1...78910
        start = [1];
        end = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        splitter1 = totalPages > 5 ? "..." : "";
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    } else {
        // 1...456...10
        start = [1];
        middle = [currentPage - 1, currentPage, currentPage + 1];
        end = [totalPages];
        splitter1 = totalPages > 6 ? "..." : "";
        splitter2 = totalPages > 5 ? "..." : "";
        return {
            start,
            middle,
            end,
            splitter1,
            splitter2,
        };
    }
};
