import { atom, selector } from "recoil";
import axios from "axios";

// Notifications selector to fetch data (Asynchronous Data Query)
export const notificationsSelector = selector({
  key: "notificationsSelector",
  get: async () => {
    // Fetch data from the server
    const response = await axios.get("http://localhost:3000/notifications");
    return response.data;
  },
});

// Atom to hold notifications data
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: {
    network: 0,
    jobs: 0,
    messaging: 0,
    notifications: 0,
  },
});

// Selector to calculate total notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const {
      network,
      jobs,
      messaging,
      notifications: notificationss,
    } = get(notificationsAtom);
    return network + jobs + messaging + notificationss;
  },
});
