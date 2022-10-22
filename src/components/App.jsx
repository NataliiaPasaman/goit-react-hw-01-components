import { UserProfile } from "components/Profile/Profile";
import userInformation from "../data/user.json";
import { Statistics } from "components/Statistics/Statistics";
import dataStatistics from "../data/data.json";

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
      <UserProfile user={userInformation} />
      <Statistics title="Upload stats" stats={dataStatistics} />
    </div>
  );
};
