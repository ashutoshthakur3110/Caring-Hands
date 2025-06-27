import Dashboard from '../components/Dashboard'
import FrontImg from '../components/FrontImg'
import Process from '../components/Process'
import Problem from '../components/Problem'

function FrontPage(){
    return(
        <>
    <Dashboard/>
    <FrontImg showButton={true}/>
    <Process/>
    <Problem/>
        </>
    )
}
export default FrontPage