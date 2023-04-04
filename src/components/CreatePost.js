import { firestore } from "../firebaseConfig";
import userFormInput from "../hooks/hooks";

 function CreatePost(){

  const title = userFormInput("");
  const subTitle = userFormInput("");
  const content = userFormInput("");




  const addPost = async ()=>{

    firestore.collection('posts').add({
        title: title.value,
        content: content.value,
        subTitle: subTitle.value,
        createdAt: new Date(),
      });
  }

  const handleSubmit=(e)=>{

        e.preventDefault();

        if(title.value.trim() == "" || subTitle.value.trim() == "" || content.value.trim()== ""){
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
                <input  {... title} /> 
            </div>
            <div className="form-field">
                <label>Sub Title</label>
                <input  {...subTitle}  /> 
            </div>
            <div className="form-field">
                <label>Content</label>
                <textarea  {...content}></textarea>
            </div>
            <button className="create-post-btn">Create Post</button>
        </form>
        </div>
    )
}

export default CreatePost;