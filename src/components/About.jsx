import React from 'react';
import Section from './Section';
import { IMAGES } from '../data';
import profile from '../assets/profile.jpg'

export default function About() {
    return ( 
            <Section name="about">
                <div className="flex flex-col lg:flex-row items-center">
                    <h1 className="text-7xl text-green-300 font-bold">Phillip Lu</h1>
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover lg:w-1/4 text-white"
                    />
                    <div className='lg:w-1/2 lg:ml-8 text-white'>
                        <p>
                            Hi! I'm a web developer with experience mainly in ASP.NET and React. I also have experience in research and data analysis using Microsoft Excel and Power BI. Flexible and willing to take other positions that may better fit my qualifications.
                        </p>
                    </div>
                </div>
            </Section>
      );
  }