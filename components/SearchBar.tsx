import { icons } from '@/constants';
import { SearchBarProps } from '@/types/type';
import { Image, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const SearchBar = ({
   icon,
   initialLocation,
   containerStyle,
   textInputBackgroundColor,
   handlePress,
}: SearchBarProps) => {
   return (
      <View
         className={`flex flex-row items-center justify-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
      >
         <GooglePlacesAutocomplete
            query={{ key: googlePlacesApiKey, language: 'en' }}
            placeholder='Where do you want to go?'
            fetchDetails={true}
            debounce={200}
            styles={{
               textInputContainer: {
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginHorizontal: 20,
                  position: 'relative',
                  shadowColor: '#d4d4d4',
               },
               textInput: {
                  backgroundColor: textInputBackgroundColor || 'white',
                  fontSize: 16,
                  fontWeight: 600,
                  marginTop: 5,
                  width: '100%',
                  borderRadius: 200,
               },
               listView: {
                  backgroundColor: textInputBackgroundColor || 'white',
                  position: 'relative',
                  top: 0,
                  width: '100%',
                  borderRadius: 10,
                  shadowColor: '#d4d4d4',
                  zIndex: 99,
               },
            }}
            onPress={(data, details = null) => {
               handlePress({
                  latitude: details?.geometry.location.lat!,
                  longitude: details?.geometry.location.lng!,
                  address: data.description,
               });
            }}
            renderLeftButton={() => (
               <View className='justify-center items-center size-6'>
                  <Image
                     source={icon ? icon : icons.search}
                     className='size-6'
                     resizeMode='contain'
                  />
               </View>
            )}
            textInputProps={{
               placeholderTextColor: 'gray',
               placeholder: initialLocation ?? 'Where do you want to go?',
            }}
         />
      </View>
   );
};

export default SearchBar;
