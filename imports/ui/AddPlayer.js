import React from 'react';

import { Players } from './../api/players';

const handleSubmit = (e) => {
        e.preventDefault();

        let playerName = e.target.playerName.value;

        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
};

export default class AddPlayer extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button type="submit">Add player</button>
                </form>
            </div>
        );
    }
}
