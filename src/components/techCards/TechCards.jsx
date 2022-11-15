import addressbook from '../../assets/icons/brands/addressbook.png';
import appleMail from '../../assets/icons/brands/appleMail.png';
import appleMessage from '../../assets/icons/brands/appleMessage.png';
import maps from '../../assets/icons/brands/maps.png';
import applePhone from '../../assets/icons/brands/applePhone.png';
import calendly from '../../assets/icons/brands/calendly.png';
import neon from '../../assets/icons/brands/neon.png';

import facebook from '../../assets/icons/brands/facebook.png';
import instagram from '../../assets/icons/brands/instagram.png';
import linkedin from '../../assets/icons/brands/linkedin.png';
import whatsapp from '../../assets/icons/brands/whatsapp.png';
import youtube from '../../assets/icons/brands/youtube.png';
import pinterest from '../../assets/icons/brands/pinterest.png';
import behance from '../../assets/icons/brands/behance.png';
import tictok from '../../assets/icons/brands/tictok.png';
import twitter from '../../assets/icons/brands/twitter.png';

import cashapp from '../../assets/icons/brands/cashapp.png';
import venompay from '../../assets/icons/brands/venompay.png';
import paypal from '../../assets/icons/brands/paypal.png';

import TechCard from './TechCard';

const data = [
  {
    title: 'Get in Touch',
    brands: [
      addressbook,
      appleMail,
      appleMessage,
      maps,
      applePhone,
      calendly,
      neon,
    ],
  },
  {
    title: 'Social Links',
    brands: [
      facebook,
      instagram,
      linkedin,
      whatsapp,
      youtube,
      pinterest,
      behance,
      tictok,
      twitter,
    ],
  },
  {
    title: 'Payment Links',
    brands: [cashapp, venompay, paypal],
  },
];

const TechCards = ({ edit }) => {
  return (
    <div id="techCards" className="space-y-7">
      {data.map((el, i) => (
        <TechCard data={el} key={i} edit={edit} />
      ))}
    </div>
  );
};

export default TechCards;
