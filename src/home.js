import Card from './card';
import { carddata } from './data';
import './index.css';
function Home(){
    return(<section id='home'>
       <div className=" container">
          <div className=" home-header">
            <span>join us
            </span>
            <h1>best learning opportunity </h1>
            <p>we know how large objects will act,but things on a small scale just do not act that way.</p>
            <a className="btn btn-red" href="#">get quote now</a>
            <a className="btn btn-transparent"href="#">learn more</a>
            
            </div>
            <div className='card-container'>
               {carddata.map(data =>{
                  
                  const {title,id,color,bgColor,img,description}=data;//title inside each data
                 
                  return(<Card key={id} title={title} bgColor={bgColor} description={description} color={color} img={img}/>)
               })}
            </div>
           
       </div>


    </section>)
}
export default Home