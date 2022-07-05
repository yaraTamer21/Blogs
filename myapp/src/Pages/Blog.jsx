import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import Badge from './../Component/Badge'

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBTypography,
  MDBContainer,
  MDBIcon,
  MDBCardImage,
  MDBCardBody,
  MDBCardText
} from 'mdb-react-ui-kit'

const Blog = () => {
  const [blog, setblog] = useState({})
  const [postBlog, setpostBlog] = useState([])

  const { id } = useParams();
  useEffect(() => {

    getsingleblog(id)
  }, [id])
  const getsingleblog = async (id) => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`)
    const postBlogresponse = await axios.get(`http://localhost:5000/blogs?category=${response.data.category}`)
    if (response.status === 200 || postBlogresponse.status === 200) {
      setblog(response.data)
      setpostBlog(postBlogresponse.data)

    }
    console.log(postBlog)

  }
  const expert = (rtr) => {

    if (rtr.length > 50) {
      rtr = rtr.substring(0, 50) + "..."
    }
    return rtr;
  }


  return (
    <>
      <MDBContainer className='mt-3' style={{ border: "1px solid #d1ebe8", }}>
        <NavLink to='/'>
          <strong className='text-black fs-5' style={{ display: "inline", }}>
            Go Back
          </strong>
        </NavLink>
        <MDBTypography tag={"h2"} className=' header-blog text-black fw-bolder px-3' style={{ display: "inline-block", marginLeft: "500px" }}>
          {blog && blog.title}
        </MDBTypography>
        <MDBCardImage
          src={blog.imageUrl}
          style={{ maxWidth: "100%", maxHeight: "600px" }}
          position="top"
          className='img-fluid rounded'

        />

        <div style={{ marginTop: "20px" }} >
          <div style={{ height: "40px", backgroundColor: "gray", width: "100%" }}>
            <MDBIcon
              style={{ float: "left" }}
              className="mt-3 ms-4"
              fas
              icon="calendar-alt"
              size='lg'


            />
            <strong style={{ float: "left", marginTop: "12px", marginLeft: "10px", color: "black" }}>
              {blog && blog.date}
            </strong>

            <strong style={{ float: "right", display: "inline", marginTop: "5px", marginRight: "20px", }}>
              <Badge>
                {blog.category}
              </Badge>
            </strong>


          </div>
          <MDBTypography className='py-4 lead md-0 px-3 text-blog text-black fw-bolder text-muted text-center space-top1 ' style={{ backgroundColor: "#ebe3e3" }}>
            {blog && blog.description}
          </MDBTypography>

          {postBlog.length > 1 && (
            <>
              <h1 className='  text-center'>Related Post</h1>
              <MDBRow className='g-4  '  >
                {postBlog && postBlog.filter((items)=>items.id!=id).map((item, index) => (<>
                  <MDBCol size={"3"} className='  px-3 col-blog p-0 mt-5 m-auto   mb-3 rounded'

                  >
                    <MDBCard>
                      <NavLink to={`/blog/${item.id}`}>
                        <MDBCardImage
                          src={item.imageUrl}
                          alt={item.title}
                          position="top"
                          style={{ width: "100%", height: "220px" }}
                        />
                        <MDBCardBody className='px-3 py-3 shadow-blog bg-white'>
                          <MDBCardTitle className='text-dark fs-4 fw-bolder text-center'>{item.title}</MDBCardTitle>
                          <MDBCardText className='text-muted fs-5 mt-3 '>{expert(item.description)}</MDBCardText>
                        </MDBCardBody>
                      </NavLink>
                    </MDBCard>

                  </MDBCol>
                </>))}
              </MDBRow>
            </>
          )}


          { }
        </div>

      </MDBContainer>



    </>
  )
}

export default Blog