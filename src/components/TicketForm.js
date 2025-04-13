import React, {useEffect, useState} from "react";
import '../styles.css';

export default function TicketForm({dispatch, editingTicket, sortingPreference}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('1')

    const priorityLabel = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    useEffect(() => {
            if (editingTicket) {
                setTitle(editingTicket.title)
                setDescription(editingTicket.description)
                setPriority(editingTicket.priority)
            } else {
                clearForm();
            }
        }, [editingTicket]
    )

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ticketData = {
            id: editingTicket ? editingTicket.id : new Date().getTime(), // good enough for now since we don't have proper unique id
            title: title,
            description: description,
            priority: priority
        }

        dispatch({
            type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
            payload: ticketData
        })

        clearForm();
    }

    const handleCancelEdit = () => {

        dispatch({
            type: "CLEAR_EDITING_TICKET"
        })
        clearForm()
    }

    return(
        <form className="ticket-form" onSubmit={handleSubmit}>
            <div>
                <label className="label">Title</label>
                <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div>
                <label className="label">Description</label>
                <textarea className="form-input" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <fieldset className="priority-fieldset">
                <legend>Priority</legend>
                {Object.entries(priorityLabel).map(([value, label]) => (
                    <label key={value} className="priority-label">
                        <input
                            type="radio"
                            className="priority-input"
                            value={value}
                            checked={priority === value}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                        {label}
                    </label>
                ))}
            </fieldset>

            <button className="button" type="submit">Submit</button>

            {editingTicket && (
                <button className="button" onClick={handleCancelEdit} type="submit">Cancel Edit</button>
            )}

            <select value={sortingPreference} onChange={e => dispatch({type: "SET_SORTING_PREFERENCE", payload: e.target.value})}>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
            </select>
        </form>


    )
}