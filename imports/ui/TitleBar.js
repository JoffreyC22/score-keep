import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    {this.renderSubtitle()}
                </div>
            </div>
        );
    }

    renderSubtitle() {
        if (this.props.subtitle) {
            return <h2 className="subtitle">{this.props.subtitle}</h2>;
        }
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};
