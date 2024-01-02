import React from 'react';
import Section from './Section';
import { EDUCATION } from '../data';
import Degree from './Degree';

export default function Education() {
    return (
        <Section name="Education">
          {EDUCATION.map((educationDetail, index) => (
            <Degree
              key={index}
              school={educationDetail.school}
              program={educationDetail.program}
              degree={educationDetail.degree}
              location={educationDetail.location}
              date={educationDetail.date}
            />
          ))}
        </Section>
      );
  }