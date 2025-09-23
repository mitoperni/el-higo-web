import Icons from "../../ui/Icons";

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icons.Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-terracotta" : "text-gray-300"
          }`}
          filled={star <= rating}
        />
      ))}
    </div>
  );
};

export default StarRating;