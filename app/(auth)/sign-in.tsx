import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const Signin = () => {
   const [form, setForm] = useState({
      email: '',
      password: '',
   });

   const onSignInPress = () => {};

   return (
      <ScrollView className='flex-1 bg-white'>
         <View className='flex-1 bg-white'>
            <View className='relative w-full h-[250px]'>
               <Image
                  source={images.signUpCar}
                  className='z-0 w-full h-[250px]'
               />
               <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
                  Welcome
               </Text>
            </View>
            <View className='p-5'>
               <InputField
                  label='Email'
                  placeholder='Enter your email'
                  icon={icons.email}
                  value={form.email}
                  onChangeText={(value) => setForm({ ...form, email: value })}
               />
               <InputField
                  label='Password'
                  placeholder='Enter your password'
                  icon={icons.lock}
                  value={form.password}
                  onChangeText={(value) =>
                     setForm({ ...form, password: value })
                  }
                  secureTextEntry={true}
               />
               <CustomButton
                  title='Sign In'
                  onPress={onSignInPress}
                  className='mt-6'
               />
               <OAuth />
               <View className='flex flex-row justify-center items-center mt-2'>
                  <Text className='text-lg text-general-200'>
                     Don&apos;t have an account?{' '}
                  </Text>
                  <Link href={'/(auth)/sign-up'}>
                     <Text className='text-primary-500 text-lg'>Sign up</Text>
                  </Link>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default Signin;
