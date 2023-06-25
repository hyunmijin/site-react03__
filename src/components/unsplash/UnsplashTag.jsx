import React from "react";

const unsplashTag = [
  { name: "미니어처", url: "https://unsplash.com/ko/s/photos/miniature" },
  { name: "전시회", url: "https://unsplash.com/ko/s/photos/exhibition" },
  { name: "미술작품", url: "https://unsplash.com/ko/s/photos/artwork" },
  {
    name: "설치미술",
    url: "https://unsplash.com/ko/s/photos/installation-art",
  },
];
const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    const clickedTag = unsplashTag.find(
      (tag) => tag.name === e.target.innerText
    );
    if (clickedTag) {
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className="unsplash__tag">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
