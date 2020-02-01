import React from "react";
import PropTypes, { func } from 'prop-types';

class ShowServerConfig extends React.Component {
    render() {
        return (
            <>
            <p>Validate Props</p>
            </>
        );
    }
}

ShowServerConfig.propTypes = {
    config: PropTypes.exact({
        minConnections: PropTypes.number,
        maxConnections: PropTypes.number,
        restartAlways: PropTypes.bool
    }).isRequired,
    environment: PropTypes.oneOf(['dev', 'play', 'live']),
    ssl: PropTypes.bool,
    ssl2: function(props) {
        if (props.environment === 'live' && !props.ssl2) {
            return new Error(
                'Invalid prop ssl2'
            );
        }
    }
}

export default ShowServerConfig;