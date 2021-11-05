function BottombarLink({ IconDefault, ActiveIcon, linkText }) {
  return (
    <div className="text-black pt-[3px] pb-1 cursor-pointer w-full flex items-center justify-center flex-col">
      <div className={`${!linkText && "icon_big"}`}>
        {IconDefault}
      </div>
      {linkText && (
        <span className="text-center block text-[10px]">{linkText}</span>
      )}
    </div>
  );
}

export default BottombarLink;
