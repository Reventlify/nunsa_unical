import words from "lodash.words";
import capitalize from "lodash.capitalize";

function startWithCase(params) {
  if (params === null || params.length === 0) {
    return null;
  } else {
    const returner = (whatName, index) => {
      if (index === 0) {
        return capitalize(whatName);
      } else {
        return " " + capitalize(whatName);
      }
    };

    const nameHandler = (n) => {
      let handleName = "";
      if (n.length === 0) {
        return;
      } else {
        const name = words(n, /[^, ]+/g);
        name.map((user, i) => {
          return (handleName = handleName + returner(user, i));
        });
        return handleName;
      }
    };

    return nameHandler(params);
  }
}

export { startWithCase };
