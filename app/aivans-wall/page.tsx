import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AivansWallClient from './AivansWallClient'

export const metadata: Metadata = {
  title: "Aivan's Wall — Ascend Development Solutions",
  description:
    'Thoughts, insights, and reflections from Aivan Alvarez — curated directly from his Facebook page and brought to life here.',
}

export default function AivansWallPage() {
  return (
    <>
      <Navbar />
      <AivansWallClient />
      <Footer />
    </>
  )
}
