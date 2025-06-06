import { icons } from '@/constants';
import React from 'react';
import { Image, Text, View } from 'react-native';
import CustomButton from './CustomButton';

const OAuth = () => {
   const handleGoogleSignIn = () => {};

   return (
      <View>
         <View className='flex flex-row justify-center items-center mt-3 gap-x-3'>
            <View className='flex-1 h-[1px] bg-general-100' />
            <Text className='text-lg'>Or</Text>
            <View className='flex-1 h-[1px] bg-general-100' />
         </View>
         <CustomButton
            title='Login with Google'
            className='mt-5 w-full shadow-none'
            IconLeft={() => (
               <Image
                  source={icons.google}
                  className='size-5 mx-2'
                  resizeMode='contain'
               />
            )}
            bgVariant='outline'
            textVariant='primary'
            onPress={handleGoogleSignIn}
         />
      </View>
   );
};

export default OAuth;
