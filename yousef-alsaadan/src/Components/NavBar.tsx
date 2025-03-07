import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [mobileBtn, setMobileBtn] = useState<string>("hidden");

  const handleClick = () =>
    setMobileBtn(
      "block absolute top-0 left-0 right-0 h-screen place-content-center bg-[#DEDEDE]"
    );
  return (
    <div className="absolute w-full">
      <div className="navbar container mx-auto px-4 justify-between ibm-font">
        {/*list links */}
        <div className="lg:w-1/2 w-full md:block hidden">
          <ul className="flex w-2/3 justify-between items-center px-1 text-[#212121] font-medium text-lg">
            <li className="cursor-pointer hover:text-[#FAFAFA]">
              <p>المميزات</p>
            </li>
            <li className="cursor-pointer hover:text-[#FAFAFA]">
              <p>خدماتنا</p>
            </li>
            <li className="cursor-pointer hover:text-[#FAFAFA]">
              <p>الأسعار</p>
            </li>
            <li className="cursor-pointer hover:text-[#FAFAFA]">
              <p>المصورين</p>
            </li>
          </ul>
        </div>

        {/*burger icon*/}
        <div className="md:hidden block z-10">
          <div className="flex-none">
            <button onClick={handleClick} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/*logo*/}
        <div className="z-10">
          <p className="cursor-pointer text-xl">
            <svg
              width="17"
              height="24"
              viewBox="0 0 17 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.69263 0.693193C4.91693 0.861671 3.20353 1.80732 2.03011 3.27471C-0.965732 7.03015 0.207684 12.6497 4.42887 14.7367C5.46729 15.253 6.30841 15.416 7.91796 15.416C9.1433 15.416 9.35618 15.4486 9.61059 15.6715C10.2181 16.2095 9.99481 17.1986 9.21599 17.4215C9.0758 17.4595 7.60125 17.4812 4.50675 17.4812H0V20.6334V23.791L5.05192 23.7693C9.57425 23.753 10.135 23.7421 10.4621 23.6606C12.0976 23.2475 13.4372 22.3997 14.4029 21.1715C15.7944 19.3943 16.324 17.166 15.8878 14.9323C15.3946 12.3997 13.6085 10.291 11.2513 9.46493C10.4102 9.17145 9.94289 9.10624 8.46314 9.07363C7.09761 9.04102 6.98338 9.02471 6.72897 8.79102C6.56802 8.64428 6.43821 8.31276 6.43821 8.05189C6.43821 7.6008 6.74455 7.16602 7.15472 7.04645C7.27933 7.01384 8.76947 6.99211 11.3863 6.99211H15.4206V3.81276V0.633411L11.3084 0.638845C9.04465 0.644279 6.96781 0.671453 6.69263 0.693193Z"
                fill="#FAFAFA"
              />
            </svg>
          </p>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={mobileBtn}>
        <ul className="flex flex-col justify-evenly items-center px-1 text-[#212121] font-medium text-lg h-full">
          <li className="cursor-pointer hover:text-[#FAFAFA]">
            <p>المميزات</p>
          </li>
          <li className="cursor-pointer hover:text-[#FAFAFA]">
            <p>خدماتنا</p>
          </li>
          <li className="cursor-pointer hover:text-[#FAFAFA]">
            <p>الأسعار</p>
          </li>
          <li className="cursor-pointer hover:text-[#FAFAFA]">
            <p>المصورين</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
