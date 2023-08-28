import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { completeItem, removeItem } from '../ToDo/toDoSlice'

function Table() {

    const dispatch = useDispatch()

    const { list } = useSelector(store => store.todo_items)

    const deleteItem = id => {
        dispatch(removeItem(id))
    }

    const complete = id => {
        dispatch(completeItem(id))
    }

    return (
        <table className="table">
            <tbody>
                {
                    list.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}.</td>
                            <td>{item.text}</td>
                            <td>
                                <Button
                                    size='sm'
                                    color='light'
                                    className='ml-1'
                                    onClick={() => complete(item.id)}
                                >
                                    tamamla
                                </Button>
                                <Button
                                    size='sm'
                                    color='light'
                                    className='ml-1'
                                    onClick={() => deleteItem(item.id)}
                                >
                                    sil
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table