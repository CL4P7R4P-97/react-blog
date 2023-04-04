import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { firestore } from "../firebaseConfig";


function PostDetails(){

    const [post, setPost] = useState({});
    const { postID } = useParams();
     
    useEffect(() => {
      firestore
        .collection('posts')
        .doc(postID)
        .onSnapshot((snapshot)=>{

           
                 
                setPost(snapshot.data());
              
        })
      
    }, []);
  
    return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p style={{textAlign: 'center'}}>{post.content}</p>
      </div>
    );
}

export default PostDetails;