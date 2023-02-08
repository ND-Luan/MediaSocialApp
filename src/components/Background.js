import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScrollView as RNScrollView} from 'react-native';

function Background({
  padding = 10,
  flex,
  gap = 10,
  borderWidth,
  backgroundColor = 'white',
  horizontalScroll,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  justifyContent,
  alignItems,
  children,
  indexSticky,
}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RNScrollView
        //horizontal={horizontalScroll}
        //showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        //showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        stickyHeaderIndices={[indexSticky]}
        style={{
          backgroundColor: backgroundColor,
        }}
        contentContainerStyle={[
          {
            flex: flex,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: gap,
            padding: padding,
            borderWidth: borderWidth,
          },
        ]}>
        {children}
      </RNScrollView>
    </SafeAreaView>
  );
}

export default Background;
