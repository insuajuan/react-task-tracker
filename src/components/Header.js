import PropTypes from 'prop-types'
import Button from './Button'


export default function Header({ onAdd, showAdd }) {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Prop Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
