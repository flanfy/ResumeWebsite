export default function Degree({ school, program, degree, location, date }) {
    return (
        <div>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p>{program}, {school}</p>
          <p>{location}, {date}</p>
        </div>
    );
} 