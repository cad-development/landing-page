import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoAmes from '@/images/clients/ames/logo-light.svg'
import logoLavina from '@/images/clients/lavina/logo-light.svg'
import logoAMenu from '@/images/clients/a-menu/logo-light.svg'
import logoMozubi from '@/images/clients/mozubi/logo-light.svg'
import logoSudocs from '@/images/clients/sudocs/logo-light.svg'
import logoComp from '@/images/clients/comp/logo-light.svg'
import logoAmesDark from '@/images/clients/ames/logo-dark.svg'
import logoZipchatLight from '@/images/clients/zipchat/logo-light.svg'
import logoPlacely from '@/images/clients/placely/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Zipchat', logoZipchatLight],
  ['Lavina', logoLavina],
  ['Placely', logoPlacely],
  ['Sudocs', logoSudocs],
  ['Mozubi', logoMozubi],
  ['A-Menu', logoAMenu],
  ['Ames', logoAmes],
  ['COMP2', logoComp],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our top projects, built with the incredible people who trusted us.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="my-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn className="flex items-center gap-x-8">
          <div className="flex-auto h-px bg-neutral-800" />
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-right">
            and many more..
          </h2>
        </FadeIn>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Innovating for a Better Tomorrow"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Technology presents challenges, but it&apos;s also our most powerful tool for overcoming them.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore, and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Whether it&apos;s enhancing your digital presence or integrating AI-driven solutions, we are here to help you unlock new potential for your business.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We create high-performance, visually appealing websites that are perfectly tailored to your brand.
            </ListItem>
            <ListItem title="AI integration">
              Our team integrates advanced AI technologies to streamline processes, improve user experiences, and grow your business.
            </ListItem>
            <ListItem title="E-commerce solutions">
              We build custom e-commerce platforms with seamless integrations, ensuring your online store is ready for global success.
            </ListItem>
            <ListItem title="Software development">
              We develop user-friendly applications, giving you full control over your digital content.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}


export const metadata = {
  description:
    'We are a development agency working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Expertly Crafted Web Apps for Any Challenge
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It&apos;s a really busy intersection though — a lot of our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Ames', logo: logoAmesDark }}
      >
        CAD helped us create the - Capitalism for Biodiversity - campaign, which reached a wide audience and drove impactful conversations. Their creativity and execution were crucial to our success.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
