import one from "../images/one.jpg";
import two from "../images/two.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";
import seven from "../images/seven.jpg";
import eight from "../images/eight.jpg";
import president from "../images/president.jpg";

const TheRealJargon = `
The President of NUNSA UNICAL and his Executives,
recognizing the importance of staying technologically
up-to-date, took a proactive step by commissioning a
developer to create a custom web application for the
association. Understanding that the digital landscape
plays a crucial role in modernizing organizations, the
President's forward-thinking approach aimed to ensure
that NUNSA would not lag behind in technology. By
investing in this web app, the association can
streamline its operations, enhance communication with
members, and provide more efficient services to the
community they serve. This strategic move demonstrates
the President's commitment to keeping NUNSA relevant and
responsive in the ever-evolving digital age.`;
// election result
const electionResult = [
  {
    name: "balewa amure",
    // uv: 4000,
    votes: 0,
    // votes: 500,
    amt: 2400,
  },
  {
    name: "suliya chale",
    // uv: 3000,
    votes: 1,
    // votes: 200,
    amt: 2210,
  },
  {
    name: "dan chima",
    // uv: 2000,
    votes: 0,
    // votes: 50,
    amt: 2290,
  },
  {
    name: "bobo D",
    // uv: 2780,
    votes: 0,
    // votes: 450,
    amt: 2000,
  },
  {
    name: "roller rola",
    // uv: 2780,
    votes: 0,
    // votes: 450,
    amt: 2010,
  },
];

const totalResult = {
  president: electionResult,
  vPresident: electionResult,
  finSec: electionResult,
  genSec: electionResult,
  treasurer: electionResult,
  dirOfWelfare: electionResult,
  dirOfSocials: electionResult,
  dirOfSports: electionResult,
  dirOfHealth: electionResult,
  dirOfInfo: electionResult,
};
// testPeople
const testPeople = [
  {
    chatId: "1",
    userName: "sunshine moon",
    userImg: "",
    userClass: "yr3",
  },
  {
    chatId: "2",
    userName: "sunshine moon",
    userImg: seven,
    userClass: "yr3",
  },
  {
    chatId: "3",
    userName: "sunshine moon",
    userImg: seven,
    userClass: "yr3",
  },
  {
    chatId: "4",
    userName: "sunshine moon",
    userImg: "",
    userClass: "yr3",
  },
  {
    chatId: "5",
    userName: "sunshine moon",
    userImg: seven,
    userClass: "yr3",
  },
  {
    chatId: "6",
    userName: "sunshine moon",
    userImg: "",
    userClass: "yr3",
  },
];
// testChats
const testChats = [
  {
    chatId: "1",
    chatPaticipantA: "1a",
    chatPaticipantB: "2b",
    chatPaticipantB_name: "sunshine moon",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: five,
    lastMessage: TheRealJargon,
    lastMessage_time: "23/8/23",
  },
  {
    chatId: "2",
    chatPaticipantA: "1a",
    chatPaticipantB: "3c",
    chatPaticipantB_name: "Florence Obi",
    chatPaticipantB_img: six,
    lastMessage: `Are you Eddy because you are the best, or are you the best because you are Eddy?`,
    lastMessage_time: "21/8/23",
  },
  {
    chatId: "3",
    chatPaticipantA: "1a",
    chatPaticipantB: "4d",
    chatPaticipantB_name: "uchiha mAdara",
    chatPaticipantB_img: eight,
    lastMessage: `Wake up to reality, nothing really goes as planned in this accursed world.`,
    lastMessage_time: "19/8/23",
  },
  {
    chatId: "4",
    chatPaticipantA: "1a",
    chatPaticipantB: "5e",
    chatPaticipantB_name: "Seun kuti",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: eight,
    lastMessage: `The Susano'o itself is destruction.`,
    lastMessage_time: "19/8/23",
  },
  {
    chatId: "5",
    chatPaticipantA: "1a",
    chatPaticipantB: "6f",
    chatPaticipantB_name: "obo baddest",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: eight,
    lastMessage: `Them no dey see me`,
    lastMessage_time: "18/8/23",
  },
  {
    chatId: "6",
    chatPaticipantA: "1a",
    chatPaticipantB: "7g",
    chatPaticipantB_name: "machala wiz",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: eight,
    lastMessage: `Man just wan dey happy man wan dey alright`,
    lastMessage_time: "18/8/23",
  },
  {
    chatId: "7",
    chatPaticipantA: "1a",
    chatPaticipantB: "8h",
    chatPaticipantB_name: "ybnl baddoo",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: eight,
    lastMessage: `oti mu dogoyaro, na monkey tail. ba mi gbe caro, i want to do shino today *2`,
    lastMessage_time: "17/8/23",
  },
  {
    chatId: "8",
    chatPaticipantA: "1a",
    chatPaticipantB: "9i",
    chatPaticipantB_name: "omah lay",
    chatPaticipantB_img: "",
    // chatPaticipantB_img: eight,
    lastMessage: `The Doctor said i burnt my liver, i've been drinking smoking cigars`,
    lastMessage_time: "17/8/23",
  },
];

// testPost
const testPost = [
  {
    postId: "1",
    posterId: "a",
    posterName: "angelina Jolie",
    post: false,
    showComments: false,
    postImg: six,
    postText: TheRealJargon,
    postLikes: 5673,
    postDisLikes: 23,
    postComments: 3,
    postTime: "August 10, 2023",
    liked: true,
  },
  {
    postId: "2",
    posterId: "b",
    posterName: "Daenarys Targayrn",
    post: false,
    showComments: false,
    postImg: five,
    postText: TheRealJargon,
    postLikes: 1000,
    postDisLikes: 363,
    postComments: 1,
    postTime: "August 9, 2023",
  },
  {
    postId: "4",
    posterId: "d",
    posterName: "Hirako Shinji",
    post: false,
    showComments: false,
    postImg: "",
    postText: TheRealJargon,
    postLikes: 1_000_000,
    postDisLikes: 100,
    postComments: 0,
    postTime: "August 8, 2023",
  },
  {
    postId: "3",
    posterId: "c",
    posterName: "Justina Lindsay",
    post: false,
    showComments: false,
    postImg: seven,
    postText: TheRealJargon,
    postLikes: 5,
    postDisLikes: 100,
    postComments: 0,
    postTime: "August 8, 2023",
  },
];

const testComments = [
  {
    commentId: "1a",
    postId: "1",
    commenterId: "b",
    commenterName: "obe Precious",
    commenterImg: one,
    comment: `Eddy is the best Software Engineer ever 😊`,
    showReply: false,
    commentLikes: 1000,
    commentDisLikes: 0,
    commentReplies: 2,
    commentTime: "August 17, 2023",
  },
  {
    commentId: "2b",
    postId: "1",
    commenterId: "c",
    commenterName: "Ajanaku sango",
    commenterImg: two,
    comment: `
      The President of NUNSA UNICAL and his Executives,
      recognizing the importance of staying technologically
      up-to-date, took a proactive step by commissioning a
      `,
    showReply: false,
    commentLikes: 500,
    commentDisLikes: 2,
    commentReplies: 0,
    commentTime: "August 17, 2023",
  },
  {
    commentId: "3c",
    postId: "2",
    commenterId: "c",
    commenterName: "Gojo Satoru",
    commenterImg: five,
    comment: `
      Edidiong is Gojo, Gojo is Edidiong.
      `,
    showReply: false,
    commentLikes: 500,
    commentDisLikes: 2,
    commentReplies: 0,
    commentTime: "August 17, 2023",
  },
];

const testReplies = [
  {
    replyId: "1",
    postId: "1",
    commentId: "1a",
    replierId: "2",
    replierName: "kurosaki Ichigo",
    replierImg: six,
    reply: "Yes he is, he single handedly built this platform 👌",
    replyLikes: 200,
    replyDisLikes: 0,
    replyTime: "2 mins ago",
  },
  {
    replyId: "2",
    postId: "1",
    commentId: "1a",
    replierId: "2",
    replierName: "Kurosaki Ichigo",
    replierImg: president,
    reply: "And he also built a whole ticketing platform on his own.",
    replyLikes: 400,
    replyDisLikes: 0,
    replyTime: "2 mins ago",
  },
  {
    replyId: "3",
    postId: "2",
    commentId: "3c",
    replierId: "5",
    replierName: "David Udosen",
    replierImg: president,
    reply: "Gojo Sensei is the best.",
    replyLikes: 140,
    replyDisLikes: 0,
    replyTime: "5 mins ago",
  },
];

const testCourses = [
  {
    courseId: "1",
    courseCode: "102",
    year: "1",
    courseTitle: "History of nursing",
    courseTopicId: "a",
    courseTopic: "florence nightingale",
    courseTopicLecturer: "Prof Offiong",
    session: "2018/2019",
    date: "Aug 12, 2023",
  },
  {
    courseId: "1",
    courseCode: "102",
    year: "1",
    courseTitle: "History of nursing",
    courseTopicId: "b",
    courseTopic: "history of midwifery",
    courseTopicLecturer: "Prof Offiong",
    session: "2018/2019",
    date: "Aug 11, 2023",
  },
  {
    courseId: "2",
    courseCode: "112",
    year: "1",
    courseTitle: "tissues",
    courseTopicId: "c",
    courseTopic: "strong tissues",
    courseTopicLecturer: "Prof Offiong",
    session: "2019/2020",
    date: "Aug 20, 2023",
  },
  {
    courseId: "2",
    courseCode: "112",
    year: "1",
    courseTitle: "tissues",
    courseTopicId: "d",
    courseTopic: "weak tissues",
    courseTopicLecturer: "Prof Offiong",
    session: "2019/2020",
    date: "Aug 11, 2023",
  },
  {
    courseId: "3",
    courseCode: "212",
    year: "2",
    courseTitle: "blood",
    courseTopicId: "e",
    courseTopic: "cells",
    courseTopicLecturer: "Prof Offiong",
    session: "2020/2021",
    date: "Aug 11, 2023",
  },
];

const years = [
  {
    year: "Year_1",
  },
  {
    year: "Year_2",
  },
  {
    year: "Year_3",
  },
  {
    year: "Year_4",
  },
  {
    year: "Year_5",
  },
];
export {
  electionResult,
  testChats,
  testPost,
  testComments,
  testReplies,
  testPeople,
  testCourses,
  years,
  totalResult,
};
