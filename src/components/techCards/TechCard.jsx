import edit from '../../assets/icons/common/edit.png';

const TechCard = ({ data, edit: editable }) => {
  return (
    <div id="techCard">
      <div className="flex justify-between items-center">
        <div className="ml-5 bg-brand-light-gray rounded-t-[5px] w-fit px-5 py-1 text-[12px]">
          {data.title}
        </div>
        {editable && (
          <div className="flex gap-1 items-center cursor-pointer">
            <span className="text-[12px] font-[300]">Edit</span>

            <img src={edit} alt="" className="h-6" />
          </div>
        )}
      </div>
      <div className="border rounded-[8px] shadow grid gap-4 grid-cols-5 p-4">
        {data.brands?.map((brand, i) => (
          <img src={brand} key={i} className="h-[44px]" />
        ))}
      </div>
    </div>
  );
};

export default TechCard;
