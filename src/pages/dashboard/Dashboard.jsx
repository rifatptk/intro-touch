import React from 'react';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import ProfileHeader from '../../components/profile/ProfileHeader';
import TechCards from '../../components/techCards/TechCards';
import edit from '../../assets/icons/common/edit.png';

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Container>
        <div className="relative font-inter w-full min-h-screen md:min-h-0 md:h-[792px] overflow-auto [&::-webkit-scrollbar]:hidden bg-white">
          <ProfileHeader showMenu />
          <div className="p-8 mt-10 ">
            <div>
              <div className="flex gap-1 items-center justify-end ">
                <span className="text-[12px] font-[300]">Edit</span>
                <img src={edit} alt="" className="h-6" />
              </div>

              <p className="text-sm text-justify mb-7 font-[300]">
                I am a web developer at heart, but you can also count on me if
                you need to repair your gadgets!
              </p>
            </div>
            <TechCards edit />

            <div className="my-4 ">
              <div className="mb-5">
                <p className=" text-center text-brand-dark-gray">
                  www.yourwebsite.com
                </p>
                <div className="flex gap-1 items-center justify-end -mt-5">
                  <span className="text-[12px] font-[300]">Edit</span>
                  <img src={edit} alt="" className="h-6" />
                </div>
              </div>
              <Button text="Update" className="bg-brand-dark-brown" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
