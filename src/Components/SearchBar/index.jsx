import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import data from "../../Data/Airports.json";

const SearchBar = () => {
    const { airports } = data;

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const process_res = res => {
        const matches = Array.from(
            res.toLowerCase().matchAll(RegExp(query.toLowerCase(), "g"))
        ).map(({ index }) => index);

        const jsx = Array.from(res);

        for (const idx of matches) {
            for (let i = idx; i < idx + query.length; i++) {
                console.log(i);
                jsx[i] = (
                    <span key={i} className="highlight">
                        {jsx[i]}
                    </span>
                );
            }
        }

        return jsx;
    };

    useEffect(() => {
        setResults(prev =>
            airports.filter(({ airport_name }) =>
                airport_name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, airports]);

    return (
        <div className="SearchBarBox">
            <input
                type="text"
                placeholder="Search for text"
                value={query}
                onChange={e => setQuery(prev => e.target.value)}
            />

            <div className="SearchResults">
                {results.map(({ airport_name }, i) => (
                    <p key={i}>{process_res(airport_name)}</p>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
