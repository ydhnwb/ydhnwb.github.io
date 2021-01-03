import { OutlinedButton } from "../../../component/buttons/OutlineButton"

export const Greeting = () => {
    return (
        <div className="py-20 px-4">
            <h1 className="text-4xl font-semi-bold text-gray-800 dark:text-white">Hi there, I'm Prieyudha Akadita S!</h1>
            <p className="text-lg mt-4 mb-4 text-justify font-light text-gray-900 dark:text-white dark:font-extralight">A Junior fullstack developer. Experienced in Android Native, Flutter and React Native for mobile app development,
            confident to work as backend-developer using golang (gin, gorm, and many database), and have interests in front-end
                development using reactjs and tailwind.</p>

            {/* <OutlinedButton title="More about me" onTap={() => console.log("hello")}/> */}
        </div>
    )
}