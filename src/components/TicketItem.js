import React from "react";
import '../styles.css';

export default function TicketItem({ticket, dispatch}) {

    const {id, title, description, priority} = ticket;

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high",
    };

    const handleDeleteTicket = () => {
        dispatch({
            payload: ticket.id,
            type: "DELETE_TICKET"
        })
    }

    const handleEditTicket = () => {
        dispatch({
            payload: ticket,
            type: "SET_EDITING_TICKET"
        })
    }

    return (<div className="ticket-item">
        <div className={`priority-dot ${priorityClass[priority]}`}></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="button" onClick={handleDeleteTicket}>Delete</button>
            <button className="button" onClick={handleEditTicket}>Edit</button>
    </div>)
}