export default function Project({title, description}) {
    return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
    );
}