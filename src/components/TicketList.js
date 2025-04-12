import TicketItem from "./TicketItem";

export default function TicketList({tickets}) {
    return (<div className="ticket-list">
        {tickets.map((ticket) => <TicketItem ticket={ticket}></TicketItem> )}
    </div>)
}