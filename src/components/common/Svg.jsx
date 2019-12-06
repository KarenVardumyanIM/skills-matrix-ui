import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

function Svg(props) {
    // static propTypes = {
    //     className: PropTypes.string,
    //     name: PropTypes.string.isRequired,
    //     svg: PropTypes.string.isRequired
    // };

    const classes = classnames(`svg-wrapper__${props.name}`, props.className);
    return (
        <div
            className={classes}
            dangerouslySetInnerHTML={{__html: props.svg}}
        />
    );
}

export default Svg;
export {Svg};