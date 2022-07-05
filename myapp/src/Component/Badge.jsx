import React from 'react'
import { MDBBadge} from 'mdb-react-ui-kit'
const Badge = ({ children }) => {

    const colorKey = {
        fashion: 'primary',
        travel: 'success',
        Fitness: 'danger',
        foods: 'warning',
        techs: 'info',
        sports: 'dark'
    }

    return (
        <h4 className='text-center mb-3 '>
            <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
        </h4>
    )
}

export default Badge