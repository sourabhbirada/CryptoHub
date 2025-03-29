import Info from "./Aboutinfo";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">This is the About Page</h1>
      <h2 className="text-2xl text-gray-500 mb-6">Under Construction</h2>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <Info
          name={"Sourabh"}
          github={"sourabh-github"}
          insta={"sourabh-insta"}
        />
      </div>
    </div>
  );
};

export default About;
