import dnj_studio from '../images/projects/dnj_studio.png'
import trumba_trans from '../images/projects/trumba_trans.png'
import galinas from '../images/projects/galinas.png'
import mon_pion from '../images/projects/mon_pion.png'
import mas from '../images/projects/mas.jpeg'
import rsub from '../images/projects/rsub.jpeg'
import atl from '../images/projects/atl.png'

export const projetsList = [
    {
        title: 'DnJ Studio',
        imagePath: dnj_studio,
        showLink:'https://dnj-studio.com.ua/',
        gitHubLink:'',
        technologies: ['React', 'React_Router', 'Redux', 'Vanilla_JavaScript', 'SCSS', 'REST_API'],
        infoRoute: 'dnj_studio',
        description: 'My web studio which is created as a representation of services and portfolio for freelance activity.'
    },
    {
        title: 'Trumba Trans',
        imagePath: trumba_trans,
        showLink:'https://trumba-trans.com.ua/',
        gitHubLink:'',
        technologies: ['React', 'Redux', 'Redux_Thunk','React_Router', 'Material_Ui', 'SCSS', 'REST_API'],
        infoRoute: 'trumba_trans',
        description: `A corporate website for a logistics company. The goal is to present the company and its services, convenient functionality for interacting with potential new clients using an extended feedback form, which includes a route constructor for price formation. The site also has an administrator's office, which contains the following functionality: displaying a list of all requests through a feedback form, creating contracts with further printing, managing (adding, editing, deleting) counterparties, routes, clients with whom a contract is signed`
    },
    {
        title: 'MAS',
        imagePath: mas,
        showLink:'https://eugenere95.github.io/blog_v1/',
        gitHubLink:'https://github.com/EugeneRe95/blog_v1/tree/master',
        technologies: ['React', 'Redux','React_Router', 'SCSS'],
        infoRoute: 'mas',
        description: 'Demo blog site. Each post is generated from the redux store. Blog-post content is dynamically generated, just like routing. The routes of the website are divided into latest, popular and all posts and are updated automatically. There is further ability to implement post creating from admin page , while loading posts from data base.'
    },
    {
        title: 'RSUB',
        imagePath: rsub,
        showLink:'https://eugenere95.github.io/blog_v2/',
        gitHubLink:'https://github.com/EugeneRe95/blog_v2/tree/master',
        technologies: ['React', 'Redux','React_Router', 'SCSS'],
        infoRoute: 'rsub',
        description: 'Demo blog site. Each post is generated from the redux store. Blog-post content is dynamically generated, just like routing. The routes of the website are divided into latest, popular and all posts and are updated automatically. There is further ability to implement post creating from admin page , while loading posts from data base.'
    },
    {
        title: 'Awesome Todo List',
        imagePath: atl,
        showLink:'https://eugenere95.github.io/awesome_todo_list/',
        gitHubLink:'https://github.com/EugeneRe95/awesome_todo_list/tree/main',
        technologies: ['React', 'Redux','React_Router', 'SCSS'],
        infoRoute: 'awesome_todo_list',
        description: 'Task manager app. All tasks store in redux store as well as in localStorage, so user has ability to save all tasks after turning off the app. Each created task is validated for name and unique pair value name/date. There are 4 types of deadline to be set automatically: actual date, no deadline, today, expired. All tasks are ditributed between routes for convenient management. There is scoreboard which indicates the amount of each task type. User can delete or complete specific task.'
    },
    {
        title: 'Galinas',
        imagePath: galinas,
        showLink:'https://galinas.kiev.ua/',
        gitHubLink:'',
        technologies: ['HTML', 'SCSS', 'Vanilla_JavaScript', 'REST_API'],
        infoRoute: 'galinas',
        description: 'Landing page for an atelier, the purpose of which is to present the available services. There is a gallery of completed works, services in the form of dynamic modal windows for easy viewing of content, a feedback form'
    },
    {
        title: 'Mon Pion',
        imagePath: mon_pion,
        showLink:'https://mon-pion.com.ua/',
        gitHubLink:'',
        technologies: ['HTML', 'SCSS', 'Vanilla_JavaScript', 'REST_API'],
        infoRoute: 'mon_pion',
        description: 'Landing page for a beauty salon. The goal is to present services and prices for them, while maintaining the convenience of viewing content and personal design in accordance with the field of activity. Feedback system, a map with a site for the location of the salon, dynamically generated blocks with a price list for services for comfortable use both on PC and mobile devices'
    }
]