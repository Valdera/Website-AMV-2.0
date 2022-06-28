import CardMember from "@components/cards/member/CardMember";

const SectionMember = ({ data }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
          {data.division}
        </p>
        <p className="text-base text-gray-700 md:text-lg">{data.description}</p>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        {data.members.map((data) => {
          console.log(data);
          return <CardMember key={data.name} data={data} />;
        })}
      </div>
    </div>
  );
};

export default SectionMember;
