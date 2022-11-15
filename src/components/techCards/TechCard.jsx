const TechCard = ({ data }) => {
  return (
    <div id="techCard">
      <div className="ml-5 bg-brand-light-gray rounded-t-[5px] w-fit px-5 py-1 text-[12px]">
        {data.title}
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
