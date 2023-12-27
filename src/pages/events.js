import { useState } from "react"
import { useRouter } from "next/router"

function EventList({eventList}){
    const [events,setEvents] = useState(eventList)
    const router = useRouter()
    console.log(eventList)
    const fetchSportsEvents = async () =>{
        const response = await fetch("http://localhost:4000/events?category=sports")
        const data = await response.json()
        setEvents(data)
        router.push("/events?category=sports",undefined,{shallow:true})
    }
    return(
        <div>
            <button onClick={fetchSportsEvents}>Sports Event</button>
            <p>This is from envent list</p>
            {
                events.map(event =>{
                    return(
                        <div id ={event.id}>
                            <p>{event.id}.{event.title}|{event.category}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EventList
export async function getServerSideProps(contex){
    const {query} = contex
    const {category} = query
    const queryString = category? 'category=sports':" "
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return{
        props : {
            eventList : data,
        }
    }
}