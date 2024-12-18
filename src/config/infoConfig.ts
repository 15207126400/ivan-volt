// personal info
export const name = 'Ivan'
export const headline = 'Software engineer, Full-Stack web developer, and indie hacker.'
export const introduction = 'I’m Ivan, a software engineer based in Wuhan, China. I like coding, and building interesting things'
export const email = 'yanzisu815@gmail.com'
export const githubUsername = '15207126400'

// about page
export const aboutMeHeadline = "I'm Ivan, a software engineer based in Wuhan, China."
export const aboutParagraphs = [
  "I love coding because it's like creating an intangible piece of art - every line of code is my brush and every feature is my work.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Wuhan, China now. And I'm building a lot of side projects in my spare time."
]


// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple small programs to complex web sites. Many of them are already online. Here are some of my favorites."


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I want to make a column that selects open source projects, as well as the practical tools compiled during the independent development process during this period, which can be found on my official account and the little newsboy in the future."

// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = "Check out the latest changes to this site."


// friends
export const friendsHeadLine = "Ivan' friends"
export const friendsIntro = "Meet some interesting friends."

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/yanzisu815'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/dJDsEj'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/15207126400'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
  },
  {
    name: 'xiaobot',
    icon: 'coffee',
    href: 'https://www.xiaobot.net/p/Ivan?refer=4e741fc7-a1a4-4ea6-b0ed-df7240073f2a'
  }
]


// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}



export const educationList: Array<EducationItemType> = [
  {
    school: 'Not a school',
    major: 'Computer Science and Technology',
    logo: 'college',
    start: '2016',
    end: '2020'
  },
]

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}



export const careerList: Array<CareerItemType> = [
  {
    company: 'Not a corp',
    title: 'Software Engineer',
    logo: 'bank',
    start: '2020',
    end: 'Present'
  },
]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'Ivan Volte',
    description:
      'A website about me.',
    link: { href: 'ivanvolt.com', label: 'Ivan Volte' },
    logo: '/images/icon/ivanvolt.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['me', 'website', 'blog']
  },
  {
    name: 'Be Guess',
    description:
      'One-stop solution to various tool.',
    link: { href: 'beguess.com', label: 'BeGuess' },
    logo: '/images/icon/beguess.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['i18n', 'json', 'yaml', 'base64', 'tools']
  },
  {
    name: 'Four Word Game',
    description:
      'Chinese Four-Character Idioms Game.',
    link: { href: 'fourwordgame.com', label: 'Four Word Game' },
    logo: '/images/icon/fourwordgame.png',
    category: ['Website'],
    techStack: ['vue3', 'tailwindcss'],
    tags: ['game', 'idioms', 'wechat', 'chinese']
  },
  {
    name: '青柠客壁纸',
    description: 'A fresh wallpaper applet.',
    link: { href: '/images/qrcode/qingningk-wallpaper-qrcode.jpg', label: 'qingningk wallpaper applet' },
    logo: '/images/icon/qingningk-wallpaper.jpg',
    category: ['Wechat Mini Program'],
    techStack: ['wechat', 'typescript'],
    tags: ['wallpaper','applet','wechat']
  },
  {
    name: '休闲趣味连线',
    description: 'A fun connecting game.',
    link: { href: '/images/qrcode/line-game-qrcode.jpg', label: 'Line Game' },
    logo: '/images/icon/line-game.png',
    category: ['Wechat Mini Program'],
    techStack: ['wechat', 'typescript'],
    tags: ['number','game', 'line']
  }
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'ivan-volt',
    description: 'A lightweight starter template for streamlined app development.',
    link: { href: 'github.com/15207126400/ivan-volt', label: 'ivan-volt on GitHub' },
    gitStars: 1,
    gitForks: 1
  },
  {
    name: 'ivan-wallpaper-wechat',
    description: 'ivan-wallpaper-wechat is a selected wallpaper application based on the WeChat applet.',
    link: { href: 'github.com/15207126400/ivan-wallpaper-wechat', label: 'wallpaper wechat' },
    gitStars: 2,
    gitForks: 1
  }
]

// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2024-12-18',
    content: [
      {
        title: '💡 Idea come up',
        description: 'I want to have a portfolio websit. The website doesn\'t need to be so fancy but should have a good design. It need to show all my projects and have a blog section to share my ideas and my development experience.'
      },
    ]
  },
  {
    date: '2024-12-22',
    content: [
      {
        title: '🛫 Project deployed',
        description: 'My portfolio website\'s first version finished building and deployed'
      },
    ]
  },
  {
    date: '2024-12-28',
    content: [
      {
        title: '👭 Add friends page',
        description: 'Add friends page to list my friends'
      },
    ]
  },
  {
    date: '2024-12-30',
    content: [
      {
        title: '🌿 Open source',
        description: 'Open source my portfolio website'
      },
    ]
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  // {
  //   name: 'Axis Wang',
  //   link: { href: 'https://wangxs.cfd' },
  // }
]


