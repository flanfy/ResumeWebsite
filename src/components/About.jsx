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
                            Hi! Welcome to my resume website made using React. I'm a full-stack developer with 1 year of full-stack work experience. I also have 3 years of research and data analysis experience. Flexible and willing to take other positions that may better fit my qualifications.
                        </p>
                    </div>
                </div>
            </Section>
      );
  }