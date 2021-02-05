import refactory from './../../../assets/imgs/refactory.png'
import comeapp from '../../../assets/imgs/comeapp.png'
import nocola from '../../../assets/imgs/nocola.jpeg'

export const Experiences = () => {
    return (
        <div>
            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src={refactory} width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Software Engineer @ Refactory.id</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">2020 - Present</p>
                    </div>

                </div>
            </div>
            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://glints.com/sg/hired/wp-content/uploads/2018/04/star-glints.png" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Industrial Trainer React Native Class @ Glints</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">Dec 2020 - Feb 2021</p>
                    </div>
                    
                </div>
            </div>


            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://glints.com/sg/hired/wp-content/uploads/2018/04/star-glints.png" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">React Native Bootcamp Student @ Glints x Binar Academy</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">Aug 2020 - Nov 2020</p>
                    </div>
                    
                </div>
            </div>

            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src="https://pbs.twimg.com/profile_images/1281441751270453248/MwLLFhhe_400x400.jpg" width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Diploma IV - Informatic Engineering @ Politeknik Harapan Bersama Tegal</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">Sept 2016- Oct 2020</p>
                    </div>
                    
                </div>
            </div>

            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src={comeapp} width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Android Developer Intern @ Come App (PT. Global Teknokreasi Indonesia)</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">June 2020 - Sept 2020</p>
                    </div>
                    
                </div>
            </div>
            <div className="m-4">
                <div className="flex flex-row items-center">
                    <img alt="" className="rounded-full" src={nocola} width={42} height={42} />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-md font-semi-bold text-gray-800 dark:text-white">Ionic Developer Intern @ Nocola IoT Solution</h1>
                        <p className="text-sm text-gray-600 font-bold dark:text-white">June 2018 - July 2018</p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}