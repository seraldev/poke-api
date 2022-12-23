import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { AxiosResponse } from 'axios';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
    const title: string = 'Listado pokémon';

    return (
        <Layout title={title}>
            <Grid.Container gap={2} justify="flex-start">
                {pokemons.map((pokemon: SmallPokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    let response: AxiosResponse<PokemonListResponse>;

    try {
        response = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    } catch (error) {
        response = null;
    }

    const pokemons: SmallPokemon[] = response?.data?.results.map(
        (item: SmallPokemon, index: number) => ({
            ...item,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
        })
    ) || [];

    return {
        props: { pokemons },
    };
};

export default Home;

