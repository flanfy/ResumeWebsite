import { useTheme } from '../Theme/ThemeContext';

export default function Project({title, description}) {
  const { currentTheme } = useTheme();  
  
  return (
        <div className={`mb-8 ${currentTheme.text}`}>
          <h3 className="text-xl font-semibold">{title}</h3>
          <ul className="list-disc ml-6 mt-2">
            {description.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
    );
}