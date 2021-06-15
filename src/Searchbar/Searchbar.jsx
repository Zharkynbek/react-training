import React from "react"

const SearchBar = ({onSetQuery, query, onGetPictures}) => (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={ onGetPictures}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

            <input
                onInput={onSetQuery}
                name="query"
                className="SearchForm-input"
                value={query}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

export default SearchBar