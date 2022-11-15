import avatar from '../../assets/images/avatar.png';
import phone from '../../assets/icons/info/phone.png';
import mobile from '../../assets/icons/info/mobile.png';
import telephone from '../../assets/icons/info/telephone.png';

const numbers = [
  { icon: phone, number: '(3231 716-9175' },
  { icon: mobile, number: '(3231 399-7911' },
  { icon: telephone, number: '(3231 567-5678' },
];

const ProfileCard = () => {
  return (
    <div className="w-full shadow-xl h-[196px] flex justify-between items-center bg-black my-4 rounded-[10px] overflow-hidden">
      <img src={avatar} alt="" className="h-full" />

      <div className="w-[160px] text-white font-inter font-[300] p-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-[14px]">John Wick</h3>
          <p className="text-[12px]">Web Developer</p>
        </div>

        <div>
          {numbers.map((num, i) => {
            return (
              <div key={i} className="flex items-center gap-1 ">
                <img src={num.icon} alt="" className="w-[10px] h-[10px]" />
                <small className="text-[12px]">{num.number}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
