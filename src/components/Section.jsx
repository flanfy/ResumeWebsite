import React from 'react';
import { Element } from 'react-scroll';

export default function Section({ name, children }) {
    return (
        <Element name={name} className="container mx-auto mt-16">
            {children}
        </Element>
    );
}