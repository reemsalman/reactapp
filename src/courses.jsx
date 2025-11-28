import Sectionh from './sectionhead';
import { coursesdata } from './data';
import Coursee from './course';
import './index.css';
export default function Course(){
    return(
        <section id="courses">
            <div className="container">
                 <Sectionh title="make online education accessible" description='Education is the most powerful weapon which you can use to change the world. '/>
            <div className='courses-container'>

                {coursesdata.map((course)=> {
                    console.log(course)
                    const {department,rating,price,title,description,img,discount,duration,lessons,sales,id}=course
                    return(<div key={id}><Coursee discount={discount} sales={sales} duration={duration}  department={department} lessons={lessons} img={img} price={price} rating={rating} title={title} description={description}/></div>);

                })}
            </div>
            
            </div>

        </section>
    )
}