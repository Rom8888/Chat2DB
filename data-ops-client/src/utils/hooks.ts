import e from '@umijs/deps/compiled/express';
import { useCallback,  useEffect,  useRef, useState } from 'react';

export function useDebounce<A extends any[]>(callback: (...args: A) => void, timeout: number) {
  const timer = useRef<any>();
  return useCallback<(...args: A) => void>((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
    timer.current = setTimeout(() => {
      callback(...args);
      timer.current = undefined;
    }, timeout);
  }, [callback, timeout]);
}

export function useLogin(){
  const [isLogin,setIsLogin] = useState(1)
  return [isLogin]
}

export function useUpdateEffect(fn: Function, arr: any[]){
  const first =  useRef(true);
  useEffect(()=>{
    if(first.current) {
      first.current = false;
    } else{
      fn();
    }
  },arr)
}