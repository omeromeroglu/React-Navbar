import React from 'react';
import {Search, SearchInput,SearchInputIcon,Input }from './SearchBarStyle.jsx';



function SearchBar() {
  return <div>
    <Search>
        <SearchInput>
            <Input type="text" placeholder="Search..."></Input>
            <SearchInputIcon />
        </SearchInput>
    </Search>
  </div>;
}

export default SearchBar;
