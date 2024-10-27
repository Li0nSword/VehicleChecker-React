import React, { useState, useCallback } from "react";
import { styles } from "../styling/styles";
import debounce from "lodash/debounce";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useCallback(
        debounce((term: string) => {
            onSearch(term);
        }, 300),
        [onSearch]
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        debouncedSearch(value);
    };

    return (
        <div style={styles.searchBar}>
            <input
                type="search"
                placeholder="Search for Driver"
                style={styles.searchInput}
                value={searchValue}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
