import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Teste } from '@/components/Teste';
import { Secundario } from '@/components/Secundario';
import { Terciario } from '@/components/Terciario';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Form } from '@/components/Form/Form';

export default function HomeScreen() {
  return (
    <View>
    <Teste></Teste>
     <Form></Form>

    </View>
 
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
