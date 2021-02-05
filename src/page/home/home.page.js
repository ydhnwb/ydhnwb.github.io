import { useContext } from 'react';
import { Greeting } from './component/greeting.component'
import { SectionDivider } from './../../component/section/SectionDivider'
import { Experiences } from './component/experiences.component';
import { Articles } from './component/articles.component';
import { Videos } from './component/videos.component';


export default function HomePage() {

    return (
        <div className="bg-primary-light dark:bg-primary-dark min-w-full max-w-screen-xl xl:pt-16 pb-8 p-10 xl:p-14">
            <Greeting/>
            <SectionDivider title="Experiences &amp; education"/>
            <Experiences/>
            <SectionDivider title="Articles"/>
            <Articles/>
            <SectionDivider title="Videos"/>
            <Videos/>
        </div>
    )
} 