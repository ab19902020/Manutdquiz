// Auto-generated from src/app.jsx by the build step — do not edit directly.
const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;

// --- CUSTOM ICONS (Replacing external libraries for 100% standalone reliability) ---
const Icon = ({
  children,
  size = 24,
  className = ""
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className
}, children);
const PlayIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
}));
const TrophyIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
}));
const SettingsIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
}));
const ArrowLeftIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));
const ArrowRightIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const Volume2Icon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.54 8.46a5 5 0 0 1 0 7.07"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.07 4.93a10 10 0 0 1 0 14.14"
}));
const VolumeXIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "23",
  y1: "9",
  x2: "17",
  y2: "15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17",
  y1: "9",
  x2: "23",
  y2: "15"
}));
const ClockIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const MedalIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
  d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 12 5.12 2.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13 12 5.88-9.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7h8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: "5"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 18 10.5 16.5 13 16.5 12 15"
}));
const FlameIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
}));
const CheckIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const XIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const ShareIcon = props => /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8.59",
  y1: "13.51",
  x2: "15.42",
  y2: "17.49"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15.41",
  y1: "6.51",
  x2: "8.59",
  y2: "10.49"
}));

// --- INTERNAL QUESTION DATABASE ---
// Each question: { question, options, correct, cat, diff, explain }
const REAL_QUESTIONS = [
// ===== MODERN ERA =====
{
  question: "Which club did Wayne Rooney join immediately after leaving Manchester United in 2017?",
  options: ["D.C. United", "Everton", "Derby County", "LA Galaxy"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Rooney returned to his boyhood club Everton in 2017, later moving on to D.C. United in 2018."
}, {
  question: "Bruno Fernandes was involved in how many goals (goals + assists) across all competitions in the 2020/21 season?",
  options: ["35", "42", "45", "50"],
  correct: 2,
  cat: "Modern Era",
  diff: "Hard",
  explain: "Bruno produced around 45 goal involvements in a sensational first full season, carrying the team's attack."
}, {
  question: "Who did Manchester United sign Cristiano Ronaldo from when he made his sensational return in 2021?",
  options: ["Real Madrid", "Juventus", "Sporting CP", "Paris Saint-Germain"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Ronaldo returned from Juventus in August 2021, 12 years after first leaving Old Trafford."
}, {
  question: "Which teenage sensation scored a stunning 97th-minute winner against Wolves in February 2024?",
  options: ["Alejandro Garnacho", "Kobbie Mainoo", "Amad Diallo", "Omari Forson"],
  correct: 1,
  cat: "Modern Era",
  diff: "Medium",
  explain: "Academy graduate Kobbie Mainoo curled in a dramatic last-gasp winner at Molineux."
}, {
  question: "What shirt number did Alejandro Garnacho switch to ahead of the 2023/24 season?",
  options: ["11", "17", "49", "7"],
  correct: 1,
  cat: "Modern Era",
  diff: "Hard",
  explain: "Garnacho swapped his old number 49 for the number 17 shirt."
}, {
  question: "Who scored the second, match-sealing goal for Manchester United in the 2024 FA Cup Final against Manchester City?",
  options: ["Kobbie Mainoo", "Alejandro Garnacho", "Bruno Fernandes", "Marcus Rashford"],
  correct: 0,
  cat: "Modern Era",
  diff: "Medium",
  explain: "Garnacho opened the scoring and Kobbie Mainoo made it 2-0 in a 2-1 win over City."
}, {
  question: "From which club did Manchester United sign Bruno Fernandes in January 2020?",
  options: ["Benfica", "Sporting CP", "Porto", "Sampdoria"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Bruno arrived from Sporting CP in Lisbon and quickly became the team's talisman."
}, {
  question: "What nationality is Bruno Fernandes?",
  options: ["Spanish", "Brazilian", "Portuguese", "French"],
  correct: 2,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Bruno is Portuguese and captains both Manchester United and, at times, his country."
}, {
  question: "From which club did Manchester United sign Casemiro in 2022?",
  options: ["Real Madrid", "Atletico Madrid", "Barcelona", "Sevilla"],
  correct: 0,
  cat: "Modern Era",
  diff: "Easy",
  explain: "The Brazilian midfielder joined from Real Madrid, where he won five Champions Leagues."
}, {
  question: "What nationality is Casemiro?",
  options: ["Portuguese", "Brazilian", "Spanish", "Argentine"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Casemiro is a Brazilian international and a long-time anchor of their midfield."
}, {
  question: "From which club did Manchester United sign Antony in 2022?",
  options: ["Benfica", "PSV Eindhoven", "Ajax", "Feyenoord"],
  correct: 2,
  cat: "Modern Era",
  diff: "Medium",
  explain: "Antony followed manager Erik ten Hag from Ajax for a fee that rose to around £85m."
}, {
  question: "What nationality is winger Antony?",
  options: ["Portuguese", "Brazilian", "Argentine", "Spanish"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Antony is a Brazilian international winger."
}, {
  question: "What nationality is defender Lisandro Martinez?",
  options: ["Brazilian", "Argentine", "Uruguayan", "Chilean"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Martinez is an Argentine who won the 2022 World Cup just months after joining United."
}, {
  question: "From which club did Manchester United sign Rasmus Hojlund in 2023?",
  options: ["Atalanta", "Sporting CP", "RB Leipzig", "Copenhagen"],
  correct: 0,
  cat: "Modern Era",
  diff: "Medium",
  explain: "The Danish striker was signed from Italian side Atalanta."
}, {
  question: "From which club did Manchester United sign goalkeeper Andre Onana in 2023?",
  options: ["Ajax", "Inter Milan", "Lyon", "Bayern Munich"],
  correct: 1,
  cat: "Modern Era",
  diff: "Medium",
  explain: "Onana arrived from Inter Milan, who he had just helped reach the Champions League final."
}, {
  question: "How many goals did Cristiano Ronaldo score in his first season back at United (2021/22)?",
  options: ["18", "21", "24", "27"],
  correct: 2,
  cat: "Modern Era",
  diff: "Hard",
  explain: "Ronaldo top-scored with 24 goals in all competitions despite a difficult season for the team."
}, {
  question: "Who was named Manchester United's club captain after Harry Maguire?",
  options: ["Luke Shaw", "Marcus Rashford", "Bruno Fernandes", "Casemiro"],
  correct: 2,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Bruno Fernandes was handed the armband ahead of the 2023/24 season."
}, {
  question: "Which shirt number does Marcus Rashford wear at Manchester United?",
  options: ["9", "10", "11", "7"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Rashford wears the number 10 shirt."
}, {
  question: "Who opened the scoring for United in the 2023 Carabao Cup final win over Newcastle?",
  options: ["Marcus Rashford", "Casemiro", "Bruno Fernandes", "Antony"],
  correct: 1,
  cat: "Modern Era",
  diff: "Medium",
  explain: "Casemiro headed United in front before Rashford added a second in a 2-0 win at Wembley."
}, {
  question: "From which club did Manchester United sign Harry Maguire in 2019, then a world-record fee for a defender?",
  options: ["Leicester City", "Hull City", "Sheffield United", "Aston Villa"],
  correct: 0,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Maguire joined from Leicester City for around £80m, a world record for a defender at the time."
}, {
  question: "Which country does midfielder Kobbie Mainoo represent at senior level?",
  options: ["Ghana", "England", "Ireland", "Scotland"],
  correct: 1,
  cat: "Modern Era",
  diff: "Easy",
  explain: "Mainoo chose England and broke into the senior squad in 2024."
},
// ===== SILLY & FUN =====
{
  question: "Which bizarre 2010 signing did Sir Alex Ferguson admit he had never actually seen play live?",
  options: ["Gabriel Obertan", "Bébé", "Dong Fangzhuo", "Alexander Büttner"],
  correct: 1,
  cat: "Silly & Fun",
  diff: "Hard",
  explain: "Ferguson signed Bébé from Vitoria de Guimaraes on the recommendation of his assistant, having never watched him in person."
}, {
  question: "Which infamous United signing was joked about as being 'so good they named him twice'?",
  options: ["Eric Djemba-Djemba", "Kleberson", "Massimo Taibi", "Zoran Tosic"],
  correct: 0,
  cat: "Silly & Fun",
  diff: "Medium",
  explain: "Eric Djemba-Djemba's repeated name became a running joke as his United career flopped."
}, {
  question: "In 1999, which goalkeeper infamously let a weak Matt Le Tissier shot trickle through his legs?",
  options: ["Roy Carroll", "Mark Bosnich", "Massimo Taibi", "Fabien Barthez"],
  correct: 2,
  cat: "Silly & Fun",
  diff: "Hard",
  explain: "Massimo Taibi's nightmare against Southampton became one of the Premier League's most famous howlers."
}, {
  question: "Which player famously missed a drug test in 2003 because he was out shopping?",
  options: ["Rio Ferdinand", "Jaap Stam", "Roy Keane", "Nicky Butt"],
  correct: 0,
  cat: "Silly & Fun",
  diff: "Medium",
  explain: "Rio Ferdinand missed the test and received an eight-month ban as a result."
}, {
  question: "Which United player accidentally knocked out a fan in the warm-up with a stray shot and then gave them his shirt?",
  options: ["Wayne Rooney", "Cristiano Ronaldo", "Paul Scholes", "Nemanja Vidic"],
  correct: 1,
  cat: "Silly & Fun",
  diff: "Hard",
  explain: "A wayward Ronaldo strike struck a supporter pre-match, and he made up for it with his shirt."
}, {
  question: "What vehicle did Wayne Rooney infamously request to be collected in when he first arrived at Carrington as a teenager?",
  options: ["A Helicopter", "A Ferrari", "A Ford Transit Van", "A Tractor"],
  correct: 2,
  cat: "Silly & Fun",
  diff: "Hard",
  explain: "The down-to-earth teenager asked for a Ford Transit van rather than anything flashy."
}, {
  question: "Which former player said 'When the seagulls follow the trawler, it's because they think sardines will be thrown into the sea'?",
  options: ["Roy Keane", "Patrice Evra", "Eric Cantona", "George Best"],
  correct: 2,
  cat: "Silly & Fun",
  diff: "Medium",
  explain: "Eric Cantona delivered the cryptic line to the press after his 1995 court case."
}, {
  question: "Which United player infamously kung-fu kicked a Crystal Palace fan in January 1995?",
  options: ["Roy Keane", "Eric Cantona", "Nicky Butt", "Paul Ince"],
  correct: 1,
  cat: "Silly & Fun",
  diff: "Easy",
  explain: "Cantona's flying kick at Selhurst Park earned him a lengthy ban from football."
},
// ===== HISTORY & ORIGINS =====
{
  question: "What breed of dog famously helped save Newton Heath from bankruptcy in 1902 by wandering off with a collection tin?",
  options: ["Bulldog", "St. Bernard", "Greyhound", "Labrador"],
  correct: 1,
  cat: "History",
  diff: "Hard",
  explain: "Captain Harry Stafford's St. Bernard caught the eye of businessman John Henry Davies, who saved the club."
}, {
  question: "What was Newton Heath's home ground from 1893 to 1910, before Old Trafford?",
  options: ["North Road", "Maine Road", "Bank Street", "Hyde Road"],
  correct: 2,
  cat: "History",
  diff: "Hard",
  explain: "The club played at Bank Street in Clayton before moving to Old Trafford in 1910."
}, {
  question: "What kit did Manchester United wear when they won their first ever FA Cup Final in 1909?",
  options: ["Red and White halves", "White with a Red 'V'", "Green and Gold", "All Blue"],
  correct: 1,
  cat: "History",
  diff: "Hard",
  explain: "United wore a distinctive white shirt with a red 'V' to beat Bristol City 1-0."
}, {
  question: "What was the original name of Manchester United when it was founded in 1878?",
  options: ["Manchester Central", "Salford City", "Stretford Enders", "Newton Heath LYR F.C."],
  correct: 3,
  cat: "History",
  diff: "Medium",
  explain: "The club began as Newton Heath LYR, formed by railway workers of the Lancashire & Yorkshire Railway."
}, {
  question: "Manchester United's record victory is a 10-0 win in 1956. Who was it against?",
  options: ["Anderlecht", "Partizan Belgrade", "Shamrock Rovers", "Wolverhampton Wanderers"],
  correct: 0,
  cat: "History",
  diff: "Hard",
  explain: "The Busby Babes thrashed Anderlecht 10-0 in a European Cup tie."
}, {
  question: "Who was the first ever captain of Manchester United (as Newton Heath)?",
  options: ["Jack Powell", "Sam Black", "Fred Attock", "Bob Donaldson"],
  correct: 0,
  cat: "History",
  diff: "Hard",
  explain: "Welsh international Jack Powell was the club's first recognised captain."
}, {
  question: "What year did the Glazer family complete their takeover of Manchester United?",
  options: ["2003", "2005", "2007", "2010"],
  correct: 1,
  cat: "History",
  diff: "Medium",
  explain: "The Glazers completed their controversial leveraged buyout in 2005."
}, {
  question: "Sir Jim Ratcliffe's INEOS acquired roughly what stake in Manchester United in 2024?",
  options: ["10%", "25%", "50%", "75%"],
  correct: 1,
  cat: "History",
  diff: "Medium",
  explain: "INEOS bought around a 25% stake and took control of football operations."
}, {
  question: "In which year did the club officially adopt the name 'Manchester United' (from Newton Heath)?",
  options: ["1888", "1902", "1910", "1919"],
  correct: 1,
  cat: "History",
  diff: "Hard",
  explain: "The renaming to Manchester United happened in 1902 after the club was rescued from bankruptcy."
}, {
  question: "The green and gold scarves worn in protest against the Glazers represent the colours of which earlier club identity?",
  options: ["Manchester City", "Newton Heath", "Salford City", "Lancashire FC"],
  correct: 1,
  cat: "History",
  diff: "Medium",
  explain: "Green and gold were Newton Heath's colours, adopted by fans as a symbol of protest."
},
// ===== STADIUM & CULTURE =====
{
  question: "Which stand at Old Trafford was renamed the Sir Bobby Charlton Stand in 2016?",
  options: ["The North Stand", "The South Stand", "The Stretford End", "The East Stand"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "The South Stand was renamed to honour the club legend in 2016."
}, {
  question: "What is the name of the official Manchester United mascot introduced in 1994?",
  options: ["Red the Devil", "Fred the Red", "Sir Matt the Cat", "Munich the Lion"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Easy",
  explain: "Fred the Red is the club's devil mascot, tied to United's 'Red Devils' nickname."
}, {
  question: "Who was the first ever sponsor to appear on a Manchester United shirt in 1982?",
  options: ["Sharp", "AIG", "Vodafone", "Chevrolet"],
  correct: 0,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "Electronics firm Sharp was United's first shirt sponsor, a partnership lasting two decades."
}, {
  question: "Which technology company sponsored Manchester United's shirts from 2021 to 2024?",
  options: ["AON", "TeamViewer", "Snapdragon", "Chevrolet"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "TeamViewer's logo featured before Snapdragon took over as front-of-shirt sponsor."
}, {
  question: "In what year did Old Trafford officially open?",
  options: ["1892", "1902", "1910", "1924"],
  correct: 2,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "Old Trafford opened in 1910 with a match against Liverpool."
}, {
  question: "By what nickname is Old Trafford famously known?",
  options: ["The Cathedral", "The Theatre of Dreams", "Fortress United", "The Red Fortress"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Easy",
  explain: "Bobby Charlton's phrase 'Theatre of Dreams' has stuck for generations."
}, {
  question: "Which legendary player coined the phrase 'Theatre of Dreams' for Old Trafford?",
  options: ["George Best", "Bobby Charlton", "Denis Law", "Matt Busby"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "Sir Bobby Charlton is credited with the iconic description of the ground."
}, {
  question: "What is the approximate seated capacity of Old Trafford?",
  options: ["54,000", "64,000", "74,000", "84,000"],
  correct: 2,
  cat: "Stadium & Culture",
  diff: "Medium",
  explain: "Old Trafford holds around 74,000, making it the largest club ground in England."
}, {
  question: "What is the name of Manchester United's training complex?",
  options: ["Cobham", "Carrington", "Melwood", "London Colney"],
  correct: 1,
  cat: "Stadium & Culture",
  diff: "Easy",
  explain: "The Carrington Training Centre has been United's training base since 2000."
}, {
  question: "Who took United to the top of the UK pop charts in 1994 with 'Come on You Reds'?",
  options: ["Oasis", "The Stone Roses", "Status Quo", "Simply Red"],
  correct: 2,
  cat: "Stadium & Culture",
  diff: "Hard",
  explain: "Status Quo teamed up with the squad for the chart-topping anthem."
},
// ===== FERGUSON ERA =====
{
  question: "Sir Alex Ferguson's first match in charge in 1986 ended in a 2-0 defeat to which club?",
  options: ["Oxford United", "Southampton", "Wimbledon", "Norwich City"],
  correct: 0,
  cat: "Ferguson Era",
  diff: "Hard",
  explain: "Ferguson's reign began with a 2-0 loss at Oxford United in November 1986."
}, {
  question: "Who scored Manchester United's first ever Premier League goal in August 1992?",
  options: ["Mark Hughes", "Ryan Giggs", "Brian McClair", "Denis Irwin"],
  correct: 0,
  cat: "Ferguson Era",
  diff: "Hard",
  explain: "Mark Hughes scored in a 2-1 opening-day defeat at Sheffield United."
}, {
  question: "Who scored the final goal of Sir Alex Ferguson's reign in the 5-5 draw with West Bromwich Albion?",
  options: ["Robin van Persie", "Wayne Rooney", "Javier Hernandez", "Alexander Büttner"],
  correct: 2,
  cat: "Ferguson Era",
  diff: "Hard",
  explain: "Javier 'Chicharito' Hernandez netted in the chaotic 5-5 draw that ended Fergie's career."
}, {
  question: "Who was Sir Alex Ferguson's final signing as Manchester United manager?",
  options: ["Robin van Persie", "Shinji Kagawa", "Wilfried Zaha", "Alexander Büttner"],
  correct: 2,
  cat: "Ferguson Era",
  diff: "Hard",
  explain: "Wilfried Zaha was signed in January 2013, Ferguson's last addition before retiring."
}, {
  question: "Sir Alex Ferguson famously kicked a boot that struck which player in the face?",
  options: ["Roy Keane", "David Beckham", "Ruud van Nistelrooy", "Jaap Stam"],
  correct: 1,
  cat: "Ferguson Era",
  diff: "Easy",
  explain: "A stray boot caught David Beckham above the eye in the dressing room in 2003."
}, {
  question: "How many Premier League titles did Sir Alex Ferguson win as Manchester United manager?",
  options: ["11", "12", "13", "14"],
  correct: 2,
  cat: "Ferguson Era",
  diff: "Medium",
  explain: "Ferguson won 13 Premier League titles between 1993 and 2013."
}, {
  question: "In which year did Ferguson win his first Premier League title with United, ending a 26-year league drought?",
  options: ["1992", "1993", "1994", "1995"],
  correct: 1,
  cat: "Ferguson Era",
  diff: "Medium",
  explain: "United were crowned champions in 1993, their first league title since 1967."
}, {
  question: "Who was the captain when United won their first Premier League title in 1993?",
  options: ["Bryan Robson", "Steve Bruce", "Roy Keane", "Eric Cantona"],
  correct: 1,
  cat: "Ferguson Era",
  diff: "Hard",
  explain: "Steve Bruce captained the side to the historic 1993 title."
}, {
  question: "From which English club did Ferguson sign Eric Cantona in 1992?",
  options: ["Sheffield Wednesday", "Leeds United", "Nottingham Forest", "Wimbledon"],
  correct: 1,
  cat: "Ferguson Era",
  diff: "Medium",
  explain: "Cantona crossed the Pennines from reigning champions Leeds United in a bargain deal."
}, {
  question: "For roughly how many years was Sir Alex Ferguson manager of Manchester United?",
  options: ["20", "24", "26", "30"],
  correct: 2,
  cat: "Ferguson Era",
  diff: "Medium",
  explain: "Ferguson managed from November 1986 to May 2013, almost 27 years."
},
// ===== RECORDS =====
{
  question: "Who is Manchester United's all-time leading goalscorer?",
  options: ["Bobby Charlton", "Denis Law", "Wayne Rooney", "Ryan Giggs"],
  correct: 2,
  cat: "Records",
  diff: "Easy",
  explain: "Wayne Rooney's 253 goals overtook Bobby Charlton's long-standing record."
}, {
  question: "Which player holds the record for the most appearances for the club (963)?",
  options: ["Paul Scholes", "Gary Neville", "Ryan Giggs", "Bobby Charlton"],
  correct: 2,
  cat: "Records",
  diff: "Medium",
  explain: "Ryan Giggs made a remarkable 963 appearances across 24 years."
}, {
  question: "Who was the first player to be sold by Manchester United for over £1 million?",
  options: ["Ray Wilkins", "Mark Hughes", "Gordon Strachan", "Norman Whiteside"],
  correct: 1,
  cat: "Records",
  diff: "Hard",
  explain: "Mark Hughes was sold to Barcelona in 1986 for a fee above £1m (he later returned)."
}, {
  question: "Who wore the number 7 shirt immediately BEFORE Eric Cantona in the Premier League era?",
  options: ["Bryan Robson", "Andrei Kanchelskis", "Steve Coppell", "George Best"],
  correct: 0,
  cat: "Records",
  diff: "Hard",
  explain: "Captain Bryan Robson wore the famous number 7 before Cantona inherited it."
}, {
  question: "Which player has won the most overall trophies while at Manchester United (34)?",
  options: ["Paul Scholes", "Gary Neville", "Roy Keane", "Ryan Giggs"],
  correct: 3,
  cat: "Records",
  diff: "Medium",
  explain: "Ryan Giggs is the most decorated British footballer with 34 trophies at United."
}, {
  question: "Which player holds the record for the most red cards for Manchester United?",
  options: ["Roy Keane", "Nemanja Vidic", "Paul Scholes", "Eric Cantona"],
  correct: 0,
  cat: "Records",
  diff: "Medium",
  explain: "Combative captain Roy Keane was sent off more than any other United player."
}, {
  question: "Which player has the most assists in Manchester United's Premier League history?",
  options: ["Wayne Rooney", "Ryan Giggs", "David Beckham", "Paul Scholes"],
  correct: 1,
  cat: "Records",
  diff: "Medium",
  explain: "Ryan Giggs is the Premier League's record assist provider for United."
}, {
  question: "Which player holds the record for the fastest Premier League goal by a United player?",
  options: ["Ryan Giggs", "Javier Hernandez", "Christian Eriksen", "Ruud van Nistelrooy"],
  correct: 2,
  cat: "Records",
  diff: "Hard",
  explain: "Christian Eriksen struck inside the opening seconds to set United's fastest-goal record."
}, {
  question: "How many Premier League titles did Ryan Giggs win?",
  options: ["10", "11", "12", "13"],
  correct: 3,
  cat: "Records",
  diff: "Medium",
  explain: "Giggs won the Premier League a record 13 times."
}, {
  question: "Roughly how many goals did Wayne Rooney score to become United's record scorer?",
  options: ["213", "233", "253", "273"],
  correct: 2,
  cat: "Records",
  diff: "Medium",
  explain: "Rooney finished his United career on 253 goals."
}, {
  question: "Whose long-standing United goal record (249) did Wayne Rooney break?",
  options: ["Denis Law", "Bobby Charlton", "Jack Rowley", "Dennis Viollet"],
  correct: 1,
  cat: "Records",
  diff: "Medium",
  explain: "Rooney surpassed Sir Bobby Charlton's 249-goal record in 2017."
}, {
  question: "How many European Cups / Champions League trophies has Manchester United won?",
  options: ["2", "3", "4", "5"],
  correct: 1,
  cat: "Records",
  diff: "Easy",
  explain: "United have lifted Europe's top prize three times: 1968, 1999 and 2008."
}, {
  question: "How many FA Cups had Manchester United won as of 2024?",
  options: ["11", "12", "13", "14"],
  correct: 2,
  cat: "Records",
  diff: "Medium",
  explain: "The 2024 final win over City was United's 13th FA Cup."
}, {
  question: "How many top-flight English league titles have Manchester United won in total?",
  options: ["18", "19", "20", "21"],
  correct: 2,
  cat: "Records",
  diff: "Medium",
  explain: "United have won 20 titles in all: 7 old First Division and 13 Premier League."
}, {
  question: "Which striker won the Premier League Golden Boot for United in the 2002/03 season?",
  options: ["Ruud van Nistelrooy", "Wayne Rooney", "Cristiano Ronaldo", "Dwight Yorke"],
  correct: 0,
  cat: "Records",
  diff: "Hard",
  explain: "Ruud van Nistelrooy's 25 league goals earned him the Golden Boot in 2002/03."
},
// ===== LEGENDS & MATCHES =====
{
  question: "Which player famously won the Ballon d'Or in 1968 after United won the European Cup?",
  options: ["Denis Law", "Bobby Charlton", "George Best", "Nobby Stiles"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "George Best was crowned Europe's best player following the 1968 triumph."
}, {
  question: "Against which team did David Beckham score his famous goal from the halfway line in 1996?",
  options: ["Wimbledon", "Southampton", "Chelsea", "Arsenal"],
  correct: 0,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Beckham lobbed the Wimbledon keeper from the halfway line on the opening day of 1996/97."
}, {
  question: "Which team did Manchester United defeat 8-2 at Old Trafford in August 2011?",
  options: ["Tottenham", "Arsenal", "Chelsea", "Aston Villa"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "United humiliated Arsenal 8-2 in one of the Premier League's biggest scorelines."
}, {
  question: "In the 2010-11 season, Dimitar Berbatov scored five goals in a single game against which team?",
  options: ["Wigan Athletic", "Blackburn Rovers", "Bolton Wanderers", "West Ham United"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Berbatov bagged five in a 7-1 demolition of Blackburn Rovers."
}, {
  question: "Which player scored a stunning overhead kick against Manchester City in February 2011?",
  options: ["Dimitar Berbatov", "Cristiano Ronaldo", "Wayne Rooney", "Nani"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Easy",
  explain: "Rooney's bicycle kick in the Manchester derby is one of the league's greatest goals."
}, {
  question: "Who scored a dramatic 17-year-old debut winner against Aston Villa in 2009 to keep United in the title race?",
  options: ["Danny Welbeck", "Federico Macheda", "James Wilson", "Adnan Januzaj"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Teenager Federico Macheda curled in a stoppage-time winner on his debut."
}, {
  question: "Which defender scored the 90th-minute winner against Liverpool at Anfield in 2007?",
  options: ["Rio Ferdinand", "Nemanja Vidic", "John O'Shea", "Gary Neville"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Utility man John O'Shea poked home a late winner at Anfield."
}, {
  question: "Against which team did Cristiano Ronaldo score his first goal for United, a free kick?",
  options: ["Bolton Wanderers", "Portsmouth", "Aston Villa", "Everton"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Ronaldo opened his United account with a free kick against Portsmouth in 2003."
}, {
  question: "In 1995, United beat Ipswich Town 9-0. How many goals did Andy Cole score?",
  options: ["3", "4", "5", "6"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Andy Cole scored five in the 9-0 rout, a Premier League record at the time."
}, {
  question: "Which legendary United player was affectionately known as 'Captain Marvel'?",
  options: ["Roy Keane", "Bryan Robson", "Steve Bruce", "Nemanja Vidic"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Inspirational midfielder and captain Bryan Robson earned the nickname."
}, {
  question: "Which player had the nickname 'The Baby-Faced Assassin'?",
  options: ["Javier Hernandez", "Ole Gunnar Solskjaer", "Paul Scholes", "Marcus Rashford"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Easy",
  explain: "Super-sub Ole Gunnar Solskjaer's boyish looks and ruthless finishing earned the name."
}, {
  question: "Who scored the winning goal in the 1990 FA Cup final replay against Crystal Palace, Sir Alex's first United trophy?",
  options: ["Mark Hughes", "Brian McClair", "Lee Martin", "Bryan Robson"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Full-back Lee Martin scored the only goal of the replay to land Ferguson his first trophy."
}, {
  question: "Paul Scholes was famously poor at which aspect of the game throughout his career?",
  options: ["Passing", "Shooting", "Tackling", "Heading"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Easy",
  explain: "A wonderful passer, Scholes was notorious for his mistimed tackles."
}, {
  question: "Which winger formed one half of United's flying wing pair with Ryan Giggs in the mid-90s?",
  options: ["Lee Sharpe", "Andrei Kanchelskis", "Keith Gillespie", "Ben Thornley"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Hard",
  explain: "Andrei Kanchelskis tore down the right while Giggs flew down the left."
}, {
  question: "Which United and Scotland legend was known as 'The King' at Old Trafford in the 1960s?",
  options: ["Denis Law", "Bobby Charlton", "George Best", "Pat Crerand"],
  correct: 0,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Denis Law, 'The King', was a prolific striker and 1964 Ballon d'Or winner."
}, {
  question: "Which forward, nicknamed 'Sparky', wore the famous number 10 and had two spells at United?",
  options: ["Mark Hughes", "Brian McClair", "Teddy Sheringham", "Dwight Yorke"],
  correct: 0,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Mark 'Sparky' Hughes was a fan favourite striker across two spells."
},
// ===== BUSBY BABES =====
{
  question: "Which three uncapped 'Busby Babes' were among those who perished in the Munich Air Disaster?",
  options: ["Colman, Jones, and Bent", "Byrne, Edwards, and Taylor", "Berry, Wood, and Foulkes", "Bent, Greaves, and Stiles"],
  correct: 0,
  cat: "Busby Babes",
  diff: "Hard",
  explain: "Eddie Colman, Mark Jones and Geoff Bent were among the uncapped players lost at Munich in 1958."
}, {
  question: "Who was the 'First Busby Babe', an outstanding full-back who died at Munich?",
  options: ["Bill Foulkes", "Roger Byrne", "Geoff Bent", "Duncan Edwards"],
  correct: 1,
  cat: "Busby Babes",
  diff: "Hard",
  explain: "Captain Roger Byrne, an England full-back, was the original Busby Babe."
}, {
  question: "Which Munich survivor went on to win the 1966 World Cup with England and become a United great?",
  options: ["Harry Gregg", "Bill Foulkes", "Bobby Charlton", "Dennis Viollet"],
  correct: 2,
  cat: "Busby Babes",
  diff: "Medium",
  explain: "Bobby Charlton survived the crash, lifted the 1966 World Cup and the 1968 European Cup."
}, {
  question: "Who scored Man Utd's first goal in the 1968 European Cup Final against Benfica?",
  options: ["George Best", "Bobby Charlton", "Brian Kidd", "Denis Law"],
  correct: 1,
  cat: "Busby Babes",
  diff: "Medium",
  explain: "Bobby Charlton headed United in front on their way to a 4-1 win at Wembley."
}, {
  question: "Who managed Manchester United to their 1968 European Cup triumph?",
  options: ["Jimmy Murphy", "Matt Busby", "Wilf McGuinness", "Frank O'Farrell"],
  correct: 1,
  cat: "Busby Babes",
  diff: "Easy",
  explain: "Sir Matt Busby completed his life's work a decade after the Munich tragedy."
}, {
  question: "Brian Kidd scored in the 1968 European Cup final on which personal milestone?",
  options: ["His debut", "His 19th birthday", "His 50th appearance", "His wedding day"],
  correct: 1,
  cat: "Busby Babes",
  diff: "Hard",
  explain: "Kidd celebrated his 19th birthday by scoring in the final."
}, {
  question: "Which young Busby Babe, widely seen as one of England's greatest talents, was lost at Munich aged 21?",
  options: ["Tommy Taylor", "Eddie Colman", "Duncan Edwards", "David Pegg"],
  correct: 2,
  cat: "Busby Babes",
  diff: "Medium",
  explain: "Duncan Edwards died from his injuries 15 days after the crash, aged just 21."
},
// ===== TRANSFERS =====
{
  question: "From which club did United sign Peter Schmeichel in 1991 for just £505,000?",
  options: ["FC Copenhagen", "Brøndby", "Ajax", "PSV Eindhoven"],
  correct: 1,
  cat: "Transfers",
  diff: "Hard",
  explain: "Schmeichel arrived from Brøndby and proved one of the great Premier League bargains."
}, {
  question: "From which club did United sign Roy Keane in 1993 for a then-British record £3.75m?",
  options: ["Nottingham Forest", "Aston Villa", "Celtic", "Leeds United"],
  correct: 0,
  cat: "Transfers",
  diff: "Medium",
  explain: "Keane joined from Nottingham Forest in a British-record deal."
}, {
  question: "Where did United sign Ruud van Nistelrooy from in 2001?",
  options: ["Ajax", "Feyenoord", "PSV Eindhoven", "Heerenveen"],
  correct: 2,
  cat: "Transfers",
  diff: "Medium",
  explain: "Van Nistelrooy joined from PSV after an earlier move had collapsed due to injury."
}, {
  question: "Which player did United break the British transfer record to sign for £28.1m in 2001?",
  options: ["Ruud van Nistelrooy", "Juan Sebastian Veron", "Rio Ferdinand", "Wayne Rooney"],
  correct: 1,
  cat: "Transfers",
  diff: "Hard",
  explain: "Argentine midfielder Juan Sebastian Veron arrived from Lazio."
}, {
  question: "Who did Manchester United break the world transfer record to sign in 2016?",
  options: ["Angel Di Maria", "Paul Pogba", "Romelu Lukaku", "Antony"],
  correct: 1,
  cat: "Transfers",
  diff: "Easy",
  explain: "Paul Pogba returned from Juventus for a then-world-record fee of around £89m."
}, {
  question: "From which club did United sign Dwight Yorke in 1998?",
  options: ["Aston Villa", "Coventry City", "Blackburn Rovers", "Tottenham"],
  correct: 0,
  cat: "Transfers",
  diff: "Medium",
  explain: "Yorke joined from Aston Villa and top-scored in the 1999 Treble season."
}, {
  question: "From which club did United sign Andy Cole in 1995?",
  options: ["Bristol City", "Newcastle United", "Arsenal", "Nottingham Forest"],
  correct: 1,
  cat: "Transfers",
  diff: "Medium",
  explain: "Cole moved from Newcastle in a deal that included Keith Gillespie going the other way."
}, {
  question: "From which club did United sign goalkeeper Edwin van der Sar in 2005?",
  options: ["Ajax", "Fulham", "Juventus", "PSV Eindhoven"],
  correct: 1,
  cat: "Transfers",
  diff: "Medium",
  explain: "Van der Sar joined from Fulham and solved United's long search for a keeper."
}, {
  question: "From which club did United sign Robin van Persie in 2012?",
  options: ["Arsenal", "Feyenoord", "Tottenham", "Manchester City"],
  correct: 0,
  cat: "Transfers",
  diff: "Easy",
  explain: "Van Persie's goals from Arsenal fired United to the 2013 title."
}, {
  question: "Zlatan Ibrahimovic joined United in 2016 as a free agent, having last played for which club?",
  options: ["AC Milan", "Barcelona", "Paris Saint-Germain", "Inter Milan"],
  correct: 2,
  cat: "Transfers",
  diff: "Medium",
  explain: "Zlatan arrived on a free transfer after leaving Paris Saint-Germain."
}, {
  question: "From which club did United sign Marouane Fellaini in 2013?",
  options: ["Standard Liege", "Everton", "Roma", "Anderlecht"],
  correct: 1,
  cat: "Transfers",
  diff: "Medium",
  explain: "David Moyes brought Fellaini, a former player of his, from Everton."
}, {
  question: "From which club did United sign Juan Mata in 2014?",
  options: ["Valencia", "Chelsea", "Real Madrid", "Atletico Madrid"],
  correct: 1,
  cat: "Transfers",
  diff: "Easy",
  explain: "Mata crossed London-to-Manchester from Chelsea for a then club-record fee."
}, {
  question: "From which club did United sign Angel Di Maria in 2014?",
  options: ["Benfica", "Real Madrid", "Barcelona", "PSG"],
  correct: 1,
  cat: "Transfers",
  diff: "Medium",
  explain: "Di Maria joined from Real Madrid but lasted just one season at Old Trafford."
}, {
  question: "United signed Alexis Sanchez in 2018 in a swap deal involving Henrikh Mkhitaryan. From which club?",
  options: ["Manchester City", "Arsenal", "Barcelona", "Chelsea"],
  correct: 1,
  cat: "Transfers",
  diff: "Medium",
  explain: "Sanchez came from Arsenal as Mkhitaryan went the other way."
}, {
  question: "From which club did United sign Park Ji-sung in 2005?",
  options: ["FC Seoul", "Kyoto Purple Sanga", "PSV Eindhoven", "Feyenoord"],
  correct: 2,
  cat: "Transfers",
  diff: "Hard",
  explain: "The tireless South Korean joined from PSV Eindhoven."
},
// ===== MANAGERS =====
{
  question: "Who succeeded Sir Alex Ferguson as Manchester United manager in 2013?",
  options: ["Louis van Gaal", "Jose Mourinho", "David Moyes", "Ryan Giggs"],
  correct: 2,
  cat: "Managers",
  diff: "Easy",
  explain: "Ferguson personally backed fellow Scot David Moyes to take over."
}, {
  question: "Which manager won the FA Cup for United in 2016 before being sacked just two days later?",
  options: ["David Moyes", "Louis van Gaal", "Jose Mourinho", "Ole Gunnar Solskjaer"],
  correct: 1,
  cat: "Managers",
  diff: "Medium",
  explain: "Louis van Gaal lifted the FA Cup but was dismissed almost immediately afterwards."
}, {
  question: "Who was Manchester United's first ever non-British/Irish manager?",
  options: ["Louis van Gaal", "Jose Mourinho", "Ralf Rangnick", "Erik ten Hag"],
  correct: 0,
  cat: "Managers",
  diff: "Medium",
  explain: "Dutchman Louis van Gaal, appointed in 2014, was the first manager from outside Britain or Ireland."
}, {
  question: "What did Erik ten Hag win in his first season as Manchester United manager (2022/23)?",
  options: ["FA Cup", "Carabao Cup", "Europa League", "Nothing"],
  correct: 1,
  cat: "Managers",
  diff: "Easy",
  explain: "Ten Hag's side beat Newcastle to win the Carabao Cup, the club's first trophy in six years."
}, {
  question: "Which manager brought out a sheet of 'facts' at a press conference complaining about United?",
  options: ["Arsene Wenger", "Rafael Benitez", "Jose Mourinho", "Kevin Keegan"],
  correct: 1,
  cat: "Managers",
  diff: "Hard",
  explain: "Liverpool's Rafael Benitez delivered his infamous 'fact' rant in 2009."
}, {
  question: "Who replaced Erik ten Hag as Manchester United head coach in late 2024?",
  options: ["Graham Potter", "Ruben Amorim", "Thomas Tuchel", "Mauricio Pochettino"],
  correct: 1,
  cat: "Managers",
  diff: "Easy",
  explain: "Portuguese coach Ruben Amorim was appointed in November 2024."
}, {
  question: "From which club did Ruben Amorim join Manchester United?",
  options: ["Benfica", "Porto", "Sporting CP", "Braga"],
  correct: 2,
  cat: "Managers",
  diff: "Easy",
  explain: "Amorim arrived from Sporting CP, where he had won the Portuguese title."
}, {
  question: "Who was appointed United's interim manager for the second half of the 2021/22 season?",
  options: ["Michael Carrick", "Ralf Rangnick", "Steve McClaren", "Mike Phelan"],
  correct: 1,
  cat: "Managers",
  diff: "Medium",
  explain: "German coach Ralf Rangnick took interim charge after Solskjaer's departure."
}, {
  question: "What nationality is former manager Erik ten Hag?",
  options: ["German", "Belgian", "Dutch", "Danish"],
  correct: 2,
  cat: "Managers",
  diff: "Easy",
  explain: "Ten Hag is Dutch and previously managed Ajax."
},
// ===== TREBLE & EUROPE =====
{
  question: "Who assisted Ole Gunnar Solskjaer's dramatic winner in the 1999 Champions League final?",
  options: ["David Beckham", "Teddy Sheringham", "Ryan Giggs", "Gary Neville"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "Teddy Sheringham flicked on Beckham's corner for Solskjaer to win it in stoppage time."
}, {
  question: "Which club did United beat in the 1999 Champions League final?",
  options: ["Bayern Munich", "Juventus", "Inter Milan", "Barcelona"],
  correct: 0,
  cat: "Treble & Europe",
  diff: "Easy",
  explain: "United stunned Bayern Munich with two stoppage-time goals."
}, {
  question: "What was the final score of the 1999 Champions League final?",
  options: ["1-0", "2-1", "3-2", "2-0"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Easy",
  explain: "United won 2-1 having trailed until the 90th minute."
}, {
  question: "In which stadium was the 1999 Champions League final played?",
  options: ["San Siro", "Camp Nou", "Wembley", "Bernabeu"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "The famous comeback came at Barcelona's Camp Nou."
}, {
  question: "Who scored United's stoppage-time equaliser before Solskjaer's winner in 1999?",
  options: ["Dwight Yorke", "Andy Cole", "Teddy Sheringham", "Jesper Blomqvist"],
  correct: 2,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "Teddy Sheringham bundled in the equaliser moments before Solskjaer's winner."
}, {
  question: "Who was United's top scorer in the 1998/99 Treble season?",
  options: ["Andy Cole", "Dwight Yorke", "Ole Gunnar Solskjaer", "Paul Scholes"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Hard",
  explain: "Dwight Yorke led the way with 29 goals in his debut season."
}, {
  question: "Who lifted the European Cup in 1999 as captain, with Roy Keane suspended for the final?",
  options: ["Denis Irwin", "Peter Schmeichel", "Gary Neville", "David Beckham"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Hard",
  explain: "Goalkeeper Peter Schmeichel captained the side in the final, his last United game."
}, {
  question: "Who saved Nicolas Anelka's penalty in Moscow to win the 2008 Champions League?",
  options: ["David de Gea", "Peter Schmeichel", "Edwin van der Sar", "Ben Foster"],
  correct: 2,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "Edwin van der Sar's save sealed the shootout win over Chelsea."
}, {
  question: "Which club did United defeat to win the 2017 Europa League final?",
  options: ["Ajax", "Sevilla", "Villarreal", "Lyon"],
  correct: 0,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "United beat Ajax 2-0 to complete their set of major European trophies."
}, {
  question: "Who scored United's only goal in the 2009 Champions League final defeat to Barcelona?",
  options: ["Cristiano Ronaldo", "Wayne Rooney", "Nobody, United lost 2-0", "Carlos Tevez"],
  correct: 2,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "United failed to score, losing 2-0 to Barcelona in Rome."
}, {
  question: "In what year did United become the first English club to win the FIFA Club World Cup?",
  options: ["1999", "2008", "2010", "2017"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Hard",
  explain: "United won the Club World Cup in Japan in December 2008."
}, {
  question: "Who scored a hat-trick on his Champions League debut for United against Fenerbahçe in 2004?",
  options: ["Cristiano Ronaldo", "Wayne Rooney", "Ruud van Nistelrooy", "Kleberson"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "An 18-year-old Wayne Rooney announced himself with a debut hat-trick."
}, {
  question: "In which year did Manchester United complete the famous Treble?",
  options: ["1994", "1996", "1999", "2008"],
  correct: 2,
  cat: "Treble & Europe",
  diff: "Easy",
  explain: "United won the Premier League, FA Cup and Champions League all in 1999."
}, {
  question: "Which trophy did United NOT win during their historic 1998/99 season?",
  options: ["Premier League", "FA Cup", "Champions League", "League Cup"],
  correct: 3,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "The Treble was the league, FA Cup and Champions League — not the League Cup."
}, {
  question: "Who captained United on the night they lifted the 2008 Champions League in Moscow?",
  options: ["Nemanja Vidic", "Rio Ferdinand", "Ryan Giggs", "Wayne Rooney"],
  correct: 1,
  cat: "Treble & Europe",
  diff: "Hard",
  explain: "Rio Ferdinand lifted the trophy as captain in Moscow."
},
// ===== MORE RECORDS / MISC =====
{
  question: "Which team inflicted United's heaviest Premier League defeat (7-0) in 2023?",
  options: ["Manchester City", "Arsenal", "Liverpool", "Brentford"],
  correct: 2,
  cat: "Records",
  diff: "Easy",
  explain: "Liverpool thrashed United 7-0 at Anfield in March 2023."
}, {
  question: "Who was the first player to score a Premier League hat-trick for United?",
  options: ["Eric Cantona", "Andrei Kanchelskis", "Andy Cole", "Dwight Yorke"],
  correct: 1,
  cat: "Records",
  diff: "Hard",
  explain: "Andrei Kanchelskis hit United's first PL treble, in a 5-0 derby win over City in 1994."
}, {
  question: "Who won the Sir Matt Busby Player of the Year award a record four times?",
  options: ["Cristiano Ronaldo", "David de Gea", "Roy Keane", "Wayne Rooney"],
  correct: 1,
  cat: "Records",
  diff: "Hard",
  explain: "Goalkeeper David de Gea was voted the fans' Player of the Year four times."
}, {
  question: "Which United player won the FIFA Puskás Award in 2009 for a goal against Porto?",
  options: ["Wayne Rooney", "Cristiano Ronaldo", "Dimitar Berbatov", "Nani"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Ronaldo's 40-yard rocket in Porto won the inaugural Puskás Award."
}, {
  question: "Against which team did Marcus Rashford make his senior debut, scoring twice?",
  options: ["Midtjylland", "Arsenal", "Club Brugge", "Feyenoord"],
  correct: 0,
  cat: "Modern Era",
  diff: "Hard",
  explain: "Rashford scored twice on debut in a Europa League tie with Midtjylland in 2016."
}, {
  question: "Which former United player became manager of the Wales national team in 2018?",
  options: ["Mark Hughes", "Ryan Giggs", "Gary Speed", "Robbie Savage"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Ryan Giggs managed Wales from 2018 until 2022."
}, {
  question: "Which United player famously wore a protective headguard for much of his career?",
  options: ["Wayne Rooney", "Petr Cech", "Alan Smith", "None of these (Trick Question)"],
  correct: 3,
  cat: "Silly & Fun",
  diff: "Hard",
  explain: "Trick question — Petr Cech wore one, but never for United."
}, {
  question: "Which United midfielder was nicknamed 'The Ginger Prince'?",
  options: ["Ryan Giggs", "Nicky Butt", "Paul Scholes", "Darren Fletcher"],
  correct: 2,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Spain great Xavi called Paul Scholes the best midfielder of his era; fans dubbed him the Ginger Prince."
}, {
  question: "Which team did United play in the first ever match at Old Trafford in 1910?",
  options: ["Liverpool", "Everton", "Manchester City", "Arsenal"],
  correct: 0,
  cat: "History",
  diff: "Hard",
  explain: "United lost the inaugural Old Trafford fixture 4-3 to Liverpool."
}, {
  question: "Which player scored United's title-clinching hat-trick against Aston Villa in April 2013?",
  options: ["Wayne Rooney", "Robin van Persie", "Javier Hernandez", "Danny Welbeck"],
  correct: 1,
  cat: "Ferguson Era",
  diff: "Medium",
  explain: "Robin van Persie's hat-trick, including a stunning volley, sealed Fergie's final title."
}, {
  question: "Who scored United's winner in the 2016 FA Cup final against Crystal Palace?",
  options: ["Juan Mata", "Jesse Lingard", "Marcus Rashford", "Anthony Martial"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Jesse Lingard volleyed home a stunning extra-time winner."
}, {
  question: "Who scored both goals as United won the 2017 EFL Cup final against Southampton?",
  options: ["Zlatan Ibrahimovic", "Jesse Lingard", "Henrikh Mkhitaryan", "Juan Mata"],
  correct: 0,
  cat: "Treble & Europe",
  diff: "Medium",
  explain: "Zlatan Ibrahimovic scored twice, including a late winner, at Wembley."
}, {
  question: "What nationality is former United and Serbia defender Nemanja Vidic?",
  options: ["Croatian", "Serbian", "Bosnian", "Slovenian"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Easy",
  explain: "Vidic was a Serbian international and a famously rugged centre-back."
}, {
  question: "From which club did United sign David de Gea in 2011?",
  options: ["Real Madrid", "Atletico Madrid", "Valencia", "Sevilla"],
  correct: 1,
  cat: "Modern Era",
  diff: "Medium",
  explain: "De Gea joined as a teenager from Atletico Madrid."
}, {
  question: "Roy Keane left United in 2005 and briefly joined which club before retiring?",
  options: ["Sunderland", "Celtic", "Nottingham Forest", "Ipswich Town"],
  correct: 1,
  cat: "Transfers",
  diff: "Hard",
  explain: "Keane finished his playing career with a short spell at Celtic."
}, {
  question: "Which 'Class of '92' graduate retired in 2011 as a one-club man and later co-owned Salford City?",
  options: ["Paul Scholes", "Gary Neville", "Nicky Butt", "Phil Neville"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Gary Neville spent his whole career at United and co-owns Salford City."
}, {
  question: "What nationality is winger Nani, a key squad member from 2007-2015?",
  options: ["Brazilian", "Portuguese", "Spanish", "Cape Verdean"],
  correct: 1,
  cat: "Legends & Matches",
  diff: "Medium",
  explain: "Nani was a Portuguese international winger signed from Sporting CP."
}, {
  question: "Which number 7 shirt did Eric Cantona wear at Manchester United?",
  options: ["7", "8", "9", "10"],
  correct: 0,
  cat: "Records",
  diff: "Easy",
  explain: "Cantona wore the iconic number 7, continuing its legendary status."
}, {
  question: "Who took over the famous number 7 shirt straight after Eric Cantona retired in 1997?",
  options: ["David Beckham", "Cristiano Ronaldo", "Michael Owen", "Andy Cole"],
  correct: 0,
  cat: "Records",
  diff: "Medium",
  explain: "David Beckham inherited the number 7 after Cantona's retirement."
}, {
  question: "Who was given the number 7 shirt after Cristiano Ronaldo left United in 2009?",
  options: ["Antonio Valencia", "Michael Owen", "Nani", "Dimitar Berbatov"],
  correct: 1,
  cat: "Records",
  diff: "Hard",
  explain: "Controversially, former Liverpool striker Michael Owen took the number 7."
}, {
  question: "Who was United's record signing immediately before Paul Pogba (£59.7m in 2014)?",
  options: ["Juan Mata", "Angel Di Maria", "Anthony Martial", "Memphis Depay"],
  correct: 1,
  cat: "Transfers",
  diff: "Hard",
  explain: "Angel Di Maria was a British-record buy in 2014 before Pogba broke the world record in 2016."
}, {
  question: "Which team did United beat 1-0 in the 1985 FA Cup final, despite Kevin Moran being the first man sent off in a final?",
  options: ["Liverpool", "Everton", "Arsenal", "Tottenham"],
  correct: 1,
  cat: "History",
  diff: "Hard",
  explain: "Ten-man United beat Everton 1-0 thanks to a Norman Whiteside winner."
}];
const QUESTION_BANK = REAL_QUESTIONS;
const CATEGORIES = ["All", ...Array.from(new Set(QUESTION_BANK.map(q => q.cat)))];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const LENGTHS = [5, 10, 20];
const DEFAULT_LEADERBOARD = [{
  name: "Sir Alex F.",
  score: 10000
}, {
  name: "W. Rooney",
  score: 8500
}, {
  name: "B. Fernandes",
  score: 7200
}, {
  name: "R. Giggs",
  score: 6800
}, {
  name: "P. Scholes",
  score: 5500
}];
const TIMER_SECONDS = 15;
const RECENT_KEY = 'mufc_recent';

// Unbiased Fisher-Yates shuffle (returns a new array)
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// --- PERSISTENCE HELPERS ---
const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
};
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {/* ignore */}
};

// --- SOUND ENGINE (Web Audio API, no external files) ---
const useSound = enabledRef => {
  const ctxRef = useRef(null);
  const getCtx = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctxRef.current = new AC();
    }
    if (ctxRef.current && ctxRef.current.state === 'suspended') ctxRef.current.resume();
    return ctxRef.current;
  };
  const tone = (freq, start, duration, type = 'sine', gain = 0.15) => {
    const ctx = getCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    g.gain.setValueAtTime(0, ctx.currentTime + start);
    g.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + duration + 0.02);
  };
  const play = useCallback(name => {
    if (!enabledRef.current) return;
    switch (name) {
      case 'correct':
        tone(660, 0, 0.12, 'triangle');
        tone(880, 0.1, 0.18, 'triangle');
        break;
      case 'wrong':
        tone(200, 0, 0.25, 'sawtooth', 0.12);
        tone(150, 0.08, 0.25, 'sawtooth', 0.12);
        break;
      case 'tick':
        tone(900, 0, 0.05, 'square', 0.06);
        break;
      case 'click':
        tone(500, 0, 0.05, 'square', 0.05);
        break;
      case 'finish':
        tone(523, 0, 0.15, 'triangle');
        tone(659, 0.13, 0.15, 'triangle');
        tone(784, 0.26, 0.15, 'triangle');
        tone(1046, 0.39, 0.3, 'triangle');
        break;
      default:
        break;
    }
  }, []);
  const unlock = useCallback(() => {
    getCtx();
  }, []);
  return {
    play,
    unlock
  };
};

// --- COMPONENTS ---

const SpotlightBackground = () => /*#__PURE__*/React.createElement("div", {
  className: "fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-gradient-to-b from-red-950 via-black to-black opacity-90"
}), /*#__PURE__*/React.createElement("div", {
  className: "absolute -top-32 -left-32 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse",
  style: {
    animationDuration: '4s'
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-screen filter blur-[140px] opacity-70"
}), /*#__PURE__*/React.createElement("div", {
  className: "absolute -top-32 -right-32 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse",
  style: {
    animationDuration: '5s'
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_1px)] bg-[length:24px_24px] opacity-30"
}));
const Logo = () => /*#__PURE__*/React.createElement("div", {
  className: "relative z-10 flex flex-col items-center mb-6 drop-shadow-2xl"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-black/30 backdrop-blur-md p-6 rounded-3xl border border-red-900/50 shadow-[0_0_30px_rgba(220,38,38,0.3)] flex flex-col items-center"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://iili.io/CfNugZx.md.png",
  alt: "United Road Logo",
  className: "w-48 md:w-64 object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-transform hover:scale-105 duration-300"
}), /*#__PURE__*/React.createElement("div", {
  className: "mt-6 text-center tracking-wider"
}, /*#__PURE__*/React.createElement("h1", {
  className: "text-4xl md:text-5xl font-black uppercase flex flex-col items-center"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-white drop-shadow-md tracking-[0.2em] mb-1"
}, "PUB QUIZ"), /*#__PURE__*/React.createElement("span", {
  className: "text-transparent bg-clip-text bg-gradient-to-b from-[#fde047] via-[#ca8a04] to-[#854d0e] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-lg md:text-xl font-bold tracking-widest border-t border-yellow-700/50 pt-2 w-full"
}, "THE ULTIMATE TEST")))));
const ActionButton = ({
  onClick,
  children,
  variant = 'red',
  className = '',
  icon: IconComponent
}) => {
  const baseStyle = "relative w-72 py-4 px-6 font-bold text-xl uppercase tracking-wider rounded-lg transition-all duration-150 active:translate-y-1 active:border-b-0 flex items-center justify-center gap-3 z-10 cursor-pointer";
  const variants = {
    red: "bg-gradient-to-b from-red-600 to-red-800 text-white border-b-4 border-red-950 hover:from-red-500 hover:to-red-700 shadow-[0_0_15px_rgba(220,38,38,0.4)]",
    gold: "bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 text-yellow-950 border-b-4 border-yellow-800 hover:from-yellow-200 hover:to-yellow-400 shadow-[0_0_15px_rgba(202,138,4,0.4)]",
    dark: "bg-gradient-to-b from-gray-800 to-gray-900 text-white border-b-4 border-black hover:from-gray-700 hover:to-gray-800"
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: `${baseStyle} ${variants[variant]} ${className}`
  }, IconComponent && /*#__PURE__*/React.createElement(IconComponent, {
    size: 24
  }), children);
};

// Pill-style selector for the setup screen
const Chip = ({
  active,
  onClick,
  children
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  className: `px-4 py-2 rounded-full font-bold text-sm md:text-base tracking-wide transition-all duration-150 border ${active ? 'bg-gradient-to-b from-red-600 to-red-800 text-white border-red-950 shadow-[0_0_12px_rgba(220,38,38,0.5)]' : 'bg-black/50 text-gray-300 border-red-900/40 hover:border-red-600/60 hover:text-white'}`
}, children);

// --- MAIN APP COMPONENT ---
function App() {
  const [screen, setScreen] = useState('menu');
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [lastGain, setLastGain] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const currentIndexRef = useRef(0);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Persisted state
  const [settings, setSettings] = useState(() => load('mufc_settings', {
    timer: true,
    sound: true
  }));
  const [leaderboard, setLeaderboard] = useState(() => load('mufc_leaderboard', DEFAULT_LEADERBOARD));
  const [playerName, setPlayerName] = useState(() => load('mufc_playername', ''));
  const [savedThisRound, setSavedThisRound] = useState(false);
  const [shareMsg, setShareMsg] = useState('');

  // Setup choices
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [quizLength, setQuizLength] = useState(10);

  // Sound engine reads latest "sound" setting via ref
  const soundRef = useRef(settings.sound);
  useEffect(() => {
    soundRef.current = settings.sound;
  }, [settings.sound]);
  const {
    play,
    unlock
  } = useSound(soundRef);

  // Persist settings & leaderboard whenever they change
  useEffect(() => {
    save('mufc_settings', settings);
  }, [settings]);
  useEffect(() => {
    save('mufc_leaderboard', leaderboard);
  }, [leaderboard]);
  const matches = q => (category === 'All' || q.cat === category) && (difficulty === 'All' || q.diff === difficulty);
  const availableCount = QUESTION_BANK.filter(matches).length;
  const beginQuiz = () => {
    unlock(); // unlock audio on user gesture
    const pool = QUESTION_BANK.filter(matches);

    // Avoid repeating recently-seen questions until the fresh pool runs low.
    const recent = load(RECENT_KEY, []);
    const fresh = pool.filter(q => !recent.includes(q.question));
    const need = Math.min(quizLength, pool.length);
    const sourcePool = fresh.length >= need ? fresh : pool;
    const picked = shuffle(sourcePool).slice(0, need);

    // Remember these so they don't reappear next round.
    const newRecent = [...picked.map(q => q.question), ...recent].slice(0, 80);
    save(RECENT_KEY, newRecent);

    // Shuffle each question's options so the correct answer isn't always
    // in the same slot, and recompute where the correct answer landed.
    const prepared = picked.map(q => {
      const order = shuffle(q.options.map((opt, i) => ({
        opt,
        i
      })));
      return {
        ...q,
        options: order.map(o => o.opt),
        correct: order.findIndex(o => o.i === q.correct)
      };
    });
    setActiveQuestions(prepared);
    setCurrentIndex(0);
    setScore(0);
    setCorrectCount(0);
    setStreak(0);
    setMaxStreak(0);
    setLastGain(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setSavedThisRound(false);
    setShareMsg('');
    setTimeLeft(TIMER_SECONDS);
    setScreen('quiz');
  };

  // Countdown timer
  useEffect(() => {
    if (screen !== 'quiz' || !settings.timer || selectedAnswer !== null) return;
    if (timeLeft === 0) {
      handleAnswerTimeOut();
      return;
    }
    if (timeLeft <= 5) play('tick');
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, screen, selectedAnswer, settings.timer]);
  const goToNextQuestion = useCallback(() => {
    if (currentIndexRef.current < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
      setTimeLeft(TIMER_SECONDS);
    } else {
      finishQuiz();
    }
  }, [activeQuestions.length]);
  const handleAnswerTimeOut = useCallback(() => {
    setSelectedAnswer(-1);
    setIsAnswerCorrect(false);
    setStreak(0);
    setLastGain(0);
    play('wrong');
  }, []);
  const handleAnswer = index => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const correct = index === activeQuestions[currentIndex].correct;
    setIsAnswerCorrect(correct);
    if (correct) {
      const newStreak = streak + 1;
      const timeBonus = settings.timer ? Math.round(timeLeft / TIMER_SECONDS * 500) : 0;
      const streakBonus = Math.min(newStreak - 1, 5) * 100; // up to +500 for hot streaks
      const gain = 500 + timeBonus + streakBonus;
      setScore(prev => prev + gain);
      setLastGain(gain);
      setCorrectCount(prev => prev + 1);
      setStreak(newStreak);
      setMaxStreak(prev => Math.max(prev, newStreak));
      play('correct');
    } else {
      setStreak(0);
      setLastGain(0);
      play('wrong');
    }
  };
  const finishQuiz = () => {
    play('finish');
    setScreen('result');
  };
  const qualifiesForBoard = score > 0 && (leaderboard.length < 5 || score > leaderboard[leaderboard.length - 1].score);
  const saveScore = () => {
    const name = (playerName || '').trim() || 'You (Guest)';
    save('mufc_playername', name);
    setPlayerName(name);
    setLeaderboard(prev => {
      const updated = [...prev, {
        name,
        score
      }];
      return updated.sort((a, b) => b.score - a.score).slice(0, 5);
    });
    setSavedThisRound(true);
    play('click');
  };
  const resetLeaderboard = () => {
    setLeaderboard(DEFAULT_LEADERBOARD);
    play('click');
  };
  const shareResult = async () => {
    const total = activeQuestions.length;
    const text = `I scored ${score} (${correctCount}/${total} correct) on the Manchester United Pub Quiz! 🔴⚪ Can you beat me?`;
    play('click');
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Man Utd Pub Quiz',
          text
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setShareMsg('Copied to clipboard!');
        setTimeout(() => setShareMsg(''), 2500);
      } else {
        setShareMsg(text);
      }
    } catch (e) {
      /* user cancelled the share sheet */
    }
  };

  // Keyboard support: 1-N to answer; Enter / Space / arrow / N to advance
  useEffect(() => {
    if (screen !== 'quiz') return;
    const onKey = e => {
      const q = activeQuestions[currentIndex];
      if (!q) return;
      if (selectedAnswer === null) {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= q.options.length) handleAnswer(n - 1);
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
          e.preventDefault();
          goToNextQuestion();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [screen, selectedAnswer, currentIndex, activeQuestions, timeLeft, streak, settings.timer, goToNextQuestion]);
  const renderMenu = () => /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-6"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-950/80 backdrop-blur-md border border-red-800/50 rounded-full px-6 py-3 flex items-center gap-3 text-yellow-500 text-sm md:text-base font-bold tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.4)]"
  }, /*#__PURE__*/React.createElement(FlameIcon, {
    size: 20,
    className: "text-red-500 animate-pulse"
  }), QUESTION_BANK.length, " REAL QUESTIONS"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5 mt-6"
  }, /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => {
      unlock();
      setScreen('setup');
    },
    variant: "red",
    icon: PlayIcon
  }, "PLAY NOW"), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => setScreen('leaderboard'),
    variant: "gold",
    icon: TrophyIcon
  }, "LEADERBOARD"), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => setScreen('settings'),
    variant: "dark",
    icon: SettingsIcon
  }, "SETTINGS")));
  const renderSetup = () => /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 pt-12 max-w-2xl mx-auto w-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-black text-white mb-8 tracking-widest uppercase"
  }, "Match Setup"), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-black/60 backdrop-blur-md border border-red-900/50 rounded-3xl p-6 mb-6 shadow-2xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4"
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    active: category === c,
    onClick: () => {
      setCategory(c);
      play('click');
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-black/60 backdrop-blur-md border border-red-900/50 rounded-3xl p-6 mb-6 shadow-2xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4"
  }, "Difficulty"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, DIFFICULTIES.map(d => /*#__PURE__*/React.createElement(Chip, {
    key: d,
    active: difficulty === d,
    onClick: () => {
      setDifficulty(d);
      play('click');
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-black/60 backdrop-blur-md border border-red-900/50 rounded-3xl p-6 mb-6 shadow-2xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4"
  }, "Number of Questions"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, LENGTHS.map(l => /*#__PURE__*/React.createElement(Chip, {
    key: l,
    active: quizLength === l,
    onClick: () => {
      setQuizLength(l);
      play('click');
    }
  }, l)))), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm mb-6"
  }, availableCount, " question", availableCount === 1 ? '' : 's', " match your filters", availableCount < quizLength ? ` — you'll get ${availableCount}.` : '.'), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 w-full items-center"
  }, /*#__PURE__*/React.createElement(ActionButton, {
    onClick: beginQuiz,
    variant: "red",
    icon: PlayIcon,
    className: availableCount === 0 ? 'opacity-40 pointer-events-none' : ''
  }, "KICK OFF"), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => setScreen('menu'),
    variant: "dark",
    icon: ArrowLeftIcon
  }, "BACK")));
  const renderQuiz = () => {
    const question = activeQuestions[currentIndex];
    const isTimeout = selectedAnswer === -1;
    const answered = selectedAnswer !== null;
    const isLast = currentIndex === activeQuestions.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 max-w-4xl mx-auto w-full pt-12 pb-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center w-full mb-4 text-yellow-500 font-bold tracking-widest text-lg"
    }, /*#__PURE__*/React.createElement("div", null, "Q: ", currentIndex + 1, " / ", activeQuestions.length), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, streak >= 2 && /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1 text-orange-400 animate-pulse"
    }, /*#__PURE__*/React.createElement(FlameIcon, {
      size: 20
    }), " x", streak), /*#__PURE__*/React.createElement("span", null, "SCORE: ", score))), settings.timer && /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-red-950 h-3 rounded-full mb-8 overflow-hidden border border-red-900"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-full rounded-full transition-all duration-1000 ease-linear ${timeLeft < 5 ? 'bg-red-500' : 'bg-yellow-500'}`,
      style: {
        width: `${timeLeft / TIMER_SECONDS * 100}%`
      }
    })), !settings.timer && /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bg-black/60 backdrop-blur-md border border-red-900/50 p-6 md:p-10 rounded-3xl w-full mb-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] min-h-[140px] flex items-center justify-center text-center"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed"
    }, question?.question)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
    }, question?.options.map((opt, idx) => {
      let btnState = "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 text-gray-200 hover:from-gray-700";
      if (answered) {
        if (idx === question.correct) {
          btnState = "bg-gradient-to-b from-green-600 to-green-800 border-green-900 text-white shadow-[0_0_20px_rgba(22,163,74,0.6)]";
        } else if (idx === selectedAnswer) {
          btnState = "bg-gradient-to-b from-red-600 to-red-800 border-red-950 text-white opacity-80";
        } else {
          btnState = "bg-gray-900 border-gray-950 text-gray-600 opacity-50";
        }
      }
      return /*#__PURE__*/React.createElement("button", {
        key: idx,
        disabled: answered,
        onClick: () => handleAnswer(idx),
        className: `relative py-5 px-6 rounded-2xl border-b-4 font-bold text-base md:text-lg transition-all duration-200 active:translate-y-1 active:border-b-0 flex items-center justify-center text-center gap-3 ${btnState}`
      }, /*#__PURE__*/React.createElement("span", {
        className: "hidden md:flex items-center justify-center w-7 h-7 rounded-md bg-black/40 text-sm text-gray-400 shrink-0"
      }, idx + 1), /*#__PURE__*/React.createElement("span", null, opt));
    })), answered && /*#__PURE__*/React.createElement("div", {
      className: "w-full mt-6 flex flex-col items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: `font-black text-2xl tracking-widest uppercase flex items-center gap-2 ${isAnswerCorrect ? 'text-green-400' : 'text-red-500'}`
    }, isAnswerCorrect ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckIcon, {
      size: 28
    }), " Correct! +", lastGain) : isTimeout ? /*#__PURE__*/React.createElement(React.Fragment, null, "Time's Up!") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(XIcon, {
      size: 28
    }), " Wrong!")), question?.explain && /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-black/50 border border-yellow-700/40 rounded-2xl p-5 text-center"
    }, !isAnswerCorrect && /*#__PURE__*/React.createElement("p", {
      className: "text-green-400 font-bold mb-1"
    }, "Answer: ", question.options[question.correct]), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-200 leading-relaxed"
    }, question.explain)), /*#__PURE__*/React.createElement(ActionButton, {
      onClick: goToNextQuestion,
      variant: isLast ? 'gold' : 'red',
      icon: isLast ? TrophyIcon : ArrowRightIcon
    }, isLast ? 'SEE RESULTS' : 'NEXT')));
  };
  const renderResult = () => {
    const total = activeQuestions.length;
    const pct = total ? Math.round(correctCount / total * 100) : 0;
    let verdict = "Keep practising, Red!";
    if (pct === 100) verdict = "Flawless — a true Old Trafford legend!";else if (pct >= 80) verdict = "Outstanding! Fergie would be proud.";else if (pct >= 60) verdict = "Solid performance, top-half finish.";else if (pct >= 40) verdict = "Mid-table — room to improve.";
    return /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-6 py-12"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://iili.io/CfNugZx.md.png",
      alt: "United Road Logo",
      className: "w-28 md:w-40 opacity-80"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bg-black/60 backdrop-blur-md border border-yellow-600/50 p-8 md:p-10 rounded-3xl flex flex-col items-center shadow-[0_0_40px_rgba(202,138,4,0.2)] w-full max-w-md"
    }, /*#__PURE__*/React.createElement(TrophyIcon, {
      size: 64,
      className: "text-yellow-500 mb-4 drop-shadow-[0_0_10px_rgba(202,138,4,0.8)]"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl md:text-4xl font-black text-white mb-1 tracking-wider"
    }, "FULL TIME!"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm uppercase tracking-widest mb-6"
    }, "Your Final Score"), /*#__PURE__*/React.createElement("div", {
      className: "text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fde047] to-[#ca8a04]"
    }, score), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-6 mt-6 text-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-black text-white"
    }, correctCount, "/", total), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400 uppercase tracking-widest"
    }, "Correct")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-black text-white"
    }, pct, "%"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400 uppercase tracking-widest"
    }, "Accuracy")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-black text-orange-400 flex items-center justify-center gap-1"
    }, /*#__PURE__*/React.createElement(FlameIcon, {
      size: 18
    }), maxStreak), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400 uppercase tracking-widest"
    }, "Best Streak"))), /*#__PURE__*/React.createElement("p", {
      className: "text-yellow-500/90 font-bold mt-6 italic"
    }, verdict), qualifiesForBoard && !savedThisRound && /*#__PURE__*/React.createElement("div", {
      className: "w-full mt-6 border-t border-red-900/40 pt-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-white font-bold mb-3"
    }, "\uD83C\uDFC6 New high score! Save it:"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      maxLength: 16,
      value: playerName,
      onChange: e => setPlayerName(e.target.value),
      placeholder: "Your name",
      className: "flex-1 bg-black/60 border border-red-900/60 rounded-lg px-4 py-3 text-white font-bold focus:outline-none focus:border-yellow-500"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: saveScore,
      className: "bg-gradient-to-b from-yellow-300 to-yellow-600 text-yellow-950 font-black px-5 rounded-lg border-b-4 border-yellow-800 active:translate-y-1 active:border-b-0"
    }, "SAVE"))), savedThisRound && /*#__PURE__*/React.createElement("p", {
      className: "text-green-400 font-bold mt-6 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(CheckIcon, {
      size: 20
    }), " Saved to the leaderboard!"), /*#__PURE__*/React.createElement("button", {
      onClick: shareResult,
      className: "mt-6 flex items-center gap-2 text-gray-300 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors"
    }, /*#__PURE__*/React.createElement(ShareIcon, {
      size: 18
    }), " Share your score"), shareMsg && /*#__PURE__*/React.createElement("p", {
      className: "text-green-400 text-sm mt-2"
    }, shareMsg)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-4 w-full items-center"
    }, /*#__PURE__*/React.createElement(ActionButton, {
      onClick: beginQuiz,
      variant: "red",
      icon: PlayIcon
    }, "PLAY AGAIN"), /*#__PURE__*/React.createElement(ActionButton, {
      onClick: () => setScreen('leaderboard'),
      variant: "gold",
      icon: TrophyIcon
    }, "LEADERBOARD"), /*#__PURE__*/React.createElement(ActionButton, {
      onClick: () => setScreen('menu'),
      variant: "dark",
      icon: ArrowLeftIcon
    }, "MAIN MENU")));
  };
  const renderLeaderboard = () => /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 pt-16 max-w-2xl mx-auto w-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-black text-white mb-8 flex items-center gap-3 tracking-widest uppercase"
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    className: "text-yellow-500",
    size: 40
  }), "Leaderboard"), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-black/60 backdrop-blur-md border border-red-900/50 rounded-3xl overflow-hidden mb-6 shadow-2xl"
  }, leaderboard.map((entry, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `flex justify-between items-center p-6 border-b border-red-900/30 last:border-0 ${idx === 0 ? 'bg-red-950/60' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-black text-2xl ${idx === 0 ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' : idx === 1 ? 'text-gray-300' : idx === 2 ? 'text-amber-700' : 'text-red-500'}`
  }, "#", idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-xl"
  }, entry.name)), /*#__PURE__*/React.createElement("span", {
    className: "text-yellow-500 font-mono font-black text-2xl"
  }, entry.score)))), /*#__PURE__*/React.createElement("button", {
    onClick: resetLeaderboard,
    className: "text-gray-500 hover:text-red-400 text-sm font-bold uppercase tracking-widest mb-8 transition-colors"
  }, "Reset Leaderboard"), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => setScreen('menu'),
    variant: "dark",
    icon: ArrowLeftIcon
  }, "BACK TO MENU"));
  const renderSettings = () => /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 pt-16 max-w-xl mx-auto w-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-black text-white mb-10 flex items-center gap-3 tracking-widest uppercase"
  }, /*#__PURE__*/React.createElement(SettingsIcon, {
    className: "text-gray-400",
    size: 40
  }), "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "w-full space-y-6 mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-black/60 backdrop-blur-md border border-red-900/50 p-6 rounded-2xl flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(ClockIcon, {
    className: "text-red-500",
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-xl"
  }, "Quiz Timer")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSettings(s => ({
        ...s,
        timer: !s.timer
      }));
      play('click');
    },
    className: `w-20 h-10 rounded-full p-1 transition-colors duration-300 ${settings.timer ? 'bg-green-600' : 'bg-gray-700'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-8 h-8 bg-white rounded-full transition-transform duration-300 ${settings.timer ? 'translate-x-10' : 'translate-x-0'}`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-black/60 backdrop-blur-md border border-red-900/50 p-6 rounded-2xl flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, settings.sound ? /*#__PURE__*/React.createElement(Volume2Icon, {
    className: "text-red-500",
    size: 28
  }) : /*#__PURE__*/React.createElement(VolumeXIcon, {
    className: "text-gray-500",
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-xl"
  }, "Sound Effects")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      unlock();
      const next = !settings.sound;
      setSettings(s => ({
        ...s,
        sound: next
      }));
      if (next) {
        soundRef.current = true;
        play('correct');
      }
    },
    className: `w-20 h-10 rounded-full p-1 transition-colors duration-300 ${settings.sound ? 'bg-green-600' : 'bg-gray-700'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-8 h-8 bg-white rounded-full transition-transform duration-300 ${settings.sound ? 'translate-x-10' : 'translate-x-0'}`
  })))), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => setScreen('menu'),
    variant: "dark",
    icon: ArrowLeftIcon
  }, "BACK TO MENU"));
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen font-sans selection:bg-red-500 selection:text-white"
  }, /*#__PURE__*/React.createElement(SpotlightBackground, null), screen === 'menu' && renderMenu(), screen === 'setup' && renderSetup(), screen === 'quiz' && renderQuiz(), screen === 'result' && renderResult(), screen === 'leaderboard' && renderLeaderboard(), screen === 'settings' && renderSettings());
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));