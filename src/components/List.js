import React from 'react'
import PropTypes from 'prop-types';
import './List.css';

const List = (props) => {
    const { children, name } = props;
    return (
      <div className="list-root">
        {name}
        <ul className="list">{children}</ul>
      </div>
    );
}

List.propTypes = {
    children: PropTypes.node,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default List;