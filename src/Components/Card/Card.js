import React, {useState} from "react"
import PropTypes from "prop-types";
import "./card.css"

export default function Card( {handleclick, id,flipped,back,front,width ,height}){
    // Id's of the cards if slipped or not flipped
    const [flipped,setFlipped] = useState([])

    const handleclick = (id) => {setFlipped(id)}


    return(
        <div 
    className = {`flip-container ${flipped ? "flipped" : "" }`}
    style = {{ width,height}}
    onClick = {() => handleclick(id)}
    >
        <div className = "flipper">
        <img style = {{
            height,width
        }}
        className = {flipped ? "front" : "back"}

        src = {flipped ? front: back}
 
        alt = "stuff"
        />

        </div>
    </div>
    )
    
}

Card.propTypes = {
        handleclick: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        flipped: PropTypes.bool.isRequired,
        back: PropTypes.string.isRequired,
        front: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired

}