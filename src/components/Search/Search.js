import React from 'react';

const Search = (props) => {
    const {
        query
    } = props;

    return (
        <div className="search-wrapper row">
            <span className="sr-only">Search jobs here</span>
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for job title or function..."
                    value={query}
                    onChange={(event) => props.onchange(event)}
                />
            </label>
        </div>
    )
}

export default Search;