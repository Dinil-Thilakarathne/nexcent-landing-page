import { blogImg1, blogImg2, blogImg3, clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7, heroImg, illustration1 } from "../assets"

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

export const achievementList = [
    {header: '2,245,341',subheader: 'Members', icon: 'users-alt' },
    {header: '46,328',subheader: 'Clubs', icon: 'trees' },
    {header: '828,867',subheader: 'Event Booking', icon: 'bookmark-full' },
    {header: '1,926,436',subheader: 'Payments', icon: 'credit-card' },
]

export const calendarContent = {
    header: 'How to design your site footer like we did',
    description: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.',
    btnText: 'Learn more'
}

export const customerContent = {
    description: 'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales',
    customerName : 'Tim Smith',
    customerDescrtiption : 'British Dragon Boat Racing Association',
    icon : 'arrow-right'
}
export const customerList = [
    {label : 'client-1', imgUrl : clientLogo1},
    {label : 'client-2', imgUrl : clientLogo2},
    {label : 'client-3', imgUrl : clientLogo3},
    {label : 'client-4', imgUrl : clientLogo4},
]
export const blogPosts = [
    {label : 'post-1', postImg : blogImg1, postBtn: 'Read more'},
    {label : 'post-2', postImg : blogImg2, postBtn: 'Read more'},
    {label : 'post-3', postImg : blogImg3, postBtn: 'Read more'},
]

export const footerLinks = [
    [
        {label : 'Company' , key: 'header-1'},
        {label : 'About us' , key: 'item-1-1'},
        {label : 'blog' , key: 'item-1-2'},
        {label : 'Contact us' , key: 'item-1-3'},
        {label : 'Pricing' , key: 'item-1-4'},
        {label : 'Testimonials' , key: 'item-1-5'},
    ],
    [
        {label : 'Support' , key: 'header-2'},
        {label : 'Help center' , key: 'item-2-1'},
        {label : 'Terms of service' , key: 'item-2-2'},
        {label : 'Legal' , key: 'item-2-3'},
        {label : 'Privacy policy' , key: 'item-2-4'},
        {label : 'Status' , key: 'item-2-5'},
    ]
]