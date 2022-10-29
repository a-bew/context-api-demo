import React, { createContext, useMemo, useState } from "react";

export type CounntContextData = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  calculation: number;
};
// const fibonacci = n => {
//     if (n <= 1) {
//       return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   };

// interface ExpensiveCalculationProp{
    type N_type = number;
// }

const expensiveCalculation:any = (n: N_type)=>
{
    if (n <= 1) {
      return n;
    }
    return expensiveCalculation(n - 1) + expensiveCalculation(n - 2);
};

const CountContext = createContext<CounntContextData>({} as CounntContextData);

interface Props {
    children: any
}

const CountProvider: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <CountContext.Provider
      value={{
        count,
        incrementCount,
        decrementCount,
        calculation
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountProvider, CountContext };