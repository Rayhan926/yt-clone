import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function VideoSkeleton() {
  return (
    <div>
      <SkeletonTheme color="#ececec" highlightColor="#d4d4d4">
        <Skeleton height={145} style={{ borderRadius: "0px" }} />
        <div className="mt-3 flex">
          <Skeleton circle width={35} height={35} />
          <div className="ml-3 w-full">
            <Skeleton
              height={20}
              style={{
                width: "100%",
                borderRadius: "0px",
                marginBottom: "4px",
              }}
            />
            <Skeleton
              height={20}
              style={{ width: "80%", borderRadius: "0px" }}
            />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default VideoSkeleton;
