import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { MDBCard, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCol, MDBBtn, MDBIcon, MDBCardText } from 'mdb-react-ui-kit'
import Badge from './Badge'
const Blog = ({ title, imageUrl, id, description, date, category, expert, handledelet }) => {
    return (
        <>
            <MDBCol size={4} className='mb-4'>
                <MDBCard className='mt-3 h-100' style={{ maxWidth: "22rem" }}>
                    <MDBCardImage
                        src={imageUrl}
                        position="top"
                        style={{ maxWidth: "100%", height: "180px" }}
                        alt={title}
                    />
                    <MDBCardBody>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <MDBCardText>{expert(description)}
                            <NavLink to={`/blog/${id}`}   >See More..</NavLink>
                        </MDBCardText>
                        <Badge >{category}</Badge>
                        <div className='text-center'>
                            <MDBBtn tag="a" color='none' className='m-auto' onClick={() => handledelet(id)} >
                                <MDBIcon
                                    fas
                                    icon="trash"
                                    style={{ color: "#dd4b39" }}
                                    size="lg"
                                />


                            </MDBBtn>
                            <MDBBtn tag="a" color='none' className='m-auto'  >
                                <Link to={`/editblog/${id}`}>

                                    <MDBIcon
                                        fas
                                        icon="edit"
                                        style={{ color: "#55acee", marginLeft: "20px" }}
                                        size="lg"
                                    />


                                </Link>

                            </MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>


            </MDBCol>

        </>
    )
}

export default Blog