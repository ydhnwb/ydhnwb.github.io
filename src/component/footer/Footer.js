export const Footer = () => {

    const getYear = () => {
        const year = new Date().getFullYear();
        return year
    }
    return (
        <div className="p-14 mt-14 flex flex-col bg-primary-dark">
            <div className="flex flex-row justify-around">
                <div className="m-4">
                    <h1 className="text-md text-justify text-white">Made by Prieyudha Akadita S</h1>
                    <h1 className="text-md text-justify text-white font-extralight">Using React JS and Tailwind CSS v2</h1>
                    <h1 className="text-md text-justify text-white">Copyright {getYear()}</h1>
                </div>
                <div className="m-4">
                    <h1 className="text-md text-justify text-white">This webpage is hosted at github</h1>
                    <h1 className="text-md text-justify text-white font-extralight">You are allowed to download or modify this web page :)</h1>
                </div>

            </div>
        </div>
    )
}