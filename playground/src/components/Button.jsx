export default function Button({ title, className, click }) {
  return (
    <div
      className={`flex items-center justify-center border border-[#717377] rounded-full shadow-sm shadow-[#71737780] hover:shadow-lg transition-shadow duration-200 ${className} font-bold`}
      onClick= {click}
    >
      {title}
    </div>
  );
}
