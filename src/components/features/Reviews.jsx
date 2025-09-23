import { useTranslation } from "react-i18next";
import Icons from "../ui/Icons";

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

const ReviewCard = ({ review }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-lg">
          {review.name ? review.name.charAt(0) : "A"}
        </div>
        <div className="ml-4">
          <h3 className="font-display font-semibold text-dark-text">
            {review.name || t("reviews.anonymous")}
          </h3>
          <p className="text-sm text-dark-text opacity-70 font-body">
            {review.date || t("reviews.recent")}
          </p>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <p className="text-dark-text leading-relaxed font-body">
        {review.comment}
      </p>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-dark-text opacity-60 font-body">
          <Icons.CheckCircle className="w-4 h-4 mr-1" />
          TripAdvisor / Google Reviews
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "María S.",
      rating: 5,
      comment: t("reviews.review1"),
      date: "TripAdvisor",
    },
    {
      name: "James P.",
      rating: 5,
      comment: t("reviews.review2"),
      date: "Google Reviews",
    },
    {
      name: "Carmen G.",
      rating: 5,
      comment: t("reviews.review3"),
      date: "TripAdvisor",
    },
  ];

  const averageRating = 5;

  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("reviews.title")}
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text mb-8 max-w-2xl mx-auto font-body">
            {t("reviews.subtitle")}
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center">
              <StarRating rating={Math.round(averageRating)} />
              <span className="ml-2 text-2xl font-display font-bold text-dark-text">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-dark-text font-body">
              Basado en {reviews.length} opiniones / Based on {reviews.length}{" "}
              reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-warm-beige to-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto border border-terracotta/20">
            <div className="mb-6">
              <h3 className="text-3xl font-display font-bold text-dark-text mb-2">
                {t("reviews.shareExperience")}
              </h3>
              <p className="text-dark-text/80 mb-6 font-body text-lg leading-relaxed">
                {t("reviews.reviewCallToAction")}
              </p>
            </div>
            <a
              href="https://www.tripadvisor.com/UserReviewEdit-g187441-d123456-El_Higo-Granada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Icons.Plus className="w-5 h-5 mr-3" />
              {t("reviews.writeReview")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
