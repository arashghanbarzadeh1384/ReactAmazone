import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooterData] = useState(null);
  const footerip = async () => {
    try {
      const footerData = await axios.get("https://arashprogramming.github.io/Jason-file/db.json")
      setFooterData(footerData.data.footer1);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    footerip();
  }, []);
  return (
    <>
      <div className="bg-[#364759] w-full text-white cursor-pointer hover:bg-blue-950">
        <h1 className="text-center text-[18wpx]">Back to top</h1>
      </div>
      <div className="bg-[#232f3f] flex py-[50px] px-[300px] gap-16 ">
        {footer?.map(item => {
          return (
            <div className="text-white leading-[30px]" key={item.id}>
              <h1 className="font-bold text-[18px]">{item.title}</h1>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text1}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text2}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text3}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text4}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text5}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text6}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text7}
              </p>
              <p className="text-[14px] hover:underline cursor-pointer">
                {item.text8}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
