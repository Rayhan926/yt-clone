import HeaderTags from "./../Header/HeaderTags";
function MainScreen({ children, withTopCategory }) {
  return (
    <div className="h-full flex flex-col w-full max-w-full overflow-hidden border-t border-gray-200">
      {withTopCategory && (
        <div className="hidden sm:block">
          <HeaderTags />
        </div>
      )}
      <div
        className="sm:px-5 p_y w-full h-full overflow-auto thin_scrollbar"
        id="scrollableDiv"
      >
        {children}
      </div>
    </div>
  );
}

export default MainScreen;
