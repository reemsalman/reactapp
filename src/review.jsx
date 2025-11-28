import './index.css';
export default function Review({id,description,img,job,name,stars}){
    return <div className="rating">
        <span className="stars">{stars}</span>
        <p className='description'>{description}</p>
        <div className="person">
            <img src={img} alt={name}/>
            <div className='side'>
                <h3 className="textprimary">{name}</h3>
                <p className='last'>{job}</p>
            </div>

        </div>


    </div>
}