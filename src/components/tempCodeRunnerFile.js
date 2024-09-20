function Counter() {
    const[count,setCount]=useState(0);

    useEffect(() => {
        alert('Component has been updated');
    },[count]);
 
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
    
};

export default Counter;