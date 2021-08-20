import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function HeaderTagSkelenton() {
  return (
    <div>
      <SkeletonTheme color="#ececec" highlightColor="#d4d4d4">
        <Skeleton width={120} height={34} style={{ borderRadius: "200px" }} />
      </SkeletonTheme>
    </div>
  );
}

export default HeaderTagSkelenton;
