import React from 'react';
import Section from './Section';
import profile from '../assets/profile.jpg'
import { useTheme } from './Theme/ThemeContext';

export default function About() {
    const { currentTheme } = useTheme();

    return ( 
            <Section name="About">
                <div className="flex flex-col items-center">
                    <h1 className={`text-7xl ${currentTheme.secondary}`}>Phillip Lu</h1>
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover"
                    />
                    <div className={`${currentTheme.text}`}>
                        <p>
                            Hi! I'm a web developer with experience mainly in ASP.NET and React. I also have experience in research and data analysis using Microsoft Excel and Power BI. Flexible and willing to take other positions that may better fit my qualifications.
                        </p>
                    </div>
                </div>
            </Section>
      );
  }