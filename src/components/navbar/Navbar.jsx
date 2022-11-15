import home from '../../assets/icons/nav/home.png';
import user from '../../assets/icons/nav/user.png';
import chart from '../../assets/icons/nav/chart.png';
import qr from '../../assets/icons/nav/qr.png';
import Navlink from './Navlink';

const navlinks = [
  { title: 'Home', icon: home, to: '' },
  { title: 'User', icon: user, to: '' },
  { title: 'Analytics', icon: chart, to: '' },
  { title: 'Products', icon: qr, to: '' },
];

const Navbar = () => {
  return (
    <div
      id="navabar"
      className="fixed sm:sticky bottom-0 left-0 right-0 bg-brand-brown flex justify-around p-3"
    >
      {navlinks.map((link, i) => (
        <Navlink data={link} key={i} />
      ))}
    </div>
  );
};

export default Navbar;
