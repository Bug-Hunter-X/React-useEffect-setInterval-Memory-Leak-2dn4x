```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The returned function is not used to cleanup.
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
  }, []);

  return <div>Count: {count}</div>;
}
```