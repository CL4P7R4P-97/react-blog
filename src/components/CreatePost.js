 import {useEffect, useState} from "react";
 import {db}   from "../firebaseConfig";
 import { doc,addDoc,collection, setDoc } from "firebase/firestore"; 

 function CreatePost(){

  const [title, setTitle] = useState("");
  const [subTitle, setSub] = useState("");
  const [content, setContent] = useState("");



  const addPost = async ()=>{

    const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        state: subTitle,
        content: content
      });
  }

  const handleSubmit=(e)=>{

        e.preventDefault();

        if(title.trim() == "" || subTitle.trim() == "" || content.trim()== ""){
            alert("Nothing should be empty");
            return;
        }
        else{
           
// Add a new document in collection "cities"
              addPost();

        }
  }



    return (

        <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Title</label>
                <input onChange={(e)=>setTitle(e.target.value)} /> 
            </div>
            <div className="form-field">
                <label>Sub Title</label>
                <input onChange={(e)=>setSub(e.target.value)} /> 
            </div>
            <div className="form-field">
                <label>Content</label>
                <textarea onChange={(e)=>setContent(e.target.value)}></textarea>
            </div>
            <button className="create-post-btn">Create Post</button>
        </form>
        </div>
    )
}

export default CreatePost;