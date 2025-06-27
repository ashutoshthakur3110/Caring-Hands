import "..css/Volunteer.css"

const scrollVolunteer = () => {
    const click = document.getElementById("volunteer")
    if(click){
        click.scrollIntoView({behavior:"smooth"})
    }
}

function Volunteer(){
    return(
        <>
        <div id="volunteer" className="volunteer-button">
                

        </div>
        </>
    )
}