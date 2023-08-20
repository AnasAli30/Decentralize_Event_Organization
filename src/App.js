
import './App.css'
import { useState,useEffect } from 'react';
import Web3 from "web3";

import EventContract from "./contracts/EventContract.json"

import Buy from './Component/buyTicket/Buy';

import Transfer from './Component/transfer/Transfer';

import Create from './Component/CreateEvent/createEvent';
function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  const [balance,setBalance]= useState(0)
  useEffect(() => {
    async function init() {
      const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = EventContract.networks[networkId];
      const contract = new web3.eth.Contract(
        EventContract.abi,
        deployedNetwork.address
      );
     
      setState({ web3: web3, contract: contract });
    }
    init();
  }, []);

  useEffect(() => { // account change
    const { web3 } = state;
    const allAccounts = async () => {
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [state]);
  const selectAccount = async () => {
    let selectedAccountAddress = document.getElementById("selectNumber").value;

    if (
      selectedAccountAddress &&
      selectedAccountAddress !== "Choose an account"
    ) {
      setAccount(selectedAccountAddress);
    }
  };
  
//code for account balance

useEffect(()=>{
  const {contract} = state;
  async function funds(){
    const fund = await contract.methods.nextId().call();
    setBalance(fund);
  }
  contract && funds();
},[state])

  return (<>
    <div className="App">
    <h1>Decentralize Event Organization</h1>
    <p className="font">Connected Account: {account}</p>
    <p className="font">Total Available Events: {balance}</p></div>
    <form className="label0" id="myForm">
        <label htmlFor=""></label>
        <select className="innerBox" id="selectNumber" onChange={selectAccount}>
          <option align="center">Choose an account</option>
        </select>
      </form>
    <Create state={state} account = {account}></Create>
      <Buy state={state} account = {account}></Buy>
      <Transfer state={state} account = {account}  ></Transfer>
      
  

     
    
    </>   
    


  );
}

export default App;
