export default function ticketReducer(state, action) {
    switch (action.type) {
        case "ADD_TICKET": {
            return {...state, tickets: [...state.tickets, action.payload]}
        }
        case "DELETE_TICKET": {
            return {...state, tickets: [state.tickets.filter(ticket => ticket.id !== action.payload.id)]}  // since action.payload is id of the ticket that should be deleted
        }
        case "UPDATE_TICKET": {
            const updatedTickets = state.tickets.map(ticket =>
                ticket.id === action.payload.id
                    ? {
                        ...ticket,
                        title: action.payload.title,
                        description: action.payload.description,
                        priority: action.payload.priority,
                    }
                    : ticket
            );

            return {
                ...state,
                tickets: updatedTickets,
            };
        }
        default: {
            return state
        }
    }
}