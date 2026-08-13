import Image from 'next/image'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export default function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority className="page-hero-art" sizes="100vw" />
      <div className="site-container relative z-10 grid min-h-[25rem] items-center py-16 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-12">
        <div className="max-w-3xl">
          <p className="section-label-light mb-5">{eyebrow}</p>
          <h1 className="display-title text-white">{title}</h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/75">{description}</p>
        </div>
      </div>
    </section>
  )
}
