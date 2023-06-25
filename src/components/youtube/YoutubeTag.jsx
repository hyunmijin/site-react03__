import React from "react";

const youtubeTag = [
  { name: "미니어처" },
  { name: "작품" },
  { name: "미술작품" },
  { name: "예술작품" },
  { name: "사진작품" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag gmarket5">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
