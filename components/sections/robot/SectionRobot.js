import CardRobot from "@components/cards/robot/CardRobot";

const SectionRobot = ({data}) => {
    return(
        <div>
            <div>
                <h2 className="p-4 text-3xl text-center font-sans font-bold tracking-tight sm:text-4xl leading-tight text-white bg-gray-900">
                    {data.robotType}
                </h2>
                <p className="p-2 mb-5 text-lg text-center font-bold text-white bg-gray-700">
                    {data.robotDescription}
                </p>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-5">
                    {data.robots.map((data) =>{
                        return <CardRobot key={data.name} data={data}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default SectionRobot;
