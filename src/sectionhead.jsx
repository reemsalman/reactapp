 import './index.css';
 function Sectionh({title,description}){


    return (
        <section id="sectionhead">
            <div className="container">
                <span className="textprimary">practice advice</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>


        </section>
    )
}
export default Sectionh