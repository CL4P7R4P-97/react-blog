 
 
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";
import PostDetails from "./PostDetails";




function App() {


  return (
    <div className="container">
      <Navbar />
       <Routes>
        
        <Route exact path='/' Component={Home} /> 
        <Route exact path='/post/:postID' Component={PostDetails} /> 
        <Route exact path='/createPost' Component={CreatePost} />
       </Routes >
    </div>

  );
  
}

export default App;
