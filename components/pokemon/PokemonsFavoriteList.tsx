import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { PokemonFavoriteCard } from './PokemonFavoriteCard';

interface Props {
    pokemonsList: number[];
};

export const PokemonsFavoriteList: FC<Props> = ({ pokemonsList }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemonsList.map((id: number) => (
                    <PokemonFavoriteCard key={id} pokemonId={id} />
                ))
            }
        </Grid.Container>
    )
};
