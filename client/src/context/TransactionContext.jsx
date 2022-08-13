import React , {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {contractAddress, contractAbi} from '../utils/constants';

export const TransactionContext =  React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.contract(contractAddress,contractAbi,signer);
    
}

export const TransactionProvider = ({children}) => {
const [currentAccount, setCurrentAccount] =useState();
const [isWalletConnected, setIsWalletConnected] = useState();

    const checkIfWalletIsConnected = async () => {
        if(!ethereum){
            alert("Please install metamask");
        }
        const accounts = await ethereum.request({method : 'eth_accounts'});
        console.log("Accounts checkIfWalletConnected",accounts.length);
        if(accounts.length !== 0){
            setIsWalletConnected(true);
            setCurrentAccount(accounts[0]);
        }
        console.log(isWalletConnected);
    }
    const connectWallet = async () => {
        try{
            if(!ethereum){
                alert("Please install metamask");
            }
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});
            console.log(accounts);
            setCurrentAccount(accounts[0]);
            setIsWalletConnected(true);
            console.log(currentAccount);
        }catch(e){
            console.log(e);
            throw new Error("No Ethereum Account");
        }
    }

    useEffect(()=>{checkIfWalletIsConnected()},[]);
    
    return (
    <TransactionContext.Provider value={{currentAccount,isWalletConnected,connectWallet,checkIfWalletIsConnected}}>
        {children}
    </TransactionContext.Provider>);
}
