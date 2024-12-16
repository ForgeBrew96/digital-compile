import './CustomCard.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as cardServices from '../../service/cardsService';

const CustomCard = ({ user }) => {
    const [formData, setFormData] = useState({
        name: '',
        point_value: '',
        protocol_id: '',
        effects: {
            top: '',
            middle: '',
            lower: ''
        }
    });
    const [protocols, setProtocols] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtocols = async () => {
            try {
                const data = await cardServices.getProtocols();
                setProtocols(data);
                console.log('Fetched Protocols:', data);
            } catch (err) {
                console.error('Failed to obtain protocols', err);
            }
        };
        fetchProtocols();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('effects.')) {
            const effectKey = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                effects: {
                    ...prevData.effects,
                    [effectKey]: value
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: name === 'protocol_id' ? parseInt(value, 10) : value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form Data on Submit:', formData);
            await cardServices.makeCustomCard(user.id, formData);
            alert('Custom Card Created Successfully!');
            setFormData({
                name: '',
                point_value: '',
                protocol_id: '',
                effects: {
                    top: '',
                    middle: '',
                    lower: ''
                }
            });
            navigate('/protocoldb');
        } catch (err) {
            console.error('Failed to create custom card', err);
        }
    };

    const getProtocolName = (protocolId) => {
        switch (protocolId) {
            case 1:
                return 'Apathy';
            case 2:
                return 'Life';
            case 3:
                return 'Psychic';
            case 4:
                return 'Plague';
            case 5:
                return 'Metal';
            case 6:
                return 'Light';
            case 7:
                return 'Water';
            case 8:
                return 'Hate';
            case 9:
                return 'Love';
            case 10:
                return 'Darkness';
            case 11:
                return 'Fire';
            case 12:
                return 'Gravity';
            case 13:
                return 'Death';
            case 14:
                return 'Speed';
            case 15:
                return 'Spirit';
            default:
                return `Protocol ${protocolId}`;
        }
    };

    return (
        <div className="custom-card-page">
            <h1>Custom Card Page</h1>
            <form onSubmit={handleSubmit} className="custom-card-form">
                <div className="form-group">
                    <label htmlFor="name">Card Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="point_value">Point Value</label>
                    <input
                        type="number"
                        id="point_value"
                        name="point_value"
                        value={formData.point_value}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="protocol_id">Protocol</label>
                    <select
                        id="protocol_id"
                        name="protocol_id"
                        value={formData.protocol_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a protocol</option>
                        {protocols.map((protocol) => (
                            <option key={protocol.protocol_id} value={protocol.protocol_id}>
                                {getProtocolName(protocol.protocol_id)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="effects.top">Effect - Top</label>
                    <input
                        type="text"
                        id="effects.top"
                        name="effects.top"
                        value={formData.effects.top}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="effects.middle">Effect - Middle</label>
                    <input
                        type="text"
                        id="effects.middle"
                        name="effects.middle"
                        value={formData.effects.middle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="effects.lower">Effect - Lower</label>
                    <input
                        type="text"
                        id="effects.lower"
                        name="effects.lower"
                        value={formData.effects.lower}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Create Custom Card</button>
            </form>
        </div>
    );
};

export default CustomCard;



