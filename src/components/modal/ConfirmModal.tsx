import './ConfirmModal.css'

interface ModalProps {
    closeAction: () => void,
    clearAction: () => void,
}

const CustomButton = (props: ModalProps) => {

    return (
        <div className='modal-overlay' onClick={props.closeAction}>
            <div className='confirm-modal'>
                <label className='modal-label'>Confirm Clear</label>
                <br/>
                <div className='modal-body'>
                    <button className='custom-button' type='button' onClick={props.clearAction}>Yes</button>
                    <button className='custom-button' type='button' onClick={props.closeAction}>No</button>
                </div>
            </div>
        </div>
    )
}

export default CustomButton