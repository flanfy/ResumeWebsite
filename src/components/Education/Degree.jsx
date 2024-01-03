import { useTheme } from '../Theme/ThemeContext';

export default function Degree({ school, program, degree, location, date }) {
  const { currentTheme } = useTheme();
  
  return (
        <div className={`mb-8 ${currentTheme.text}`}>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p>{school} | {program}</p>
          <p>{location} | {date}</p>
        </div>
    );
} 