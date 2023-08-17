import React from "react";

const Mint = () => {
  return (
    <div>
      <form action="" className="flex flex-col justify-start items-center">
        {/* <div className=''>
            <label htmlFor="">Name</label>
        <input type="text" className='border-2 border-black' />
        </div>
        <div>
            <label htmlFor="">Price</label>
        <input type="text" className='border-2 border-black'  />
        </div>
        <div>
            <label htmlFor="">External Links</label>
        <input type="text" className='border-2 border-black'  />
        </div>
        <div>
            <label htmlFor="">Image</label>
        <input type="file" className=''  />
        </div> */}
        <div className="flex justify-center items-center mt-12 space-x-20">
          <div className="flex-col justify-center items-center space-y-4 ">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="px-3 text-black  font-bold pr-16 border-2  m-1 p-1"
              />
            </div>
            <div>
              <input
                type="price"
                placeholder="Price"
                className="px-3 text-black  font-bold pr-16  border-2 m-1 p-1"
              />
            </div>
            <div>
              <input
                type="links"
                placeholder="External Links"
                className="px-3 text-black  font-bold pr-16  border-2 m-1 p-1"
              />
            </div>
            <div>
              <input
                type="file"
                placeholder="Image"
                className="p-1 text-black  font-bold pr-16   "
              />
            </div>
            <div>
              <button className="border-2 rounded-md border-black bg-green-600 p-1 px-3 font-bold text-white mx-0.5">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mint;
