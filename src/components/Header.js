import PropTypes from 'prop-types'
import Button from './Button'


export default function Header({ title }) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Prop Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
