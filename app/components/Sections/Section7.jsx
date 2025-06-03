const section7Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs-vertical.jpg",
    title: "STRATEGY",
    description:
      "Enside allows you to build a fully functional and feature rich onepage WordPress site, whatever your agency or business, without any knowledge of coding.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/man-laughtig.jpg",
    title: "INSIGHT",
    description:
      "Effortlessly beautiful, Enside offers a collection of pre-built demos, with one-click import, and you can make your site your own using WP Bakery for WordPress.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/interior-fashion.jpg",
    title: "EXPERIENCE",
    description:
      "We’ve created a wide selection of stunning and powerful demos so that you can find the best starting point for your personal, business or agency website.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs.jpg",
    title: "PERFORMANCE",
    description:
      "The admin panel invites you to get creative and make your site unique in seconds. You get to choose how your users engage with you and your business.",
  },
];
const Section7 = () => {
  return (
    <div>
      <div className="w-[50%]  h-fit flex flex-col">
        <h3>Unique services</h3>
        <h2>Our Approach</h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p>We offer custom solutions to industry leading companies</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 p-8 bg-white text-black">
        {section7Data.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-[25px] pb-[25px] pt-[100px] justify-center bg-cover bg-center text-center p-4"
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          >
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
