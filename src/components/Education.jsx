import React from 'react';
import Section from './Section';
import { EDUCATION } from '../data';
import Degree from './Degree';

export default function Education() {
    return (
        <Section name="education">
          <h2 className="text-3xl text-green-300 font-bold">Education</h2>
          {EDUCATION.map((wah, index) => (
            <Degree
              key={index}
              school={wah.school}
              program={wah.program}
              degree={wah.degree}
              location={wah.location}
              date={wah.date}
            />
          ))}
        </Section>
      );
  }