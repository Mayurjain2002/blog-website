import React, { useEffect, useState } from 'react'
import { collection, deleteDoc,doc } from 'firebase/firestore';
import { db,auth } from '../firebase';
import { getDocs } from 'firebase/firestore';

const Home = ({isAuth}) => {

  const [postList,setpostlist] = useState([]);
  const postCollection = collection(db,"posts")

  const deletePost = async (id) =>{
    const postDoc = doc(db,"posts",id)
    await deleteDoc(postDoc);
  }

  useEffect(() =>{
    const getPosts = async () =>{
      const data = await getDocs(postCollection)
      setpostlist(data.docs.map((doc) =>({...doc.data(),id:doc.id})))
    }
    getPosts();
  },[deletePost])

  

  return (
    <div className='homePage'>
      {postList.map((post) =>{
        return <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">

           {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() =>{
              deletePost(post.id)
            }}>Delete</button>
          }
            </div>
            
          </div>
          <div className="postTextContainer">
            {post.post}
            <h3>@{post.author.name}</h3>
          </div>
        </div>
      })}
    </div>
  )
}

export default Home