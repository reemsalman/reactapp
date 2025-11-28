import { FaStar, FaChevronRight  } from "react-icons/fa";
import './index.css';
import { CiAlarmOn } from "react-icons/ci";
import { RiBookOpenLine } from "react-icons/ri";
export default function Coursee({department,rating,price,title,description,img,discount,duration,lessons,sales}){

    return(<div className="course">
        <span className="sale">sale</span>
        <img src={img} alt={title}/>
        
         <div className="content">
             <div className="coursefild">
                <p className="department">{department}</p>
                <p className="rating"><FaStar />   {rating}</p></div>
                <h3>{title}</h3>
                <p className="description">{description}</p>
                <p className="sales">{sales} sales</p>
                  <p className="price"><del>{price}</del> 
                             <span className="textsecondry">{discount}</span></p>

                  <div className="courseinfo"> 
                    <p><CiAlarmOn />   {duration}</p>
                    <p><RiBookOpenLine />  {lessons}</p>
                   
                  </div>
                  <a href="" className="btnlearn">learn more   <FaChevronRight /></a>




         </div>



    </div>
        


    )
}