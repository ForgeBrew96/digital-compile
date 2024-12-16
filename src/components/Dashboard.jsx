import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
    const cards = [
        { id: 1, title: 'The Multi-Element', effect: { effect1: 'Channel the power of fire.', effect2: 'Control the flow of water.', effect3: 'Harness the strength of earth.' }, creator: 'FinalAi' },
        { id: 2, title: 'Shadow Strike', effect: { effect1: 'Become invisible for 3 turns.', effect2: 'Deal double damage when attacking from shadows.', effect3: 'Escape from any trap.' }, creator: 'compilecompleted' },
        { id: 3, title: 'Mystic Barrier', effect: { effect1: 'Create a magical shield that blocks attacks.', effect2: 'Reflect a portion of the damage back to the attacker.', effect3: 'Absorb elemental spells to strengthen the barrier.' }, creator: 'gameMasterGames' },
        { id: 4, title: 'Time Warp', effect: { effect1: 'Rewind time to a previous turn.', effect2: 'Accelerate the next two actions.', effect3: 'Slow down opponents for 3 turns.' }, creator: 'FlameMaster' },
    ];
    

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Community Custom Cards:</h1>
            <div className="card-feed">
                {cards.map(card => (
                    <div key={card.id} className="card">
                        <h2>{card.title}</h2>
                        <div className="card-effects">
                            <p className="proxyCardText">{card.effect.effect1}</p>
                            <p className="proxyCardText">{card.effect.effect2}</p>
                            <p className="proxyCardText">{card.effect.effect3}</p>
                        </div>
                        <p className="card-creator">Created by: {card.creator}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
