import me from '../images/me.jpg'

function Intro() {
    return(
    <div className='introCard'>
        <img className='introCardMe' src={me} />
        <div className='introCardIntro'>Kevin Coers</div>
    </div>
    )
}

export default Intro;
