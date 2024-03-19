import './story.css';
function Story(props) {
    return(
    <div className="story-container">
        <img
          className="story-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
          alt="Story Image"
        />
        <div className="story-footer">
          <img className="imag1" src={props.image} alt="User Profile" />
          <h3>{props.name}</h3>
        </div>
    </div>
    );
}

export default Story;