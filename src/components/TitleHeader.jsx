const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-blue-50 font-medium border border-white/[0.06] bg-white/[0.02] rounded-full">
        {sub}
      </span>
      <h2 className="font-semibold md:text-4xl text-2xl text-center text-gradient">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
