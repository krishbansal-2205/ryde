import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const Signup = () => {
   const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
   });

   const onSignUpPress = () => {};

   return (
      <ScrollView className='flex-1 bg-white'>
         <View className='flex-1 bg-white'>
            <View className='relative w-full h-[250px]'>
               <Image
                  source={images.signUpCar}
                  className='z-0 w-full h-[250px]'
               />
               <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
                  Create your account
               </Text>
            </View>
            <View className='p-5'>
               <InputField
                  label='Name'
                  placeholder='Enter your name'
                  icon={icons.person}
                  value={form.name}
                  onChangeText={(value) => setForm({ ...form, name: value })}
               />
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
                  title='Sign Up'
                  onPress={onSignUpPress}
                  className='mt-6'
               />
               <OAuth />
               <View className='flex flex-row justify-center items-center mt-2'>
                  <Text className='text-lg text-general-200'>
                     Already have an account?{' '}
                  </Text>
                  <Link href={'/(auth)/sign-in'}>
                     <Text className='text-primary-500 text-lg'>Log in</Text>
                  </Link>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default Signup;
