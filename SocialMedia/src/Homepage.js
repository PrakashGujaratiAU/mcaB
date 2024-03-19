import './homepage.css';
import Friends from './Friends';
import Story from './Story.js';
const stories = require('./stories.json')
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
        
        

        <div style={{"float":"left","width":"75%"}}>
            <div className="flex-container">
            {
                stories.map(function(story){
                    return <Story image={`https://cms.atmiya.edu.in/images/Stud_Photo/${story.AdmissionNo}.JPG`} name={(story.StudentName).split(' ')[0] + " " + (story.StudentName).split(' ')[1]} />
                })
            }
            </div>
            <div style={{"width":"100%"}}>
                <p>Posts</p>
            </div>          
        </div>
        <div style={{"float":"right","width":"22%"}}>
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