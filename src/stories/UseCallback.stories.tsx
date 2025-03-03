import React, {useMemo, useState, useCallback} from 'react';

export default {
    title: 'useCallback'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}



//
export const  useCallbackFunc = () => {
    console.log('useCallbackFunc')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'Angular']);

    const memoizedAddBook = useMemo(() => {
        console.log(books)
        return () => {const newBook = [...books, 'Acc' + new Date().getTime()]
        setBooks(newBook)}
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBook = [...books, 'Acc' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    const newBook = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [books])




    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <NewMessageCounter count={counter}/>
        <Book books={newBook} addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    books: Array<string>,
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType ) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map ((book, i) =>
            <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo (BooksSecret)