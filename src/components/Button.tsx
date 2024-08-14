
const Button = ({content,type,onClick}:{
  content:string,
  type: "button" | "submit" | "reset" | undefined ,
  onClick? : () => void

}) => {
  return (
    <button
      type={type}
      className="bg-charcoalGrey text-white w-full rounded-lg flex items-center justify-center py-4
        hover:bg-gradient-to-r from-tomato to-[#FF673E] ease-in duration-2900 transition-all
        "
        onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button