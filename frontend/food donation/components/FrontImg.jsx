import "../css/FrontImg.css"

const openGoogleForm = () => {
    window.open('http://localhost:5173/donate');
}

function FrontImg(){
    return(
        <div>
        <img src="./public/frontimg3.png" className="frontimg2"></img>
        <button className="donateBtn" onClick={openGoogleForm}>Donate Now</button>
        </div>
    )
}

export default FrontImg