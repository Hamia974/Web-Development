import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { state } = useLocation(); 
  const post = state;

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="max-w-3xl mx-auto p-10 text-center">
          <h1 className="text-3xl font-bold text-red-600">Blog not found</h1>
          <Link to="/blog" className="mt-6 inline-block bg-[#474769] text-white px-4 py-2 rounded-lg">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-[#474769] mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-4">{post.date}</p>
        <img src={post.image} alt={post.title} className="w-full h-[450px] rounded-lg shadow-lg mb-6" />
        <p className="text-lg text-gray-700 whitespace-pre-line">{post.content}</p>

        <div className="mt-8 text-center">
          <Link to="/blog" className="bg-[#474769] text-white px-6 py-3 rounded-lg hover:bg-[#373754] transition">
            ← Back to Blogs
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
