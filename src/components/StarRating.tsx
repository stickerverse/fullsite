
import React from 'react';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const Star: React.FC<{ filled: boolean, half: boolean }> = ({ filled, half }) => {
  const color = "#00B67A";
  if (half) {
    return (
        <div className="relative w-6 h-6">
            <svg viewBox="0 0 24 24" className="w-full h-full absolute" fill="#DCDCE6"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg viewBox="0 0 24 24" className="w-full h-full absolute" fill={color} style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        </div>
    )
  }
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill={filled ? color : "#DCDCE6"}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return <Star key={index} filled={starValue <= rating} half={rating > index && rating < starValue} />;
      })}
    </div>
  );
};

export default StarRating;
