import React from "react";
import Heading from "./Heading";
import Icon from "./Icon";
import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
    return (
        <header className="flex justify-center items-center flex-col">
            <Heading icon={<Icon/>} size={'h1'}>
               Unsplash Photo Search
            </Heading>

            <div className={"mt-4 w-full"}>
                <input
                    type="text"
                    onChange={(e) => onSearch(e.target.value)} // Send search term to parent function
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search for an image type"
                />
            </div>
        </header>
    )
}

Header.propTypes = {
 onSearch: PropTypes.func,
}

export default Header;