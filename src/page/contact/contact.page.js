export default function ContactPage(){
    return (
        <div className="bg-primary-light dark:bg-primary-dark min-w-full max-w-screen-xl xl:p-16 xl:pt-16 pb-8 p-10">
            <h1 className="text-4xl mt-16 font-semi-bold text-gray-800 mb-8 dark:text-white">reach me</h1>
            <div onClick={() => { window.open("mailto:akaditasustono@gmail.com") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="https://media.istockphoto.com/vectors/blue-round-email-icon-button-on-a-white-background-vector-id1192499215?b=1&k=6&m=1192499215&s=612x612&w=0&h=m3dfGE7mtKdE--pQ8LLhOxSdtRlW74UB4F5-JJjZeyU=" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Email me</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">akaditasustono@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={() => { window.open("https://www.linkedin.com/in/ydhnwb/", "_blank") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">LinkedIn</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">Prieyudha Akadita S</p>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={() => { window.open("https://github.com/ydhnwb", "_blank") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="https://image.flaticon.com/icons/png/512/25/25231.png" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Github</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">Prieyudha Akadita S</p>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={() => { window.open("https://twitter.com/ydhnwb", "_blank") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Twitter</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">Prieyudha Akadita S</p>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={() => { window.open("https://ydhnwb.medium.com", "_blank") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="data:image/png;base64,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" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Medium.com</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">Prieyudha Akadita S</p>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={() => { window.open("https://www.youtube.com/channel/UCDG7gCaRawAdyeA5omGRBRA", "_blank") }} className="cursor-pointer">
                <div className="my-4">
                    <div className="flex flex-row items-center">
                        <img alt="" className="rounded-full" src="data:image/png;base64,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" width={42} height={42} />
                        <div className="ml-4 flex flex-col">
                            <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Youtube</h1>
                            <p className="text-sm text-gray-600 font-bold dark:text-white">Prieyudha Akadita S</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>        
    )
}