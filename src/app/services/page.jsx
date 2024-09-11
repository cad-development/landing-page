import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoAmes from '@/images/clients/ames/logo-dark.svg'
import logoLavina from '@/images/clients/lavina/logo-dark.svg'
import logoAMenu from '@/images/clients/a-menu/logo-dark.svg'
import logoMozubi from '@/images/clients/mozubi/logo-dark.svg'
import logoSudocs from '@/images/clients/sudocs/logo-dark.svg'
import logoComp from '@/images/clients/comp/logo-dark.svg'
import logoZipchat from '@/images/clients/zipchat/logo-dark.svg'
import logoPlacely from '@/images/clients/placely/logo-dark.svg'



function Service({ services }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Services
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {services.map((service) => (
          <FadeIn key={service.name}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">

                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={service.clients[0].href}>{service.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                        {service.description.map((desc) => (
                          <p key={desc}>{desc}</p>
                        ))}
                  </div>
                {/* TODO: Add link to client work  */}
                  {/* <div className="mt-8 flex">
                    <Button
                      href={service.clients[0].href}
                      aria-label={`Read case study: ${service.clients[0].name}`}
                    >
                      Read case study
                    </Button>
                  </div> */}
                  {/* {service.testimonial && (
                    <Blockquote
                      author={service.testimonial.author}
                      className="mt-12"
                    >
                      {service.testimonial.content}
                    </Blockquote>
                  )} */}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Zipchat', logoZipchat],
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
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You&apos;re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Services',
  description:
    'We offer customized services designed to address your specific needs. Our team combines proven strategies with innovative technologies to create efficient and effective solutions.',
}

export default async function Services() {
  let services = [
    {
      name: 'Web Development',
      title: 'Web Development',
      description: [
        'We specialize in developing custom web applications tailored to meet your unique business needs.',
        'From concept to deployment, we focus on delivering seamless, high-quality applications that are secure, efficient, and optimized for growth.',
        'Whether you need a complex platform or a simple, elegant interface, our custom web development services are designed to bring your vision to life.'],
      clients: [
        {
          title: 'Project Title',
          href: 'work/project-title',
        }
      ],
    },
    {
      name: 'AI Development',
      title: 'AI Development',
      description: [
        'We provide AI development services, including NLP solutions like AI chatbots, intelligent assistants, and AI search functionalities.',
        'Our expertise includes building advanced AI-powered search engines, integrating APIs, predictive analytics, and machine learning models that enhance data accessibility and user interactions.',
        'From conversational bots to custom AI search solutions, we create intelligent systems that automate tasks and elevate your business capabilities.',
      ],
      clients: [
        {
          title: 'AI Project Title',
          href: 'work/ai-project-title',
        },
      ],
    },
    {
        name: 'E-commerce',
        title: 'E-commerce',
        description: [
          'We build robust, scalable e-commerce platforms that drive sales and enhance customer experience.',
          'Our team designs custom online stores with secure payment gateways, inventory management, and user-friendly interfaces tailored to your brand.',
          'From seamless shopping experiences to backend optimizations, we create e-commerce solutions that grow with your business.',
        ],
        clients: [
          {
            title: 'E-commerce Project Title',
            href: 'work/ecommerce-project-title',
          },
        ],
      },
      {
          name: 'Landing Pages & CMS Development',
          title: 'Landing Pages & CMS Development',
          description: [
            'We create custom landing pages and CMS solutions designed to elevate your brand and engage your audience.',
            'Our team builds user-friendly, SEO-optimized sites with easy-to-manage content systems, tailored to your business needs.',
            'Whether launching a new product or managing content, our solutions provide the flexibility and functionality you need.',
          ],
          clients: [
            {
              title: 'Landing Page Project Title',
              href: 'work/landing-page-project-title',
            },
          ],
        },
  ]

  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title="Digital Solutions for Your Business"
      >
        <p>
         We offer customized services designed to address your specific needs. Our team combines proven strategies with innovative technologies to create efficient and effective solutions.
        </p>
      </PageIntro>

      <Service services={services} />

      <Clients />

      <ContactSection />
    </>
  )
}
