import Form from "./Form";
import Section from "../Section";
import { useTheme } from "../Theme/ThemeContext";

export default function Contact() {
    const { currentTheme } = useTheme();

    return (
        <Section name="Contact">
            <div className={`${currentTheme.text} flex flex-col items-center justify-center`}>
                <div className="flex-shrink-0 flex">
                    <a href="https://github.com/flanfy" className="block mx-2" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/phillip-lu/" className="block mx-2" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:philliplu4@gmail.com" className="block mx-2" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                </div>

                <div className="flex-grow mb-2 md:mb-0 md:mr-2">
                    <Form />
                </div>
            </div>
        </Section>
    );
}