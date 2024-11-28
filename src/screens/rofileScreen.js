import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { styles } from '../styles/ProfileStyles';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Menggantikan componentDidMount dan componentWillUnmount
  useEffect(() => {
    fetchProfileData();

    // Cleanup seperti componentWillUnmount
    return () => {
      console.log('Cleanup on component unmount');
    };
  }, []);

  const fetchProfileData = async () => {
    setLoading(true);
    // Simulasi fetching data
    setTimeout(() => {
      setProfile({
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/100',
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ProfileCard name={profile.name} avatar={profile.avatar} />
      )}
      <Button title="Refresh Profile" onPress={fetchProfileData} />
    </View>
  );
};

export default ProfileScreen;
