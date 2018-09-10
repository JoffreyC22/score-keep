import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';

const renderPlayers = function (playersList)
{
    return playersList.map(function(player){
        return <p key={player._id}>{player.name} - {player.score} point(s)</p>;
    });
};

const handleSubmit = function (e) {
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

Meteor.startup(function () {
    Tracker.autorun(function(){
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
