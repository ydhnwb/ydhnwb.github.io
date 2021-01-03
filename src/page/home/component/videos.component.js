export const Videos = () => {
    return (
        <div>
            <div className="m-4 cursor-pointer" onClick={() => { window.open("https://www.youtube.com/playlist?list=PLkVx132FdJZlTc_1gucKZ00b_s45DQlVQ", "_blank") }}>
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://gedelumbung.com/wp-content/uploads/2018/08/golang.png" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">RESTful API Using Go, Gin, MySQL, JWT Auth and Clean Architecture</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">A Youtube Playlist</p>
                    </div>

                </div>
            </div>
            <div className="m-4 cursor-pointer" onClick={() => { window.open("https://www.youtube.com/playlist?list=PLkVx132FdJZl9XKt3jlv1-_w3MWn4GBrT", "_blank") }}>
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://pbs.twimg.com/profile_images/1276168873226784768/oTUrXdo6.jpg" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Tutorial MVVM Pattern Android Studio Bahasa Indonesia</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">A Youtube Playlist</p>
                    </div>

                </div>
            </div>
            <div className="m-4 cursor-pointer" onClick={() => { window.open("https://youtu.be/_U5Uhf4odss", "_blank") }}>
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Membuat Bot Twitter Auto DM Base Menggunakan Python</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">A Youtube Video</p>
                    </div>

                </div>
            </div>
        </div>
    )
}