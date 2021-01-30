import { createContext } from "react";
import { Review } from "../type/review";

type ReviewContext = {
  reviews: Review[];
  setReviews: (review: Review[]) => void;
};

export const ReviewContext = createContext<ReviewContext>({
  reviews: [],
  setReviews: () => {},
});
