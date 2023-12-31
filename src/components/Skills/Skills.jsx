import { useTheme } from "../Theme/ThemeContext";
import Section from "../Section";
import { LANGUAGES, TECH } from "../../data";

export default function Skills() {
    const { currentTheme } = useTheme();

    // Function to split the list into two columns
    const splitList = (list) => {
        const midpoint = Math.ceil(list.length / 2);
        const firstColumn = list.slice(0, midpoint);
        const secondColumn = list.slice(midpoint);
        return [firstColumn, secondColumn];
    };

    return (
        <Section name="Skills">
            <div className="flex mt-4">
                <div className={`mr-4 p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 ${currentTheme.card}`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${currentTheme.text}`}>Languages</h5>
                    <div className="font-normal text-gray-900 dark:text-gray-400">
                        <ul>
                            {LANGUAGES.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`ml-4 max-w-sm p-6  border border-gray-200 rounded-lg shadow dark:border-gray-700 ${currentTheme.card}`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight text-center ${currentTheme.text}`}>Technologies</h5>
                    <div className="flex flex-wrap">
                        <ul className="mr-4">
                            {TECH.map((tech, index) => (
                                index < TECH.length / 2 && (
                                    <li key={index + splitList(LANGUAGES)[0].length} className="text-gray-700 dark:text-gray-400">{tech}</li>
                                )
                            ))}
                        </ul>
                        <ul>
                            {TECH.map((tech, index) => (
                                index >= TECH.length / 2 && (
                                    <li key={index + splitList(LANGUAGES)[0].length} className="text-gray-700 dark:text-gray-400">{tech}</li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}