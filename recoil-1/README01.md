# Recoil State Management in React (Recoil Part 1)

Recoil is a state management library for React. It provides a simple and efficient way to manage state in a React application.

## Installation

To install Recoil, run the following command:

```bash
npm install recoil
```

## Usage (Step 1)

We can use Recoil in React components by importing the `RecoilRoot` component from the `recoil` package:

```jsx
import { RecoilRoot } from "recoil";
```

**Why Recoil Root:**
Recoil Root is used to wrap the entire application in a single component. It provides a way to manage state in a React application.

## Create ATOMS (Step 2)

To create an atom, we can use the `atom` function from the `recoil` package:

```jsx
import { atom } from "recoil";

const myAtom = atom({
  key: "myAtom", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value may be any type
});
```

**Why ATOMS:**
Atoms are used to store and manage state in a React application. It means an atom represents a piece of state.

## UseRecoilValue (Step 3)

To use an atom in a React component, we can use the `useRecoilValue` hook from the `recoil` package:

```jsx
import { useRecoilValue } from "recoil";

const MyComponent = () => {
  const value = useRecoilValue(myAtom);
  return <div>{value}</div>;
};
```

**Why UseRecoilValue:**
UseRecoilValue is used to read the value of an atom in a React component. It returns the current value of the atom.

## UseSetRecoilState (Step 4)

To use an atom in a React component, we can use the `useSetRecoilState` hook from the `recoil` package:

```jsx
import { useSetRecoilState } from "recoil";

const MyComponent = () => {
  const setCount = useSetRecoilState(myAtom);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};
```

**Why UseSetRecoilState:**
UseSetRecoilState is used to update the value of an atom in a React component. It returns a function to update the value.

## UseRecoilState (Combination of Step 3 & 4)

To use an atom in a React component, we can use the `useRecoilState` hook from the `recoil` package:

```jsx
import { useRecoilState } from "recoil";

const MyComponent = () => {
  const [value, setValue] = useRecoilState(myAtom);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};
```

**Why UseRecoilState:**
UseRecoilState is used to read and update the value of an atom in a React component. It returns the current value of the atom and a function to update the value.

## Final Code

```jsx
// RECOIL-STATE-MANAGEMENT/recoil-1/src/App.jsx
import {
  RecoilRoot as RecoilRootProvider,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { networkAtom } from "./atoms";
import { useState } from "react";
const App = () => {
  return (
    <RecoilRootProvider>
      <MainApp />
    </RecoilRootProvider>
  );
};

const MainApp = () => {
  // const [networkValue, setNetworkValue] = useState(0);

  // const networkValue = useRecoilValue(networkAtom);
  // const setNetworkValue = useSetRecoilState(networkAtom);

  const [networkValue, setNetworkValue] = useRecoilState(networkAtom);
  return (
    <>
      <h1>RECOIL STATE MANAGEMENT PART - 01</h1>
      <div>
        <button>Home</button>
        <button onClick={() => setNetworkValue(networkValue + 1)}>
          My Network ({networkValue})
        </button>
        <button>Jobs ()</button>
        <button>Messaging ()</button>
        <button>Notifications ()</button>
        <button>Me ()</button>
      </div>
    </>
  );
};

export default App;
```

```jsx
// RECOIL-STATE-MANAGEMENT/recoil-1/atoms.js
import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
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
  default: 0,
});
```

## Conclusion

In this tutorial, we have learned how to use Recoil in React. It provides a simple and efficient way to manage state in a React application.

For more information, please refer to the official documentation: https://recoiljs.org/docs/introduction/getting-started
