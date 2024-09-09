import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import planImage from '@/images/plan.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Kickoff & Strategize" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin with an in-depth kickoff call to understand your business,
          <strong className="font-semibold text-neutral-950"> goals</strong>, requirements, and vision.
        </p>
        <p>
          This collaborative session sets the foundation for a strategy that aligns with your
          <strong className="font-semibold text-neutral-950"> objectives</strong>.{' '}
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
           a timeline.
        </p>
      </div>
    </Section>
  )
}


function Propose() {
  return (
    <Section title="Propose & Plan" image={{ src: planImage }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We present a
          <strong className="font-semibold text-neutral-950"> tailored solution</strong> that includes design concepts, technical approaches, and a detailed project timeline. This ensures clarity and sets expectations for the project phases.
        </p>

      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Design & Develop" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our design phase starts with wireframes and prototypes that reflect your brand and user needs. We prioritize a seamless user experience, focusing on intuitive navigation, accessibility, and responsiveness. Our developers then bring these designs to life using the latest technologies, ensuring your site is not only visually stunning but also fast, secure, and scalable.
        </p>
        <p>
         Throughout this phase, we maintain close communication, integrating feedback promptly and adapting to any evolving requirements. Our agile approach ensures that we deliver a product that exceeds your expectations.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
         The launch is just the beginning. After your website goes live, we offer free support for a set period to ensure everything runs smoothly. Our team actively monitors performance, addresses technical issues, and implements necessary updates to keep your site secure and efficient.
        </p>
        <p>
         Post-launch, we provide maintenance, analytics reviews, and enhancements tailored to evolving business needs. Whether it is adding new features or scaling up, our dedicated support ensures your website continues to grow with your business.
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Our Commitment to Excellence"
      >
        <p>
          We build reliable, scalable solutions with a focus on transparency, efficiency, and speed. Our client-centric approach ensures that your goals drive every step of the process, delivering high-quality results quickly and consistently.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Client-Centric">
           Your success is our success. We tailor every aspect of our service to align with your unique goals, providing personalized support and guidance.
          </GridListItem>
          <GridListItem title="Transparency">
            We believe in open and honest communication. Our processes are fully transparent, keeping you informed at every stage of development.
          </GridListItem>
          <GridListItem title="Speed of Development">
             Leveraging the latest technologies, we accelerate development to bring your project from concept to launch swiftly.
          </GridListItem>
          <GridListItem title="Reliable">
            Our commitment to reliability ensures that we deliver solutions that work seamlessly and consistently, meeting your business needs.
          </GridListItem>
          <GridListItem title="Scalable">
            We build websites that grow with your business, adapting to increased traffic, new features, and evolving requirements.
          </GridListItem>
          <GridListItem title="Innovation">
            We embrace the latest technologies and creative approaches, pushing boundaries to deliver cutting-edge solutions that keep your business ahead of the curve.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="Our Approach">
        <p>
          We combine strategic thinking, collaborative design, and cutting-edge technology to deliver impactful digital solutions tailored to your needs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Propose />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
