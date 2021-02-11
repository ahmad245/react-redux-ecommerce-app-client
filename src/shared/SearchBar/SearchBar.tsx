import * as React from 'react';
import { Search, SearchInput, SearchSpan } from './SearchBar.element';

const SearchBar = ({onChange, placeholder}:any) => {
    return (
      <Search className="Search">
        <SearchSpan className="SearchSpan">
         icon
        </SearchSpan>
        <SearchInput
          className="SearchInput"
          type="text"
          onChange={(e)=>onChange(e.target.value)}
          placeholder={placeholder}
        />
      </Search>
    );
  };

  export default SearchBar;