


// const blogPosts = [
//   {
//     title: "Difference Between UI/UX",
//     description:
//       "UI is what the user sees and interacts with, while UX is the overall experience...",
//     category: "UI/UX",
//     image: uiux,
//     link: "https://www.instagram.com/p/Cou2nJ2v9th/",
//   },
//   {
//     title: "Emotion created by Color",
//     description:
//       "Warm tones like red evoke passion, love, and energy, while cool blues bring calmness...",
//     category: "Color",
//     image: color,
//     link: "https://www.instagram.com/p/Cq0mVv4JklS/",
//   },
//   {
//     title: "Emotion conveyed by Fonts",
//     description:
//       "Bold, uppercase fonts may express strength and urgency, while cursive scripts evoke elegance...",
//     category: "Fonts",
//     image: fonts,
//     link: "https://www.instagram.com/p/Co5OwmeStTR/",
//   },
// ];

const Blog = () => {
  return (
    <div className="container__wrapper">
      {/* <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-32">
        <p className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Design Systems
        </p>
        <h2 className="text-sm md:text-md font-light text-center text-gray-600 py-2 pb-10">
          Crafting intuitive, accessible, and visually compelling designs.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <Link
              to={post.link}
              target="_blank"
              key={index}
             
            >
              <div className="rounded-xl ">
                <img
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="pt-3">
                  <p className="text-lg font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                  <Underlinebutton text1="Click to visit" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer /> */}
    </div>
  );
};

export default Blog;
