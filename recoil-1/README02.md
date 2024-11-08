# Recoil State Management in React (Recoil Part 2)

## Selectors ( Step 5 )

To create a selector, we can use the `selector` function from the `recoil` package:

```jsx
import { selector } from "recoil";

const mySelector = selector({
  key: "mySelector", // unique ID (with respect to other atoms/selectors)
  get: () => {
    // get function
  },
  set: (value) => {
    // set function
  },
});
```

**Why Selectors:**
Selectors are used to read the value of an atom or a selector in a React application. It means a selector represents a piece of state.

## UseRecoilValue (Step 6)

To use a selector in a React component, we can use the `useRecoilValue` hook from the `recoil` package:

```jsx
import { useRecoilValue } from "recoil";

const MyComponent = () => {
  const value = useRecoilValue(mySelector);
  return <div>{value}</div>;
};
```

**Why UseRecoilValue:**
UseRecoilValue is used to read the value of a selector in a React component. It returns the current value of the selector.

## UseSetRecoilState (Step 7)

To use a selector in a React component, we can use the `useSetRecoilState` hook from the `recoil` package:

```jsx
import { useSetRecoilState } from "recoil";

const MyComponent = () => {
  const setCount = useSetRecoilState(mySelector);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};
```

**Why UseSetRecoilState:**
UseSetRecoilState is used to update the value of a selector in a React component. It returns a function to update the value.

## UseRecoilState (Combination of Step 6 & 7)

To use a selector in a React component, we can use the `useRecoilState` hook from the `recoil` package:

```jsx
import { useRecoilState } from "recoil";

const MyComponent = () => {
  const [value, setValue] = useRecoilState(mySelector);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};
```

**Why UseRecoilState:**
UseRecoilState is used to read and update the value of a selector in a React component. It returns the current value of the selector and a function to update the value.

## Final Code

```jsx
// RECOIL-STATE-MANAGEMENT/recoil-1/src/App.jsx
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
```

```jsx
// RECOIL-STATE-MANAGEMENT/recoil-1/src/atoms.jsx
import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    return (
      get(networkAtom) +
      get(messagingAtom) +
      get(jobsAtom) +
      get(notificationsAtom)
    );
  },
});
```

**What are the profits of using useMemo and Recoil Selectors?**

Reasons to use useMemo and Recoil Selectors:
- Use useMemo to optimize performance by memoizing expensive calculations.
- Use Recoil Selectors to read the value of an `atom` or a `selector` in a React application.


## Conclusion

In this step, we've learned how to create atoms, selectors, and use them in a React component. We also learned how to use Recoil to manage state in a React application.

That's it for this step! We've covered the basics of Recoil in React. Next step is to learn how to use Recoil to manage state in a React application.