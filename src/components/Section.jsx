import React from 'react';
import { Element } from 'react-scroll';
import { useTheme } from './Theme/ThemeContext';

export default function Section({ name, children }) {
    const { currentTheme } = useTheme();

    return (
        <Element name={name} className="container mx-auto mt-16 flex flex-col items-center">
            {name !== 'About' ? <h1 className={`text-3xl ${currentTheme.secondary}`}>{name}</h1> : null}
            {children}
        </Element>
    );
}