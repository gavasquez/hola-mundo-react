import React from 'react'
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


const users = [
    {
        userName: 'gavasquez',
        name: 'Andres Vasquez',
        following: true
    },
    {
        userName: 'andres',
        name: 'Prueba Name',
        following: false
    }
];

export const App = () => {


    return (
        <section className='App'>
            {
                users.map(({ name, userName, following }) => {
                    const formatUserName = (userName) => `@${userName}`;
                    return (
                        <TwitterFollowCard
                            formatUserName={formatUserName}
                            userName={userName}
                            initialIsFollowing={following}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
