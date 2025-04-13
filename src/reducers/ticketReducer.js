export default function ticketReducer(state, action) {
    switch (action.type) {
        case "ADD_TICKET": {
            return {...state, tickets: [...state.tickets, action.payload]}
        }
        case "DELETE_TICKET": {
            if(state.editingTicket && state.editingTicket.id === action.payload) {
                return {
                    ...state,
                    tickets: state.tickets.filter(
                        (ticket) => ticket.id !== action.payload
                    ),
                    editingTicket: null
                };

            } else {
                return {
                    ...state,
                    tickets: state.tickets.filter(
                        (ticket) => ticket.id !== action.payload
                    )
                };
            }
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
                editingTicket: null
            };
        }
        case "SET_EDITING_TICKET": {
            return {...state, editingTicket: action.payload}
        }
        case "CLEAR_EDITING_TICKET": {
            return {...state, editingTicket: null}
        }
        default: {
            return state
        }
    }
}