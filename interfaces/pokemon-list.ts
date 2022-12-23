export interface PokemonListResponse {
    count: number;
    next: string;
    previous?: string;
    results: Array<SmallPokemon>;
}

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    image: string;
}
