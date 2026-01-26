import React from 'react'
import { useSelector } from 'react-redux'

export default function ChildCounter() {

    const count = useSelector((state) => state.counter.value)

    return (
        <div>ChildCounter: {count}</div>
    )
}
