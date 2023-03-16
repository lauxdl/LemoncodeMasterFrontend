import React from "react";
import { ProfileContext } from "./profile.context";
import { UserProfile, createEmptyUserProfile } from "./profile.vm";


interface Props {
    children: React.ReactNode;
  }
  
export const ProfileProvider: React.FC<Props> = ({ 
  children,
}) => {
  const [profile, setProfile] = React.useState<UserProfile>(
    createEmptyUserProfile()
  );

  return (
    <ProfileContext.Provider
      value={{ username: profile?.username, setUserProfile: setProfile }}
    >
     {children}
    </ProfileContext.Provider>
  );
};