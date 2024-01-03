import { useTheme } from '../Theme/ThemeContext';

export default function Job({ title, company, location, date, responsibilities }) {
  const { currentTheme } = useTheme();

  return (
        <div className={`mb-8 ${currentTheme.text}`}>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{company} - {location} | {date}</p>
          <ul className="list-disc ml-6 mt-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
    );
} 