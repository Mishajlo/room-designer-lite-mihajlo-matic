import './CustomButton.css'

interface CustomButtonProps {
    title: string,
    onClick?: () => void,
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button className="custom-button" onClick={props.onClick}>{props.title}</button>
    )
}

export default CustomButton