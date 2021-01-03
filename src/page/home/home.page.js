import { useContext } from 'react';
import { Greeting } from './component/greeting.component'
import { SectionDivider } from './../../component/section/SectionDivider'
import { Experiences } from './component/experiences.component';
import { Articles } from './component/articles.component';
import { Videos } from './component/videos.component';


export default function HomePage() {

    return (
        <div className="container mx-auto px-10">
            <Greeting/>
            <SectionDivider title="Experiences"/>
            <Experiences/>
            <SectionDivider title="Articles"/>
            <Articles/>
            <SectionDivider title="Videos"/>
            <Videos/>
        </div>
    )
} 