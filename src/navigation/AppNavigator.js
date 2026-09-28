import React from 'react'; import { NavigationContainer } from '@react-navigation/native'; import { createNativeStackNavigator } from '@react-navigation/native-stack'; import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; import { Ionicons } from '@expo/vector-icons'; import { ActivityIndicator, View } from 'react-native'; import { useApp } from '../context/AppContext'; import { colors } from '../theme'; import ExploreScreen from '../screens/ExploreScreen'; import SavedScreen from '../screens/SavedScreen'; import ProfileScreen from '../screens/ProfileScreen'; import TrailDetailsScreen from '../screens/TrailDetailsScreen'; import { NotificationSettingsScreen,UnitsScreen,AboutScreen } from '../screens/SettingsScreens';
const Stack=createNativeStackNavigator();const Tabs=createBottomTabNavigator();
function MainTabs(){const icons={Explore:'compass',Saved:'bookmark',Profile:'person'};return <Tabs.Navigator screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:colors.primary,tabBarInactiveTintColor:colors.muted,tabBarLabelStyle:{fontSize:13,fontWeight:'700'},tabBarStyle:{height:66,paddingTop:5},tabBarIcon:({color,size,focused})=><Ionicons name={`${icons[route.name]}${focused?'':'-outline'}`} size={size} color={color}/>})}><Tabs.Screen name="Explore" component={ExploreScreen}/><Tabs.Screen name="Saved" component={SavedScreen}/><Tabs.Screen name="Profile" component={ProfileScreen}/></Tabs.Navigator>}
export default function AppNavigator(){
  const {storageHydrated}=useApp();
  if(!storageHydrated) return <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.background}} accessibilityLabel="Loading TrailMate"><ActivityIndicator size="large" color={colors.primary}/></View>;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitle:'Back',headerTintColor:colors.primary,headerTitleStyle:{fontWeight:'800'},contentStyle:{backgroundColor:colors.background}}}>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{headerShown:false}} />
        <Stack.Screen name="TrailDetails" component={TrailDetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{title:'Notifications'}} />
        <Stack.Screen name="Units" component={UnitsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
