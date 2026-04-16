import { useContext, useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import AuthContext from "../contexts/AuthContext";
import api from "../api/api";

const ProductDetailsAcc = ({ productData, productId }) => {
  const { user } = useContext(AuthContext);
  const [activeAccordion, setActiveAccordion] = useState("specification");
  const [reviews, setReviews] = useState(productData.Reviews || []);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return;
    setSubmitting(true);
    try {
      await api.post(`/products/${productId}/reviews`, { rating, comment });
      setReviews((prev) => [...prev, { user: user.name, rating, comment, date: new Date().toLocaleDateString() }]);
      setRating(0); setComment(""); setMsg("Review submitted!");
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  const tabs = ["description", "specification", "return", "reviews"];

  return (
    <div>
      <ul className="flex gap-4 sm:gap-8 lg:gap-12 font-poppins text-sm sm:text-lg lg:text-2xl font-semibold leading-[30px]">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer capitalize ${activeAccordion === tab ? "text-black" : "text-[#CBCBCB]"}`}
            onClick={() => setActiveAccordion(tab)}
          >
            {tab}
            <span className={`w-full h-1 ${activeAccordion === tab ? "bg-green" : "bg-transparent"} block mt-2`} />
          </li>
        ))}
      </ul>

      <div className="flex pt-6 lg:pt-12">
        {activeAccordion === "description" && (
          <p className="text-black text-base lg:text-xl leading-[26px] lg:leading-[30px] font-montserrat capitalize">
            {productData.Description}
          </p>
        )}

        {activeAccordion === "specification" && (
          <ul className="flex flex-col gap-4 xl:gap-8 xl:flex-wrap xl:max-h-[430px] w-full">
            {productData.Specification.map((item) => (
              <li key={item.name} className="text-black text-base lg:text-xl leading-[26px] lg:leading-[30px] flex flex-col sm:flex-row">
                <h4 className="w-full sm:w-[170px] shrink-0 capitalize mb-1 sm:mb-0"><b>{item.name}</b></h4>
                <p className="font-montserrat w-full lg:w-[560px]">{item.value}</p>
              </li>
            ))}
          </ul>
        )}

        {activeAccordion === "return" && (
          <div>
            <h2 className="text-xl font-semibold mb-4 font-poppins">Return Policy</h2>
            <div className="rounded-lg text-black text-base lg:text-xl leading-[26px] lg:leading-[30px] font-montserrat">
              {productData.Return}
            </div>
          </div>
        )}

        {activeAccordion === "reviews" && (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-6 font-poppins">Reviews ({reviews.length})</h2>

            {/* existing reviews */}
            {reviews.length > 0 ? (
              <ul className="space-y-4 mb-8">
                {reviews.map((review, idx) => (
                  <li key={idx} className="p-4 lg:p-6 rounded-lg border border-[#EBEBEB]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-base text-black">{review.user}</span>
                      <span className="flex">
                        {[...Array(5)].map((_, i) =>
                          i < review.rating
                            ? <MdOutlineStar key={i} className="text-yellow" />
                            : <MdOutlineStarBorder key={i} className="text-[#CBCBCB]" />
                        )}
                      </span>
                      <span className="text-xs text-black/40 ml-auto">{review.date}</span>
                    </div>
                    <p className="text-black text-base font-montserrat">{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-montserrat text-black/50 text-base mb-8">No reviews yet. Be the first!</p>
            )}

            {/* submit form */}
            {user ? (
              <form onSubmit={handleSubmitReview} className="border-t border-[#EBEBEB] pt-6">
                <h3 className="font-poppins text-lg font-semibold mb-4">Write a Review</h3>

                {/* star rating */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      className="text-2xl"
                    >
                      {star <= (hovered || rating)
                        ? <MdOutlineStar className="text-yellow" />
                        : <MdOutlineStarBorder className="text-[#CBCBCB]" />}
                    </button>
                  ))}
                </div>

                <textarea
                  className="w-full font-montserrat text-base text-black rounded-10p px-4 py-3 border border-[#CBCBCB] mb-4 outline-none resize-none"
                  rows={4}
                  placeholder="Share your experience with this product..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                {msg && <p className={`font-montserrat text-sm mb-3 ${msg.includes("Failed") ? "text-red-500" : "text-green"}`}>{msg}</p>}

                <button
                  type="submit"
                  disabled={submitting || !rating || !comment.trim()}
                  className="px-8 py-3 bg-green text-white font-montserrat font-bold rounded-10p disabled:opacity-50 hover:opacity-90 transition-all"
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            ) : (
              <div className="border-t border-[#EBEBEB] pt-6">
                <p className="font-montserrat text-base text-black/60">
                  <a href="/login" className="text-green font-bold underline">Login</a> to write a review.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsAcc;
