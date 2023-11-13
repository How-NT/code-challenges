# issue 1:

- issue: interface `FormattedWalletBalance` not reuse the interface `WalletBalance`
- improve: `FormattedWalletBalance` interface can extends WalletBalance and add the new different properties only
  **Note: Should create a `Balance` interface that includes common properties and `WalletBalance` can extends from it and later there can be `SomethingBalance` also can reuse `Balance`**

# issue 2:

- issue: Avoid using interface with no property, instead use type for this case
- improve: Replace interface extends interface with no new property, instead using type

# issue 3:

- issue: Props children should be destructuring in the component param level instead of creating new extra line `const { children, ...rest } = props;`
- improve: Should use PropsWithChildren from react for component that contain children prop and use destructuring syntax in component parameters level

# issue 4:

- issue: States, custom hook: `prices`, `useWalletBalances` with no type, this causing the confusion for reader
- improve: Should always try to define type for states, props

# issue 5:

- issue: `useEffect` places in the wrong order, that can cause many potential issues
- improve: The definition order inside a React component should follow:
  - props definition
  - store, context, custom hook definition
  - state definition
  - memo definition
  - functions definition
  - useEffect definition
  - return JSX

# issue 6:

- issue: The logic api call inside `useEffect` should be created in a new method for better logic read and reusable of the method, remove `console.log`.
- improve: Create a new function for api call and only trigger that function inside `useEffect`
  **Note: If the function inside `useEffect` can be used other places so should create a custom hook for that purpose. Also should write a custom hook for api call to manage `loading`, `error`, `retry call` ...**

# issue 7:

- issue: `getPriority` method not depend on any dependency of component but get created again every time component re-render
- improve: Should move `getPriority` outside of the component

# issue 8:

- issue: Should not use any as type for `blockchain` parameter in `getPriority` method and should define `enum` for `cases` in `switch` statement, this can produce bugs if using these constants in somewhere else with the typo
- improve: Define type for `blockchain` parameter and use `enum` for for `cases` in `switch` statement

# issue 8:

- issue: `prices` dependency is an un-used dependency in `sortedBalances` useMemo. This causing the re-calculate `sortedBalances` every time dependency prices changed
- improve: Should remove `prices` dependency

# issue 9:

- issue: declare unused variable: `balancePriority`, `formattedBalances` and use un-declare variable: `lhsPriority`
- improve: Should remove unused variable and not introduce any new variable but no use

# issue 10:

- issue:
  - Missing return `0` statement in sort function in `sortedBalances` function, use confusing variable name: `lhs`, `rhs`
  - Use `balance` property which is not defined in `WalletBalance`
- improve:
  - Should return `0` for the sort function and make a better naming convention
  - Should define `balance` property in `WalletBalance` type

# issue 11:

- issue: component `WalletRow` will re-render every time state changes, should memorize the `rows` const with `useMemo`, `rows` also not a good naming convention and it should use `formattedBalances` instead of `sortedBalances` in `rows`
- improve: Should use `useMemo` to memorize `rows`, make better naming convention and use the right variable
