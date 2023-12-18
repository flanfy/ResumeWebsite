export default function Project({title, description}) {
    // return (
    //     <Section name="projects">
    //         <h2 className="text-3xl text-green-300 font-bold">Projects</h2>
    //         1
    //         <div className='text-white'>
    //             Temp
    //         </div>
    //         {/* Add your about content here */}
    //         </Section>
    // );

    return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
    );
}