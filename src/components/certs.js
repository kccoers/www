import certifications from '../data/certs.json'

function Certs() {
    const certs = certifications.certs;

    return(
        <div className='certsContainer'>
        {certs.map((cert) => {
            const image = require(`../images/${cert.imageFile}`)

            return(
                <div className='certCard'>
                    <div className='certCardImg'>
                        <img src={image} />
                    </div>
                    <div className='certCardInfo'>
                        <p className='header'>{cert.name} ({cert.abbr})</p>
                        <p className='info'>{cert.certNumber}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Certs;
