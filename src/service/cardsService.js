import api from './api';

const getCards = async () => {
    try {
        const res = await api.get('/cards');
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getOriginalCard = async () => {
    try {
        const res = await api.get('/cards');
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        const originalCards = res.data.filter(card => card.is_original === true);
        return originalCards;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getProtocols = async () => {
    try {
        const res = await api.get('/protocols');
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const makeCustomCard = async (userId, formData) => {
    try {
        const protocols = await getProtocols();
        console.log('Fetched Protocols in makeCustomCard:', protocols);
        console.log('Form Data Protocol ID:', formData.protocol_id);

        const selectedProtocol = protocols.find(protocol => protocol.protocol_id === formData.protocol_id);

        if (!selectedProtocol) {
            throw new Error('Protocol not found');
        }

        const newCard = {
            name: formData.name,
            point_value: formData.point_value,
            creator_id: userId,
            protocol_id: formData.protocol_id,
            effects: {
                top: formData.effects.top,
                middle: formData.effects.middle,
                lower: formData.effects.lower
            },
            img_url: selectedProtocol.img_url
        };
        const res = await api.post('/cards', newCard);
        if (res.data.error) {
            throw new Error(res.data.error);
        }

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getCustomCard = async (userId) => {
    try {
        const res = await api.get('/cards');
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        const customCards = res.data.filter(card => card.creator_id === userId);
        return customCards;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const deleteCard = async (cardId) => {
    try {
        const res = await api.delete(`/cards/${cardId}`);
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const updateCard = async (cardId, updatedData) => {
    try {
        const res = await api.put(`/cards/${cardId}`, updatedData);
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export {
    getCards,
    getOriginalCard,
    getCustomCard,
    makeCustomCard,
    getProtocols,
    deleteCard,
    updateCard 
};
