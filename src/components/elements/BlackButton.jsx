
const BlackButton = ({ text1, text2 = "" }) => {
  return (
    <div className="flex items-center gap-2 max-w-fit px-5 py-2 rounded-full bg-white text-black hover:bg-gray-100 border border-white/10 transition-all cursor-pointer">
      <p className="text-sm font-medium">{text1}</p>

      {text2 && (
        <div className="bg-[#d6f928] text-black text-xs font-semibold rounded-md px-2 py-0.5">
          {text2}
        </div>
      )}
    </div>
  );
};

export default BlackButton;
