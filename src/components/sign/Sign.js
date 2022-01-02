import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Button from '../../styles/Button';
import { createUser } from '../../services/firme.service';
import { signInWithGoogle } from '../../services/firebase.service';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export function Sign () {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSignIn () {
        const result = signInWithGoogle();
        result.then(res => {
            const {
                accessToken: sessionToken,
                displayName: name,
                photoURL: profile,
                email,
                uid,
            } = res.user;
            createUser({
                name,
                email,
                profile,
                uid,
                sessionToken
            });

            setUser({
                name,
                email,
                profile,
                uid,
                sessionToken
            })
            navigate('/');
        })
    }

    return (
        <Container>
        <Title>
            Welcome to:
        </Title>
        <img src={logo} alt='logo'/>
        <Button onClick={handleSignIn}>Enter</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Title = styled.h1`
    color: #FFD445;
    margin: 12px;
    font-size: 1.50rem;
`