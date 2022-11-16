import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import ProfileHeader from '../../components/profile/ProfileHeader';
import TechCards from '../../components/techCards/TechCards';
import edit from '../../assets/icons/common/edit.png';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div id="dashboard">
      <Container>
        <div className="relative font-inter w-full min-h-screen sm:min-h-0 sm:h-[calc(100vh-48px)] overflow-auto [&::-webkit-scrollbar]:hidden bg-white">
          <ProfileHeader
            showSidebar={showSidebar}
            setshowSidebar={setshowSidebar}
            showMenu
          />
          <div className="p-8 mt-10 ">
            <div>
              <div className="flex gap-1 items-center justify-end">
                <span className="text-[12px] font-[300]">Edit</span>
                <img src={edit} alt="" className="h-6 cursor-pointer" />
              </div>

              <p className="text-sm text-justify mb-7 font-[300]">
                I am a web developer at heart, but you can also count on me if
                you need to repair your gadgets!
              </p>
            </div>
            <TechCards edit />

            <div className="mt-4 pb-20 ">
              <div className="mb-5">
                <p className=" text-center text-brand-dark-gray">
                  www.yourwebsite.com
                </p>
                <div className="flex gap-1 items-center justify-end -mt-5">
                  <span className="text-[12px] font-[300]">Edit</span>
                  <img src={edit} alt="" className="h-6 cursor-pointer" />
                </div>
              </div>
              <Button text="Update" className="bg-brand-dark-brown" />
            </div>
          </div>
          <Navbar />
        </div>
      </Container>
      {showSidebar && <Sidebar closeSidebar={() => setshowSidebar(false)} />}
    </div>
  );
};

export default Dashboard;
