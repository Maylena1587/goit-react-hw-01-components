import PropTypes from 'prop-types';
function Container({ container, children }) {
    return (
        <div class = {container}>
            {
            children
            }
        </div>
    )
}

export default Container;