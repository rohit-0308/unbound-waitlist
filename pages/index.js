import Head from 'next/head';
import Image from 'next/image';
import Waitlist from './components/Waitlist';
import Tracks from './components/Tracks';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Floxus Home</title>
        <meta name="description" content="New gen dev platform" />
        <link rel="icon" href="/unbound logo 1.svg" />
      </Head>
      <Waitlist />
      <Tracks />
      <Skills />
    </div>
  );
}
