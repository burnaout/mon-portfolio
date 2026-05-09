import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Gabin",
  lastName: "Mercier",
  name: `Gabin Mercier`,
  role: "Etudiant en ingénieurie",
  avatar: "/images/PhotoProCv.png",
  email: "gabin.mercier.bao@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Francais", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Abonnez vous à la Newsletter de {person.firstName}</>,
  description: <>Ma newsletter a propos de mes projets et experiences</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabin-mercier",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/gabin_merc/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio reunissant mon travail en tant que ${person.role}`,
  headline: <>Découvrez mes projets et réalisations.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SeaTech Toulon</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Etude Actuel
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Je suis Gabin, étudiant en École d'Ingénieur à <Text as="span" size="xl" weight="strong">SeaTech Toulon</Text>, où j'apprend l'ingenieurie Aéronaval et des principes physiques maritime.</>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Rencontre ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Étudiant en diplôme d'ingénieur issu d'une classe préparatoire PC, je combine une formation scientifique solide et des expériences en encadrement avec des responsabilités.
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Etudes",
    institutions: [
      {
        name: "SeaTech",
        timeframe: "2025 - Present",
        description: <>Diplome d'ingénieure</>,
        achievements: [
          <>
            Seatech est une école d'ingénieur du groupe INP specialisé dans sciences et technologie dédies au secteur maritime.          </>,
        ],
      },
      {
        name: "Lycée Camille Julian",
        timeframe: "2023 - 2025",
        description: <>Classe préparatoire aux grandes écoles</>,
        achievements: [
          <>
          Physique Chimie Science de l'Ingénieur (PCSI) puis Physique Chimie (PC)           </>,
        ],
      },
      {
        name: "Lycée Jean Dautet",
        timeframe: "2020 - 2023",
        description: <>Bacalauréat </>,
        achievements: [
          <>
          Specialité Math, Physique, SVT Option Maths expertes          </>,
        ],
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences Professionnelles",
    experiences: [
      {
        company: "Club nautique du Pradet de la Garonne",
        timeframe: "2025 - Present",
        role: "Moniteur de voile",
        achievements: [
          <>
            Encadrement de groupes, gestion de la sécurité, organisation des séances, pédagogie et responsabilité.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Club-Nautique-du-Pradet.png",
            alt: "Once UI Project",
             width: 8,
            height: 4.5,
          },
        ],
      },
      {
        company: "Club nautique de la Couarde du Goisil",
        timeframe: "2022 - Present",
        role: "Moniteur de voile",
        achievements: [
          <>
            Encadrement de groupes, gestion de la sécurité, organisation des séances, pédagogie et responsabilité.
          </>,
          <>
            Experience saisonnière.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Logo-CNCG-Accueil.png",
            alt: "Once UI Project",
            width: 8,
            height: 4.5,
          },
        ],
      },
       {
        company: "Cooperative des sauniers de l'ile de Ré",
        timeframe: "2020 - 2022",
        role: "Récolte de sel / Vente",
        achievements: [
          <>
            Récolte artisanale des sel dans les marais salants 
          </>,
          <>
            Experience saisonnière dans la vente et le contact client, gestion de stock et logistique.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Logo_LesSauniers.png",
            alt: "Once UI Project",
            width: 8,
            height: 4.5,
          },
        ],
      },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences Techniques",
    skills: [
      {
        title: "Programmation",
        description: (
          <>Compétent en Python, apprentissage du langage C. Autodidacte pour le développement de sites web avec WordPress. Modélisation d'écoulement avec Simscale</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "C",
            icon: "c",
          },
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "Simscale",
            icon: "simscale",
          },
        ],
      },
      {
        title: "Modélisation et Conception",
        description: (
          <>Je me forme personnellement aux outils de modélisations tels que Fusion 360, et j'imprime mes propres composants avec mon impirmante 3D.</>
        ),
        tags: [
          {
            name: "Fusion 360",
            icon: "fusion360",
          },
          {
            name: "Impression 3D",
            icon: "3d-printing",
          },
          {
            name: "Cura",
            icon: "cura",
          },
        ],
        
      },
      {
        title: "Aéonautique/Nautisme",
        description: (
          <> Formation Private Pilot License ( PPL ) , BIA (brevet d'intiation aéronautique),  Monitorat (CQP initiateur voile ), Niveau 4 voile</>
        ),
        tags: [
          {
            name: "BIA",
            icon: "bia",
          },
          {
            name: "PPL",
            icon: "ppl",
          },
          {
            name: "CQP Initiateur Voile",
            icon: "cqp-initiator-voile",
          },
        ],
        
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
