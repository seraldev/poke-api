import Image from 'next/image';
import NextLink from 'next/link';
import { Text, useTheme, Spacer } from '@nextui-org/react';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0 20px',
                backgroundColor: theme?.colors.gray500.value,
            }}>

            <NextLink href="/" style={{ display: 'flex' }}>
                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    alt='icono de la app'
                    width={70}
                    height={70}
                    priority={true}
                />

                <Text color='white' h2>P</Text>
                <Text color='white' h3>okemon</Text>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites">
                <Text color='white'>Favoritos</Text>
            </NextLink>
        </div>
    );
};
