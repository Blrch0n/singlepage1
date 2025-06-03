const section11Data = [
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-2.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-1.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-3.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-4.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-5.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-6.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-7.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-8.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
];
const Section11 = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full bg-white h-fit flex flex-col">
        <h3>team</h3>
        <h2>Our People</h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p>Our creative people, designers and developers</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  bg-white text-black">
        {section11Data.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-[420px] w-full justify-center text-center p-4"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-gray-600">{data.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section11;
