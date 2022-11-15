import IconButton from '../../components/common/IconButton';
import employeeId from '../../assets/icons/info/employeeId.png';
import phonebook from '../../assets/icons/info/phonebook.png';

const ProfileDesc = () => {
  return (
    <>
      <div className="flex justify-between gap-5">
        <IconButton text="Save to Phone" icon={phonebook} />
        <IconButton
          text="Share my Details"
          icon={employeeId}
          className="bg-brand-sky"
        />
      </div>
      <p className="my-3 text-[14px] text-justify">
        I am a web developer at heart, but you can also count on me if you need
        to repair your gadgets!
      </p>
    </>
  );
};

export default ProfileDesc;
