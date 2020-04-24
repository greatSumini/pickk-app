export type ShortReviewContentType = {
  recommendReason: string;
  shortReview: string;
  userInfo: {
    profileImageUrl: string;
    name: string;
  };
};

type SpeechBubbleProps = {
  data: ShortReviewContentType;
};
export default SpeechBubbleProps;
