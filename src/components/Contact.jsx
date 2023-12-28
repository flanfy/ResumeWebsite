import Section from "./Section";

export default function Contact() {
    return ( 
        <Section name="contact">
            <h2 className="text-3xl text-green-300 font-bold">Contact</h2>
            <div className="mt-2">
                <a href="https://github.com/flanfy" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/phillip-lu/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="mailto:philliplu4@gmail.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    Email
                </a>
            </div>
        </Section>
      );
  }