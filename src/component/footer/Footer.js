export const Footer = () => {

    const getYear = () => {
        const year = new Date().getFullYear();
        return year
    }
    return (
        <div className="bg-primary-light dark:bg-primary-dark p-4 pt-16 pb-16 flex flex-col">
            <div className="flex flex-row justify-around">
                <div className="m-4">
                    <h1 className="text-sm text-justify  text-gray-800 dark:text-white">Made by Prieyudha Akadita S</h1>
                    <h1 className="text-sm text-justify text-gray-800 dark:text-white font-extralight">Using React JS and Tailwind CSS v2</h1>

                </div>
                <div className="m-4">
                    <h1 className="text-sm text-justify  text-gray-800 dark:text-white">Copyright {getYear()}</h1>
                    <h1 className="text-sm text-justify text-gray-800 dark:text-white font-extralight">Hosted on github</h1>
                </div>

            </div>
        </div>
    )
}