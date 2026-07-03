class ReviewParser:
    REWRITE_KEYWORDS = [
        "rewrite",
        "regenerate",
        "revision",
        "revise",
        "needs improvement",
    ]

    def should_rewrite(
        self,
        review: str,
    ) -> bool:

        review = review.lower()
        return any(keyword in review for keyword in self.REWRITE_KEYWORDS)
