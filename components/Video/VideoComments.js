import Avatar from "../Avatar";
import { MdOutlineFilterList } from "react-icons/md";
import { useCallback, useEffect, useRef, useState } from "react";
import request from '../../api'
import parse from 'html-react-parser';
import moment from "moment";
import Linkify from 'react-linkify';


function VideoComments({ meta, videoId }) {
  const statis = meta?.statistics;
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(false)
  const [error, setError] = useState(false)
  const [nextPageToken, setNextPageToken] = useState(null)

  const commentFetcher = useCallback(
    () => {
      setLoadingComments(true)
      setError(false)

      request.get('commentThreads', {
        params: {
          part: 'snippet',
          videoId,
          ...(nextPageToken && { nextPageToken })
        }
      }).then(res => {
        setComments(prev => [...prev, ...res.data.items])
        setNextPageToken(res.data.items.nextPageToken)

      }).catch(err => {
        setError('Failed to load comments')
      }).finally(() => setLoadingComments(false))
    },
    [videoId],
  )

  useEffect(() => {
    if (!videoId) return;
    commentFetcher()
  }, [commentFetcher])

  const observer = useRef();
  const lastCommentElement = useCallback(
    (node) => {
      if (loadingComments) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          commentFetcher();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingComments]
  );

  return (
    <div className="pt-3.5 mt-2 ">
      <div className="flex items-center justify-between">
        <div>{statis?.commentCount} Comments</div>
        <div className="flex items-center text-base text-gray-500 cursor-pointer py-2 px-4 duration-150 hover:bg-gray-200">
          <MdOutlineFilterList />
          <span className="ml-2">Short By</span>
        </div>
      </div>

      {/* Add Comment */}
      <div className="mt-4">
        <form className="w-full">
          <div className="flex items-center">
            <div>
              <Avatar size={'36px'} src="/img/me.jpg" />
            </div>
            <div className="flex-grow ml-4">
              <input
                type="text"
                placeholder="Add your public comment.."
                className="border-b-2 w-full outline-none border-gray-200 focus:border-gray-600 text-gray-900 text-base py-[6px]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border-none outline-none px-4 h-full cursor-pointer duration-150 hover:bg-gray-900 hover:text-white py-[7px] bg-gray-200 text-black"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="mt-8">
        {comments?.map((comment, index) => (
          <div className="flex mb-5 last:mb-0" key={index} ref={comments.length === index + 1 ? lastCommentElement : undefined}>
            <div>
              <Avatar size={'36px'} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
            </div>
            <div className="ml-6 flex-grow">
              <div className="flex items-center">
                <h4 className="text-sm text-gray-900 mr-2 font-medium">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </h4>
                <span className="text-gray-500 text-xs">
                  {moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}
                </span>
              </div>
              <div className="mt-1.5">
                <p className="text-gray-700 text-base">
                  <Linkify>
                    {parse(comment.snippet.topLevelComment.snippet.textDisplay)}
                  </Linkify>
                </p>
              </div>
            </div>
          </div>
        ))}
        {
          loadingComments && <div className={`w-full py-14 text-center text-gray-800 bg-gray-50 text-xl font-semibold`} >Loading..</div>
        }
        {
          error && error
        }
      </div>
    </div>
  );
}

export default VideoComments;
