import { Component} from '@angular/core';
import { Project } from './Models/Project';
import { Experience } from './Models/Experience';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  projects: Project[] = [
    {
      icon: "../../assets/studium/studium.png",
      title: 'Studium',
      subtitle: 'The official iOS App of University of Catania, born to enhance communication between students and professors',
      leftScreenshot: "../../assets/studium/studium-screenshot-1.webp",
      rightScreenshot: "./../assets/studium/studium-screenshot-5.webp",
      centeredScreenshots: ["../../assets/studium/studium-screenshot-3.webp", "../../assets/studium/studium-screenshot-4.webp"],
      links: [
        { type: "AppStore", url: "https://apps.apple.com/it/app/studium-unict/id1510024640?l=en}", text: "See on App Store" },
        { type: "Web", url: "https://drive.google.com/file/d/1CZzw9Xjx59cRxZxbRYTrUY8nZ6MExyp4/view?usp=sharing", text: "See project paper" },
        { type: "Web", url: "https://www.cataniatoday.it/cronaca/universita-l-app-studium-unict-disponibile-anche-per-i-dispositivi-apple.html", text: "Newspaper Article" },
      ],
      gradientColor: "#093341",
      textGradientColor: "#88c9fa",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "list_alt", description: "Access to your current and future courses" }, { icon: "fact_check", description: "Organize your courses and related data" }, { icon: "folder_open", description: "Download, save and share documents with your colleagues" }, { icon: "mark_email_unread", description: "Keep updated by professors with Push Notifications" }, { icon: "edit_calendar", description: "Reserve your next exam" }],
      skills: [{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "UIKit" },{ icon: "database", title: "CoreData" },{ icon: "check_box", title: "XCTests" },{ icon: "database", title: "Firebase" }, { icon: "notifications", title: "APNs" },{ icon: "schedule_send", title: "REST APIs" },{ icon: "cycle", title: "ARC Management" }, { icon: "cloud_queue", title: "Apache Kafka" }]
    },
    {
      icon: "../../assets/easybooking/logo.png",
      title: 'EasyBooking',
      subtitle: 'A complete platform to manage bookings for sports, beauty and hairdressers',
      leftScreenshot: "../../assets/easybooking/screen1.png",
      rightScreenshot: "./../assets/easybooking/screen3.png",
      webScreenshot: "./../assets/easybooking/web.png",
      links: [
        { type: "Web", url: "https://easybookingapp.it/welcome", text: "See on the Web" },
        { type: "Web", url: "https://demo-sport.easybookingapp.it/login", text: "Try the demo" },
      ],
      gradientColor: "#2e0b49",
      textGradientColor: "#c192e8",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "edit_calendar", description: "Effortlessly manage customer appointments with ease" }, { icon: "mark_email_unread", description: "Drive sales success with customized campaigns and filters" }, { icon: "timeline", description: "Gain business clarity through trend analysis" },{ icon: "notifications", description: "Keep your audience informed with timely push notifications" }],
      skills: [{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "SwiftUI" },{ icon: "code_blocks", title: "RxSwift" }, { icon: "database", title: "Firebase" },{ icon: "database", title: "Firestore" }, { icon: "notifications", title: "APNs" },{ icon: "code_blocks", title: "Angular" }, { icon: "code", title: "Typescript" }, { icon: "dns", title: "NodeJS" }]
    },
    {
      icon: "../../assets/guardian/logo.jpg",
      title: 'Guardian',
      subtitle: 'A multi-platform mobile app that helps you to walk safely in your city',
      leftScreenshot: "../../assets/guardian/screen-1.PNG",
      rightScreenshot: "./../assets/guardian/screen-4.PNG",
      centeredScreenshots: ["../../assets/guardian/screen-2.PNG", "../../assets/guardian/screen-3.PNG"],
      links: [
        { type: "AppStore", url: "https://apps.apple.com/app/guardian/id1665898466", text: "See on App Store" },
        { type: "AppStore", url: "https://play.google.com/store/apps/details?id=com.letss.guardian", text: "See on Play Store" },
      ],
      gradientColor: "#311972",
      textGradientColor: "#9b7eea",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "visibility", description: "See your protected poeple in real-time" }, { icon: "not_listed_location", description: "Ask for protection during your safe navigation" }, { icon: "warning", description: "Send real-time automatic alerts when you fall down" }, { icon: "keyboard_command_key", description: "Use volume button or headphones removal to alert your friends and family" }, { icon: "chat", description: "Chat with your friends and family" }],
      skills: [{ icon: "code", title: "Dart" }, { icon: "code_blocks", title: "Flutter" }, { icon: "database", title: "Firebase" }, { icon: "notifications", title: "FCM" },{ icon: "schedule_send", title: "REST APIs" },{ icon: "schedule_send", title: "Google Maps SDK" },{ icon: "map", title: "Leaflet" },{ icon: "person_pin_circle", title: "Real-time Geolocation" }, { icon: "share_location", title: "Background Geolocation" }, { icon: "share", title: "Deep links" }, { icon: "shop_two", title: "In-App Purchases" }]
    },
    {
      icon: "../../assets/logicgame/logo.png",
      title: 'LogicGame',
      subtitle: 'A complete platform to make live quiz about logic circuits and Boolean algebra',
      leftScreenshot: "../../assets/logicgame/screen1.png",
      rightScreenshot: "./../assets/logicgame/screen2.png",
      webVideo: "./../assets/logicgame/video.mov",
      gradientColor: "#173215",
      textGradientColor: "#abefa5",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "edit_calendar", description: "Prepare circuits for your students" }, { icon: "quiz", description: "Make live and fun quiz" }, { icon: "stars", description: "Allow students practice with boolean algebra and logic circuits" },{ icon: "timeline", description: "Real-time insights about who is the best student in the room" },{ icon: "phone_iphone", description: "Android and iOS native apps" }],
      skills: [{ icon: "code", title: "HTML" }, { icon: "code", title: "Javascript" }, { icon: "code", title: "CSS" },{ icon: "code_blocks", title: "JQuery" },{ icon: "code", title: "Canvas" },{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "UIKit" },{ icon: "code", title: "Java" }, { icon: "code_blocks", title: "Android" },{ icon: "database", title: "Firebase" }]
    },
    {
      icon: "../../assets/runkick/icon.jpg",
      title: 'Runkick',
      subtitle: 'A multiplayer football videogame to test your reflexes',
      leftScreenshot: "../../assets/runkick/screen2.jpeg",
      rightScreenshot: "./../assets/runkick/screen3.jpeg",
      centeredVideo: "../../assets/runkick/video.mp4",
      // links: [
      //   { type: "AppStore", url: "https://apps.apple.com/it/app/studium-unict/id1510024640?l=en}", text: "See on App Store" },
      //   { type: "Web", url: "https://www.cataniatoday.it/cronaca/universita-l-app-studium-unict-disponibile-anche-per-i-dispositivi-apple.html", text: "Newspaper Article" },
      // ],
      gradientColor: "#86b05c",//"#73B92F",
      textGradientColor: "#b8e587",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "sports_soccer", description: "Challenge yourself in single player mode" }, { icon: "groups", description: "Play against people all over the world" }, { icon: "group", description: "Challenge your facebook friends" }, { icon: "workspace_premium", description: "See your worldwide leaderboard position" }],
      skills: [{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "UIKit" }, { icon: "code_blocks", title: "SpriteKit" },{ icon: "database", title: "Firebase" },{ icon: "cycle", title: "ARC Management" }]
    },

    {
      icon: "../../assets/var/logo.png",
      title: 'VAugmentedReality',
      subtitle: 'A computer vision project to avoid VAR errors due to framerate\'s approximations',
      webVideo: "./../../assets/var/video2.mov",
      gradientColor: "#3ea368",
      textGradientColor: "#76f2aa",
      links: [
        { type: "Web", url: "https://drive.google.com/file/d/1F_jNzzbe6rEa0cqc_Mstez6S6wkJpWt-/view?usp=sharing", text: "See project paper" },
      ],
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "photo_frame", description: "Avoid framerate imprecision errors" }, { icon: "slow_motion_video", description: "Realtime procesing" }, { icon: "timeline", description: "Use ML to enhance decisions" }],
      skills: [{ icon: "code", title: "Python" },{ icon: "code_blocks", title: "OpenCV" },{ icon: "code_blocks", title: "Tensorflow" },{ icon: "code_blocks", title: "YoloV4" }, { icon: "lan", title: "KCF Object Tracker" }, { icon: "transform", title: "Perspective transformation" }]
    },
    {
      icon: "../../assets/flue/icon.jpg",
      title: 'Flue',
      subtitle: 'A mind-blowing 3D video game that will get you hooked',
      leftScreenshot: "../../assets/flue/screen1.jpg",
      rightScreenshot: "./../assets/flue/screen2.jpg",
      centeredVideo: "../../assets/flue/video.mov",
      // links: [
      //   { type: "AppStore", url: "https://apps.apple.com/it/app/studium-unict/id1510024640?l=en}", text: "See on App Store" },
      //   { type: "Web", url: "https://www.cataniatoday.it/cronaca/universita-l-app-studium-unict-disponibile-anche-per-i-dispositivi-apple.html", text: "Newspaper Article" },
      // ],
      gradientColor: "#64a8a8",//"#73B92F",
      textGradientColor: "#9eeded",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "sports_soccer", description: "Challenge yourself in single player mode" }, { icon: "timer", description: "The more time passes, the tougher the challenge gets" }, { icon: "egg", description: "Discover the \"easter egg\" hidden after many levels" }, { icon: "align_horizontal_left", description: "Dodge the obstacles and keep your color" }],
      skills: [{ icon: "code", title: "C#" }, { icon: "code_blocks", title: "Unity" }, { icon: "cycle", title: "Multithreading" }]
    },
    {
      icon: "../../assets/steganography/icon.png",
      title: 'Steganography',
      subtitle: 'Hide information into your photos to send secure private visual messages',
      leftScreenshot: "../../assets/steganography/screen1.png",
      rightScreenshot: "./../assets/steganography/screen5.png",
      centeredScreenshots: ["../../assets/steganography/screen3.png","../../assets/steganography/screen4.png"],
      links: [
    
        { type: "Web", url: "https://drive.google.com/file/d/1wQO9lCJ7nPgzT4oQCXRNQgv_W_xqSvf9/view?usp=sharing", text: "See project paper" },
      ],
      gradientColor: "#b7a645",//"#73B92F",
      textGradientColor: "#e5d475",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "hide_image", description: "Hide your private image within another image for secure sharing" }, { icon: "lan", description: "Utilize the Least Significant Bit (LSB) algorithm to embed images covertly" }, { icon: "enhanced_encryption", description: "Protect your hidden image with a secure symmetric encryption key" }],
      skills: [{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "SwiftUI" },{ icon: "code_blocks", title: "RxSwift" }, { icon: "code_blocks", title: "AES Criptography" }, { icon: "code", title: "Bitwise management" }]
    },
    {
      icon: "../../assets/passions/icon.png",
      title: 'Passions',
      subtitle: 'A social network designed to connect individuals who share your passions',
      leftScreenshot: "../../assets/passions/screen1.png",
      rightScreenshot: "./../assets/passions/screen2.png",
      centeredVideo: "../../assets/passions/video.mp4",
      gradientColor: "#ad7616",//"#73B92F",
      textGradientColor: "#e5d475",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "view_carousel", description: "Beautiful animations for a wonderful user experience" }, { icon: "grid_view", description: "Show your passions to other users by defining collections" }, { icon: "share", description: "Help others to live their passions providing useful links" }],
      skills: [{ icon: "code", title: "Swift" }, { icon: "code_blocks", title: "UIKit" },{ icon: "code_blocks", title: "AVFoundation" }]
    },
    {
      icon: "../../assets/csm/icon.png",
      title: 'CSM',
      subtitle: 'A cloud-native platform for managing construction sites',
      links: [
        { type: "Web", url: "https://drive.google.com/file/d/12x6RzmksE7RArqAVwmjBDE_nLsuqdU9b/view?usp=sharing", text: "See project paper" },
      ],
      leftScreenshot: "../../assets/csm/screen1.png",
      rightScreenshot: "./../assets/csm/screen3.png",
      webScreenshot: "../../assets/csm/screen2.png",
      gradientColor: "#7c131c",//"#73B92F",
      textGradientColor: "#ff727e",
      buttonsColor: "#88c9fa51",
      featureSections: [{ icon: "home_work", description: "Manage all your contruction sites directly from the backoffice" }, { icon: "av_timer", description: "See realtime hour reportings from site workers" }, { icon: "file_open", description: "Export business-critical documents with a few clicks" }, { icon: "cloud_done", description: "Store your data into the cloud, forget to manage them" }],
      skills: [{ icon: "code", title: "Dart" }, { icon: "code_blocks", title: "Flutter" },{ icon: "code", title: "Typescript" },{ icon: "code_blocks", title: "Angular" },{ icon: "dns", title: "NodeJS" },{ icon: "cloud_sync", title: "AWS" },{ icon: "cloud_circle", title: "Serverless" }, { icon: "function", title: "Lambda Functions" },{ icon: "badge", title: "Cognito" }, { icon: "storage", title: "S3" }, { icon: "database", title: "DynamoDB" },{ icon: "api", title: "API Gateway" }, { icon: "bolt", title: "GraphQL" }, { icon: "magic_exchange", title: "AppSync" }, { icon: "backup_table", title: "CloudFormation" }]
    }
  ];


  experiences: Experience[] = [
    {
      startDate: 'Feb 2017',
      endDate: 'Jun 2017',
      logoPath: '../../assets/companies/flazio.png',
      companyName: 'Flazio',
      description: '',
      role: "Front-End developer"
    },
    {
      startDate: 'Mar 2019',
      endDate: 'Feb 2020',
      logoPath: '../../assets/companies/freelance.png',
      companyName: 'Freelance',
      description: '',
      role: "Full-Stack developer"
    },
    {
      startDate: 'Feb 2020',
      endDate: 'Jul 2020',
      logoPath: '../../assets/companies/unict.png',
      companyName: 'Unict Information Systems',
      description: '',
      role: "iOS Engineer"
    },
    {
      startDate: '20 Nov 2022',
      endDate: '20 Nov 2023',
      logoPath: '../../assets/companies/bax.png',
      companyName: 'BaxEnergy',
      description: '',
      role: "Software Engineer"
    },
    {
      startDate: 'Nov 2022',
      endDate: 'Present',
      logoPath: '../../assets/companies/codedix.png',
      companyName: 'Codedix',
      description: '',
      role: "iOS Engineer • Co-founder"
    }

  ]
}
