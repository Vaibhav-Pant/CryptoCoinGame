// UserDetail.js
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const UserDetail = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAccountDetails = async () => {
      try {
        // if (!window.ethereum) {
        //   alert("MetaMask is not installed!");
        //   setTerms(false);
        // }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const account = accounts[0];
        const balance = await provider.getBalance(account);

        setAccount(account);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error fetching account details:", error);
        setError(error.message);
      }
    };

    loadAccountDetails();
  }, []);

  return { account, balance, error };
};

export default UserDetail;
