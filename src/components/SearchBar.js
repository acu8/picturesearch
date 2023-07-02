import React, { useState } from 'react'

export default function SearchBar({onSubmit}) {
  const [term, setTerm] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} />
      </form>
    </div>
  );
}
