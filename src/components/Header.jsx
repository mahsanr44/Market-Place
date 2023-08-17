import React, { useState } from "react";

const Header = () => {
  const [account, setAccount] = useState('');
  const connectHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => {
          console.log(account[0]);
          setAccount(account[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <div className="bg-gray-800 text-white flex justify-between px-5 py-4 items-center">
        <h1 className="text-2xl font-bold">NFT MarketPlace</h1>
        <button
          onClick={connectHandler}
          className="border-2 font-bold px-2 border-gray-600 rounded-md bg-red-600 p-1"
        >
          {account === "" ? "Conncect" : account.slice(0, 6)+("...") }
        </button>
      </div>
    </div>
  );
};

export default Header;
