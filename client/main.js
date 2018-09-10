import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';

const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} / {player.score} point(s)
                <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
                <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
                <button onClick={() => Players.remove({_id: player._id})}>&times;</button>
            </p>
        );
    });
};

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

Meteor.startup(() => {
    Tracker.autorun(() => {
        const players = Players.find().fetch();
        let title = 'Score Keep';
        let jsx = (
            <div>
                <h1>{ title }</h1>
                { renderPlayers(players) }
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button type="submit">Add player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
