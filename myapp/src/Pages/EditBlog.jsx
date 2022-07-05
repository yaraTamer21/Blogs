import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { MDBBtn, MDBValidation, MDBInput, } from 'mdb-react-ui-kit'
import { useNavigate, useParams } from 'react-router-dom'


// m4ablcyj

const intial = {
    title: "",
    description: "",
    category: "",
    imageUrl: ""

}
const options = ["travel", "fashion", "Fitness", "sports", "foods", "techs"]
const EditBlog = () => {

    const [formValue, setformValue] = useState(intial)
    const [errorMessage, seterrorMessage] = useState(null)
    const [editMode, seteditMode] = useState(false)

    const { title, description, category, imageUrl } = formValue
    const Navigate = useNavigate()
    const onInputChange = (e) => {
        const { name, value } = e.target
        setformValue({ ...formValue, [name]: value })

    }
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            seteditMode(true)
            getsingleblog(id)

        }
        else {
            setformValue(intial)
        }
    }, [id])


    const getsingleblog = async (id) => {
        const singleblog = await axios.get(`http://localhost:5000/blogs/${id}`)
        if (singleblog.status === 200) {
            setformValue({ ...singleblog.data })
        }
    }



    const onUploadImage = (files) => {




        const formData = new FormData()
        formData.append("file", files)
        formData.append("upload_preset", "m4ablcyj")
        axios.post("http://api.cloudinary.com/v1_1/blogins/image/upload", formData).then((resp) => {
            toast.info("Image Upload Successfully ");
            console.log(resp)
            setformValue({ ...formValue, imageUrl: resp.data.url })




        }



        )



    }


    // }
    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth()).padStart(2, "0");
        let yyyy = today.getFullYear();
        let hr = today.getHours()
        today = mm + "/" + dd + "/" + yyyy + "/ hours is " + hr
        return today;


    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        if (!category) {
            seterrorMessage("pleas choose category ")
        }


        if (title && description && category && imageUrl) {

            if (!id) {
                const Date = getDate();
                let Update = { ...formValue, date: Date };
                const response = await axios.post(" http://localhost:5000/blogs", Update)
                if (response.status === 201) {

                    toast.success("Blog created successfull")
                }
                else {
                    toast.error("pleas try again")
                }
            }
            else {
                let response = await axios.put(`http://localhost:5000/blogs/${id}`, formValue)
                if (response.status === 200) {
                    toast.success("blogs is updates")
                }
                else {
                    toast.error("pleas try again")

                }
            }




            Navigate("/")
            setformValue(intial)
        }





    }
    const onCategoryChange = (e) => {
        
        seterrorMessage(null)
        setformValue({ ...formValue, category: e.target.value })

    }

    return (
        <MDBValidation className='row   g-3 text-center ' style={{ marginTop: "80px" }} novalidate onSubmit={onHandleSubmit} >
            <div className='bg-dark px-5 py-5 ' style={{

                borderRadius: "6px",
                maxWidth: "500px",
                alignContent: "center",
                pdding: "20px",
                margin: "auto"
            }}>
                <p className='fs-1 fw-bolder text-white '> {editMode ? "updateBlog" : " AddBlogs"} </p>

                <div>

                    <MDBInput
                        value={title || ""}
                        type="text"
                        label="Title"
                        name="title"
                        className='text-white'
                        onChange={onInputChange}
                        required
                        class="is-valid  form-control"
                        invalid
                        validation="pleas enter title"
                    />

                </div>
                <br />
                <MDBInput
                    type="text"
                    className='text-white'
                    value={description || ""}
                    label="description"
                    name="description"
                    onChange={onInputChange}
                    class="is-valid  form-control"
                    required
                    validation="pleas enter description"
                    style={{ height: "90px" }}
                    invalid
                />
                <br />
                {!editMode && (
                    <>

                        <MDBInput
                            type="file"

                            name="imageUrl"
                            onChange={(e) => onUploadImage(e.target.files[0])}
                            validation="pleas Enter imaged"
                            required
                            class="is-valid  form-control"
                            invalid

                        />
                        <br />
                    </>



                )}

                <select className={errorMessage ? "categoryError" : "category"} value={category || ""} onChange={onCategoryChange}  >

                    <option>pleas select category </option>
                    {options.map((items, index) => <option value={items} key={index}> {items} </option>)}

                </select>


                <MDBBtn type='submit' className='info mt-3 me-4 '>
                    {editMode ? "update" : "Add"}

                </MDBBtn>
                <MDBBtn color='danger' onClick={() => Navigate("/")} > Go Back </MDBBtn>

            </div>




        </MDBValidation>

    )
}

export default EditBlog