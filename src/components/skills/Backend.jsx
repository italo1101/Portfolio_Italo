import React from 'react'

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Desenvolvedor BackEnd</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">NodeJs</h3> 
                            <span className="skills_level">Intermediário</span>
                        </div> 
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">MySQL</h3> 
                            <span className="skills_level">Intermediário</span>
                        </div> 
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Prisma</h3> 
                            <span className="skills_level">Intermediário</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend