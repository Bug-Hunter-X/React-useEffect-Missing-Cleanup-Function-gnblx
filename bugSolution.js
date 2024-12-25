```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch('/api/data', {signal})
      .then(res => {
        if (!res.ok) {          
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```