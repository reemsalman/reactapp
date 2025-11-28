import Sectionh from "./sectionhead";
import { ratingdata } from "./data";
import Review from "./review";
import './index.css';

export default function Reviews () {
    return(<section id="reviews">
        <div className="container">
        <Sectionh title={"each and every client are important"} description={"Many students obtain their first unsecured credit card when they enter college. The following Discover cards offer an excellent introduction to the use of credit"}/>
    <div className="ratings">
        {ratingdata.map((rate)=>{
            const {id,description,img,job,name,stars}=rate;

            return (<Review key={id} job={job} img={img} description={description} name={name} stars={stars} />)})}

    </div>
    </div>
    </section>)
    
}