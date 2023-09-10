// import TextWithBold from "./bold";

// const ParagraphText = ({ text }) => {
//   if (text.includes("\n")) {
//     const paragraphs = text.split("\n");

//     return (
//       <div className="inline">
//         {paragraphs.map((paragraph, index) =>
//           index === 0 ? (
//             <p className="inline" key={index}>
//               <TextWithBold text={paragraph} />
//             </p>
//           ) : (
//             <p key={index}>
//               <TextWithBold text={paragraph} />
//             </p>
//           )
//         )}
//       </div>
//     );
//   } else {
//     return <TextWithBold text={text} />;
//   }
// };

// export default ParagraphText;

// import TextWithBold from "./bold";
import React from "react";
import TextWithBold from "./bold";

const ParagraphText = ({ text }) => {
  if (text.includes("\n")) {
    // Split the text into paragraphs based on single \n or multiple \n\n
    const paragraphs = text.split(/\n{1}/);

    return (
      <span>
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}{" "}
            {/* Add <br /> except for the first paragraph */}
            <TextWithBold text={paragraph} />
          </React.Fragment>
        ))}
      </span>
    );
  }
  return <TextWithBold text={text} />;
};

export default ParagraphText;
