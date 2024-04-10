import Header from "../../components/Header"
import frontAnimation from "../../assets/animations/animationFrontEnd.svg"
import P from "../../components/P"
import Heading, { HeadingSection } from "../../components/Headings"
import Section from "../../components/Section"
import Card from "../../components/Card"
import GridContainer from "../../components/GridContainer"
import Accordion from "../../components/Accordion"

const accordionsItem = [
  {
    title: "HTML / CSS",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "JavaScript / jQuery",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
]


export const FrontEndPage = () => {
  return (
    <>
      <Header
        background="linear-gradient(to right, #552c65, #8467bd, #ee93cd);"
        after="1"
      >
        <P color="#0effff" fsize="16px">
          Garanta uma carreira de sucesso como
        </P>

        <Heading level={1} fsize="2em" content="Desenvolvedor Front end" />

        <P color="#FFF" fsize="14px">Para você que não conhece nada de programação</P>
        <P color="#FFF" fsize="14px">Mentores com mais de 10 anos de mercado</P>
        <P color="#FFF" fsize="14px">Garanta seu emprego ou devolvemos seu dinheiro</P>

        <img className="animation" src={frontAnimation} alt="" />
      </Header>

      <Section padding="60px 5.6vw" bgcolor="#552c65">
        <GridContainer gridmd="2" gridlg="4" gap="32px">
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
        </GridContainer>
      </Section>
      <Section>
        <HeadingSection color="#552c65" align="center">
          Oque você ira aprender
        </HeadingSection>

        {accordionsItem.map((item) => (
          <Accordion
            titlecolor="#552c65"
            title={item.title}
            content={item.content}
          />
        ))}
      </Section>
    </>
  )
}

export default FrontEndPage