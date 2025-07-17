import CustomButton from "../button/CustomButton.tsx";
import './ButtonBar.css'
import {useRef} from "react";

interface ButtonBarProps{
    CloseRoomAction?: () => void,
    ClearAction?: () => void,
    SaveAction?: () => void,
}

const ButtonBar = (props: ButtonBarProps) => {

    const saveRef = useRef(null)

    const commitSaveFun = () => {
        saveRef.current.setAttribute("href", props.SaveAction?.call())
    }
    
    return (
        <div className="button-bar">
            <CustomButton title={"Close Room" } onClick={props.CloseRoomAction} />
            <CustomButton title={"Clear" } onClick={props.ClearAction} />
            <a ref={saveRef} download={'Room Design Demo.png'} ><CustomButton title={"Save as PNG" } onClick={commitSaveFun} /></a>
        </div>
    )
}

export default ButtonBar