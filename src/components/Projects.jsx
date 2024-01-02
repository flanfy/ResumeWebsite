import React from 'react';
import Section from './Section';
import Project from './Project';
import { PROJECT } from '../data';

export default function Projects() {
    return ( 
            <Section name="Projects">
                {PROJECT.map((project, index) => (
                    <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    />
                ))}
            </Section>
      );
  }