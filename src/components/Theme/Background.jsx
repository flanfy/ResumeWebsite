import { useTheme } from './ThemeContext';

export default function Background({children}) {
    const { currentTheme } = useTheme();

    return (
        <div className={`${currentTheme.primary}`}>
            {children}
        </div>
    );
}