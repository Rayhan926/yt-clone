function MobileHeaderIcon({ IconCompo, ...props }) {
  return (
    <div {...props} className="flex justify-cente icon_style icon_mobile" >
      <IconCompo />
    </div>
  );
}

export default MobileHeaderIcon;
