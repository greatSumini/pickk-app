import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import HomeIcon from '@src/assets/icons/home';
import ChevronRight from '@src/assets/icons/chevron/right';
import CommunityIcon from '@src/assets/icons/community-user';
import SubscriptionIcon from '@src/assets/icons/subsription';
import NotificationIcon from '@src/assets/icons/notification';
import RankIcon from '@src/assets/icons/ranking';
import LogoutIcon from '@src/assets/icons/logout';
import HeartIcon from '@src/assets/icons/heart';
import PostIcon from '@src/assets/icons/post';
import colors from '@src/constants/colors';
import {height} from '@src/constants/dimensions';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Space from '@src/modules/atoms/space';
import IconText from '@src/modules/molecules/icon-text';

const ICON_SIZE = rem(16);

type DrawerItemProps = {
  Icon: React.ElementType;
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  fillIn?: string;
  borderBottom?: boolean;
  notifyCount?: number;
};

const DrawerItems: DrawerItemProps[] = [
  {
    Icon: NotificationIcon,
    label: '알림함',
    onPress: () => {},
    notifyCount: 10,
  },
  {
    Icon: CommunityIcon,
    label: '내 커뮤니티 활동',
    borderBottom: true,
    onPress: () => {},
  },
  {
    Icon: SubscriptionIcon,
    label: 'My구독',
    onPress: () => {},
  },
  {
    Icon: HeartIcon,
    label: 'My핔',
    borderBottom: true,
    fillIn: colors.white,
    onPress: () => {},
  },
  {
    Icon: HomeIcon,
    label: '홈',
    onPress: () => {},
  },
  {
    Icon: PostIcon,
    label: '포스트',
    onPress: () => {},
  },
  {
    Icon: RankIcon,
    label: '아이템',
    onPress: () => {},
  },
];

export default function Drawer(props) {
  // userData는 리덕스를 통해 받는다
  const userData = {
    name: '진진호',
    profileImageUrl:
      'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2019120843772457122281.jpg',
  };

  return (
    <Wrapper>
      <UserData userData={userData} />
      {DrawerItems.map((item: DrawerItemProps, index) => (
        <DrawerItem
          key={index}
          Icon={item.Icon}
          label={item.label}
          borderBottom={item.borderBottom}
          fillIn={item.fillIn}
          onPress={item.onPress}
          notifyCount={item.notifyCount}
        />
      ))}

      {userData && (
        <DrawerItem
          Icon={LogoutIcon}
          label='로그아웃'
          onPress={() => {}}
          style={{position: 'absolute', bottom: 0}}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: height,
});

const ProfileImg = styled.Image({
  width: rem(36),
  height: rem(36),
  borderRadius: rem(18),
});

const ProfileNone = styled.View({
  width: rem(36),
  height: rem(36),
  borderRadius: rem(18),
  backgroundColor: colors.secondary,
});

const DrawerItemTouchable = styled(TouchableCmp)({
  width: '100%',
  height: rem(40),
});

const DrawerItemContent = styled.View<{borderBottom?: boolean}>(props => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: rem(40),
  paddingLeft: rem(24),
  paddingVertical: rem(12),
  borderBottomWidth: props.borderBottom ? rem(1) : 0,
  borderBottomColor: colors.lightGrey,
}));

const UserDataTouchable = styled(TouchableCmp)({
  width: '100%',
  height: rem(72),
});

const UserDataWrapper = styled.View({
  width: '100%',
  height: rem(72),
  paddingTop: rem(24),
  paddingHorizontal: rem(24),
  paddingBottom: rem(12),
  flexDirection: 'row',
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

const UserDataText = styled.View({});
const Name = styled(Text)({});

const NotifyCount = styled.View({
  paddingVertical: rem(2),
  paddingHorizontal: rem(6),
  backgroundColor: colors.notify,
  marginRight: rem(12),
  borderRadius: rem(16),
});

const UserData = ({userData}: {userData: any}) => {
  if (userData) {
    return (
      <UserDataTouchable>
        <UserDataWrapper>
          <ProfileImg source={{uri: userData.profileImageUrl}} />
          <Space direction='ROW' level={1} />
          <UserDataText>
            <Name color={colors.primary} level={1}>
              {userData.name}
            </Name>
            <Space direction='COL' size={rem(1)} />
            <IconText
              Icon={ChevronRight}
              width={rem(12)}
              height={rem(12)}
              fill={colors.secondary}
              textColor={colors.secondary}
              content='내 채널가기'
              space={rem(2)}
              order='Text'
            />
          </UserDataText>
        </UserDataWrapper>
      </UserDataTouchable>
    );
  } else {
    return (
      <UserDataTouchable>
        <UserDataWrapper>
          <ProfileNone />
          <Space direction='ROW' level={1} />
          <Text
            color={colors.secondary}
            style={{alignSelf: 'center'}}
            level={2}>
            로그인 해주세요
          </Text>
        </UserDataWrapper>
      </UserDataTouchable>
    );
  }
};

const DrawerItem = ({
  onPress,
  borderBottom,
  Icon,
  fillIn,
  label,
  notifyCount,
  style,
}: DrawerItemProps) => {
  return (
    <DrawerItemTouchable onPress={onPress}>
      <DrawerItemContent borderBottom={borderBottom} style={style}>
        <IconText
          Icon={Icon}
          width={ICON_SIZE}
          height={ICON_SIZE}
          fillIn={fillIn}
          space={rem(32)}
          content={label}
        />

        {notifyCount && (
          <NotifyCount>
            <Text level={-1} color={colors.white}>
              {notifyCount}
            </Text>
          </NotifyCount>
        )}
      </DrawerItemContent>
    </DrawerItemTouchable>
  );
};
