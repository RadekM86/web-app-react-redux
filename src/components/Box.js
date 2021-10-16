import React from 'react'
import PropTypes from 'prop-types';
import './Box.css';

function Box({children}) {
    return (
        <div className="box">
            {children}
        </div>
    )
}

Box.propTypes = {
    children: PropTypes.node,
}

export default Box

