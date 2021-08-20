import WatchScreen from "./../../components/Screen/WatchScreen";
import { useRouter } from "next/dist/client/router";
import Layout from "./../../components/Layout/Layout";
function dynamicVideoId() {
  const router = useRouter();
  return (
    <Layout withSideBarCollapse={true}>
      <WatchScreen videoId={router.query.videoId} />
    </Layout>
  );
}

export default dynamicVideoId;
