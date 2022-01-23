import { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <span className="inline-flex ml-4 my-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        동네질문
      </span>
      <div className="flex mb-3 px-4 cursor-pointer items-center space-x-3 py-3  border-b">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
          <p className="text-xs font-medium text-gray-500">
            View Profile &rarr;
          </p>
        </div>
      </div>
      <div>
        <span className="flex mt-2 px-4 text-gray-700">
          <span className="text-orange-500 font-medium">Q.</span>What is the
          best mandu restaurant
        </span>
        <div className="flex space-x-5 px-2 mt-3 text-gray-700 py-2.5 border-t border-b-2 w-full">
          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>

      <div className="px-4 my-5 space-y-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-slate-300 rounded-full" />
          <div>
            <span className="text-sm block font-medium text-gray-700">
              Steve Jebs
            </span>
            <span className="text-xs text-gray-500 ">2시간 전</span>
            <p className="text-gray-700 mt-2">
              The best mandu restaurant is the one
            </p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <textarea
          rows={4}
          placeholder="Answer this question"
          className="mt-1 shadow-sm w-full focus:ring-2 focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
        <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
