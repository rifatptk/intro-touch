import close from '../../assets/icons/common/close.png';
import avatar from '../../assets/images/avatar.png';

const accountSettings = [
  { title: 'Reset Password', to: '' },
  { title: 'Manage Subscription', to: '' },
  { title: 'Partners/Influencers', to: '' },
  { title: 'Share', to: '' },
  { title: <span>IntroTouch Network &copy;</span>, to: '' },
  { title: 'How To Videos', to: '' },
];

const Sidebar = ({ closeSidebar }) => {
  return (
    <div id="sidebar">
      <div className="fixed top-0 left-0 bottom-0 w-[300px] px-6 py-4 text-white bg-brand-sea font-inter">
        <img
          src={close}
          alt=""
          title="Click to close"
          onClick={closeSidebar}
          className="w-6 ml-auto cursor-pointer hover:opacity-80"
        />

        <div className="text-center">
          <img
            src={avatar}
            alt=""
            className="w-[126px] h-[126px] rounded-full object-cover mx-auto my-3"
          />
          <h3 className="font-bold">John Wick</h3>

          <p className="font-light text-[12px]">
            (323) 716-9175 <br />
            (323) 399-7911 <br />
            (323) 567-5678
          </p>
          <p className="font-light text-sm">abc@abc.com</p>
        </div>

        <div className="text-sm font-light my-10 ml-10">
          <h4 className="font-bold">Account Settings</h4>

          <ul className="mt-2 leading-6">
            {accountSettings.map((el, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="rounded-full border-2 w-3 h-3"></div>
                <div>{el.title}</div>
              </li>
            ))}

            <li className="mt-10">Terms of use</li>
            <li>Privacy policy</li>
            <li className="mt-5">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
