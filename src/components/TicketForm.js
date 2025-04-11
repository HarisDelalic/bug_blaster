import React, {useState} from "react";
import '../styles.css';

export default function TicketForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('1')

    const priorityLabel = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
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

            <button type="submit">Submit</button>
        </form>
    )
}