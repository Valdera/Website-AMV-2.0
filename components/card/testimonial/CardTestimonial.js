import { Avatar, Badge } from "@chakra-ui/react";
import { mockData } from "./CardTestimonial.mock";

const CardTestimonial = ({ data = mockData }) => {
  return (
    <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
      <div>
        <Avatar size="xl" name={data.name} src={data.image} />
        <div className="mt-4">
          <p className="text-2xl font-bold text-secondary-500 sm:text-3xl">
            {data.name}
          </p>
          <p className="mt-4 font-body leading-relaxed text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
      <footer className="mt-8 text-sm text-secondary-500">
        <Badge mr="2" colorScheme="green">
          {data.tag}
        </Badge>
        &mdash; {data.name}
      </footer>
    </blockquote>
  );
};

export default CardTestimonial;
