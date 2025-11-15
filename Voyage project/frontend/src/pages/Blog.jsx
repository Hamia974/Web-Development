import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from "react-router-dom"; // ✅ Add this

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Must-Visit Destinations in 2025",
      date: "September 10, 2025",
      image: "/destinations.jpg",
      desc:
        "Discover the hottest travel destinations of 2025. From tropical beaches to snowy mountains, these places should be on your bucket list.",
      content: `🌍 2025 is full of amazing destinations! Some highlights include:
      - Bali for beaches & wellness
      - Switzerland for snow and adventure
      - Japan for cherry blossoms
      - Egypt for ancient wonders
      Make sure to plan early and book ahead for the best experience.`,
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      date: "August 22, 2025",
      image: "/budget.jpg",
      desc:
        "Traveling doesn't have to be expensive! Learn budget-friendly hacks to save money while still enjoying your trip to the fullest.",
      content: `💸 Budget travel tips:
      - Use budget airlines & book early
      - Stay in hostels or Airbnbs
      - Eat local street food
      - Use public transportation
      - Travel in groups to split costs`,
    },
    {
      id: 3,
      title: "Cultural Experiences You Can't Miss",
      date: "July 5, 2025",
      image: "/culture.jpg",
      desc:
        "Immerse yourself in local traditions, cuisines, and festivals around the world. Here's how to experience cultures authentically.",
      content: `🥘 Experience cultures fully by:
      - Attending local festivals
      - Taking cooking classes
      - Visiting traditional markets
      - Staying with local families
      - Respecting traditions & customs`,
    },
    {
      id: 4,
      title: "Best Beach Destinations for Honeymoon",
      date: "June 14, 2025",
      image: "/beach.jpg",
      desc:
        "Planning your honeymoon? Check out these breathtaking beach destinations where romance meets paradise.",
      content: `💖 Romantic beaches include:
      - Maldives for overwater villas
      - Bora Bora for luxury stays
      - Seychelles for quiet paradise
      - Hawaii for sunsets & volcano hikes
      - Santorini for white & blue romance`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-5xl font-bold text-center text-[#474769] mb-6">
          Voyage Blog
        </h1>
        <p className="text-center text-[#474769] max-w-2xl mx-auto mb-12">
          Get inspired with the latest travel stories, guides, and tips from our
          experts to make your journey unforgettable.
        </p>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-[#474769]/50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 bg-center bg-cover bg-no-repeat"
              />
              <div className="p-6 flex flex-col gap-3 text-[#474769]">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.desc}</p>
                {/* ✅ Link instead of button */}
                <Link
                  to={`/blog/${post.id}`}
                  state={post} // send post data
                  className="px-4 py-2 bg-[#474769] text-white w-[200px] m-auto rounded-lg hover:bg-[#474769]/80 transition text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
