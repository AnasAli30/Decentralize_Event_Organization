
function Transfer({state,account}){
    async function transfer(event){
        event.preventDefault();
        const {contract} = state;
        const Id = document.querySelector("#d").value;
        const Quantity = document.querySelector("#Q").value;
        const To = document.querySelector("#To").value;
        console.log(Id)
        console.log(Quantity)
        console.log(To)
        try{
        await contract.methods.transferTicket(Id,Quantity,To).send({from:account,gas:1000000});
        alert("Transfer Succesfull")
        window.location.reload()

        }catch(error){
            alert(error)
        }
    }






    return<>
    <form onSubmit={transfer}>
   <label className="label1" htmlFor="d">
   <span className="font">Id: </span>
        </label>
    <input type="text" id="d" ></input>
    <br></br>

    <label className="label1" htmlFor="Q">
   <span className="font">Quantity: </span>
        </label>
    <input type="text" id="Q" ></input>
    <br></br>

    <label className="label1" htmlFor="To">
   <span className="font">To: </span>
        </label>
    <input type="text" id="To" ></input>
    <br></br>


    <button type="submit" className="button">Transfer</button>
    </form>
    <br></br>
    </>
}

export default Transfer;