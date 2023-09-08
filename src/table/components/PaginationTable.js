// import React, { useMemo } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import MOCK_DATA from "../constants/MOCK_DATA.json";
// import { COLUMNS } from "../constants/Columns";
// import "../components/table.css";
// import { GlobalFilterInput } from "../components/GlobalFilterInput";
// import FastRewindIcon from "@mui/icons-material/FastRewind";
// import FastForwardIcon from "@mui/icons-material/FastForward";
// import { useNavigate } from "react-router-dom";

// function PaginationTable() {
//   const navigate = useNavigate();
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => MOCK_DATA, []);

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     previousPage,
//     prepareRow,
//     preGlobalFilteredRows,
//     setGlobalFilter,
//     state,
//   } = tableInstance;
//   return (
//     <>
//       <div className="margAuto paddFull-1 bg-nunsa">
//         <GlobalFilterInput
//           preGlobalFilteredRows={preGlobalFilteredRows}
//           setGlobalFilter={setGlobalFilter}
//           globalFilter={state.globalFilter}
//         />
//       </div>
//       <div className="table-container">
//         <table className="table" {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr
//                   onClick={() => {
//                     navigate(`${row.original.id}`);
//                   }}
//                   className="hover"
//                   {...row.getRowProps()}
//                 >
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex-row container">
//         <div className="tFlex mt-3">
//           <button
//             className="btn bottomShadow btnct btnct-nunsa"
//             onClick={() => previousPage()}
//           >
//             <FastRewindIcon />
//             &nbsp;Previous
//           </button>
//         </div>
//         <div className="tFlex mt-3">
//           <button
//             className="float-right btn bottomShadow btnct btnct-nunsa"
//             onClick={() => nextPage()}
//           >
//             Next&nbsp;
//             <FastForwardIcon />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PaginationTable;

import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
// import MOCK_DATA from "../constants/MOCK_DATA.json";
import { COLUMNS } from "../constants/Columns";
import "../components/table.css";
import { GlobalFilterInput } from "../components/GlobalFilterInput";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { useNavigate } from "react-router-dom";

function PaginationTable({ students }) {
  const navigate = useNavigate();
  // Add a new column definition for the index column
  const columns = useMemo(
    () => [
      {
        Header: "Index",
        accessor: (row, index) => index + 1, // Calculate the index
      },
      ...COLUMNS, // Add your existing columns here
    ],
    []
  );
  const data = useMemo(() => students, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;
  return (
    <>
      <div className="paddFull-1 bg-nunsa">
        <GlobalFilterInput
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        {page.length !== preGlobalFilteredRows.length ? (
          <div className="container mt-2">
            <h6 className="white">
              Filtered Students ({page.length} out of{" "}
              {preGlobalFilteredRows.length})
            </h6>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="table-container">
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  onClick={() => {
                    navigate(`${row.original.student_id}`);
                  }}
                  className="hover"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex-row container">
        <div className="tFlex mt-3">
          <button
            className="btn bottomShadow btnct btnct-nunsa"
            onClick={() => previousPage()}
          >
            <FastRewindIcon />
            &nbsp;Previous
          </button>
        </div>
        <div className="tFlex mt-3">
          <button
            className="float-right btn bottomShadow btnct btnct-nunsa"
            onClick={() => nextPage()}
          >
            Next&nbsp;
            <FastForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default PaginationTable;
