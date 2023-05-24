import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  return (<h1>{router.query.name?`hello,${router.query.name}`:"I dont know your name"}</h1>);
}
 
