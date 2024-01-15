import React from "react";
import PropTypes from 'prop-types';

const Heading = ({ size, icon, children  }) => {
    let defaultClasses = 'flex flex-row items-center';

    const renderHeading = () => {
        switch (size) {
            case 'h2':
                return <h2 className={`${defaultClasses} text-sm font-semibold md:text-xl`}>{icon}{children}</h2>
            case 'h1':
                return <h1 className={`${defaultClasses} text-lg font-bold md:text-2xl`}>{icon}{children}</h1>
            default:
                console.log('Heading.jsx error, you must specify a heading size')
        }
    }

  return (
    <>{renderHeading()}</>
  )
}

Heading.propTypes = {
    size: PropTypes.string.isRequired,
    icon: PropTypes.node,
    children: PropTypes.node,
}

export default Heading