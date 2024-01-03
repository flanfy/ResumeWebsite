import { useTheme } from '../Theme/ThemeContext';

export default function Form() {
    const { currentTheme } = useTheme();

    return (
        <>
        <form name='contact' netlify hidden />
        <form name="contact" className="max-w-md p-4 rounded-md" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact"></input>
            <p className="mb-4">
                <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full border rounded-md text-black placeholder-black"
                placeholder="Name"
                />
            </p>
            <p className="mb-4">
                <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md text-black placeholder-black"
                placeholder="Email"
                />
            </p>
            <p>
                <textarea name="message" placeholder="Message" className="mt-1 p-2 w-full border rounded-md text-black placeholder-black"></textarea>
            </p>
            <p>
                <button
                type="submit"
                class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                Submit
                </button>
            </p>
        </form>
        </>
    );
}