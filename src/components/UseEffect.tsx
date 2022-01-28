import { useState, useEffect } from "react";
import axios, {AxiosResponse} from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function UseEffect() {
  const [ count, setCount ] = useState<number>(1);
  const [ postBody, setPostBody ] = useState<string>('');
  const [ postTitle, setPostTitle ] = useState<string>('');

  // Re-render detection: when we have a hook without dependencies
  // then it will be executed on every change in UI or in the state so be careful
  // with this usage. We can leverage of this to detect possible 
  // unnecessary re-renders that can lead into memory leaks
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    }
  })
  
  // This effect is for demonstrate the use of useEffect of live instances
  // during life cycle and how to clear them to prevent memory leaks
  useEffect(() => {
    console.log('Interval Started');

    // Create the interval instance
    const timer = window.setInterval(() => {
      console.log('Interval Execution');
    }, 1000);

    // If effect callback returns a function then it will be called
    // before components gets unmounted so in this case we can use it
    // to clear the interval and prevent memory leaks
    return () => {
      if (timer) {
        clearInterval(timer);
        console.log('Interval Cleared');
      }
    }

    // Empty dependencies will this cause the execution of this hook
    // on Mount phase and UnMount phase
  }, []);

  // UseEffect for requesting a post, this effect is only executed
  // if the count variable is changed
  useEffect(() => {
    const controller = new AbortController();

    const request = async () => {
      const resultPost = await axios.get<{}, AxiosResponse<Post>>(
        `https://jsonplaceholder.typicode.com/posts/${count}`, {
        signal: controller.signal,
      });

      // Set the post title after of a success response
      setPostTitle(resultPost.data.title);
      setPostBody(resultPost.data.body);
    }

    // Execute the async request
    request();

    // The returned function of a effect callback is executed
    // when component will be unmount. We can prevent any state update
    // by the late response of axios by cancelling the request once
    // the component will be unmounted.
    return () => controller.abort();

    // The dependencies will be threaten as an OR operator
    // any dependency modified will trigger this hook
  }, [count, setPostBody, setPostTitle])

  return (
    <>
      <button onClick={() => setCount(count-1)}>Prev Post</button>
      <button onClick={() => setCount(count+1)}>Next Post</button>
      { postTitle && <h1>{postTitle}</h1> }
      { postBody && <p>{postBody}</p> }
    </>
  )
}