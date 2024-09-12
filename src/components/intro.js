import Image from 'react-bootstrap/Image'

import me from '../images/me.jpg'

function Intro() {
    return(
        <div style={{textAlign:"center",margin:"0 auto"}}>
            <Image style={{width:"10rem",border:".25rem solid #fff"}} src={me} roundedCircle />
        </div>
    )
}

export default Intro;
