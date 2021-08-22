export default function Button({ color, text, onClick}) {

    return (
        <button style={{backgroundColor: color}} className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}