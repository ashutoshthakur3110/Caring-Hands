// Dashboard.jsx
import "../css/Dashboard.css"

const donateForm = () => {
    window.open('http://localhost:5173/donate');
}

const Homepage = () => {
    window.open('http://localhost:5173')
}

const joinForm = () => {
    window.open('http://localhost:5173/joinow')
}

// ✅ New scroll function added
const scrollToJourney = () => {
    const section = document.getElementById("journey");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

const scrollToContact = () => {
    const section = document.getElementById("contact");
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
                <button onClick={Homepage}>Home</button>
                <button onClick={donateForm}>Donate</button>

                <div id="volunteer">
                    {/* ✅ Scroll trigger */}
                    <button onClick={scrollToJourney}>Our Journey</button>
                </div>
                <button onClick={scrollToContact}>Contacts</button>
                <button onClick={joinForm}>Join Us</button>
            </div>
        </div>
        </>
    )
}

export default Dashboard
