'use client';
import React from 'react';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import { useAppContext } from './context';
import Content from '../components/Content';

export default function Index() {
  const { user, setUser } = useAppContext();
  new Error('llllll');
  useEffect(() => {
    fetch('/api/accessToken')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setUser({ JWT: '' });
          return;
        }
        setUser({ ...user, JWT: data });
      });
  }, []);
  return (
    <>
      <span>{user.JWT}</span>
      <button onClick={() => console.log(user)}>Change Name</button>
      <Hero />
      <hr />
      <Content />
    </>
  );
}
