const toggleFavorite = (id: number): void => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    favorites = favorites.includes(id)
        ? favorites.filter((pokeId: number) => pokeId !== id)
        : [...favorites, id];

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') { return false; }

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
};

const getPokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');

const localFavorites = {
    toggleFavorite,
    existInFavorites,
    getPokemons
};

export default localFavorites;