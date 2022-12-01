import React, {useRef, useState} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import colors from 'tailwindcss/colors';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import Card from './Card';
import {Account} from 'domain/entities/Account';

const {width} = Dimensions.get('screen');

type AccountSelectorListProps = {
  accounts: Account[];
  onAccountSelected(accountId: number): void;
};

type CarouselAccountItem = {
  item: Account;
  index: number;
};

const AccountSelectorList = ({
  accounts,
  onAccountSelected,
}: AccountSelectorListProps) => {
  const carousel = useRef<Carousel<Account>>(null);
  const [slideActiveIndex, setSlideActiveIndex] = useState(0);

  const onAccountIndexChange = (index: number) => {
    setSlideActiveIndex(index);
    const account = accounts[index];
    onAccountSelected(account.id);
  };

  return (
    <View className="py-6">
      <Carousel
        layout="default"
        ref={carousel}
        data={accounts}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideShift={0}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        useScrollView={true}
        loop={false}
        autoplay={false}
        onSnapToItem={index => onAccountIndexChange(index)}
        renderItem={({item}: CarouselAccountItem) => (
          <Card
            name={item.name}
            balance={item.balanceText}
            cardNumber={item.cardNumber}
          />
        )}
      />
      <Pagination
        dotsLength={accounts.length}
        activeDotIndex={slideActiveIndex}
        containerStyle={styles.paginationContainer}
        dotColor="#e5a134"
        dotStyle={styles.dot}
        inactiveDotColor={colors.gray[500]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
        carouselRef={carousel}
        tappableDots={!!carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {paddingVertical: 14},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    marginHorizontal: 4,
  },
});

export default AccountSelectorList;
