import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  return (
    <section className="search">
      <input
        type="text"
        className="form-control"
        placeholder="Search characters"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </section>
  );
};

export default Search;
