import certifications from '../data/certs.json'

function Certs() {
    const certs = certifications.certs;

    function viewDigitalCert(link) {
        window.open(link, '_blank');
    }

    return(
        <>
        <div className='contentContainer'>
            <div className='certifications'>
                <h2>Networking Certifications</h2>
                <div className='certsContainer'>
                {certs.networking.map((cert) => {
                    const image = require(`../images/${cert.imageFile}`)

                    return(
                        <div className='certCard'>
                            <div className='certCardImg'>
                                <img src={image} alt={cert.name} />
                            </div>
                            <div className='certCardInfo'>
                                <p className='header'>{cert.name} ({cert.abbr})</p>
                                { cert.hyperlink.length > 0 &&
                                    <button onClick={() => {viewDigitalCert(cert.hyperlink)}}>DIGITAL CERTIFICATE</button>
                                }
                                { cert.hyperlink.length === 0 &&
                                    <div>{cert.certNumber}</div>
                                }
                            </div>
                        </div>
                    )
                })}
                </div>
                <hr style={{marginTop: '2rem'}} />
                <h2>Cloud Certifications</h2>
                <div className='certsContainer'>
                {certs.cloud.map((cert) => {
                    const image = require(`../images/${cert.imageFile}`)

                    return(
                        <div className='certCard'>
                            <div className='certCardImg'>
                                <img src={image} alt={cert.name} />
                            </div>
                            <div className='certCardInfo'>
                                <p className='header'>{cert.name} ({cert.abbr})</p>
                                { cert.hyperlink.length > 0 &&
                                    <button onClick={() => {viewDigitalCert(cert.hyperlink)}}>DIGITAL CERTIFICATE</button>
                                }
                                { cert.hyperlink.length === 0 &&
                                    <div>{cert.certNumber}</div>
                                }
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Certs;
