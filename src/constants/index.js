import { clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7, heroImg, illustration1 } from "../assets"

export const navLinks = [
    {label: "Home", href: '/'},
    {label: "Service", href: '/'},
    {label: "Feature", href: '/'},
    {label: "Product", href: '/'},
    {label: "Testimonial", href: '/'},
    {label: "FAQ", href: '/'},
]

export const heroContent = {
    header : "Lessons and insights from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    cta : "Register",
    imgUrl : heroImg,
    imgAlt : "hero image"
}

export const clientsContent = [
    {label : 'client-1', imgUrl : clientLogo1},
    {label : 'client-2', imgUrl : clientLogo2},
    {label : 'client-3', imgUrl : clientLogo3},
    {label : 'client-4', imgUrl : clientLogo4},
    {label : 'client-5', imgUrl : clientLogo5},
    {label : 'client-6', imgUrl : clientLogo6},
    {label : 'client-7', imgUrl : clientLogo7},
]

export const servicesContent = [
    {icon: 'users-alt', header: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: 'building', header: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: 'comment-alt-lines', header: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments'},
]

export const aboutContent = {
    imgUrl : {illustration1},
    header : 'The unseen of spending three years at Pixelgrade',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.',
    btnText : 'Learn more'
}