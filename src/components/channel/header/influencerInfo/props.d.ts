type InfluenceInfoProps = {
  data: {
    name: string;
    profileImageUrl: string;
    channel_pickCount: number;
    channel_titleImageUrl: string;
    channel_totalViewCount: number;
    channel_description: string;
  };
  edit: boolean;
};

export default InfluenceInfoProps;
