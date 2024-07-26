import { Link,Outlet } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 className='home-title'>What are The BEST Planes, Cars, and Trains?</h1>
            <hr></hr>
            <div className='home-container'>
                <Link className="home-brand" to="/cars"><h2>Cars</h2><img src="./img/car1.webp"/></Link>
                <Link className="home-brand" to="/planes"><h2>Planes</h2><img src="./img/jet4.webp"/></Link>
                <Link className="home-brand" to="/trains"><h2>Trains</h2><img src="./img/train1.webp"/></Link>
            </div>
        </div>
    );
}
export default Home
