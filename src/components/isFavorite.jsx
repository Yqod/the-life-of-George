import { useState } from "react";


function IsFavorite({initialState}) {
  const [isFavorite, setIsFavorite] = useState(initialState);
  const[likeCount, setLikeCount] = useState("");

  function handleClick() {
    setIsFavorite((prev) => !prev);
    setLikeCount((prev) => {
      const newCount = isFavorite ? prev + 1 : prev - 1;
      return newCount === 0 ? "" : newCount;
    });
  }

  return (
    <div className="likeButtonContainer">
      <button onClick={handleClick}>
        {isFavorite ? (
          <img src="/images/likeempty.png" alt="like" />
        ) : (
          <img src="/images/likefull.png" alt="dislike" />
        )}
        {likeCount ? <span className="likeCount">{likeCount}</span> : null}
      </button>
    </div>
  );
}

export default IsFavorite;