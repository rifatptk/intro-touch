import React from 'react';
import Brand from '../../components/common/Brand';
import Container from '../../components/common/Container';
import share from '../../assets/icons/common/share.png';
import ProfileCard from '../../components/profile/ProfileCard';
import ProfileDesc from '../../components/profile/ProfileDesc';
import TechCards from '../../components/techCards/TechCards';

const ProfileFront = () => {
  return (
    <div id="profileFront">
      <Container>
        <div className="relative font-inter w-full min-h-screen md:min-h-0 md:h-[792px] bg-white">
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
            <TechCards />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileFront;
