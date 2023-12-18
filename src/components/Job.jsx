export default function Job({ title, company, location, date, responsibilities }) {
    return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white">{company} - {location} | {date}</p>
          <ul className="list-disc ml-6 mt-2 text-white">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
    );
} 