import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
    children?: ReactNode;
    title?: string;
};

const origin = (typeof window === 'undefined') ? null: window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Sergio Alonso Malagón' />
                <meta name='description' content='Información sobre el pokémon XXXX' />
                <meta name='keywords' content='XXXX, pokemon, pokedex' />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{ padding: '0 20px' }}>
                {children}
            </main>
        </>
    );
};
