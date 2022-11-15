import share from '../../assets/icons/common/share.png';
import menu from '../../assets/icons/common/menu.png';
import ProfileCard from './ProfileCard';
import Brand from '../../components/common/Brand';

const ProfileHeader = ({ showMenu }) => {
  return (
    <div className="bg-brand-dark-gray p-8 h-[246px]">
      {/* header */}
      <div className="flex justify-between items-center">
        <Brand />
        <div className="flex items-center gap-4">
          {showMenu && <img src={menu} alt="" className="h-[22px]" />}

          <div>
            <img src={share} alt="" className="w-[34px] ml-auto" />
            <p className="text-white text-[11px] m-0">Share Profile</p>
          </div>
        </div>
      </div>
      {/* card */}
      <ProfileCard />
    </div>
  );
};

export default ProfileHeader;
