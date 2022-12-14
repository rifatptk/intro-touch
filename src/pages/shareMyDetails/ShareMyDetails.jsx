import Container from '../../components/common/Container';
import avatar from '../../assets/images/avatar.png';
import Input from '../../components/common/Input';
import Textarea from '../../components/common/Textarea';
import Button from '../../components/common/Button';
import Brand from '../../components/common/Brand';

const ShareMyDetails = () => {
  return (
    <div id="shareMyDetails">
      <Container>
        <div className="relative font-inter w-full min-h-screen sm:min-h-0 sm:h-[calc(100vh-48px)] overflow-auto [&::-webkit-scrollbar]:hidden bg-brand-brown p-7 ">
          <Brand />

          <div className="w-fit mx-auto my-5">
            <img
              src={avatar}
              alt=""
              className="w-[126px] h-[126px] object-cover rounded-full"
            />
            <h1 className="text-base font-bold text-center text-white mt-[12px]">
              John Wick
            </h1>
          </div>

          <form className="space-y-3">
            <Input type="text" id="name" placeholder="Name" />
            <Input type="email" id="email" placeholder="email" />
            <Input type="tel" id="number" placeholder="Number" />
            <Input type="text" id="company" placeholder="Company" />
            <Textarea id="note" placeholder="Note" />
            <Button text="Submit" onClick={(e) => e.preventDefault()} />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ShareMyDetails;
