import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ user }) => (
    <aside id="sidebar" className="sidebar">
        <ul>
            {user.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

Sidebar.PropTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default SideBar