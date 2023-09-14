const levelDeterminant = (session) => {
  try {
    if (session === "22/23") {
      return "100";
    } else if (session === "21/22") {
      return "200";
    } else if (session === "20/21") {
      return "200";
    } else if (session === "19/20") {
      return "300";
    } else if (session === "18/19") {
      return "400";
    } else if (session === "17/18") {
      return "500";
    } else {
      return "Alumni";
    }
  } catch (error) {
    return console.log(error);
  }
};

export default levelDeterminant;
