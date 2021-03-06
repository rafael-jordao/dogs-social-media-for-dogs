import React from 'react'
import Feed from "../components/Feed/Feed"
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`container mainContainer ${styles.home}`}>
      <Feed />
    </section>
  )
}

export default Home