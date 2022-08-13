import React , {useContext} from 'react';
import {TransactionContext} from '../context/TransactionContext';

const Welcome = ()=> {
    const {connectWallet,currentAccount,isWalletConnected} = useContext(TransactionContext);
    
    return (
        <>
        <p>{isWalletConnected ?currentAccount :  <button type="button" onClick={connectWallet}> Connect Wallet</button>}</p>
        <form>
        <input type="text"
        step="0.0001"
        placeholder= "Enter Address" />
        <input type="number"
        step="0.0001"
        placeholder= "Enter ETH" />
        <input type="message"
        step="0.0001"
        placeholder= "Enter Message" />
        <input type="submit" value="submit" onClick={alert("hello")}/>
        </form>
        </>
    )
}

export default Welcome;