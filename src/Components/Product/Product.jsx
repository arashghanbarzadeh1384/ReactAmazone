import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState(null);

  const productData = async () => {
    try {
      const productApi = await axios.get("https://arashghanbarzadeh1384.github.io/Jason-file/db.json");
      setProduct(productApi.data.Product);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <div className="w-full grid grid-cols-4 gap-6 p-4  md:grid-cols-4 sm:grid-cols-2 ">
      {product?.map(item => (
        <div
          className="bg-white shadow-lg rounded-xl p-4 md:w-[95%] sm:w-[95%] ml-2"
          key={item.id}>
          <h1 className="text-lg font-semibold mb-2">{item.name}</h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full h-auto">
              <img src={item.imgUrl1} alt="" className="w-full h-auto " />
              <p className="text-sm sm:text-sm text-gray-600">{item.cap}</p>
            </div>
            <div>
              <img src={item.imgUrl2} alt="" className="w-full h-auto" />
              <p className="text-sm sm:text-sm text-gray-600">{item.cap2}</p>
              <p className="text-[12px] sm:text-[12px] text-gray-600">{item.cap20}</p>
            </div>
            <div>
              <img src={item.imgUrl3} alt="" className="w-full h-auto  " />
              <p className="text-sm sm:text-sm text-gray-600">{item.cap3}</p>
            </div>
            <div>
              <img src={item.imgUrl4} alt="" className="w-full h-auto  " />
              <p className="text-sm sm:text-sm text-gray-600">{item.cap4}</p>
            </div>
          </div>
          <img className="" src={item.imgUrl} alt="" />
          <a href="#" className="block mt-3 text-[#a1c5e7] hover:text-blue-600">
            {item.Link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Product;
