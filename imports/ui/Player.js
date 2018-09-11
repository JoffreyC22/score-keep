import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <div className="item">
                <p key={this.props.player._id}>
                    {this.props.player.name} / {this.props.player.score} point(s)
                    <button onClick={() => Players.update(this.props.player._id, {$inc: {score: 1}})}>+1</button>
                    <button onClick={() => Players.update(this.props.player._id, {$inc: {score: -1}})}>-1</button>
                    <button onClick={() => Players.remove(this.props.player._id)}>&times;</button>
                </p>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
};
