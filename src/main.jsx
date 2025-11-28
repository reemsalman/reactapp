import Home from './home';
import './index.css';
import Course from './courses';
import Reviews from './reviews';
import Join from './joinus';


export default function Main(){
    return(<main>
         <Home/>
          <Course/>
          <Reviews/>
         <Join/>
    </main>)
}