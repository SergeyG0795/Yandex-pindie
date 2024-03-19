import {data} from './data.js'

export const getGamesByCategory = (category) => {
    return data.filter((game) => {
        return game.category.find((item) => {
            return item.name === category;
        });
    });
};

export const getGameById = (id) => {
    return data.find((game) =>
        game.id === Number(id));
};


export const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const normalizeDataObject = (obj) => {
    return {
        ...obj,
        category: obj.categories,
        users: obj.users_permissions_users,
    }
};
export const getGamesDataByCategory = async (url, category) => {
    const data = await getData(`${url}?categories.name=${category}`);
// Применяем функцию нормализации для работы с массивом
    return normalizeData(data);
};

export const getGameDataById = async (url, id) => {
    const data = await getData(`${url}/${id}`);
// Применяем функцию нормализации для работы с объектом
    return normalizeDataObject(data);
};

