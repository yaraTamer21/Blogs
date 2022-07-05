import React from 'react'
import {
 
    MDBCard,
    MDBListGroup,
    MDBListGroupItem
     
}from 'mdb-react-ui-kit'
const Category = ({handleCatgeoy,options}) => {
  return (
    <MDBCard style={{marginTop:"14px" ,width:"20rem"}}>
      <h4 className='mt-3 text-center'>Catgeroy</h4>
       <MDBListGroup>
            {options.map((items,index)=>(
                <MDBListGroupItem className='text-center fs-5 fw-bolder' style={{cursor:"pointer"}} key={index} onClick={()=>handleCatgeoy(items)}>
                    {items}
                </MDBListGroupItem>
            ))}
       </MDBListGroup>

    </MDBCard>
  )
}

export default Category