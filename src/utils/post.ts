import { IPost } from "../dtos/post";


export const posts: IPost[] = [
  {
    id: '1',
    user: "João Miguel",
    content: `Mas um projeto autoral fora do forno✨`,
    description: "Motion Design",
    likes: 2,
    image: "miguel/neymar.jfif",
    avatar: "miguel/jm.jfif",
    time: "1 d",
    since: "Seguindo"
  },
  {
    id: '134',
    user: "Délcio Francisco",
    content: `Tomorow we'd an meet to speak all about challanges in 
    IT area from my youtube channel 👉🏽 https://lnkd.in/gDA6x2ee.`,
    description: "Java | Spring | Javascript | React | Angular | NodeJS | Flutter | Content creator",
    likes: 8,
    image: "delcio/post.jfif",
    avatar: "delcio/avatar.jfif",
    time: "6 m",
    since: "Seguindo"
  },
  {
    id: '2',
    user: "Joel Marinho",
    content: `Aconteceu, no passado dia 26 do mês de Abril ano 2023, a minha defesa de final de curso.
    A mesma, teve como tema: Sistema de Votação para o Festival Anual da Música Angolana implementada com Tecnologia BlockChain e por se tratar de assunto de extrema relevância, foi uma honra estar aí e apresentar

    
    No final, foi-me brindada a aprovação com 19 valores e com grande regozijo eu agradeço a Universidade Metodista de Angola e também à Pro-it Consulting em particular ao Sr. Rui por ser um mentor e me guiar no mundo profissional .`,
    description: "• Frontend - ReactJS | NextJS | TypeScript • Backend- TypeScript",
    likes: 2,
    image: "joel/post.jfif",
    avatar: "joel/avatar.jfif",
    time: "8 m",
    since: "Seguindo"
  },
];