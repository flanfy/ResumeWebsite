export default function Degree({ school, program, degree, location, date }) {
    return (
        <div className="mb-8 text-white">
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p>{school} | {program}</p>
          <p>{location} | {date}</p>
        </div>
    );
} 