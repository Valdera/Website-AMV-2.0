import Image from "next/image";
import Link from "next/link";

const CardRobot = ({data}) =>{
    return(
        <div className="px-2 py-2 bg-gray-100">
            <a href="#">
                <img src={data.picture} className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 bg-gray-300">
                <a href="#" className="text-gray-900 hover:text-purple-700">{data.name}</a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
                {data.description}
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
                <a href="#" className="font-medium text-gray-900 hover:text-purple-700">Achievement• </a>
                {data.achievement}
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
                <a href="#" className="font-medium text-gray-900 hover:text-purple-700">Year of Production• </a>
                {data.year}
            </p>
        </div>
    );
};

export default CardRobot;