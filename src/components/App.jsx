import { UserProfile } from "components/Profile/Profile";
import userInformation from "../data/user.json";

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
    </div>
  );
};
