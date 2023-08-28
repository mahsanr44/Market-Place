import React from 'react'

const Mint = () => {
    // * STATES
    const [formObj, setFormObj] = React.useState({name: '', description: '', price: '', externalLink: '', image: ''});

    const [loading, setLoading] = React.useState(false);

    let API_KEY = '52ef3948677443f1acce';
    let API_SECRET = '4a7fbb05018163761615dcf630a964cd60aca2f61429ebfe70147b782f3b3d43';

    const onChangeHandler = (e) => {
        setFormObj({...formObj, [e.target.name]: e.target.value})
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        // ! pushing data to pinata
        let data = {
            name: formObj.name,
            description: formObj.description,
            external_url: formObj.externalLink,
            image: 'nft.png'
        }

        const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';

        let body = JSON.stringify(data);

        setLoading(true);

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'pinata_api_key': API_KEY,
              'pinata_secret_api_key': API_SECRET
            },
            body
          })
          .then(res => res.json())
          .then(result => console.log(result))
          .catch(err => console.log(err));
        // fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'pinata_api_key': API_KEY,
        //         'pinata_secret_api_key': API_SECRET
        //     },
        //     body
        // })
        // .then((res) => {
        //     return res.json();
        // }
        // )
        // .then((data) => {
        //     setLoading(false);
        //     console.log(data);
        // }
        // )
        // .catch((err) => {
        //     setLoading(false);
        //     console.log(err);
        // }
        // )
    };
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <form onSubmit={onSubmitHandler}  className='flex justify-center items-center flex-col bg-slate-300 w-80'>
            <div className='my-2'>
                <label htmlFor=''>Name</label>
                <input type='text' name="name" value={formObj.name} onChange={onChangeHandler} />
            </div>
            <div className='my-2'>
                <label htmlFor=''>Description</label>
                <input type='text' name="description" value={formObj.description} onChange={onChangeHandler}/>
            </div>
            <div className='my-2'>
                <label htmlFor=''>Price</label>
                <input type='text'name="price" value={formObj.price} onChange={onChangeHandler} />
            </div>
            <div className='my-2'>
                <label htmlFor=''>External Links</label>
                <input type='text' name="externalLink" value={formObj.externalLink} onChange={onChangeHandler}/>
            </div>
            <div>
                <label htmlFor=''>Image</label>
                <input type='file' name="image" value={formObj.image} onChange={onChangeHandler}/>
            </div>
            <div className='my-2 w-full'>
                <button className='bg-red-500 w-full'>
                    {
                        loading ? 'Loading...' : 'Mint'
                    }
                </button>
            </div>
        </form>
    </div>
  )
}

export default Mint