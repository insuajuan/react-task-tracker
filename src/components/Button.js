export default function Button({ color, text}) {

    const onClick = (e) => {
        alert(e.cancelable)
    }

    return (
        <button style={{backgroundColor: color}} className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}