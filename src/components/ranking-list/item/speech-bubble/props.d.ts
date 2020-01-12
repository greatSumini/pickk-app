export type ShortReviewContentType = {
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
