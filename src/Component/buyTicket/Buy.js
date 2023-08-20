import "./buy.css"

function Buy({state,account}){
    async function Buy(event){
        event.preventDefault();
        const{contract} = state;
        const id = document.querySelector("#Id").value;
        const Quantity = document.querySelector("#Quantity").value;
        try{
            await contract.methods.buyTicket(id,Quantity).send({from:account,value:1000000,gas:1000000})
        alert("Buying Successfull")


        }catch(error){
            alert(error)
        }




    }
    






    return<>
    <form onSubmit={Buy}>
   <label className="label1" htmlFor="Id">
   <span className="font">Id: </span>
        </label>
    <input type="text" id="Id" ></input>
    <br></br>

    <label className="label1" htmlFor="Quantity">
   <span className="font">Quantity: </span>
        </label>
    <input type="text" id="Quantity" ></input>
    <br></br>


    <button type="submit" className="button">Buy Ticket</button>
    </form>
    <br></br>
    </>
}

export default Buy;