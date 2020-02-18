import React from 'react'
import ProtoType from 'prop-types'
import Message from './Message'

const MessageList = ({ message}) => (
    <section id="message-list">
        <ul>
            {message.map(message => (
                <Message key={message.id} {...message}/>
            ))}
        </ul>
    </section>
)

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string
        }).isRequired
    ).isRequired
}

export default MessageList