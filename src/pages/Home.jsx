import { useEffect, useState } from 'react'

function HomePage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const addUserHandler = (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        console.log({ username, email });

        fetch('/api/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email })
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div>
                <h1>Home Page</h1>
                <form onSubmit={addUserHandler}>
                    <input type="text" name="username" placeholder="Enter username" />
                    <input type="text" name="email" placeholder="Enter user email" />
                    <button type="submit">Add User</button>
                </form>
            </div>

            <div>
                {users.map(user =>
                    <div key={user.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h2>{user.username}</h2>
                        <h4>{user.email}</h4>
                    </div>
                )}
            </div>

        </>
    )
}

export default HomePage
