import '../index.css'
 
function Card({ cardimg, title, description, rank, onClick }) {        

    return (

        <div className="card" onClick={onClick}>
            <h1 className="Ranking">{rank}</h1>
            <h1 className="card-title">{title}</h1>
            <img className="card-img" src={cardimg} alt="img"/>
        </div>)
}
export default Card