import certifications from '../data/certs.json'

function Certs() {
    const certs = certifications.certs;

    return(
        <>
        <div className='certifications'>
            <div className='certsCategory'>Networking</div>
            <div className='certsContainer'>
            {certs.networking.map((cert) => {
                const image = require(`../images/${cert.imageFile}`)

                return(
                    <div className='certCard'>
                        <div className='certCardImg'>
                            <img src={image} />
                        </div>
                        <div className='certCardInfo'>
                            <p className='header'>{cert.name} ({cert.abbr})</p>
                            { cert.hyperlink.length > 0 &&
                                <p className='info'>
                                    <a href={cert.hyperlink} target='blank'>{cert.certNumber}</a>
                                </p>
                            }
                            { cert.hyperlink.length == 0 &&
                                <p className='info'>{cert.certNumber}</p>
                            }
                        </div>
                    </div>
                )
            })}
            </div>
            <hr />
            <div className='certsCategory'>Cloud</div>
            <div className='certsContainer'>
            {certs.cloud.map((cert) => {
                const image = require(`../images/${cert.imageFile}`)

                return(
                    <div className='certCard'>
                        <div className='certCardImg'>
                            <img src={image} />
                        </div>
                        <div className='certCardInfo'>
                            <p className='header'>{cert.name} ({cert.abbr})</p>
                            { cert.hyperlink.length > 0 &&
                                <p className='info'>
                                    <a href={cert.hyperlink} target='blank'>{cert.certNumber}</a>
                                </p>
                            }
                            { cert.hyperlink.length == 0 &&
                                <p className='info'>{cert.certNumber}</p>
                            }
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default Certs;
