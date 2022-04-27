export var reviewsDataSet = {
  reviews: [
    {
      reviewId: 31,
      userId: 38,
      user: "filip97",
      productId: 265,
      comment: "the product was allright, everything cool",
      rating: 5
    },
    {
      reviewId: 367,
      userId: 38,
      user: "filip97",
      productId: 265,
      comment: "actually it is bvery bad",
      rating: 2
    },
    {
      reviewId: 37,
      userId: 412,
      user: "Marcin Wroński",
      productId: 341,
      comment: "the product was complete",
      rating: 4
    },
    {
      reviewId: 4,
      userId: 321,
      user: "anetaz123",
      productId: 126,
      comment: "the product was complete trash, didn’t work and", // everythinh was dirtye lorem impsum ltiwo ojczyzno moja tyu jestss jak zdrowie ile cie trzerba cenic ten tylko sie dowie, kto cie stracil dzis peiknosc twa w calej ozdboie widze i opisuje bo tesknie po tobie",
      rating: 1
    },
    {
      reviewId: 784,
      userId: 5674,
      user: "peterson34",
      productId: 653,
      comment: "doeasnt work",
      rating: 1
    },
    {
      reviewId: 104,
      userId: 45698,
      user: "filipus76",
      productId: 93,
      comment: "doesnt work, but the box was nice",
      rating: 2
    }
  ]
};

export function getReviewsData() {
  let reviewsMap = new Map();

  reviewsDataSet.reviews.forEach((review) => {
    reviewsMap.set(review.reviewId.toString(), review);
  });

  return reviewsMap;
}
