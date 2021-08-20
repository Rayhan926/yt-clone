function MobileHeaderIcon({ IconCompo }) {
  return (
    <div className="p-1 flex justify-center text-black items-center rounded-full overflow-hidden duration-200 hover:text-gray-800 cursor-pointer">
      <IconCompo />
    </div>
  );
}

export default MobileHeaderIcon;
