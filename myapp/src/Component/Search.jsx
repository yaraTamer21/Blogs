import React from 'react'
import {
 MDBInput,
 MDBBtn

}from'mdb-react-ui-kit'

const Search = ({onChangeInput,HandleSearch,searchValue}) => {
  return (
   <>
   <div className='search'>
   <input
                value={searchValue}
                    type="search"
                    className='text-white fw-bolder '
                    name="description"
                    label="search....."
                    class="form-control"
                    style={{ backgroundColor:'#bbb4b4',width:"300px"}}
                    onChange={onChangeInput}
                />
   <MDBBtn type='submit' onClick={HandleSearch}>Search</MDBBtn>

    
   </div>
   </>
  )
}

export default Search