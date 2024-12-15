# React useEffect setInterval Memory Leak
This example demonstrates a common error in React components using the useEffect hook with setInterval.  The issue lies in not properly cleaning up the interval using the return value of useEffect, leading to a memory leak.

The `bug.js` file showcases the flawed component. The `bugSolution.js` provides the corrected code. 