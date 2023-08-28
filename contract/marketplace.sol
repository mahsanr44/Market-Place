// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract InAppMarketplace{
    // * define owner
    address public owner;
    string public baseUri;
    uint256 public token;

    // * metadata based on token id
    struct metadata{
        string uri;
        uint256 price;
        address c_owner;
        uint256 token;
    }

    // * collections
    mapping(uint256 => metadata) public collection;

    constructor(string memory _baseUri) {
        owner = msg.sender;
        baseUri = _baseUri;
    }

    // * access modifier
    modifier _ownerOnly() {
        require(owner == msg.sender, "Caller is not the owner");
        _;
    }

    // * transfer Ownership --> _onlyowner
    function transferOwnership(address _address) public _ownerOnly{
        owner = _address;
    }

    function modifyBaseUri(string memory _baseUri) public _ownerOnly{
        baseUri = _baseUri;
    }

    // * mint nft --> _onlyowner
    function mint(uint256 _price) public _ownerOnly{
        collection[token] = metadata({
            uri: baseUri,
            price: _price,
            c_owner: msg.sender,
            token:token
        });

        token += 1;
    }

    // * listing all nfts
    function list() public view returns(metadata[] memory)
    {
        uint256 collectionSize = token;
        metadata[] memory items = new metadata[](collectionSize);

        for(uint256 i = 0; i < collectionSize; i++){
            items[i] = collection[i];
        }

        return items;
    }

    // * buy nft 
    function buy(uint256 _token) public payable{
        require(collection[_token].price == msg.value, "Price is not matched");
        collection[_token].c_owner = msg.sender;
    }

}