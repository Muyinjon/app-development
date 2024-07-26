function Card(){        
    let cardimg = {}


    return (

        <div className="card">
            <h1 className="card-title">Card</h1>
            <img className="card-img" src={cardimg} alt="img"/>
            <p className="card-text"></p>
        </div>)
}
export default Card