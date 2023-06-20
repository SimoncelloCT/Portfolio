export interface Project{
    leftScreenshot?: string,
    rightScreenshot?: string,
    centeredScreenshots?: string[],
    webScreenshot?: string,
    fullscrenImage?: string; //used for website project
    centeredVideo?: string; 
    title: string,
    icon: string,
    subtitle: string
    featureSections?: FeatureSection[]
    links?: Link[] //sshowed under screenshot
    achievements?: string[] //to be shown as cards with transparence
    skills?: Skill[] //image and keywork in a card
    gradientColor: string;
    textGradientColor: string;
    buttonsColor: string;
}

export interface FeatureSection{
    icon: string
    description: string
}


export interface Link{
    type : "AppStore"|"Web"
    url: string
    text: string
}

export interface Skill{
    icon: string,
    title: string
}