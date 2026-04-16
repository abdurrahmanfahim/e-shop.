import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layouts/Container";
import LongArrow from "../icons/LongArrow";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const categories = ["All", "Technology", "Reviews", "News", "Guides"];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Gaming Laptops: What to Expect in 2024",
      excerpt:
        "Discover the latest trends and innovations shaping the gaming laptop industry this year.",
      image: "./images/blog/gaming-laptop.jpg",
      category: "Technology",
      author: "John Smith",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Complete Buyer's Guide: Choosing Your Perfect Smartphone",
      excerpt:
        "Everything you need to know before purchasing your next smartphone in 2024.",
      image: "./images/blog/smartphone-guide.jpg",
      category: "Guides",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "NexSUS ROCK Strix Scar 17 Review: Gaming Beast Unleashed",
      excerpt:
        "In-depth review of the latest gaming powerhouse that's taking the market by storm.",
      image: "./images/blog/laptop-review.jpg",
      category: "Reviews",
      author: "Mike Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Tech News Roundup: Latest Industry Updates",
      excerpt:
        "Stay updated with the most important tech news and product launches this week.",
      image: "./images/blog/tech-news.jpg",
      category: "News",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "How to Optimize Your Home Office Setup for Productivity",
      excerpt:
        "Essential tips and product recommendations for creating the perfect workspace.",
      image: "./images/blog/home-office.jpg",
      category: "Guides",
      author: "David Wilson",
      date: "March 5, 2024",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Wireless Audio Revolution: Best Headphones of 2024",
      excerpt:
        "Compare the top wireless headphones and find your perfect audio companion.",
      image: "./images/blog/headphones.jpg",
      category: "Reviews",
      author: "Lisa Brown",
      date: "March 3, 2024",
      readTime: "7 min read",
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(1, visibleCount + 1);
  const hasMore = visibleCount + 1 < filteredPosts.length;
  const featuredPost = blogPosts[0];

  return (
    <Container>
      <div className="py-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="flex gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6 mb-8 lg:mb-12">
          <span>Home</span> <span>|</span>
          <span className="font-bold">Blog</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-black font-poppins font-semibold leading-8 lg:leading-[46px] text-2xl lg:text-4xl mb-4">
            Latest News & Insights
          </h1>
          <p className="font-montserrat text-base lg:text-xl leading-6 lg:leading-[30px] text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest technology trends, product reviews, and
            expert insights from our team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 lg:mb-20">
          <div className="relative bg-gray-100 rounded-[25px] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-96 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/sliderSmall.png'; }}
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-green text-white text-sm font-semibold rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="font-poppins text-xl lg:text-3xl font-semibold leading-7 lg:leading-10 text-black mb-4">
                  {featuredPost.title}
                </h2>
                <p className="font-montserrat text-sm lg:text-base leading-6 text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to={`/blog`}
                  className="flex items-center gap-3 font-montserrat text-sm lg:text-base font-bold text-green hover:underline w-fit"
                >
                  Read More <LongArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 lg:gap-4 mb-8 lg:mb-12 justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-montserrat text-sm lg:text-base font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-15p overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 lg:h-56 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/sliderSmall.png'; }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-green text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-lg lg:text-xl font-semibold leading-6 lg:leading-7 text-black mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-montserrat text-sm lg:text-base leading-5 lg:leading-6 text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs lg:text-sm text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs lg:text-sm text-gray-500">
                    {post.date}
                  </span>
                  <Link
                    to="/blog"
                    className="text-green font-semibold text-sm hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          {hasMore ? (
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="px-8 lg:px-12 py-3 lg:py-4 bg-green text-white font-montserrat font-semibold rounded-10p hover:opacity-90 transition-all"
            >
              Load More Posts
            </button>
          ) : (
            <p className="font-montserrat text-sm text-black/40">All posts loaded.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
