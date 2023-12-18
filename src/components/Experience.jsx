import React from 'react';
import Section from './Section';
import { EXPERIENCE } from './data';
import Job from './Job';

export default function Experience() {
    return (
        <Section name="experience">
          <h2 className='text-white'>Work Experience</h2>
          
          {EXPERIENCE.map((job, index) => (
            <Job
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              date={job.date}
              responsibilities={job.responsibilities}
            />
          ))}
        </Section>
      );
  }