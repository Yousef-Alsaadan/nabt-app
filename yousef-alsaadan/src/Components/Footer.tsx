import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#212121] text-[#F2F2F2] ibm-font">
      <div className="container mx-auto px-4">
        <div className="grid place-items-center px-4">
          <div className="line w-[80%] m-auto border-[#f2f2f22e] border"></div>
          <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 justify-between items-center w-full py-12">
            <div className="flex gap-12">
              <p className="cursor-pointer font-medium text-base">من نحن؟</p>
              <p className="cursor-pointer font-medium text-base">
                الشروط والأحكام
              </p>
              <p className="cursor-pointer font-medium text-base">
                الدعم الفني
              </p>
            </div>
            <div className="font-normal text-base">
              <p>
                جميع الحقوق محفوظة لمنصة{" "}
                <span className="font-bold cursor-pointer"> ساكورا</span> 2024 ©
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
