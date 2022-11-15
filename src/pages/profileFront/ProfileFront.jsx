import React from 'react';
import Brand from '../../components/common/Brand';
import Container from '../../components/common/Container';
import share from '../../assets/icons/common/share.png';
import ProfileCard from '../../components/profile/ProfileCard';
import ProfileDesc from '../../components/profile/ProfileDesc';
import TechCards from '../../components/techCards/TechCards';
import Button from '../../components/common/Button';

const ProfileFront = () => {
  return (
    <div id="profileFront">
      <Container>
        <div className="relative font-inter w-full min-h-screen md:min-h-0 md:h-[792px] overflow-auto [&::-webkit-scrollbar]:hidden bg-white">
          <div className="bg-brand-dark-gray p-8 h-[246px]">
            {/* header */}
            <div className="flex justify-between items-center">
              <Brand />
              <div className="">
                <img src={share} alt="" className="w-[34px] ml-auto" />
                <p className="text-white text-[11px] m-0">Share Profile</p>
              </div>
            </div>
            {/* card */}
            <ProfileCard />
          </div>

          <div className="p-8 mt-10 ">
            <ProfileDesc />

            <TechCards edit={false} />

            <div className="my-4 ">
              <p className="mb-5 text-center text-brand-dark-gray">
                www.yourwebsite.com
              </p>
              <Button
                text="Create your Profile"
                className="bg-brand-dark-brown"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileFront;
