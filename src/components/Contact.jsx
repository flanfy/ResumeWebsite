import Section from "./Section";

export default function Contact() {
    return ( 
        <Section name="Contact">
            <div className="mt-2">
                <a href="https://github.com/flanfy" className="mx-2" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/phillip-lu/" className="mx-2" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="mailto:philliplu4@gmail.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                    Email
                </a>
            </div>
        </Section>
      );
  }