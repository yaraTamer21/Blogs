import React from 'react'
import 
{
    MDBCard,
    MDBCol,
    MDBRow,
    MDBCardImage
    

}from'mdb-react-ui-kit'
import { NavLink } from 'react-router-dom'
const LatestBlogs = ({title,imageUrl,id}) => 
{
  return (
    <NavLink to={`blog/${id}`}>

<MDBCard className='mb-2 mt-2 rounded'>
          <MDBRow className='row-latest' >
           <MDBCol md="4"  >
               <MDBCardImage
                src={imageUrl}
                className="latest-images"
                

               
               />
           </MDBCol>
           <MDBCol md="5" className='body-latest' >
             <p className='title-latest text-black'>{title}</p>
           </MDBCol>

          </MDBRow>

      </MDBCard>
    </NavLink>
    
  )
}

export default LatestBlogs