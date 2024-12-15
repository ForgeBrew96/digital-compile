import './ProtocolDB.css';
import { useState } from 'react';

const ProtocolDB = ({ user, ogCards }) => {
 const [selectedProtocols, setSelectedProtols] = useState(new Set())

 const handleProtocolClick = (protocolId) => {
    setSelectedProtols(prevSelected => {
        const newSelected = new Set(prevSelected)
        if (newSelected.has(protocolId)) {
            newSelected.delete(protocolId);
        } else {
            newSelected.add(protocolId);
        }
        return newSelected
    })
 }

 const filteredCards = ogCards.filter(card =>
    selectedProtocols.size === 0 || selectedProtocols.has(card.protocol_id)
 )
 
const protocolIds = Array.from(new Set(ogCards.map(card => card.protocol_id)))

    return (
        <div className = "backgroundMat">
        <img src = 'protocol_images/Screenshots/compile_logo_owned.png' className = "headingProtocolDB"/>
        <div className="protocol-btn-background">
        {protocolIds.map(protocolId => {
            let className = `protocol-btn protocol-${protocolId}`;
            if (selectedProtocols.has(protocolId)) {
                 className += ' selected';
            }

            let buttonText = ''
            if (protocolId === 1) {
                buttonText = 'Apathy'
            } else if (protocolId === 2) {
                buttonText = 'Life'
            } else if (protocolId === 3) {
                buttonText = 'Psychic'
            } else if (protocolId === 4) {
                buttonText = 'Plague'
            } else if (protocolId === 5) {
                buttonText = 'Metal'
            } else if (protocolId === 6) {
                buttonText = 'Light'
            } else if (protocolId === 7) {
                buttonText = 'Water'
            } else if (protocolId === 8) {
                buttonText = 'Hate'
            } else if (protocolId === 9) {
                buttonText = 'Love'
            } else if (protocolId === 10) {
                buttonText = 'Darkness'
            } else if (protocolId === 11) {
                buttonText = 'Fire'
            } else if (protocolId === 12) {
                buttonText = 'Gravity'
            } else if (protocolId === 13) {
                buttonText = 'Death'
            } else if (protocolId === 14) {
                buttonText = 'Speed'
            } else {
                buttonText = 'Spirit'
            } 

            return (
            <button
            key={`protocol-${protocolId}`}
            onClick={() => handleProtocolClick(protocolId)}
            className={className}>
            {buttonText}
            </button>
            )
        }
    )}
        </div>
       <div className="scroll-container">
        {filteredCards.map(card => (
            <div className="grid-item" key={card.card_id}>
                <img src={card.img_url} alt={card.name} />
                <p>{card.name}</p>
                <p>Point Value: {card.point_value}</p>
                <p><strong>Top:</strong> {card.effects.top}</p>
                <p><strong>Middle:</strong> {card.effects.middle}</p>
                <p><strong>Bottom:</strong> {card.effects.lower}</p>
            </div>
        ))}
       </div>
       </div>
    );
}

export default ProtocolDB;



 