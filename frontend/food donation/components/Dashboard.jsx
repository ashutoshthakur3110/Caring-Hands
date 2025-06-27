import "../css/Dashboard.css"

const donateForm = () => {
    
    window.open('http://localhost:5173/donate');
}

const joinForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfuUwVPIsDIIJ8-Gr-RzdNTNoCV97NrhTv5VjEnCVVWYjHKNA/viewform?usp=header')
}


function Dashboard(){
    return(
        <div className="dashboard">
            <h2>
                CARING HANDS
            </h2>
            <div className="buttons">
            <button>Home</button>
            <button onClick={donateForm}>Donate</button>
            <div id="volunteer">
            <button>Volunteer</button>
            </div>
            <button>About us</button>
            <button>Contacts</button>
            <button onClick={joinForm}>Join Us</button>
            </div>
        </div>
    )
}

export default Dashboard