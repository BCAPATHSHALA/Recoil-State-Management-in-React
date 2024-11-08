/* eslint-disable no-unused-vars */
import { RecoilRoot as RecoilRootProvider, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";
import { useMemo } from "react";
const App = () => {
  return (
    <RecoilRootProvider>
      <MainApp />
    </RecoilRootProvider>
  );
};

const MainApp = () => {
  const networkValue = useRecoilValue(networkAtom);
  const messagingValue = useRecoilValue(messagingAtom);
  const jobsValue = useRecoilValue(jobsAtom);
  const notificationsValue = useRecoilValue(notificationsAtom);

  // const totalNotifications = useMemo(() => {
  //   return networkValue + messagingValue + jobsValue + notificationsValue;
  // }, [notificationsValue, jobsValue, messagingValue, networkValue]);

  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <h1>RECOIL STATE MANAGEMENT PART - 01</h1>
      <div>
        <button>Home</button>

        <button>
          My Network ({networkValue >= 100 ? "99+" : networkValue})
        </button>
        <button>Jobs ({jobsValue})</button>
        <button>Messaging ({messagingValue})</button>
        <button>Notifications ({notificationsValue})</button>

        <button>Me ({totalNotifications})</button>
      </div>
    </>
  );
};

export default App;
