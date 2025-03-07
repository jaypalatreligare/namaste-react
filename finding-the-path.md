useEffect-
if no dependency array => useEffect is called on every render
if dependency array is empty [] => useEffect is call on only initial render(just once) 
if depndency array is [btnNameReact] => called every time btnNameReact is updated


never use useState inside the condition like if() else
never use useState outside the functional component
never create useState inside the forloop