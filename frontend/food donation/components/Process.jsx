import "../css/Process.css"
function Process() {
    return (
        <>
            <h2 className="heading">Donation Process</h2>
            <br />
            <div className="process">
                <img src="public\formFill.png" className="formFill"></img>
                <div className="arrow1">
                    <i className="fa-sharp fa-solid fa-right-long "></i>
                </div>
                <h3 className="font1">Form Fill</h3>
                <img src="public\volunteerPickup.png" className="volunteerPickup"></img>
                <div className="arrow2">
                    <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <h3 className="font2">Volunteer Pickup</h3>
                <img src="public\foodDeliever.png" className="foodDeliever"></img>
                <h3 className="font3">Food Donation</h3>
            </div>
        </>
    )
}

export default Process;