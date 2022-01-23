import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function VideoSkeleton({ layoutHorizontal, className, gridClass = '', height = 113 }) {
  return (
    <div className={`${className || ''} leading-[0]`}>
      <SkeletonTheme color="#ececec" highlightColor="#d4d4d4">
        <div className={`${layoutHorizontal ? 'grid grid-cols-[45%,auto]' : ''} ${gridClass}`} >
          <Skeleton height={layoutHorizontal ? height : 168} style={{ borderRadius: "0px" }} />
          <div className={`${!layoutHorizontal ? 'mt-3 px-4 md:px-0' : ''} flex`}>
            {!layoutHorizontal && <Skeleton circle width={35} height={35} />}
            <div className="ml-3 w-full">
              <Skeleton
                height={20}
                style={{
                  width: "100%",
                  borderRadius: "0px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                height={20}
                style={{ width: "80%", borderRadius: "0px", }}
              />
              {
                layoutHorizontal && (
                  <Skeleton
                    height={20}
                    style={{ width: "65%", borderRadius: "0px", marginTop: "10px", }}
                  />
                )
              }
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default VideoSkeleton;
