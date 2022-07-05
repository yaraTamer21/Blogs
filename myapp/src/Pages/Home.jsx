import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Blog from '../Component/Blog';
import { toast } from 'react-toastify';
import Search from '../Component/Search';
import Category from '../Component/Category';
import LatestBlogs from '../Component/LatestBlogs';

const options = ["travel", "fashion", "Fitness", "sports", "foods", "techs"]

const Home = () => {

  let [data, setData] = useState([]);
  let [latest, setLatest] = useState([]);

  const [searchValue,setsearchValue]=useState("")

  useEffect(() => {

    loaddata()
    LatestBlog()
  }, [])
  const loaddata = async () => {
    const rsponse = await axios.get("http://localhost:5000/blogs");
    if (rsponse.status === 200) {
      setData(rsponse.data);

    }
    console.log(data)

  }


const  LatestBlog=async ()=>{

     const total=await axios.get("http://localhost:5000/blogs")
     const start=total.data.length-4
        const end =total.data.length
        const response=await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`)
        setLatest(response.data)


}





  const onChangeInput=(e)=>{
    if (e.target.value===''){
      loaddata()
    }
    setsearchValue(e.target.value)
     


  }
  const HandleSearch=async (e)=>{
    e.preventDefault()

    const response=await axios.get(`http://localhost:5000/blogs?q=${searchValue}`)
    if(response.status===200){
      setData(response.data)
    }


  }


  const handledelet = async (id) => {
   
       if(window.confirm("are you sure that you want delet this blog?")){
         let response = await axios.delete(`http://localhost:5000/blogs/${id}`)
         if(response.status===200)
         {
           toast.success("the blog is recently deleted")
           loaddata()
         }
       }

  }
  console.log(data)
  const expert = (rtr) => {

    if (rtr.length > 50) {
      rtr = rtr.substring(0, 50) + "..."
    }
    return rtr;
  }
  const handleCatgeoy= async (catgery)=>{

    
    const response= await axios.get(`http://localhost:5000/blogs?category=${catgery}`)
    if(response.status===200)
    {
      if(response.data.length>0){
        setData(response.data)
      }
      else
      {
        toast.error("No category...")
         loaddata()
      }
     
    }
  }

  return (
    <>
    <Search
    onChangeInput={onChangeInput}
    HandleSearch={HandleSearch}
    searchValue={searchValue}
    />
      <MDBRow>
        {data.length === 0 &&

          <MDBTypography className='text-center fw-bolder text-topology text-dark  mt-5 py-5'>Not Blogs ..... </MDBTypography>}
        <MDBCol >
          <MDBContainer>
            <MDBRow >
              { data && data.map((items, index) => (<>
                <Blog
                  {...items}
                  key={index}
                  expert={expert}
                  handledelet={handledelet}
                />
              </>))}

            </MDBRow>

          </MDBContainer>
          
        </MDBCol>
      {data.length>0 &&(

        <>
          <MDBCol size={"3"}>
           <div className='bg-white rounded me-5'>
           <h4 className=' text-dark fw-bolder text-center py-3'>Latest Category</h4>
            <hr className='w-50 m-auto'/>
            {latest.map((items,index)=>(
                
                <LatestBlogs
                {...items}
                key={index}
                
                />

                
            ))}
           </div>
          <Category 
           options={options}
           handleCatgeoy={handleCatgeoy}
          />
        </MDBCol>
        </>
      )}

      </MDBRow>


    </>
  )
}

export default Home