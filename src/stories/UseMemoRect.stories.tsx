import React, {useMemo, useState} from 'react';

export default {
    title: 'React.memo and UseMemo demo'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) =>
            <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
//
export const  HelpReactMemo = () => {
    console.log('HelpReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['eliza', 'nick', 'esl']);

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }

    const newUser = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <button onClick= {addUser} >add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={newUser}/>
    </>
}