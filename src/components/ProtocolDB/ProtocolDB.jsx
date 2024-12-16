import './ProtocolDB.css';
import { useEffect, useState } from 'react';
import * as cardServices from '../../service/cardsService'

const ProtocolDB = ({ user, ogCards }) => {
    const [selectedProtocols, setSelectedProtols] = useState(new Set())
    const [showCustomCards, setShowCustomCards] = useState(false)
    const [customCards, setCustomCards] = useState([])
    const [editCard, setEditCard] = useState(null)

    useEffect(() => {
        const fetchCustomCards = async () => {
            try {
                const data = await cardServices.getCustomCard(user.id)
                setCustomCards(data)
            } catch (err) {
                console.error('Failed to fetch custom cards', err)
            }
        }
        if (showCustomCards) {
            fetchCustomCards()
        }
    }, [showCustomCards, user.id]);

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

    const handleShowCustomCardsClick = () => {
        setShowCustomCards(prevState => !prevState)
    }

    const handleCustomizeCard = (card) => {
        setEditCard(card)
    }

    const handleDeleteCard = async (cardId) => {
        try {
            await cardServices.deleteCard(cardId)
            setCustomCards(prevCards => prevCards.filter(card => card.card_id !== cardId))
        } catch (err) {
            console.error('Failed to delete card', err)
        }
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await cardServices.updateCard(editCard.card_id, editCard);
            setCustomCards(prevCards => prevCards.map(card => card.card_id === editCard.card_id ? editCard : card));
            setEditCard(null)
        } catch (err) {
            console.error('Failed to update card', err)
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditCard(prevCard => ({
            ...prevCard,
            [name]: value.startsWith('effects.') ? { ...prevCard.effects, [name.split('.')[1]]: value } : value
        }));
    };

    const filteredCards = showCustomCards
        ? customCards.filter(card => selectedProtocols.size === 0 || selectedProtocols.has(card.protocol_id))
        : ogCards.filter(card => selectedProtocols.size === 0 || selectedProtocols.has(card.protocol_id));

    const protocolIds = Array.from(new Set(ogCards.map(card => card.protocol_id)))

    return (
        <div className="backgroundMat">
            <div className='headingProtocol'>
                <img src='protocol_images/Screenshots/compile_logo_owned.png' className="headingProtocolDB" alt="Protocol Database" />
                <button onClick={handleShowCustomCardsClick} className="custom-cards-btn">
                    {showCustomCards ? 'Show All Cards' : 'Show My Custom Cards'}
                </button>
            </div>
            <div className="protocol-btn-background">
                {protocolIds.map(protocolId => {
                    let className = `protocol-btn protocol-${protocolId}`;
                    if (selectedProtocols.has(protocolId)) {
                        className += ' selected';
                    }
    
                    let buttonText = '';
                    if (protocolId === 1) {
                        buttonText = 'Apathy';
                    } else if (protocolId === 2) {
                        buttonText = 'Life';
                    } else if (protocolId === 3) {
                        buttonText = 'Psychic';
                    } else if (protocolId === 4) {
                        buttonText = 'Plague';
                    } else if (protocolId === 5) {
                        buttonText = 'Metal';
                    } else if (protocolId === 6) {
                        buttonText = 'Light';
                    } else if (protocolId === 7) {
                        buttonText = 'Water';
                    } else if (protocolId === 8) {
                        buttonText = 'Hate';
                    } else if (protocolId === 9) {
                        buttonText = 'Love';
                    } else if (protocolId === 10) {
                        buttonText = 'Darkness';
                    } else if (protocolId === 11) {
                        buttonText = 'Fire';
                    } else if (protocolId === 12) {
                        buttonText = 'Gravity';
                    } else if (protocolId === 13) {
                        buttonText = 'Death';
                    } else if (protocolId === 14) {
                        buttonText = 'Speed';
                    } else {
                        buttonText = 'Spirit';
                    }
    
                    return (
                        <button
                            key={`protocol-${protocolId}`}
                            onClick={() => handleProtocolClick(protocolId)}
                            className={className}>
                            {buttonText}
                        </button>
                    );
                })}
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
                        {showCustomCards && (
                            <div className="card-actions">
                                <button onClick={() => handleCustomizeCard(card)} className="customize-btn">
                                    Customize
                                </button>
                                <button onClick={() => handleDeleteCard(card.card_id)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {editCard && (
                <form onSubmit={handleEditSubmit} className="edit-card-form">
                    <h2>Edit Card</h2>
                    <div className="form-group">
                        <label htmlFor="name">Card Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editCard.name}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="point_value">Point Value</label>
                        <input
                            type="number"
                            id="point_value"
                            name="point_value"
                            value={editCard.point_value}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="effects.top">Effect - Top</label>
                        <input
                            type="text"
                            id="effects.top"
                            name="effects.top"
                            value={editCard.effects.top}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="effects.middle">Effect - Middle</label>
                        <input
                            type="text"
                            id="effects.middle"
                            name="effects.middle"
                            value={editCard.effects.middle}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="effects.lower">Effect - Lower</label>
                        <input
                            type="text"
                            id="effects.lower"
                            name="effects.lower"
                            value={editCard.effects.lower}
                            onChange={handleEditChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">Save Changes</button>
                    <button type="button" onClick={() => setEditCard(null)} className="cancel-btn">Cancel</button>
                </form>
            )}
        </div>
    );
}    

export default ProtocolDB;