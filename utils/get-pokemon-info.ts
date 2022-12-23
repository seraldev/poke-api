import { pokeApi } from '../api';
import { PokemonDetail, PokemonDetailCommon } from '../interfaces';


export const getPokemonInfo = async (value: string): Promise<PokemonDetailCommon> => {

    const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${value}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    };
}