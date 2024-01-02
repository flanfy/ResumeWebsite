export default function Project({title, description}) {
    return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
    );
}