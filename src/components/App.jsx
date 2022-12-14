import { UserProfile } from './Profile/Profile';
import userInformation from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import dataStatistics from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import userFriends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserProfile
        username={userInformation.username}
        tag={userInformation.tag}
        location={userInformation.location}
        avatar={userInformation.avatar}
        stats={userInformation.stats}
      />

      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={userFriends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
