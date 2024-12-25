```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: missing return statement
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```