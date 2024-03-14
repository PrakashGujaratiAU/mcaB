function Friends(props) {
    return (
        <>
                <div style={{ height: '30px', width: '400px',
                    padding: '20px',marginTop:'20px'}} >

                    <img src={props.image} alt="" 
                    height="40px" width="40px"  style={{marginTop:'-8px',float: 'left',borderRadius: '50%'}}>
                    </img>
                
                    <div style={{marginTop:'-10px',marginLeft:'60px'}}>
                        
                        <p style={{float:"left","color":"black","margin":'0px',"padding":'0px'}}>
                            {props.name}
                        </p>

                        <p style={{marginTop:'6px',float:"right",color:"#d9d9d9",fontSize:"9px",marginRight:"150px"}}>
                            {props.dot}
                        </p>

                        <img src={props.dots} 
                        height="12px" width="12px"  style={{float:"right",marginTop:'6px',borderRadius: '50%',marginRight:"11px",border:"0px"}}>
                        </img>
                    </div>
                </div>
        </>
    )
}

export default Friends;