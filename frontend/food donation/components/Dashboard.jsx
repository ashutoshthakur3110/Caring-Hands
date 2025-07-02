// Dashboard.jsx
import "../css/Dashboard.css"

const donateForm = () => {
    window.open('http://localhost:5173/donate');
}

const joinForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfuUwVPIsDIIJ8-Gr-RzdNTNoCV97NrhTv5VjEnCVVWYjHKNA/viewform?usp=header')
}

// ✅ New scroll function added
const scrollToJourney = () => {
    const section = document.getElementById("journey");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function Dashboard(){
    return(
        <>
        <div className="dashboard">
            <div>
                <img src="./public/logo.png" id="logo"></img>
            </div>
            <h2>
                CARING HANDS
            </h2>
            <div className="buttons">
                <button>Home</button>
                <button onClick={donateForm}>Donate</button>

                <div id="volunteer">
                    {/* ✅ Scroll trigger */}
                    <button onClick={scrollToJourney}>Our Journey</button>
                </div>
                <button>Contacts</button>
                <button onClick={joinForm}>Join Us</button>
            </div>
        </div>
        </>
    )
}

export default Dashboard
