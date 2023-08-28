import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import Table from '../Table/Table'
import { useDispatch } from 'react-redux'
import { addToList } from './toDoSlice'

function ToDo() {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const create = () => {
        if (!text?.trim()) {
            alert("Enter text")
            return
        }

        console.log(text);

        dispatch(addToList({
            id: Date.now(),
            text: text,
            isCompleted: false,
        }))

        setText('')
    }

    return (
        <>
            <div className='mb-4'>
                <Input
                    type='text'
                    placeholder='Enter items...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className='mb-2'
                />
                <Button
                    onClick={create}
                >
                    Add
                </Button>
            </div>
            <Table />
        </>
    )
}

export default ToDo