import { TbDiscount2 } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Header from "../../components/HomeHeader";
import Heading, { HeadingSection } from '../../components/Headings'
import SocialBar, { ISocial } from '../../components/SocialBar'
import Section from '../../components/Section'
import TeacherCard, { ITeacherProps } from '../../components/Cards/TeacherCard'
import CourseCard, { ICourseProps } from '../../components/Cards/CourseCard'
import Form from '../../components/Formulario/Form'
import InputGroup from '../../components/Formulario/InputGroup'
import Select from '../../components/Formulario/Select'
import Footer from "../../components/Footer";
import Button from "../../components/Buttons/Button";
import P from "../../components/Text";
import FlexContainer from "../../components/Containers/FlexContainer";
import GridContainer from "../../components/Containers/GridContainer";
import ButtonHeader from "../../components/Buttons/ButtonHeader";
import Hr from "../../components/Hr";
import { ILinkProps } from "../../components/Link";
import Links from "../../components/Links";

import backgroundHome from '../../assets/backgrounds/home.jpg'
import aboutimage from '../../assets/section/about.png'
import professor1 from '../../assets/section/Jaque.png'
import professor2 from '../../assets/section/Mauricio.png'
import professor3 from '../../assets/section/leonardo.jpg'
import course1 from '../../assets/section/courseFront.png'
import course2 from '../../assets/section/courseBack.png'
import course3 from '../../assets/section/courseFull.png'
import course4 from '../../assets/section/courseUxUi.png'
import StartTime from "../../utils/StartTime";

const sociallist: ISocial[] = [
  {
    url: "1",
    icon: FaGithub
  },
  {
    url: "3",
    icon: FaLinkedin,
  }
]

const footerLinks: ILinkProps[] = [
  {
    to: "/",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Voltar para a home'
  },
  {
    to: "/frontend",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Curso FrontEnd'
  },
  {
    to: "/backend",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Curso BackEnd'
  },
  {
    to: "/fullstack",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Curso FullStack'
  },
  {
    to: "/uxui",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Curso UI/UX'
  }
]

const teachers: ITeacherProps[] = [
  {

    imageurl: professor1,
    name: "Jaqueline Vitoria",
    profession: "UX/UI Design",
    description: "Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
  },
  {
    imageurl: professor2,
    name: "Mauricio Goldoni",
    profession: "Desenvolvedor BackEnd",
    description: "Olá eu sou o Mauricio tenho 21 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
  },
  {
    imageurl: professor3,
    name: "Leonardo Patrick",
    profession: "Desenvolvedor FrontEnd",
    description: "Olá eu sou o Leonardo tenho 21 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
  }

]

const courses: ICourseProps[] = [
  {
    coursename: "Desenvolvedor Front End",
    imageurl: course1,
    description: 'lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!',
    content: 'Saiba mais',
    to: "frontend"
  },
  {
    coursename: 'Desenvolvedor Back End',
    imageurl: course2,
    description: 'lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!',
    content: 'Saiba mais',
    orientation: 'reverse',
    to: "/backend"
  },
  {
    coursename: 'Desenvolvedor Full Stack',
    imageurl: course3,
    description: 'lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!',
    content: 'Saiba mais',
    to: "/fullstack"
  },
  {
    coursename: 'UX/UI Designer',
    imageurl: course4,
    description: 'lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!',
    content: 'Saiba mais',
    orientation: 'reverse',
    to: "uxui"
  }
]


export default function Home() {

  const [minutes, seconds] = StartTime(60)

  return (
    <>
      <Header
        after="2"
        background={backgroundHome}
        align="center"
        justify="center"
        gap="20px" >


        <P color="#00a2ff" fsize="18px">formação online</P>

        <Heading
          level={1}
          content="Cursos Infratech"
          align='center' />

        <Heading
          level={2}
          align='center'
          content="Cursos profissinalizantes para o seu crescimento profissional." />

        <ButtonHeader
          to="#HomeForm"
          bgcolor="transparent"
          bgcolorhover="#00a2ff"
          textcolor="#00a2ff"
          bordercolor="#00a2ff"
          textcolorhover="#fff"
          content="Inscreva-se"
        />

        <SocialBar socialList={sociallist} />

      </Header>

      <HeadingSection
        bgcolor="#421eaa"
        align='center'
        content="Cursos profissinalizantes para o seu crescimento profissional."
      />

      <Section margin="40px 0"> {/* About */}
        <div className="container" >

          <Heading
            level={2}
            color='#000'
            content="Sobre nós " />

          <Hr bordercolor='#00a2ff' />

          <FlexContainer flexsm="column" flexmd="row">
            <img src={aboutimage} alt="about-img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam,rum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam.
            </p>
          </FlexContainer>

        </div>
      </Section>

      <Section> {/* teachers */}
        <div className="container">

          <HeadingSection
            align="center"
            bgcolor='#00a2ff'
            content="Nossos Professores" />

          <Hr bordercolor='#00a2ff' />

          <GridContainer gridmd='3' gap="20px">
            {teachers.map((item) =>
              <TeacherCard
                name={item.name}
                description={item.description}
                imageurl={item.imageurl}
                key={item.name}
                profession={item.profession}
              />
            )}
          </GridContainer>

        </div>
      </Section>

      <Section> {/* courses */}
        <div className="container">

          <HeadingSection
            align="center"
            bgcolor='#00a2ff'
            content=" Nossos Cursos" />

          <Hr bordercolor='#00a2ff' />

          {courses.map((course) => (
            <CourseCard
              orientation={course.orientation}
              key={course.coursename}
              coursename={course.coursename}
              imageurl={course.imageurl}
              description={course.description}
              content={course.content}
              to={course.to} />
          ))}

        </div>
      </Section>

      <HeadingSection level={2} bgcolor='#421eaa' align='center'>
        <P color="#fff">
          <TbDiscount2 color="#00a2ff" size="22px" />
          {`Desconto disponivel por  00:${minutes}:${seconds}`}
        </P>
      </HeadingSection>

      <Section id="HomeForm" margin="60px 0 0"> {/* Form */}
        <div className="container-md">

          <Form >
            <Heading
              level={3}
              color='#000'
              content="Garanta ja sua vaga" />

            <Hr bordercolor='#00a2ff' />

            <InputGroup
              label="Nome"
              inputname="name"
              inputtype="text"
              border="1px solid #00a2ff"
            />
            <InputGroup
              mask="(00) 00000-0000"
              label="Celular"
              inputname="cel"
              inputtype="tel"
              border="1px solid #00a2ff"
            />
            <InputGroup
              label="Email"
              inputname="email"
              inputtype="email"
              border="1px solid #00a2ff"
            />

            <Select selectname="course" label='Curso de interesse' border="1px solid #00a2ff" >
              <option className="optionDefault" defaultValue="valor default" />
              <option value="devfront">Desenvolvedor Front End</option>
              <option value="devback">Desenvolvedor Back End</option>
              <option value="fullstack">Desenvolvedor Full Stack Java</option>
              <option value="uxui">UX/UI Designer</option>
            </Select>

            <Button
              bgcolor="#0779bb"
              bgcolorhover="#00a2ff;"
              textcolor="#fff"
              rounded="10px"
              size="100%"
              type="submit"
              content="Inscreva-se"
            />
          </Form >

        </div >
      </Section>

      <Footer bgcolor='#421eaa'>
        <Links links={footerLinks} />
        <P>© Todos os direitos reservados</P>
      </Footer>
    </>
  )
}
