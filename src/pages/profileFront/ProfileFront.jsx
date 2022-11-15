import React from 'react';

import Container from '../../components/common/Container';

import ProfileDesc from '../../components/profile/ProfileDesc';
import TechCards from '../../components/techCards/TechCards';
import Button from '../../components/common/Button';
import ProfileHeader from '../../components/profile/ProfileHeader';

const ProfileFront = () => {
  return (
    <div id="profileFront">
      <Container>
        <div className="relative font-inter w-full min-h-screen md:min-h-0 md:h-[792px] overflow-auto [&::-webkit-scrollbar]:hidden bg-white">
          <ProfileHeader />
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
