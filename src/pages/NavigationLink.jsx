import { Link } from "react-scroll";

const NavigationLink = ({ to, icon: Icon, tooltip }) => {
  return (
    <div className="dark:text-white dark:border-white">
      <Link
        to={to}
        className="text-2xl cursor-pointer tooltip hover:bg-[#041C93] text-[#041C93] hover:text-white dark:hover:border-none dark:border-none dark:text-dark dark:hover:bg-dark dark:hover:text-white bg-white border-[1px] border-solid p-[10px] border-[#041C93] tooltip-left rounded-full"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        data-tip={tooltip}
      >
        <Icon />
      </Link>
    </div>
  );
};

export default NavigationLink;
