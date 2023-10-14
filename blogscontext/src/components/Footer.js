import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { page, totalPages, prevhandlePageChange, nexthandlePageChange } =
    useContext(AppContext);
  console.log("PAge aur totalpages hain " + page + " " + totalPages);
  return (
    <div>
      <div>
        {page > 1 && (
          <button
            className="mx-1 border px-2 py-1"
            onClick={prevhandlePageChange}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="mx-1 border px-2 py-1"
            onClick={nexthandlePageChange}
          >
            Next
          </button>
        )}
      </div>
      <div>
        <p>
          Page {page} out of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Footer;
