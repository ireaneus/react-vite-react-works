# react-vite-react-works

- React.memo
- useCallback()

## App.jsx

```js
function App() {
  const [showCount, setShowCount] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP Running');

  const toggleShowCount = useCallback(() => {
    if (allowToggle) {
      setShowCount((prevShowCount) => !prevShowCount);
    }
  }, [allowToggle]);  // enables dependency allowToggle to be re-evaluated

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={toggleShowCount}>show paragraph below</button>
        <button onClick={allowToggleHandler}>Enable Button above</button>
        <DemoOutput show={showCount} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-ff2oqd)
