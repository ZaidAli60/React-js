import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Box,
  ScrollView,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  Button
} from 'native-base';
import {useReadDataContext} from '../../../context/ReadContext';
import {useCartContext} from '../../../context/CartContext';
export default function NewPost({product}) {
  const {documents} = useReadDataContext();
  const {dispatch} = useCartContext();
  console.log(documents);
  const cardGap = 15;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
  return (
    <ScrollView>
      {documents.map((item, index) => {
        return (
          <Box>
            <Box
              style={{
                paddingTop: 30,
                paddingBottom: 30,
              }}
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: 'gray.50',
              }}>
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: 'violet.400',
                  }}
                  _text={{
                    color: 'warmGray.50',
                    fontWeight: '700',
                    fontSize: 'xs',
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5">
                  PHOTOS
                </Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    The Garden City
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'violet.500',
                    }}
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1">
                    Faisalabad
                  </Text>
                </Stack>
                <Text fontWeight="400">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400">
                      6 mins ago
                    </Text>
                  </HStack>
                  <Text style={{color: '#0d6efd'}}>Price :${item.price}</Text>
                </HStack>
                <Box>
                  <Button
                    style={{
                      backgroundColor: '#0d6efd',
                      color:"white"
                    }}>
                    Buy Now
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  flexContainer: {
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  productImage: {
    width: 100,
    height: '50%',
  },
});
