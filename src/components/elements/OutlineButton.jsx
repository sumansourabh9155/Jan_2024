
const OutlineButton = ({ text1, text2 = "" }) => {
  return (
    <div className="border border-white/20 rounded-full max-w-fit flex items-center justify-center gap-2 px-5 py-2 hover:bg-white/5 transition-all backdrop-blur-md cursor-pointer">
      <p className="text-white text-sm font-medium">{text1}</p>
      {text2 && (
        <div className="bg-[#C2E12F] rounded-md px-2 py-0.5 text-xs font-semibold">
          <p className="text-black">{text2}</p>
        </div>
      )}
    </div>
  );
};

export default OutlineButton;
