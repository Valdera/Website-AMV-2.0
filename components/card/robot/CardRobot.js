import { Badge, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";

const CardRobot = ({ data }) => {
  return (
    <div className="relative block bg-white rounded-lg hover:shadow-sm hover:shadow-primary-400">
      {/* <button
        type="button"
        name="wishlist"
        className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button> */}

      <Image
        loading="lazy"
        alt="Build Your Own Drone"
        className="object-contain w-full h-56 lg:h-72"
        src="https://www.hyperui.dev/photos/toy-1.jpeg"
      />

      <div className="p-6">
        <div className="flex gap-2">
          <Badge p={1} colorScheme={"green"}>
            New
          </Badge>
          <Badge p={1} colorScheme={"purple"}>
            Drone
          </Badge>
        </div>

        <h5 className="mt-4 text-lg font-bold">Makara Pumpkin Mark I</h5>

        <p className="mt-2 text-sm font-medium text-gray-600">
          Singapore Autonomous Underwater Vehicle
        </p>

        <button
          name="add"
          type="button"
          className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
        >
          <span className="text-sm font-medium mr-1">View Details</span>
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default CardRobot;
