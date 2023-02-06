import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScrollView as RNScrollView} from 'react-native';

function Background({
  backgroundColor = 'white',
  horizontalScroll,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,

  children,
  indexSticky,
}) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: backgroundColor,
        },
      ]}>
      <RNScrollView
        horizontal={horizontalScroll}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        stickyHeaderIndices={indexSticky}>
        {children}
      </RNScrollView>
    </SafeAreaView>
  );
}

export default Background;
