import me from '../images/me.jpg'

function Intro() {
    return(
        <div className='contentContainer'>
            <div className='introCard'>
                <img className='introCardMe' src={me} alt='Kevin Coers' />
                <div className='introCardIntro'>Kevin Coers</div>
            </div>
        </div>
    )
}

export default Intro;
