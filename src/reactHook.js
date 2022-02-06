import React, { Component, useState } from 'react';

export default function ReactHook() {
    const [account, setAccount] = useState({ username: "", password: "" });
    const [accountObj, setAccountObj] = useState({ username: "", password: "" });
    const [count, setCount] = useState(0);
    const [accountList, setAccountList] = useState([]);
    return (
        <div class="row">            
            <div class="row">
                <form>
                    <h4> hook Array </h4>
                    <input type="text"
                        placeholder="username"
                        value={account.username}
                        onChange={e => setAccount({ ...account, username: e.target.value })} />
                    <br />
                    <input
                        type="text"
                        placeholder="password"
                        value={account.password}
                        onChange={e => setAccount({ ...account, password: e.target.value })}
                    />
                    <p>{JSON.stringify(account)}</p>

                    <button onClick={e => {
                        e.preventDefault();
                        alert(JSON.stringify(account))
                    }}>submit</button>

                    <button onClick={e => {
                        e.preventDefault();
                        setAccount({ username: "", password: "" });
                        setAccountList([]);
                    }}>clear</button>

                </form>
            </div>
            <div class="row">
                <div>
                    <form>
                        <h4> hook object </h4>
                        <input type="text"
                            placeholder="username"
                            value={accountObj.username}
                            onChange={e => setAccountObj({ ...accountObj, username: e.target.value })} />
                        <br />
                        <input
                            type="text"
                            placeholder="password"
                            value={accountObj.password}
                            onChange={e => setAccountObj({ ...accountObj, password: e.target.value })}
                        />
                        <br/>
                        <button onClick={e => {
                            e.preventDefault();
                            setAccountList([...accountList, accountObj]);
                        }}>submit</button>

                        <button onClick={e => {
                            e.preventDefault();
                            setAccountObj({ username: "", password: "" })
                        }}>clear</button>
                        <br/>
                        <p>{JSON.stringify(accountList)}</p>
                        <ul>
                            {accountList.map(item => <li>username: {item.username}, password:{item.password}</li>)}
                        </ul>
                    </form>
                </div>

            </div>
        </div>

    )
}