import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { LiaFlagUsaSolid } from "react-icons/lia";
const Header = () => {
  const [menu, setMenu] = useState(null);
  const menuData = async () => {
    try {
      const menuRespone = await axios.get("http://localhost:3000/menu");
      setMenu(menuRespone.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    menuData();
  }, []);

  return (
    <>
      <div className="bg-[#121921] w-[100%] h-[55px] text-white flex items-center px-4 gap-4 font-bold">
        <div className="w-[40%] text-righ flex justify-center items-center">
          <img className="mt-2 hover:border-2 border-white p-1 " src="../../../public/image/AmazonLogo.png" width="100" height="100" alt="" />
          <a className="ml-[50px] hover:border-2 border-white p-1" href="#">
            Iran, Islamic Rep...
          </a>
        </div>
        <input
          type="text"
          placeholder="Search Amazon"
          className="w-[55%] h-[35px] p-2 ml-[55px] text-black bg-white rounded-md"
        />
        <div className="h-[50px] w-[45%] flex justify-center items-center ml-[25px]">
          <div className="flex justify-center items-center hover:border-2 border-white p-2">
            <LiaFlagUsaSolid className="text-[20px] text-white" />
            <a href="#" className="">
              En
            </a>
          </div>
          <div className="   hover:border-2  border-white flex flex-col leading-[5px] ml-[35px]">
            <a className="text-[11px]" href="#">
              Hello, sign in
            </a>
            <a className="text-base font-bold" href="#">
              Account & Lists
            </a>
          </div>
          <div className=" hover:border-2 border-white p-1 flex flex-col leading-[5px] ml-[35px]">
            <a className="text-[11px]" href="#">
              Returns
            </a>
            <a className="text-base font-bold" href="#">
              & Orders
            </a>
          </div>
        </div>
        <div className=" p-1 hover:border-2 border-white flex justify-center items-center ">
          <FaCartArrowDown className="text-[40px] cursor-pointer " />
          <p className="ml-[10px]">Cart</p>
        </div>
      </div>
      <div className="bg-[#232f3f] flex w-[100%] h-[35px] text-white gap-[15px] items-center">
        <div className="flex justify-center items-center hover:border-2  border-white">
          <CiMenuBurger className="font-extrabold text-[30px] ml-2.5 text-white" />
          <a className="font-bold ml-1" href="#">
            All
          </a>
        </div>
        {menu?.map(item => {
          return (
            <div key={item.id}>
              <a className="hover:border-2 p-2 border-white" href="#">
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
