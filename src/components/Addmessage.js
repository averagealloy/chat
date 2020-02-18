import React from 'react'
import PropTypes from 'prop-types'

const Addmessage = (props) => {
    let input 
    return(
        <section id="new-message">
            <input 
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'ME')
                        input.value = " "
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
                />
        </section>
    )
}

Addmessage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage
