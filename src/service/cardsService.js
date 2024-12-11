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

export {
    getCards,
    getOriginalCard,
    getCustomCard,
};
