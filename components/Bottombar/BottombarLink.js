import Link from "next/link";

function BottombarLink({ IconDefault, ActiveIcon, linkText }) {
  return (
    <Link href="/">
      <a className="block w-full" >
        <div className="text-black pt-1.5 pb-2 cursor-pointer w-full flex items-center justify-center flex-col">
          <div className={`${!linkText && "icon_big"}`}>
            {IconDefault}
          </div>
          {linkText && (
            <span className="text-center block text-[10px]">{linkText}</span>
          )}
        </div>
      </a>
    </Link>
  );
}

export default BottombarLink;
