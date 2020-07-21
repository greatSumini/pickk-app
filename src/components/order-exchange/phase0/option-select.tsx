import React, {useEffect, useState} from 'react';

import {useItemOptions} from '@src/hooks/Item';
import {Product} from '@src/types';
import {isEqualArray} from '@src/lib/utils';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {REGULAR_GREY, rem, BLACK} from '@src/constants';
import Picker from '@src/modules/atoms/picker';
import {Space} from '@src/modules/atoms';

export type OrderExchangeOptionSelectProps = {
  itemId: number;
  setExchangeProduct: React.Dispatch<
    React.SetStateAction<Product & {id: number}>
  >;
};

export default function ExchangeOptionSelect(
  props: OrderExchangeOptionSelectProps,
) {
  const {itemId, setExchangeProduct} = props;
  const [options, setOptions] = useState({});

  const {data: itemOptions} = useItemOptions(itemId);

  const handleOptionChange = (name: string, value: any) => {
    const newOptions = {
      ...options,
      [name]: value,
    };
    setOptions(newOptions);
    if (Object.values(newOptions).every((value) => value !== '')) {
      const {products} = itemOptions;
      const productId = Object.keys(products).find((id) =>
        isEqualArray(products[id].values, Object.values(newOptions)),
      );
      setExchangeProduct({
        id: Number(productId),
        ...products[productId],
      });
    }
  };

  useEffect(() => {
    if (itemOptions) {
      setOptions(
        Object.keys(itemOptions.options.values).reduce((acc, curr) => {
          return {...acc, [curr]: ''};
        }, {}),
      );
    }
  }, [itemOptions]);

  if (!itemOptions) return <></>;

  const {values} = itemOptions.options;
  return (
    <Section title='교환 옵션' size={SectionSize.Small}>
      {Object.keys(values).map((valueName) => (
        <>
          <Picker
            key={valueName}
            value={options[valueName]}
            style={{
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: rem(12),
              paddingVertical: rem(8),
              paddingHorizontal: rem(12),
              borderWidth: rem(1),
              borderColor: REGULAR_GREY,
              borderRadius: rem(8),
            }}
            placeholder={{
              label: valueName,
              value: '',
              color: REGULAR_GREY,
            }}
            items={values[valueName].map((value) => {
              return {label: value, value: value, color: BLACK};
            })}
            onChange={(value) => handleOptionChange(valueName, value)}
          />
          <Space level={1} />
        </>
      ))}
    </Section>
  );
}
