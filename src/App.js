import logo from './logo.svg';
import './App.css';
import './styles.css'
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import {useReducer} from "react";
import TicketList from "./components/TicketList";

function App() {
    const initialState = {tickets: [], editingTicket: null, sortingPreference: "High to Low"}
    const [state, dispatch] = useReducer(ticketReducer, initialState)

    return (
        <div className="container">
            <h1>Bug Blaster</h1>
            <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} sortingPreference={state.sortingPreference}></TicketForm>

            {state.tickets.length > 0 &&
                <div className="results"><h2>All Tickets</h2> <TicketList tickets={state.tickets} dispatch={dispatch}></TicketList></div>}
        </div>
    );
}

export default App;
