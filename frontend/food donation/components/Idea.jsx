import "../css/Idea.css"
import Counter from "../components/Counter"
import LocationCounter from "../components/LocationCounter"
import VolunteerCounter from "../components/VolunteerCounter"


const Idea = () => {
  return (
    <div className="idea">
        <img src="./public/personimg.png" className="personimg"></img>
        <img src="./public/location.png" className="location"></img>
        <img src="./public/logo.png" className="logo"></img>
    <h2 className="header">The Idea</h2>
    <h3 className="head1">Who we are?</h3>
    <p className="describe1">The Caring Hands is a volunteer based, zero-funds organization that works to get surplus food from restaurants and the community to serve less fortunate people.</p>
    <p className="describe1">Our local chapters are run by friends and colleagues, who hope to create a difference in their own unique way. For example, restaurants in the neighbourhood Green Park, will contribute to the homeless of the locality, through volunteers who live in Green Park. Our Volunteers are largely students and young working professionals – everyone does this in their free time. The lesser fortunate sections of society we serve include homeless families, orphanages, patients from public hospitals, and old age homes.</p>
   
    <Counter target="150" />
    <LocationCounter target="20"/>
    <VolunteerCounter target="50"/>

    <p className="served">Meals Served</p>
    <p className="cities">Cities</p>
    <p className="volunteer">Volunteers</p>
    </div>
  )
}

export default Idea