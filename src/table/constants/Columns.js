import { startWithCase } from "../../utilities/text";

export const COLUMNS = [
  //   {
  //     Header: "Name",
  //   Footer: "Name",
  //     columns: [
  //       {
  //         Header: "First Name",
  //   Footer: "First Name",
  //         accessor: "first_name",
  //       },
  //       {
  //         Header: "Middle Name",
  //   Footer: "Middle Name",
  //         accessor: "middle_name",
  //       },
  //       {
  //         Header: "Last Name",
  //   Footer: "Last Name",
  //         accessor: "last_name",
  //       },
  //     ],
  //   },
  {
    Header: "First Name",
    // Footer: "First Name",
    accessor: "student_fname",
    Cell: ({ cell }) => startWithCase(cell.value),
  },
  {
    Header: "Middle Name",
    // Footer: "Middle Name",
    accessor: "student_mname",
    Cell: ({ cell }) => startWithCase(cell.value),
  },
  {
    Header: "Last Name",
    // Footer: "Last Name",
    accessor: "student_lname",
    Cell: ({ cell }) => startWithCase(cell.value),
  },
  {
    Header: "Matric No",
    // Footer: "Date of Birth",
    accessor: "student_mat_no",
  },
  {
    Header: "Email",
    // Footer: "Date of Birth",
    accessor: "student_email",
  },
  {
    Header: "Phone",
    // Footer: "Phone",
    accessor: "student_phone",
  },
  {
    Header: "Role",
    // Footer: "Phone",
    accessor: "student_role",
    Cell: ({ cell }) => startWithCase(cell.value),
  },
  {
    Header: "Id",
    // Footer: "Id",
    accessor: "student_id",
  },
  {
    Header: "NOS Cleared",
    // Footer: "Id",
    accessor: "total_dues",
    Cell: ({ cell }) => (Number(cell.value) === 0 ? "No" : "Yes"),
  },
  {
    Header: "State Of Origin",
    // Footer: "Country",
    accessor: "student_state",
    Cell: ({ cell }) => startWithCase(cell.value),
  },
  {
    Header: "Entry",
    // Footer: "Country",
    accessor: "sch_session",
  },
];
