import React from 'react';
import { Element } from 'react-scroll';
import { theme1, theme2 } from './Themes';

export default function Section({ name, children }) {
    return (
        <Element name={name} className="container mx-auto mt-16">
            <h1 className={`text-3xl ${theme1.secondary}`}>{name}</h1>
            <div className={`${theme1.text}`}>
                {children}
            </div>
        </Element>
    );
}