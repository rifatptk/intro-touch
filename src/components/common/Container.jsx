const Container = ({ children }) => {
  return (
    <div className="w-full sm:max-w-[510px] mx-auto sm:rounded-[20px] overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
