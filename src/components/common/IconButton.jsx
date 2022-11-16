const IconButton = ({ onclick, text, className, icon }) => {
  return (
    <button
      className={`bg-brand-brown w-full flex gap-2 items-center text-white font-[300] rounded-[5px] font-inter px-4 py-[10px] hover:opacity-95 ${className}`}
      onClick={onclick}
    >
      <img src={icon} alt="" className="w-[18px]" />
      <span className="text-[12px]">{text}</span>
    </button>
  );
};

export default IconButton;
