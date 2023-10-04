import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {

  const[title,setTitle] = useState("");
  const[post,setPost] = useState("");
  let navigate = useNavigate();

  const postCollection = collection(db,"posts")

  const createPost = async () =>{
    await addDoc(postCollection , { title ,
      post,
       author:{ name : auth.currentUser.displayName , id:auth.currentUser.uid}})
       navigate("/")
  };

  useEffect(() =>{
    if(!isAuth){
      navigate("/login")
    }
  })

  return (
    <div className='createPostPage'>
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label htmlFor="">Title:</label>
          <input type="text" placeholder='Title...' onChange={(e) =>{
            setTitle(e.target.value)
          }} />
        </div>
        <div className="inputGp">
          <label htmlFor="">Post:</label>
          <textarea placeholder='Post...' onChange={(e) =>{
            setPost(e.target.value)
          }} />
        </div>
        <button onClick={createPost}>Submit Button</button>
      </div>
    </div>
  )
}

export default CreatePost
