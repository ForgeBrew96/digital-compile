import './ProtocolDB.css';
import { useEffect, useState } from 'react';

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
        <div className="protocol-buttons">
        {protocolIds.map(protocolId => (
            <button
            key={`protocol-${protocolId}`}
            onClick={() => handleProtocolClick(protocolId)}
            className={selectedProtocols.has(protocolId) ? 'selected' : ''}>
                Protocol {protocolId}
            </button>
        ))}
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



 