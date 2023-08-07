import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MaterialUpload = ({ pageHandler }) => {
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
        &nbsp; Upload a {localStorage.getItem("upload")} material
      </h3>
    </div>
  );
};

export default MaterialUpload;
