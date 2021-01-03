export default function ProjectPage() {
    return (
        <div className="container mx-auto p-16">
            <h1 className="text-4xl font-semi-bold text-gray-800 mb-8 dark:text-white">projects</h1>
            <div>
                <div className="my-4">
                    <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Yotei: Personal Achievement And Target With Kanban Style</h1>
                    <div className="flex flex-row">
                        <p onClick={() => { window.open("https://github.com/ydhnwb/yotei", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Source Code</p>
                        <p onClick={() => { window.open("https://ydhnwb.gitbook.io/blog/projects/yotei", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Documentation</p>
                        <p onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.ydhnwb.laplanche", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Google Play Store</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="my-4">
                    <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Paperless: Retail Store Managament</h1>
                    <div className="flex flex-row">
                        <p onClick={() => { window.open("https://ydhnwb.gitbook.io/blog/projects/paperless-app", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Documentation</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="my-4">
                    <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Bagaskara: Translate Latin To Aksara Jawa Using Your Camera</h1>
                    <div className="flex flex-row">
                        <p onClick={() => { window.open("https://github.com/ydhnwb/bagaskara", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Source Code</p>
                        <p onClick={() => { window.open("https://ydhnwb.gitbook.io/blog/projects/bagaskara", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Documentation</p>
                        <p onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.ydhnwb.bagaskara_redefined", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Google Play Store</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="my-4">
                    <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Auto DM Base: Open Source Project For Twitter Bot</h1>
                    <div className="flex flex-row">
                        <p onClick={() => { window.open("https://github.com/ydhnwb/autodm_base", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Source Code</p>
                        <p onClick={() => { window.open("https://ydhnwb.gitbook.io/blog/projects/auto-dm-base", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Documentation</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="my-4">
                    <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Movie Sentiment Analysis</h1>
                    <div className="flex flex-row">
                        <p onClick={() => { window.open("https://github.com/ydhnwb/sentiment_analysis_movie", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Source Code</p>
                        <p onClick={() => { window.open("https://ydhnwb.gitbook.io/blog/projects/movie-sentiment-analysis", "_blank") }} className="cursor-pointer mr-4 text-xs text-gray-600 font-bold dark:text-white">Documentation</p>
                    </div>

                </div>
            </div>

        </div>
    )
}