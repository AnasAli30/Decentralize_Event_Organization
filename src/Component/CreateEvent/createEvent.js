
function Create({state,account}){
    async function create(event){
        event.preventDefault();
        const {contract} = state;
        const EventName = document.querySelector("#EventName").value;
        const time = document.querySelector("#time").value;
        const Price = document.querySelector("#Price").value;
        const TotalTicket = document.querySelector("#TotalTicket").value;
        try{
            await contract.methods.createEvent(EventName,time,Price,TotalTicket).send({from:account,gas:1000000})
        alert("Event Created SuccesFull")
        window.location.reload()
        }catch(error){
            alert(error)
        }


    }







    return<>
    <form onSubmit={create}> 
   <label className="label1" htmlFor="EventName">
   <span className="font">Event Name: </span>
        </label>
    <input type="text" id="EventName" ></input>
    <br></br>

    <label className="label1" htmlFor="time">
   <span className="font">time: </span>
        </label>
    <input type="text" id="time" ></input>
    <br></br>

    <label className="label1" htmlFor="Price">
   <span className="font">Price: </span>
        </label>
    <input type="text" id="Price" ></input>
    <br></br>

    <label className="label1" htmlFor="TotalTicket">
   <span className="font">Total Ticket: </span>
        </label>
    <input type="text" id="TotalTicket" ></input>
    <br></br>


    <button type="submit" className="button">Create Event</button>
    </form>
    <br></br>
    </>
}

export default Create;