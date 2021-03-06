import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className=" py-10 divide-y-[1px]">
      {[1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="flex mb-3 px-4 cursor-pointer items-center space-x-3 py-3"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">
              See you tomorrow in the corner at 2px
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
