import { UserProfile } from "components/Profile/Profile";
import userInformation from "../data/user.json";
import { Statistics } from "components/Statistics/Statistics";
import dataStatistics from "../data/data.json";
import { FriendList } from "components/FriendList/FriendList";
import userFriends from "../data/friends.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile 
       username={userInformation.username} 
       tag={userInformation.tag} 
       location={userInformation.location} 
       avatar={userInformation.avatar} 
       stats={userInformation.stats} />

      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={userFriends}/>
    </div>
  );
};

