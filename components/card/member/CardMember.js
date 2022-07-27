import { Image, Link } from "@chakra-ui/react";
import { mockMember } from "./CardMember.mock";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const CardMember = ({ data = mockMember }) => {
  return (
    <div className="flex flex-col justify-center hover:shadow-lg duration-150 hover:shadow-primary-400 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
      <Image
        alt=""
        className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
        src={data.picture}
      />
      <div className="flex-1 my-4">
        <p className="text-xl font-semibold leading-snug">{data.name}</p>
        <p className="text-secondary-700">{data.position}</p>
        <p className="text-xs text-gray-500">{data.major}</p>
      </div>
      <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
        {data.linkedIn && (
          <Link
            rel="noopener noreferrer"
            href={data.linkedIn}
            title="LinkedIn"
            className="text-gray-900 hover:text-secondary-500"
            isExternal
          >
            <BsLinkedin />
          </Link>
        )}
        {data.instagram && (
          <Link
            rel="noopener noreferrer"
            href={data.instagram}
            title="Instagram"
            className="text-gray-900 hover:text-secondary-500"
            isExternal
          >
            <BsInstagram />
          </Link>
        )}

        {data.github && (
          <Link
            rel="noopener noreferrer"
            href={data.github}
            title="Github"
            className="text-gray-900 hover:text-secondary-500"
            isExternal
          >
            <BsGithub />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardMember;
