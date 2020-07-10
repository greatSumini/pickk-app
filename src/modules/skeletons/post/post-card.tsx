import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {rem} from '@src/constants';

const {Item} = SkeletonPlaceholder;

export default function PostCardWideReivewSkeleton() {
  return (
    <SkeletonPlaceholder>
      <Item marginBottom={20}>
        <Item width={rem(360)} height={203} />
        <Item marginLeft={12} marginTop={16}>
          <Item width={180} height={6} />
          <Item marginTop={16} width={140} height={6} />
        </Item>
        <Item marginLeft={12} marginTop={20} flexDirection='row'>
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
          <Item width={54} height={54} borderRadius={27} marginRight={12} />
        </Item>
      </Item>
    </SkeletonPlaceholder>
  );
}
