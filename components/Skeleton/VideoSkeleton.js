import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function VideoSkeleton({ layoutHorizontal, className }) {
  return (
    <div className={`${className || ''} leading-[0]`}>
      <SkeletonTheme color="#ececec" highlightColor="#d4d4d4">
        <div className={`${layoutHorizontal ? 'grid grid-cols-[45%,auto]' : ''}`} >
          <Skeleton height={layoutHorizontal ? 113 : 145} style={{ borderRadius: "0px" }} />
          <div className={`${!layoutHorizontal ? 'mt-3' : ''} flex`}>
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
