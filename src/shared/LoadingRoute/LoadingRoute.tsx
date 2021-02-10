import React, { useEffect, useState } from 'react'
import { DotWrapper, Dot, ContainerDot } from './LoadingRoute.element'
import { useHistory } from 'react-router-dom'

const LoadingRoute=()=>{
    const history=useHistory();
    const [counter, setCounter] = useState(5)

    useEffect(() => {
       
        let interval=setInterval(()=>{
            setCounter((counter)=>counter - 1);
        },1000)
        counter == 0 && history.push('/login'); 
        return () => {
            clearInterval(interval);
        }
    }, [counter])
    return (
        <ContainerDot>
            <div>you will redirect to login after {counter}</div>
         <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".1s" />
          <Dot delay=".2s" />
        </DotWrapper>
        </ContainerDot>
       
      )
}

export default LoadingRoute