import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends React.Component {
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }

    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div>
                    There are no players.
                </div>
            );
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }
};


PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
