import areasOfExpertise from '../data/areasOfExperise.json'

function About() {
    const areas = areasOfExpertise.areas;

    return(
        <div className='contentContainer'>
            <div className="aboutContainer">
                <h2 style={{fontWeight: '400'}}>Professional</h2>
                <p style={{fontSize: '1.5rem'}}>Technical Solutions Architect with over 10 years of experience 
                    and a strong affinity towards providing solutions and products 
                    based on business needs, return on investment, scalability, 
                    and technical debt elimination. Proven success in strategically 
                    aligning IT Solutions and products with IT and Business Operations.
                </p>
                <hr />
                <h2 style={{fontWeight: '400'}}>Areas of Experties</h2>
                <div className='flexbox'>
                    {areas.map((expertise) => {
                        return(
                            <div className='flexboxChild'>{expertise.area}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;
