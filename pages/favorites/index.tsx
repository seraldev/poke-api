import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { PokemonsFavoriteList } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const Favorites = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => setFavoritesPokemons(localFavorites.getPokemons()), []);

    return (
        <Layout title="Pokémons - Favoritos">
            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonsFavoriteList pokemonsList={favoritesPokemons} />)
            }
        </Layout>
    )
};

export default Favorites;