type Props = {
  heading: string,
  children: React.ReactNode
}

const Section = ({ heading, children }: Props) => (
  <section>
    <h1>{heading}</h1>
    {children}
  </section>
)

export default Section
