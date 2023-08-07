import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Subjects = ({ pageHandler }) => {
  return (
    <div className="container margingTopOutrageous">
      <h3>
        <ArrowBackIcon
          className="hover"
          onClick={() => {
            localStorage.clear("upload");
            localStorage.clear("subjects");
            pageHandler(true);
          }}
        />{" "}
        &nbsp; View {localStorage.getItem("subjects")} materials
      </h3>
    </div>
  );
};

export default Subjects;
