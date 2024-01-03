import { useTheme } from "../Theme/ThemeContext";
import Section from "../Section";
import { LANGUAGES, TECH } from "../../data";

export default function Skills() {
    const { currentTheme } = useTheme();

    return (
         <Section name="Skills">
            <div className="flex flex-wrap justify-center gap-4">
                {/* Language Card */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Languages</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                            {LANGUAGES.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </p>
                </div>

                {/* Technology Card */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technologies</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                            {TECH.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </p>
                </div>
            </div>
        </Section>
    );
}