import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DificultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {

        let tempResultA = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i

        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA} </div>
        <div>Result for b: {resultB} </div>
    </>
}


const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setusers] = useState(['Dimych', 'Katya', 'Vova', 'Sergey']);


    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setusers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS']);

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books]);

    const memoizedAddBooks = useCallback(() => addBook, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBooks}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)

