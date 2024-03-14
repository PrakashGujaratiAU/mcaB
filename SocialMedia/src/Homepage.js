import './homepage.css';
import Friends from './Friends';
import Story from './Story.js';
const mca = require('./mca.json')
const friends = require('./friends.json');
function Homepage(){
    return (
    <>
    <main className="wrapper">
    <div className="item featured">
        <img src="https://placehold.it/500x300" style={{"width":"150px"}} alt="" />
        <h2>Feed</h2>
        <h2>Friends</h2>
        <h2>Events</h2>


        <h4>Pages you like</h4>
        {
        friends.map(function(faculty){
            return <Friends image={faculty.Image} name={faculty.Name} dot={faculty.Dot} dots={faculty.Dots}/>
        })
        }
    </div>
    <div className="item item-2">
        
        <p>Main</p>
        {/* start story : `https://cms.atmiya.edu.in/images/Stud_Photo/${mca[0].AdmissionNo}.JPG` */}
        <div className="flex-container">
        {
            mca.map(function(student){
                return <Story image={`https://cms.atmiya.edu.in/images/Stud_Photo/${student.AdmissionNo}.JPG`} name={student.StudentName} />
            })
        }
        </div>
        

        <div className="flex-container" style={{"float":"left","width":"72%"}}>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
            <div style={{"height":"300px","width":"285px","backgroundColor":"white","display":"flex"}}><p>Post</p></div>
        </div>
        <div style={{"float":"right","width":"25%"}}>
            {
            friends.map(function(faculty){
                return <Friends image={faculty.Image} name={faculty.Name} dot={faculty.Dot} dots={faculty.Dots}/>
            })
            }
        </div>
    </div>
    <div className="item item-3"><p>Footer</p></div>
    </main>
    </>
    )
}

export default Homepage