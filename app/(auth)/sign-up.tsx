import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { fetchAPI } from '@/lib/fetch';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

const Signup = () => {
   const { isLoaded, signUp, setActive } = useSignUp();

   const [showSuccessModal, setShowSuccessModal] = useState(false);

   const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
   });

   const [verification, setVerification] = useState({
      state: 'default',
      code: '',
      error: '',
   });

   const onSignUpPress = async () => {
      if (!isLoaded) return;

      try {
         await signUp.create({
            emailAddress: form.email,
            password: form.password,
         });

         await signUp.prepareEmailAddressVerification({
            strategy: 'email_code',
         });

         setVerification({ ...verification, state: 'pending' });
      } catch (err: any) {
         Alert.alert('Error', err.errors[0].longMessage);
      }
   };

   // Handle submission of verification form
   const onVerifyPress = async () => {
      if (!isLoaded) return;

      try {
         const signUpAttempt = await signUp.attemptEmailAddressVerification({
            code: verification.code,
         });

         if (signUpAttempt.status === 'complete') {
            await fetchAPI('/(api)/user', {
               method: 'POST',
               body: JSON.stringify({
                  name: form.name,
                  email: form.email,
                  clerkId: signUpAttempt.createdUserId,
               }),
            });
            await setActive({ session: signUpAttempt.createdSessionId });
            setVerification({ ...verification, state: 'success' });
         } else {
            setVerification({
               ...verification,
               state: 'failed',
               error: 'Verification failed',
            });
            console.error(JSON.stringify(signUpAttempt, null, 2));
         }
      } catch (err: any) {
         setVerification({
            ...verification,
            state: 'failed',
            error: err.errors[0].longMessage,
         });
         console.error(JSON.stringify(err, null, 2));
      }
   };

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
            <ReactNativeModal
               isVisible={verification.state === 'pending'}
               onModalHide={() => {
                  if (verification.state === 'success') {
                     setShowSuccessModal(true);
                  }
               }}
            >
               <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
                  <Text className='text-2xl font-JakartaExtraBold mb-2 '>
                     Verification
                  </Text>
                  <Text className='font-Jakarta mb-5'>
                     We've sent a verification code to {form.email}
                  </Text>
                  <InputField
                     label='Code'
                     icon={icons.lock}
                     placeholder='123456'
                     value={verification.code}
                     keyboardType='numeric'
                     onChangeText={(value) =>
                        setVerification({ ...verification, code: value })
                     }
                  />

                  {verification.error && (
                     <Text className='text-red-500 text-sm mt-1'>
                        {verification.error}
                     </Text>
                  )}

                  <CustomButton
                     title='Verify Email'
                     onPress={onVerifyPress}
                     className='mt-5 bg-success-500'
                  />
               </View>
            </ReactNativeModal>

            <ReactNativeModal isVisible={showSuccessModal}>
               <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
                  <Image
                     source={images.check}
                     className='w-[110px] h-[110px] mx-auto my-5'
                  />
                  <Text className='text-3xl font-JakartaBold text-center'>
                     Verified
                  </Text>
                  <Text className='text-base text-gray-400 font-Jakarta text-center mt-2'>
                     You have successfully verified your email
                  </Text>
                  <CustomButton
                     title='Browse home'
                     onPress={() => {
                        setShowSuccessModal(false);
                        router.push('/(root)/(tabs)/home');
                     }}
                     className='mt-5'
                  />
               </View>
            </ReactNativeModal>
         </View>
      </ScrollView>
   );
};

export default Signup;
