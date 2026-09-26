window.TOEIC_KEYS = window.TOEIC_KEYS || {};
window.TOEIC_SCRIPTS = window.TOEIC_SCRIPTS || {};
window.TOEIC_EXPLANATIONS = window.TOEIC_EXPLANATIONS || {};
window.TOEIC_QUESTIONS = window.TOEIC_QUESTIONS || {};

function parseKey(text) {
  const key = {};
  const re = /(\d{1,3})\s*[.\-:)]?\s*([A-Da-d])/g;
  let m;
  while ((m = re.exec(text)) !== null) key[parseInt(m[1], 10)] = m[2].toUpperCase();
  return key;
}

// 1. DÀN KEY 200 CÂU TEST 1
window.TOEIC_KEYS[1] = parseKey("1B 2D 3C 4A 5A 6C 7B 8C 9B 10A 11B 12B 13C 14C 15A 16B 17B 18A 19B 20C 21A 22C 23A 24A 25A 26B 27B 28A 29C 30C 31C 32B 33D 34B 35C 36A 37D 38A 39D 40A 41C 42D 43B 44C 45C 46A 47A 48D 49C 50C 51B 52A 53C 54A 55B 56B 57A 58C 59A 60C 61B 62C 63C 64D 65D 66A 67C 68B 69A 70C 71B 72C 73A 74B 75D 76A 77B 78D 79A 80D 81A 82B 83D 84A 85D 86A 87B 88C 89D 90B 91C 92B 93A 94D 95A 96C 97D 98D 99C 100A 101B 102A 103A 104B 105B 106C 107C 108D 109A 110A 111C 112C 113A 114C 115C 116D 117A 118D 119C 120B 121D 122C 123B 124C 125A 126D 127D 128D 129D 130B 131D 132C 133A 134B 135D 136C 137B 138A 139A 140C 141B 142D 143C 144C 145B 146A 147C 148D 149B 150C 151D 152C 153B 154C 155D 156C 157B 158D 159B 160C 161C 162D 163B 164B 165B 166A 167B 168C 169B 170B 171A 172D 173A 174B 175C 176A 177D 178C 179D 180C 181D 182D 183A 184C 185B 186B 187A 188B 189A 190D 191D 192B 193B 194A 195A 196B 197A 198D 199C 200A");

// 2. DỮ LIỆU ĐỀ THI 200 CÂU NATIVE TEXT CHUẨN STUDY4
window.TOEIC_QUESTIONS[1] = [
  // --- PART 1: PHOTOGRAPHS (Câu 1 - 6) ---
  { part: 1, qNum: 1, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },
  { part: 1, qNum: 2, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },
  { part: 1, qNum: 3, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },
  { part: 1, qNum: 4, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },
  { part: 1, qNum: 5, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },
  { part: 1, qNum: 6, question: "Listen to the audio and select the best statement describing the picture.", options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" } },

  // --- PART 2: QUESTION - RESPONSE (Câu 7 - 31) ---
  ...Array.from({ length: 25 }, (_, i) => ({
    part: 2,
    qNum: i + 7,
    question: "Mark your answer on your answer sheet.",
    options: { A: "(A)", B: "(B)", C: "(C)" }
  })),

  // --- PART 3: CONVERSATIONS (Câu 32 - 70) ---
  {
    part: 3,
    items: [
      { qNum: 32, question: "What type of food product does the speakers' company sell?", options: { A: "Ice cream", B: "Cheese", C: "Cookies", D: "Soup" } },
      { qNum: 33, question: "What does the man suggest?", options: { A: "Buying an additional machine", B: "Decreasing the size of a package", C: "Contacting a supplier", D: "Selling a shredded product" } },
      { qNum: 34, question: "What does the woman say she will do?", options: { A: "Deliver some samples", B: "Contact a manager", C: "Sign a contract", D: "Conduct a survey" } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 35, question: "Why is the man calling?", options: { A: "To rent equipment", B: "To register for a class", C: "To purchase tickets", D: "To confirm a reservation" } },
      { qNum: 36, question: "What did Ife Ratimi do last month?", options: { A: "Won a tournament", B: "Announced her retirement", C: "Signed an endorsement contract", D: "Opened a sports shop" } },
      { qNum: 37, question: "What does the woman say is required?", options: { A: "Proof of residence", B: "A membership card", C: "A referral code", D: "Advance payment" } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 38, question: "What event are the speakers planning?", options: { A: "A fund-raising dinner", B: "An author talk", C: "A retirement party", D: "An awards ceremony" } },
      { qNum: 39, question: "What task does the woman ask the man to help with?", options: { A: "Sending invitations", B: "Booking a venue", C: "Choosing a menu", D: "Designing a banner" } },
      { qNum: 40, question: "What does the woman say she will do?", options: { A: "E-mail a list", B: "Check an inventory", C: "Update a budget", D: "Make a phone call" } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 41, question: "What event are the speakers preparing for?", options: { A: "A press conference", B: "A trade show", C: "A community festival", D: "A grand opening" } },
      { qNum: 42, question: "What is mentioned about some pens?", options: { A: "They are very expensive.", B: "They are available in several colors.", C: "They are refillable.", D: "They are biodegradable." } },
      { qNum: 43, question: "What does the woman offer to do?", options: { A: "Print some pamphlets", B: "Place an order", C: "Contact an organizer", D: "Pick up a delivery" } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 44, question: "Where does the woman work?", options: { A: "At an electronics store", B: "At a real estate agency", C: "At a recycling facility", D: "At a moving company" } },
      { qNum: 45, question: "What does the man want to dispose of?", options: { A: "Clothing", B: "Furniture", C: "Electronics", D: "Appliances" } },
      { qNum: 46, question: "What does the woman say can be found on a Web site?", options: { A: "Names of disposal companies", B: "Operating hours", C: "Directions to a facility", D: "A price list" } }
    ]
  },
  {
    part: 7,
    items: [
      { qNum: 47, question: "How do the speakers know each other?", options: { A: "They took a class together.", B: "They work for the same company.", C: "They are relatives.", D: "They lived in the same neighborhood." } },
      { qNum: 48, question: "What type of business does the man most likely own?", options: { A: "A flower shop", B: "A bookstore", C: "A clothing boutique", D: "A bakery" } },
      { qNum: 49, question: "What advantage does the woman point out about a rental space?", options: { A: "It is inexpensive.", B: "It has a large parking lot.", C: "It is close to a university.", D: "It was recently renovated." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 50, question: "Who most likely are the speakers?", options: { A: "Graphic designers", B: "Sales representatives", C: "Video game testers", D: "Film producers" } },
      { qNum: 51, question: "What did the man recently do?", options: { A: "Finished an interview", B: "Tested a game", C: "Purchased a controller", D: "Wrote a review" } },
      { qNum: 52, question: "What does the woman suggest?", options: { A: "Asking a colleague", B: "Upgrading software", C: "Postponing a release date", D: "Contacting customer support" } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 53, question: "Who most likely is the man?", options: { A: "A building manager", B: "An electrician", C: "A maintenance worker", D: "A real estate agent" } },
      { qNum: 54, question: "What problem does the woman describe?", options: { A: "A thermostat is not working.", B: "A window will not close.", C: "A pipe is leaking.", D: "A lock is broken." } },
      { qNum: 55, question: "What does the woman mean when she says, 'It's supposed to be below freezing tonight'?", options: { A: "She needs to buy warm clothing.", B: "She wants a problem fixed quickly.", C: "She will cancel a trip.", D: "She is worried about road conditions." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 56, question: "Why do the men want to speak to the woman?", options: { A: "To apply for a job", B: "To discuss a loan", C: "To open a savings account", D: "To lease office space" } },
      { qNum: 57, question: "What type of business do the men own?", options: { A: "A snowmobile repair and rental shop", B: "A ski resort", C: "A sporting goods store", D: "A travel agency" } },
      { qNum: 58, question: "According to the men, what has changed recently?", options: { A: "Operating costs have decreased.", B: "Competition has increased.", C: "Winter tourism has increased.", D: "New safety regulations were introduced." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 59, question: "What does the man want to do?", options: { A: "Implement a peer-training program", B: "Purchase new factory equipment", C: "Hire more supervisors", D: "Extend working hours" } },
      { qNum: 60, question: "What is the woman concerned about?", options: { A: "High training expenses", B: "Decreased production speed", C: "Worker dissatisfaction", D: "Equipment malfunctions" } },
      { qNum: 61, question: "What does the man mean when he says, 'High-quality video can be recorded and edited with a smartphone'?", options: { A: "A smartphone is expensive.", B: "He wants to propose an alternative solution.", C: "He prefers buying a professional camera.", D: "The workers need smartphones." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 62, question: "Where is the woman?", options: { A: "At an office", B: "At a hotel", C: "At an airport", D: "At a train station" } },
      { qNum: 63, question: "When does the woman prefer to meet with an investor?", options: { A: "Before a flight", B: "During lunchtime", C: "Right after a staff meeting", D: "On Friday morning" } },
      { qNum: 64, question: "What good news does the man share?", options: { A: "A contract was signed.", B: "Sales targets were met.", C: "New funding was secured.", D: "The company won an award." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 65, question: "Where do the speakers work?", options: { A: "At an art museum", B: "At an amusement park", C: "At a botanical garden", D: "At a theater" } },
      { qNum: 66, question: "What does the man want to change on the Web site?", options: { A: "Move parking information to a separate page", B: "Add photographs of the garden", C: "Update admission fees", D: "Post an upcoming schedule" } },
      { qNum: 67, question: "Why does the woman say she cannot complete a task until Monday?", options: { A: "She is on vacation.", B: "The software is being updated.", C: "She needs approval from a director.", D: "The office is closed." } }
    ]
  },
  {
    part: 3,
    items: [
      { qNum: 68, question: "What news does the man share?", options: { A: "A budget was increased.", B: "A project received approval.", C: "A contract was extended.", D: "A new train route opened." } },
      { qNum: 69, question: "Where do the speakers decide to install bicycle racks?", options: { A: "Near the train platform", B: "By the station entrance", C: "Across the street", D: "In an underground garage" } },
      { qNum: 70, question: "Why does the woman say she will contact some companies?", options: { A: "To order materials", B: "To verify safety rules", C: "To get cost estimates", D: "To arrange a meeting" } }
    ]
  },

  // --- PART 4: TALKS (Câu 71 - 100) ---
  {
    part: 4,
    items: [
      { qNum: 71, question: "What type of products does the business repair?", options: { A: "Computers", B: "Automobiles", C: "Bicycles", D: "Home appliances" } },
      { qNum: 72, question: "What special benefit does the speaker mention?", options: { A: "Free car washes", B: "Discounts for students", C: "Extended warranties", D: "Same-day service" } },
      { qNum: 73, question: "Why will the business close on Friday?", options: { A: "To complete an inventory", B: "To attend a trade show", C: "To celebrate an anniversary", D: "To renovate the building" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 74, question: "Who most likely is the speaker?", options: { A: "An IT specialist", B: "An orientation facilitator", C: "A sales manager", D: "A security guard" } },
      { qNum: 75, question: "According to the speaker, what will the listeners find in a binder?", options: { A: "A schedule", B: "An office map", C: "A phone directory", D: "Account credentials" } },
      { qNum: 76, question: "What does the speaker say about department files?", options: { A: "They can only be accessed from company computers.", B: "They are updated weekly.", C: "They require special permission to view.", D: "They can be downloaded to phones." } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 77, question: "Where does the speaker work?", options: { A: "At an arcade", B: "At an amusement park", C: "At a movie theater", D: "At a toy store" } },
      { qNum: 78, question: "What does the speaker say about an item she ordered a month ago?", options: { A: "It arrived with missing parts.", B: "It was difficult to set up.", C: "It was very expensive.", D: "It has been extremely popular." } },
      { qNum: 79, question: "What does the speaker ask the listener to confirm?", options: { A: "Whether a new game will be released soon", B: "If an invoice was paid", C: "When a technician will arrive", D: "The return policy for equipment" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 80, question: "What type of product does the speaker's company make?", options: { A: "Electronics", B: "Footwear", C: "Furniture", D: "Clothing" } },
      { qNum: 81, question: "What does the speaker recommend doing?", options: { A: "Manufacturing clothing locally", B: "Hiring more overseas workers", C: "Offering discounts online", D: "Opening a retail store" } },
      { qNum: 82, question: "What will happen at the next meeting?", options: { A: "Financial reports will be distributed.", B: "A consultant will discuss facility locations.", C: "New board members will be elected.", D: "Product samples will be shown." } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 83, question: "What is the announcement mainly about?", options: { A: "A train schedule delay", B: "A ticket price increase", C: "A track expansion project", D: "A station closing" } },
      { qNum: 84, question: "Why does the speaker say, 'A bus will be departing for that destination in 15 minutes'?", options: { A: "To announce an excursion", B: "To offer an alternative transport option", C: "To indicate where drivers should report", D: "To warn passengers of traffic" } },
      { qNum: 85, question: "What does the speaker remind the listeners about?", options: { A: "Platform changes", B: "Lost-and-found items", C: "Food kiosks and café hours", D: "Baggage regulations" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 86, question: "Where does the speaker most likely work?", options: { A: "At a graphic design firm", B: "At an advertising agency", C: "At a printing company", D: "At a legal office" } },
      { qNum: 87, question: "What did the listener receive by e-mail?", options: { A: "An invoice", B: "Two logo designs", C: "A contract", D: "A project timeline" } },
      { qNum: 88, question: "Why is the speaker unavailable next week?", options: { A: "She is on sick leave.", B: "She is attending a conference.", C: "She will be on a business trip.", D: "She will be on vacation." } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 89, question: "Who most likely are the listeners?", options: { A: "Train engineers", B: "Members of the press", C: "Government officials", D: "Commuters" } },
      { qNum: 90, question: "What does the speaker mean when she says, 'All of ours are at least 10 years old'?", options: { A: "Older trains are safer.", B: "The engines will not be upgraded.", C: "All trains must be replaced soon.", D: "The budget is insufficient." } },
      { qNum: 91, question: "According to the speaker, what can be requested by e-mail?", options: { A: "Train timetables", B: "Press passes", C: "A summary of the study findings", D: "An interview with the director" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 92, question: "What does the speaker want to do?", options: { A: "Hire new sales staff", B: "Test a mobile payment system", C: "Expand into a new market", D: "Change the store layout" } },
      { qNum: 93, question: "According to the speaker, what is the customers' main complaint?", options: { A: "High prices", B: "Waiting in long lines to pay", C: "Rude staff", D: "Limited product choices" } },
      { qNum: 94, question: "Why does the speaker say, 'That's our busiest location'?", options: { A: "To suggest hiring more workers", B: "To decline a transfer request", C: "To explain the choice for a trial run", D: "To complain about workload" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 95, question: "According to the speaker, what is special about the Reston Office Tower?", options: { A: "It has solar panels.", B: "It has a lobby garden.", C: "It is the tallest building in town.", D: "It was built from recycled steel." } },
      { qNum: 96, question: "Which company's CEO was interviewed?", options: { A: "Reston Management", B: "Downtown Media", C: "Barnum Financial Services", D: "City Logistics" } },
      { qNum: 97, question: "What does the speaker say is available on a Web site?", options: { A: "Building floor plans", B: "Job openings", C: "A full interview recording", D: "Tenant application forms" } }
    ]
  },
  {
    part: 4,
    items: [
      { qNum: 98, question: "Who most likely are the listeners?", options: { A: "Mine workers", B: "Government inspectors", C: "Environmental researchers", D: "Prospective investors" } },
      { qNum: 99, question: "Where will a new mine be built?", options: { A: "At the site with 410 grams per ton", B: "At an offshore site", C: "At the site with the larger deposit", D: "Near the current laboratory" } },
      { qNum: 100, question: "What does the speaker say is the next step?", options: { A: "Applying for necessary permits", B: "Purchasing drilling equipment", C: "Hiring local geologists", D: "Publishing a laboratory report" } }
    ]
  },

  // --- PART 5 (Câu 101 - 130) ---
  { part: 5, qNum: 101, question: "The lecture will take place at 6:00 P.M., ------- which attendees may ask questions.", options: { A: "across", B: "after", C: "inside", D: "among" } },
  { part: 5, qNum: 102, question: "The ------- antique shop in Pepper Valley will close down next month.", options: { A: "last", B: "lasts", C: "lasted", D: "lasting" } },
  { part: 5, qNum: 103, question: "Merryville residents will receive an online status ------- about the ongoing bridge construction project.", options: { A: "update", B: "change", C: "payment", D: "request" } },
  { part: 5, qNum: 104, question: "As a result of ------- many years leading media organizations, Ms. Ayo was selected for the Dowel Journalism Prize.", options: { A: "she", B: "her", C: "hers", D: "herself" } },
  { part: 5, qNum: 105, question: "To stop the ------- of computer viruses, do not open suspicious e-mails.", options: { A: "break", B: "spread", C: "balance", D: "surface" } },
  { part: 5, qNum: 106, question: "The hiring manager ------- considered each applicant's résumé and qualifications.", options: { A: "caring", B: "careful", C: "carefully", D: "carefulness" } },
  { part: 5, qNum: 107, question: "In October, Mr. Sakamoto will leave for New Zealand ------- will oversee the opening of the new Auckland branch.", options: { A: "because", B: "in addition", C: "and", D: "prior to" } },
  { part: 5, qNum: 108, question: "Tarateer Pharmaceuticals is varying its product ------- to include over-the-counter medications.", options: { A: "to line", B: "lining", C: "lined", D: "line" } },
  { part: 5, qNum: 109, question: "Dynart, Inc., continuously ------- new ways to reduce its use of plastics.", options: { A: "seeks", B: "seeker", C: "to seek", D: "seeking" } },
  { part: 5, qNum: 110, question: "The cash registers at Pirkle Books automatically ------- the remaining inventory of books available.", options: { A: "calculate", B: "calculator", C: "calculating", D: "calculation" } },
  { part: 5, qNum: 111, question: "The product team is designing mapping software that can ------- locate underground minerals.", options: { A: "infinitely", B: "sincerely", C: "precisely", D: "greatly" } },
  { part: 5, qNum: 112, question: "According to CEO Mayu Yamada, it would not be ------- responsible to expand the warehouse at this time.", options: { A: "finance", B: "financials", C: "financially", D: "financing" } },
  { part: 5, qNum: 113, question: "Analysts cannot say with any ------- what the regional demand for electric trucks will be.", options: { A: "certainty", B: "justice", C: "excellence", D: "denial" } },
  { part: 5, qNum: 114, question: "As part of its marketing campaign, Elegancia Dishware is ------- soliciting feedback from customers.", options: { A: "lightly", B: "loyally", C: "actively", D: "cleanly" } },
  { part: 5, qNum: 115, question: "Rain gardens are intended to ------- water to prevent flooding of local roads.", options: { A: "engage", B: "undergo", C: "absorb", D: "overwhelm" } },
  { part: 5, qNum: 116, question: "Theta Industries' training program aims to increase the ------- of its manufacturing systems.", options: { A: "producer", B: "produced", C: "productive", D: "productivity" } },
  { part: 5, qNum: 117, question: "The board of directors has voted to award Mr. Mitrakos a bonus for his role ------- obtaining the international contract.", options: { A: "in", B: "at", C: "except", D: "apart" } },
  { part: 5, qNum: 118, question: "The finance director gave his approval ------- the project can move forward.", options: { A: "along", B: "furthermore", C: "cautiously", D: "so that" } },
  { part: 5, qNum: 119, question: "The newspaper article describes ways job seekers can ------- for having little workplace experience.", options: { A: "reply", B: "capture", C: "compensate", D: "accumulate" } },
  { part: 5, qNum: 120, question: "Mr. Ellis and Ms. Barnes were both highly qualified, but ------- got the job.", options: { A: "myself", B: "neither", C: "anybody", D: "whoever" } },
  { part: 5, qNum: 121, question: "Ennis Photography purchased all new lighting equipment ------- the high cost.", options: { A: "even though", B: "however", C: "until", D: "despite" } },
  { part: 5, qNum: 122, question: "Marburton residents who wish to ------- a home should contact the award-winning team at Kwan Real Estate.", options: { A: "seller", B: "sold", C: "sell", D: "selling" } },
  { part: 5, qNum: 123, question: "Maswa Bistro began a ------- agreement with local farmers to purchase a set amount of produce each week.", options: { A: "disruptive", B: "cooperative", C: "grateful", D: "concerned" } },
  { part: 5, qNum: 124, question: "The City of Doyle's new downtown parking ------- have been met with opposition by residents and visitors.", options: { A: "restricts", B: "restricted", C: "restrictions", D: "restricting" } },
  { part: 5, qNum: 125, question: "The plumbing position requires extensive training, even for those who studied ------- in technical school.", options: { A: "diligently", B: "scientifically", C: "objectively", D: "decidedly" } },
  { part: 5, qNum: 126, question: "With its fixed price -------, Omega Cellular guarantees no phone bill increases for three years.", options: { A: "assurance", B: "assuredly", C: "assuring", D: "assures" } },
  { part: 5, qNum: 127, question: "As chief analytics officer, Mr. Ko has worked at Lochston Ltd. with great ------- for more than twenty years.", options: { A: "deduction", B: "duplication", C: "declaration", D: "dedication" } },
  { part: 5, qNum: 128, question: "Milltown Hospital's cafeteria serves lunch seven days a week ------- only on weekdays.", options: { A: "up to", B: "as though", C: "each time", D: "rather than" } },
  { part: 5, qNum: 129, question: "The store's entire inventory of lumber comes from a nearby ------- supplier.", options: { A: "financial", B: "promotional", C: "chemical", D: "commercial" } },
  { part: 5, qNum: 130, question: "For a $95 fee, our mechanics will ------- determine what repairs are needed.", options: { A: "diagnosed", B: "diagnostic", C: "diagnosable", D: "diagnose" } },

  // --- PART 6 (Câu 131 - 146) ---
  {
    part: 6,
    passage: `
      <h4>Look to Riessler Landscaping for your Garden Needs</h4>
      <p>Riessler Landscaping has everything you need to create your dream garden. We will listen to your ideas and offer suggestions that match your gardening desires. ---[131]---. The nursery here at Riessler Landscaping includes plants of many varieties and sizes that burst with eye-catching colors year-round. You are guaranteed to find something that will add ---[132]--- to your garden. We are ---[133]--- equipped to construct small ponds or other water features. And as our name suggests, we can take on more ambitious landscaping projects—whatever you need! With more than 40 years in the landscape-design business, ---[134]--- expertise is unmatched.</p>
    `,
    items: [
      { qNum: 131, question: "Choose the best sentence to fill in blank [131]:", options: { A: "Staff members have written articles for the local newspaper.", B: "Installing lights can enhance the effect of a well-designed garden.", C: "Local competitors cannot beat the prices we charge.", D: "Riessler Landscaping's goal is to make your vision a reality." } },
      { qNum: 132, question: "Choose the best option for blank [132]:", options: { A: "years", B: "space", C: "beauty", D: "moisture" } },
      { qNum: 133, question: "Choose the best option for blank [133]:", options: { A: "also", B: "rarely", C: "somehow", D: "nevertheless" } },
      { qNum: 134, question: "Choose the best option for blank [134]:", options: { A: "its", B: "our", C: "others", D: "their" } }
    ]
  },
  {
    part: 6,
    passage: `
      <h4>Brandrix Distribution Centre</h4>
      <p>10 January<br>Cindy Mulligan<br>88 Manchester Road, HARROGATE HG82 2MJ</p>
      <p>Dear Ms. Mulligan,</p>
      <p>We are delighted to celebrate your 30th anniversary with Brandrix Distribution Centre. ---[135]---. Your dedication, loyalty, and hard work have contributed greatly to our success over the years. We appreciate your commitment to excellence. Over the years, you ---[136]--- great initiative, creativity, and leadership.</p>
      <p>You will ---[137]--- be receiving a commemorative plaque by post. We hope this token of our gratitude reminds you how much you mean to us. Congratulations on reaching this ---[138]---. Thank you for being part of our Brandrix family.</p>
      <p>Sincerely,<br>Lance Powar, Vice President of Human Resources</p>
    `,
    items: [
      { qNum: 135, question: "Choose the best sentence to fill in blank [135]:", options: { A: "We especially value our long-term customers.", B: "Please join our holiday celebration.", C: "Our annual report will be released soon.", D: "You have been a valuable member of our team." } },
      { qNum: 136, question: "Choose the best option for blank [136]:", options: { A: "will show", B: "must show", C: "have shown", D: "are showing" } },
      { qNum: 137, question: "Choose the best option for blank [137]:", options: { A: "then", B: "soon", C: "instead", D: "likewise" } },
      { qNum: 138, question: "Choose the best option for blank [138]:", options: { A: "milestone", B: "consensus", C: "destination", D: "understanding" } }
    ]
  },
  {
    part: 6,
    passage: `
      <p><b>To:</b> Kay Berman &lt;kberman@xmail.com&gt;<br><b>From:</b> Ali Chaleby &lt;achaleby@ralenciadesign.com&gt;<br><b>Date:</b> August 21<br><b>Subject:</b> Plans for living room</p>
      <p>Dear Ms. Berman,</p>
      <p>My design team is in the process of ---[139]--- the plans for your living room. Based on our last conversation, I have chosen different paints for the walls and borders. Please review the attached file and decide whether you like those new ---[140]---. If not, it is not too late to make a change. ---[141]---. Your review will help us refine the design before we start.</p>
      <p>Please let ---[142]--- know if you have any questions. I look forward to hearing from you.</p>
      <p>Kind regards,<br>Ali Chaleby, Ralencia Design</p>
    `,
    items: [
      { qNum: 139, question: "Choose the best option for blank [139]:", options: { A: "finalizing", B: "finalize", C: "finalized", D: "finalizes" } },
      { qNum: 140, question: "Choose the best option for blank [140]:", options: { A: "organizations", B: "schedules", C: "colors", D: "times" } },
      { qNum: 141, question: "Choose the best sentence to fill in blank [141]:", options: { A: "I have already begun drawing up plans for your kitchen.", B: "We are not planning to begin work for another two weeks.", C: "Your living room is particularly spacious and airy.", D: "We have not yet received your current payment." } },
      { qNum: 142, question: "Choose the best option for blank [142]:", options: { A: "them", B: "ours", C: "his", D: "me" } }
    ]
  },
  {
    part: 6,
    passage: `
      <p><b>To:</b> Marsha Zalen &lt;mzalen@mansfield.com&gt;<br><b>From:</b> Kaymar PCP &lt;info@kaymarpcp.com&gt;<br><b>Date:</b> September 8<br><b>Subject:</b> Your recent office visit</p>
      <p>Dear Ms. Zalen,</p>
      <p>Thank you for your recent visit to Kaymar Primary Care Practice. We hope you found our services ---[143]---, and we welcome suggestions for improvement. We have posted a ---[144]--- of your consultation on our portal. Please take a moment to go through it and let us know if you have any questions.</p>
      <p>As a reminder, you can log in to the portal for various activities. ---[145]---, you can make appointments and payments, view your medical history, review lab results, and request medication refills. Rest assured that your personal information is safe and secure. ---[146]---. We thank you for your business and look forward to serving you again.</p>
      <p>Kaymar Primary Care Practice</p>
    `,
    items: [
      { qNum: 143, question: "Choose the best option for blank [143]:", options: { A: "satisfied", B: "satisfaction", C: "satisfactory", D: "satisfactorily" } },
      { qNum: 144, question: "Choose the best option for blank [144]:", options: { A: "photo", B: "lecture", C: "summary", D: "schedule" } },
      { qNum: 145, question: "Choose the best option for blank [145]:", options: { A: "To repeat", B: "For instance", C: "Otherwise", D: "Consequently" } },
      { qNum: 146, question: "Choose the best sentence to fill in blank [146]:", options: { A: "We hope you will use this resource to manage your health-care needs.", B: "The staff will close the office early on Friday afternoons.", C: "Please be sure to come to our office fifteen minutes in advance.", D: "We apologize for any confusion about your appointment time." } }
    ]
  },

  // --- PART 7: SINGLE PASSAGES (Câu 147 - 175) ---
  {
    part: 7,
    passage: `
      <h4>High View Apartments Notice</h4>
      <p>Dear High View Apartments Resident,</p>
      <p>Riverside Paving Company is coming to High View Apartments on May 3 and 4 to resurface the parking area. All vehicles must be removed by 8 A.M. on May 3 for the work to commence. Residents may use the parking area again starting on May 5 at 8 A.M. We realize that trying to find another place to park is inconvenient, but it is necessary for the job to be completed in the two days scheduled. Note that all parking spaces will be widened, and some spaces could be moved during the work. You will receive an e-mail if your parking space is moved more than 20 meters from your previous one.</p>
      <p>Thank you for your cooperation,<br>Judith Alvarez, Property Manager</p>
    `,
    items: [
      { qNum: 147, question: "What is the purpose of the notice?", options: { A: "To invite residents to a meeting on May 3", B: "To request feedback about parking facilities", C: "To inform residents of an upcoming project", D: "To announce an increase in parking fees" } },
      { qNum: 148, question: "What is suggested about High View Apartments?", options: { A: "It charges residents a monthly maintenance fee.", B: "It recently hired a new property manager.", C: "It has the parking area repaved every year.", D: "It assigns tenants specific parking spots." } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Instant Messaging Chain</h4>
      <p><b>Carol Barger (10:45 A.M.):</b> Hello, Ms. Seang.<br>
      <b>Leakhena Seang (10:55 A.M.):</b> Good morning!<br>
      <b>Carol Barger (11:15 A.M.):</b> We have fifteen participants enrolled in your mosaic workshop tomorrow. That is five more than last summer. Your workshops get more popular every year! Do you have enough materials on hand for that many participants?<br>
      <b>Leakhena Seang (11:23 A.M.):</b> I have plenty to go around. We'll be creating mosaic designs using bits of sea glass I collected on my vacation last summer. They are pieces of brown, green, and blue bottles that have washed up on the beach. The sand has smoothed all the sharp edges, so they're perfectly safe for everyone to use.<br>
      <b>Carol Barger (11:30 A.M.):</b> Sounds good. See you tomorrow at breakfast.</p>
    `,
    items: [
      { qNum: 149, question: "What most likely is Ms. Seang's job?", options: { A: "Glassmaker", B: "Art instructor", C: "Beach lifeguard", D: "Program administrator" } },
      { qNum: 150, question: "At 11:23 A.M., what does Ms. Seang imply when she writes, 'I have plenty to go around'?", options: { A: "She intends to create an extra-large mosaic.", B: "She has been collecting sea glass for many years.", C: "She can share her sea glass with all the workshop participants.", D: "She does not think she will use much of her sea glass." } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Sales Team<br><b>From:</b> Laura Correa<br><b>Date:</b> 5 October<br><b>Subject:</b> Updates</p>
      <p>Dear Team,</p>
      <p>As announced in the Brighter Sails September newsletter, our performance has been consistently strong this year. This is an accomplishment we can all be proud of. Please take a moment to congratulate each other. We will continue to dream up new and exciting plans for the future!</p>
      <p>In other news, Jasen Norton will transfer to our Kingston headquarters next month. We are sad to lose Mr. Norton, but we gratefully acknowledge his excellent work and wish him continued success in his new role.</p>
      <p>There will be a farewell luncheon for Mr. Norton on 28 October at 1:00 P.M. in the second-floor conference room. Bring your good cheer and perhaps a story to share. The company will supply lunch, a cake, and decorations. Let me know by 12 October whether you will be able to attend.</p>
      <p>Sincerely,<br>Laura Correa, Sales Manager, Brighter Sails Ltd.</p>
    `,
    items: [
      { qNum: 151, question: "What is mentioned about Mr. Norton?", options: { A: "He will be attending a sales conference.", B: "He sent Ms. Correa an office supply request.", C: "He wrote an article in the September newsletter.", D: "He will be moving to another company location." } },
      { qNum: 152, question: "What does Ms. Correa ask members of the sales team to do?", options: { A: "Send her stories for a newsletter", B: "Give her names of potential new hires", C: "Inform her of plans to attend an event", D: "Help her decorate the office" } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Refurbished Theater Gives Town a Boost</h4>
      <p><b>BEACHVILLE (February 24)</b>—Beachville residents and tourists have a good reason to celebrate. The 40-year-old Crown Coastal Theater is scheduled to reopen in June. Many were saddened when the former theater owners decided to close the venue over a year ago, citing the cost of needed renovations. Fortunately, the theater has new owners who have spent the last year updating the interior and the projection system.</p>
      <p>Christine Lafferty said that she and her childhood friend Morgan Flanagan spent plenty of time at the theater while growing up. "Going to the movies is the thing to do on a rainy day in a seaside town. We were sorry to see it close." The friends, who also own the popular Blue Bay Bistro, decided to buy the theater and make the necessary repairs to keep it a thriving business. For more information about the theater and its upcoming events, visit www.crowncoastaltheater.com.</p>
    `,
    items: [
      { qNum: 153, question: "What is the purpose of the article?", options: { A: "To report on beach conditions", B: "To announce a business reopening", C: "To promote a movie premiere", D: "To advertise a new restaurant" } },
      { qNum: 154, question: "Who is Ms. Flanagan?", options: { A: "A town council member", B: "An event coordinator", C: "Ms. Lafferty's business partner", D: "The writer of the article" } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Randi Longfellow &lt;rlongfellow@sapphiremail.com.au&gt;<br><b>From:</b> Deon Welman &lt;deonwelman@skyviewscopes.com.au&gt;<br><b>Date:</b> 27 March<br><b>Subject:</b> Makatasi model METX-33948</p>
      <p>Dear Ms. Longfellow,</p>
      <p>Thank you for ordering the Makatasi ETX-Triple Refracting Telescope, model METX-33948. Unfortunately, the item you requested is on back order. [1]. If you would prefer not to wait, we have a similar telescope made by another manufacturer, Belter Telescopes. Like the Makatasi model you ordered, the Belter BTR-1483 has a 120 mm aperture and a retractable lens hood. [2]. In addition, all Belter telescopes include a padded carrying case. The Belter BTR-1483 costs $200 less than the Makatasi METX-33948.</p>
      <p>If you wish to revise your order, simply reply to this e-mail within 48 hours or go to our Web site to chat with a representative at http://www.skyviewscopes.com.au. We will then change your order, refund $200 to your credit card, and ship your new telescope overnight at no extra charge. [3]. Otherwise, we will notify you when the Makatasi model METX-33948 is back in stock and provide delivery information at that point. [4].</p>
      <p>Best regards,<br>Deon Welman, Sales Representative, Skyview Scopes</p>
    `,
    items: [
      { qNum: 155, question: "What is the purpose of the e-mail?", options: { A: "To request payment", B: "To provide operating instructions", C: "To advertise a new product", D: "To offer a substitute item" } },
      { qNum: 156, question: "What is mentioned about the Belter BTR-1483 telescope?", options: { A: "It can only be ordered online.", B: "It will ship directly from the manufacturer.", C: "It includes a protective case.", D: "It is the most expensive telescope of its type." } },
      { qNum: 157, question: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'You can see a full list of specifications on our Web site.'", options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Sun-Hi Myo &lt;shmyo@sunmail.co.nz&gt;<br><b>From:</b> Jan Delpit &lt;jdelpit@hamerkoptech.co.nz&gt;<br><b>Date:</b> 8 March<br><b>Subject:</b> RE: Inquiry about job opening</p>
      <p>Hello,</p>
      <p>Thank you for your e-mail. I am currently on holiday and will return to the office on 15 March. I will respond to your message as soon as possible after I return.</p>
      <p>If you require general assistance during my absence or have questions about the open position in our sales department, please contact my assistant Sita Viswan at 04 555 0193 or sviswan@hamerkoptech.co.nz. For questions about specific Hamerkoptech software products, contact the customer service department at customerservice@hamerkoptech.co.nz.</p>
      <p>Additionally, I am happy to announce that our new graphic design software program will be released on 2 April. You can read more about the program at Hamerkoptech's newly redesigned Web site, www.hamerkoptech.co.nz. There, you may also sign up to receive our weekly newsletter by following the instructions on the home page.</p>
      <p>Sincerely,<br>Jan Delpit</p>
    `,
    items: [
      { qNum: 158, question: "What is one purpose of the e-mail?", options: { A: "To explain how to use a software program", B: "To request Ms. Myo's assistance with a project", C: "To introduce a new staff member", D: "To indicate that Mr. Delpit is out of the office" } },
      { qNum: 159, question: "What will happen on April 2?", options: { A: "A job opening will be filled.", B: "A product will be launched.", C: "A client meeting will take place.", D: "A Web site redesign will begin." } },
      { qNum: 160, question: "How can people subscribe to a newsletter?", options: { A: "By calling Ms. Viswan", B: "By replying to Mr. Delpit's e-mail", C: "By visiting Hamerkoptech's Web site", D: "By contacting the customer service department" } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Vimalo Brands Enters a New Era</h4>
      <p><b>By Yvette Maurer</b><br><b>VANCOUVER (2 August)</b>—Vimalo Brands, the large consumer goods company that markets popular nutritional-support and personal-care products, including Powerburst breakfast drinks and Honeysoft soaps and lotions, will soon offer something new for its customers: frozen foods. "Our new Nutridinna line is not just about convenience," CEO Danitza Martens said during a press conference earlier today. "Frozen foods are not a new concept, but our method of flash-freezing fresh produce and meats ensures that our products retain their texture and flavour as well as their healthy vitamins and minerals. Now our customers can enjoy the convenience of frozen food without sacrificing quality."</p>
      <p>Vimalo Brands has partnered with Vancouver-area farms to obtain produce and meat for the Nutridinna line. "By keeping our operations local, we avoid shipping delays and can flash-freeze freshly harvested vegetables at their peak of ripeness," Martens said. "Our customers benefit further, since our products can be kept in the freezer for up to six months." Nutridinna foods will be available in supermarkets beginning in November. Frozen fish and other seafood will be added early next year.</p>
    `,
    items: [
      { qNum: 161, question: "What is one purpose of the article?", options: { A: "To discuss a cooking technique", B: "To report on a corporate merger", C: "To announce a new product line", D: "To introduce a recently hired executive" } },
      { qNum: 162, question: "The word 'just' in paragraph 1, line 8, is closest in meaning to:", options: { A: "recently", B: "exactly", C: "slightly", D: "only" } },
      { qNum: 163, question: "What does Ms. Martens suggest about flash-frozen food?", options: { A: "It is less expensive than fresh food.", B: "It is as nutritious as fresh food.", C: "It is as easy to ship as fresh food.", D: "It is less flavorful than fresh food." } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Karning Creative Designs - Job Opportunity</h4>
      <p>Are you ready to work hard as part of a team of like-minded individuals? Are you willing to put your education, your experience, and your imagination to great use? If so, then we have the job for you. Karning Creative Designs is expanding, and with our success comes your opportunity.</p>
      <p>Karning Creative Designs began ten years ago as a two-person operation set up in the home of our current CEO and founder Shirin Navani. Now located in a beautiful loft in downtown Hollinson, our firm currently employs 25 full-time staff members. At Karning, we design paper-based brochures, catalogs, ads, and posters for our clients. We are currently seeking qualified designers and artists who will shine in a fast-paced, collaborative environment.</p>
      <p>The ideal candidate:<br>
      • Holds a degree in design, advertising, or graphic art—although several years of direct experience may substitute for a degree<br>
      • Demonstrates a strong ability to work closely with colleagues<br>
      • Maintains a critical eye for detail and precision<br>
      • Consistently meets deadlines and can flourish under pressure</p>
      <p>Graphic design or related experience is a plus but not strictly necessary. If you are ready to join our team, we want to meet you! Contact Salvador Tomassin at 608-555-0144 for further details. All applications must be received by March 31.</p>
    `,
    items: [
      { qNum: 164, question: "According to the advertisement, who most likely is Ms. Navani?", options: { A: "A Karning Creative Designs client", B: "A business owner", C: "A photographer", D: "A real estate agent" } },
      { qNum: 165, question: "What is indicated about Karning Creative Designs?", options: { A: "Its primary focus is Web design.", B: "It initially employed two people.", C: "It was founded by Mr. Tomassin.", D: "Its staff are permitted to work from home." } },
      { qNum: 166, question: "What is required of job applicants?", options: { A: "Skill in working with others", B: "Previous design experience", C: "A willingness to work on weekends", D: "An ability to use certain software applications" } },
      { qNum: 167, question: "What will happen on March 31?", options: { A: "A project will begin.", B: "A deadline will occur.", C: "A graphic designer will relocate.", D: "An application form will be made available." } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Marco's Italian Restaurant Grand Reopening</h4>
      <p><b>NEW HAVEN (June 1)</b>—Marco's Italian Restaurant on Frontage Road will be reopening in late June. It closed three months ago after a water leak caused extensive damage to the kitchen. A significant amount of work needed to be done in the kitchen and dining areas. [1]. The restaurant will accommodate larger parties when it reopens.</p>
      <p>During the past three months, many of the restaurant's employees were able to work at Marco's Italian Market, which is located on the opposite side of the street. [2]. "The leak happened right before the market's busy season started," said Tom Marco, who owns both businesses. "We needed to add staff there temporarily, and I was happy to keep my restaurant crew employed." Most of those employees have now returned to work in the restaurant. [3].</p>
      <p>Mr. Marco has planned a grand reopening for June 25. Guests will enjoy live music and a new tasting menu. [4]. Reservations are required for the day of the celebration and can be made by calling 203-555-0124. "We are excited to be able to prepare our traditional dishes and welcome the community back again," stated Mr. Marco.</p>
    `,
    items: [
      { qNum: 168, question: "What does the article mention about Marco's Italian Restaurant?", options: { A: "It is the oldest restaurant in New Haven.", B: "It is looking for a chef who can cook traditional dishes.", C: "It needed major renovations.", D: "It opened in a new location." } },
      { qNum: 169, question: "What is indicated about Marco's Italian Market?", options: { A: "It supplies ingredients to Marco's Italian Restaurant.", B: "It occasionally hires temporary workers.", C: "It is scheduled to close in three months.", D: "It is located next door to Marco's Italian Restaurant." } },
      { qNum: 170, question: "What will happen during the event on June 25?", options: { A: "The restaurant will reduce its menu prices.", B: "The restaurant will offer special menu items.", C: "Mr. Marco will celebrate his retirement.", D: "The New Haven business community will honor Mr. Marco." } },
      { qNum: 171, question: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'During repairs, some additional dining space was added.'", options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Online Chat Discussion</h4>
      <p><b>Marlys Barry (10:17 A.M.):</b> This is Ms. Barry from the data analysis department. I have included my colleague, Ms. Choi. We're contacting you about your data request for the e-mail addresses of all account holders, sorted by age.<br>
      <b>Alexander Kubelski (10:17 A.M.):</b> Yes, how soon can you complete the request?<br>
      <b>Marlys Barry (10:18 A.M.):</b> I have a question for you first. Do you really need the e-mail addresses of all account holders? That would be a huge file. Or do you need the e-mail addresses of account holders only within a certain age-group?<br>
      <b>Alexander Kubelski (10:19 A.M.):</b> I see what you mean. I want to e-mail account holders aged 55 to 65 to invite them to meet with a retirement planning expert. Do I have to submit a new project request form?<br>
      <b>Bora Choi (10:21 A.M.):</b> That's not necessary, Mr. Kubelski. We can update your current request form for you. You do not want to lose your place in the queue.<br>
      <b>Alexander Kubelski (10:21 A.M.):</b> Great, thank you! Is it possible for you to get me that list right away?<br>
      <b>Marlys Barry (10:22 A.M.):</b> There are several projects ahead of yours.<br>
      <b>Alexander Kubelski (10:23 A.M.):</b> I was hoping to send out the e-mail invitations tomorrow.<br>
      <b>Marlys Barry (10:24 A.M.):</b> We will get to it as soon as we can.</p>
    `,
    items: [
      { qNum: 172, question: "Why did Ms. Barry begin an online chat with Mr. Kubelski?", options: { A: "To refer him to a different department", B: "To decline an invitation", C: "To issue an apology", D: "To ask for clarification about a request" } },
      { qNum: 173, question: "Who will receive an e-mail from Mr. Kubelski?", options: { A: "Account holders in one age-group", B: "Data analysis team members", C: "Financial planners", D: "All Mr. Kubelski's clients" } },
      { qNum: 174, question: "What does Ms. Choi offer to do?", options: { A: "Write an e-mail", B: "Make a change to a form", C: "Open an account", D: "Revise a policy" } },
      { qNum: 175, question: "At 10:22 A.M., what does Ms. Barry most likely mean when she writes, 'There are several projects ahead of yours'?", options: { A: "Ms. Barry will move Mr. Kubelski's request to the end of the queue.", B: "Ms. Barry will not be able to send out the invitations for Mr. Kubelski.", C: "Mr. Kubelski's request will not be the first job Ms. Barry completes.", D: "Mr. Kubelski will need to assist with other projects first." } }
    ]
  },

  // --- PART 7: MULTIPLE PASSAGES (Câu 176 - 200) ---
  {
    part: 7,
    passage: `
      <h4>Tips for designing a Web site for a food-truck business</h4>
      <p>Owners of food trucks move from place to place, within and between cities, as they carry out their business, so they often rely on word of mouth or social media to attract customers. As a result, they may not build a Web site of their own. But in fact, by the very nature of their business, it is crucial that food truck owners have a fixed place for the public to learn about them, order from them, contact them, etc. Furthermore, market research shows that a Web site can help build a loyal customer base. So, here are some tips for developing a great Web site for your food truck.</p>
      <p>The Home page should have bold graphics with your food truck's name. The text must prominently display key information, such as your truck's locations and operating hours. Online forms with fields to fill out, such as reservation requests for special events or services, give new visitors too much visual information. They are better incorporated as links or pop-up windows.</p>
      <p>The Food Menu page needs attractive, high-definition images along with vivid and precise text that describes each menu item in detail. Remember that your photos should be big enough to look appealing on larger computer monitors.</p>
      <p>The About Us page should include some text explaining your food truck's theme and concept, and some biographical data detailing your background in the food industry.</p>
      <p>The News page can include text informing visitors about seasonal food items and upcoming promotions or special events such as food festivals.</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <p><b>To:</b> Doug Abruzzo &lt;dabruzzo@dzacreative.com&gt;<br><b>From:</b> Ed Vale &lt;evale@saffronmail.com&gt;<br><b>Date:</b> March 29<br><b>Subject:</b> Feedback</p>
      <p>Dear Mr. Abruzzo,</p>
      <p>Thank you again for creating the prototype Web site for my food-truck business. I just wanted to reiterate that it has gotten positive feedback from customers who have tested it. I am so glad we followed the advice in that article you sent me about Web site design for food trucks!</p>
      <p>As we discussed in our phone call yesterday, we will move forward with the prototype Web site and launch it as the official site on April 5. However, I still do not see the information I sent about our new promotion that will begin in mid-April, a free dessert with any sandwich purchase. Please be sure to add this important information before we launch the site.</p>
      <p>Regards,<br>Ed</p>
    `,
    items: [
      { qNum: 176, question: "According to the article, what is one way that food truck owners traditionally attract customers?", options: { A: "By word of mouth", B: "From highway billboards", C: "Through newspaper advertisements", D: "From signs at food festivals" } },
      { qNum: 177, question: "According to the article, what information does not need to appear on the Home page?", options: { A: "Truck locations", B: "Hours of operation", C: "Company name", D: "Seasonal food items" } },
      { qNum: 178, question: "In what field does Mr. Abruzzo most likely work?", options: { A: "Market research", B: "Catering", C: "Web design", D: "Package delivery" } },
      { qNum: 179, question: "In which section of the Web site will information most likely be added?", options: { A: "The Home page", B: "The Food Menu page", C: "The About Us page", D: "The News page" } },
      { qNum: 180, question: "According to the e-mail, when will the Web site launch?", options: { A: "On March 28", B: "On March 29", C: "On April 5", D: "On April 15" } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Manny Green &lt;mgreen@rhba.com&gt;<br><b>From:</b> John LaRose &lt;jlarose@rilamore.edu&gt;<br><b>Date:</b> May 18<br><b>Subject:</b> Drilling notice</p>
      <p>Dear Mr. Green:</p>
      <p>As a courtesy, I am writing to you at the Red Hills Business Association, asking you to help me get the word out to your membership. It was announced in last month's Daily Gazette that Rilamore University is moving forward with its Net Zero Initiative. Within three years, we expect to have geothermal wells installed and operational for the heating and cooling of our entire campus. Limiting the institution's reliance on fossil fuels has long been a goal, and the new system is a significant step toward achieving that goal.</p>
      <p>Over the next month, we will conduct test drilling in several campus locations. If all goes according to schedule, the crew will be drilling adjacent to the Red Hills Business District and Oak Street Apartments starting Wednesday, June 5. We want to tell business owners and residents near the campus to expect a higher-than-usual noise level during the two weeks we estimate it will take to complete the work. The work hours for the drilling crew are 10 A.M. to 3 P.M. each day, Monday through Friday.</p>
      <p>We apologize in advance for the inconvenience this may cause to our neighbors. Any questions or concerns should be directed to me at 813-555-0123.<br>John LaRose, Community Liaison, Rilamore University Office of Communications</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>FOR IMMEDIATE RELEASE</h4>
      <p><b>Contact:</b> Manny Green, mgreen@rhba.com<br><b>RED HILLS (May 25)</b>—The Red Hills Business Association is shifting the dates of its much-anticipated Lunch Hour Concert Series. Normally presented each Thursday in June, the four free concerts will instead take place each Thursday in July. The lineup of artists remains unchanged: the Jaystone Jazz Trio will open the series on July 4, followed on successive Thursdays by Joss and the Jaybirds, Ray Starform, and the Barklay Bass Quintet.</p>
      <p>As usual, all three blocks of Oak Street will be closed to traffic, restaurants will serve lunch at outdoor tables, and local arts-and-crafts vendors will display their work on the lawn of the Cultural Center. It is a beautiful celebration in the heart of a popular Red Hills neighborhood. We hope to see you there!</p>
    `,
    items: [
      { qNum: 181, question: "What is indicated about the Net Zero Initiative?", options: { A: "It is being funded by the Red Hills Business Association.", B: "It was inspired by similar initiatives in other cities.", C: "It will use geothermal energy to power a city.", D: "It will change the way an institution heats its buildings." } },
      { qNum: 182, question: "In the e-mail, the word 'conduct' in paragraph 2, line 1, is closest in meaning to:", options: { A: "behave", B: "accompany", C: "transmit", D: "carry out" } },
      { qNum: 183, question: "What can be concluded about the Red Hills Business District?", options: { A: "It is located near a university campus.", B: "It hosts an arts festival every July.", C: "It includes the Oak Street Apartments.", D: "It is home to the offices of the Daily Gazette." } },
      { qNum: 184, question: "Why most likely did the Red Hills Business Association change the dates of its concert series?", options: { A: "To take advantage of a new power source", B: "To accommodate students' schedules", C: "To avoid noise from nearby construction", D: "To prevent a conflict with a similar event" } },
      { qNum: 185, question: "What is mentioned in the press release about the Cultural Center?", options: { A: "It will provide lunch for musicians.", B: "It will have artwork for sale on its property.", C: "It will offer arts-and-crafts workshops.", D: "It will provide the stage for performers." } }
    ]
  },
  {
    part: 7,
    passage: `
      <h4>Lawal Home Service: Serving Southern California for over 40 years</h4>
      <p>Lawal Home Service provides roofing and solar solutions for Southern California residents in Inglewood and the surrounding areas. In addition to roof replacement, we offer a wide array of services, from attic insulation and gutter restoration to fixing leaks and installing solar panels.</p>
      <p>Lawal Home Service prides itself on transparent communication and attention to detail. Our project supervisors are always on-site to answer client questions, provide updates, and ensure a safe and clean worksite. To request a free roofing diagnosis, visit www.lawalhomeservice.com or call our booking agent at 310-555-0108.</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>Lawal Home Service Contact Form</h4>
      <p><b>Name:</b> Drew Gerson | <b>Date:</b> December 12<br>
      <b>Address:</b> 820 North Acacia Street, Inglewood, CA 90301<br>
      <b>How may we help you?</b> During last week's windstorm, several roof shingles were torn loose and need replacing. I am considering replacing the entire roof as it is over 30 years old, and water has begun to drip through the section over the patio. I would appreciate talking to someone who could tell me my options and provide an estimate.</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>Neighborhood Reviews: Lawal Home Service</h4>
      <p><i>"I was very pleased with the thoroughness of their work."</i></p>
      <p>I left a description of my problem with Lawal Home Service, and one of the company's estimators came to inspect my roof the very next day. After I decided to replace the roof, the Lawal Home Service crew was able to get to work the following week. Diana Perez was on-site for the whole job as promised and answered all my questions. Work was started on December 19, and it was finished on December 20. Once the roofing was finished, the crew did a great job cleaning up. They used two magnetic devices resembling lawnmowers and swept over my entire lawn to find any dropped roofing nails. I had never seen anything like that! I was very pleased with the thoroughness of their work.<br>— Drew Gerson, Inglewood, CA</p>
    `,
    items: [
      { qNum: 186, question: "According to the advertisement, what is one type of work performed by Lawal Home Service?", options: { A: "Planting trees", B: "Repairing gutters", C: "Building home additions", D: "Replacing heating systems" } },
      { qNum: 187, question: "What does Mr. Gerson indicate on the form about his roof?", options: { A: "It has developed a leak.", B: "It was recently replaced.", C: "It was not expensive to install.", D: "It is under warranty for 30 years." } },
      { qNum: 188, question: "When did Lawal Home Service inspect Mr. Gerson's roof?", options: { A: "On December 12", B: "On December 13", C: "On December 19", D: "On December 20" } },
      { qNum: 189, question: "Who most likely is Ms. Perez?", options: { A: "A project supervisor", B: "A roofing estimator", C: "An interior decorator", D: "A booking agent" } },
      { qNum: 190, question: "According to the review, what surprised Mr. Gerson about the crew from Lawal Home Service?", options: { A: "The price they charged", B: "The warranty they offered", C: "The quality of their materials", D: "The tools they used for a job" } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Omar Balaji &lt;obalaji@darbourycompany.com&gt;<br><b>From:</b> Juanita Pereira &lt;jpereira@bunbunbooks.com&gt;<br><b>Date:</b> May 10<br><b>Subject:</b> Notebook inquiry</p>
      <p>Dear Mr. Balaji,</p>
      <p>We are expanding our office supply section at Bun Bun Books and would like to offer a selection of blank notebooks with lined pages. We would like your help creating the following cover designs:</p>
      <table style="width:100%; border-collapse:collapse; margin-bottom:10px; font-size:12.5px;" border="1">
        <tr><th>Cover Design Name</th><th>Central Image</th><th>Background Color</th></tr>
        <tr><td>Great Thoughts</td><td>Lightbulb, lightning bolt, and star icons</td><td>Blue</td></tr>
        <tr><td>World Suitcase</td><td>Suitcase with country name travel stickers</td><td>Black</td></tr>
        <tr><td>Lavender Bouquet</td><td>Large bunch of lavender on tall, pale green stems</td><td>Yellow</td></tr>
        <tr><td>Sail Away</td><td>Sun setting in the sky above a sailboat on a lake</td><td>White</td></tr>
      </table>
      <p>We need to have notebooks in stock in time for our annual sale starting August 1. After approving the sample covers, when would we need to place our order?<br>Thank you, Juanita Pereira</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <p><b>To:</b> Juanita Pereira &lt;jpereira@bunbunbooks.com&gt;<br><b>From:</b> Omar Balaji &lt;obalaji@darbourycompany.com&gt;<br><b>Date:</b> May 25<br><b>Subject:</b> Re: Notebook inquiry</p>
      <p>Hello, Ms. Pereira. I have shipped some sample notebook covers for your inspection. Unfortunately, I was not able to include one of the designs for your approval because it needed a late-stage change to the background color. The sticker art did not show up well against the original black background. We are testing a light-beige color, and I will send the updated sample cover to you after it has been approved internally. I should have the last sample to you by the end of this week. As long as you send your approval of all covers by June 11, we will be able to ship your entire order of bound notebooks before July 20. You will have everything before your sale that begins on August 1.<br>Best regards, Omar Balaji, Darboury Company</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>Darboury Company Order Form</h4>
      <p><b>Customer:</b> Bun Bun Books | <b>Ship by:</b> July 15 | <b>Requested delivery date:</b> July 20</p>
      <table style="width:100%; border-collapse:collapse; font-size:12.5px;" border="1">
        <tr><th>Item code</th><th>Product Description</th><th>Cover Design</th><th>Amount</th></tr>
        <tr><td>N3-GT</td><td>Standard-size spiral notebook</td><td>Great Thoughts</td><td>200</td></tr>
        <tr><td>N3-WS</td><td>Standard-size spiral notebook</td><td>World Suitcase</td><td>200</td></tr>
        <tr><td>H3-LB</td><td>Small hardbound journal notebook</td><td>Lavender Bouquet</td><td>150</td></tr>
        <tr><td>H3-SA</td><td>Small hardbound journal notebook</td><td>Sail Away</td><td>150</td></tr>
        <tr><td>D1</td><td>Large metal display rack (holds standard-size spiral notebooks)</td><td>-</td><td>1</td></tr>
      </table>
    `,
    items: [
      { qNum: 191, question: "What is one service that Darboury Company most likely provides?", options: { A: "Travel booking", B: "Textbook publishing", C: "Flower delivery", D: "Graphic design" } },
      { qNum: 192, question: "What sample was delayed?", options: { A: "Great Thoughts", B: "World Suitcase", C: "Lavender Bouquet", D: "Sail Away" } },
      { qNum: 193, question: "When is the deadline for Ms. Pereira to approve samples?", options: { A: "May 25", B: "June 11", C: "July 20", D: "August 1" } },
      { qNum: 194, question: "What does the form indicate about the Bun Bun Books order?", options: { A: "It will include a display stand.", B: "It will ship overnight.", C: "It will be paid upon delivery.", D: "It will arrive late." } },
      { qNum: 195, question: "What is the background color on the cover of item N3-GT?", options: { A: "Blue", B: "Black", C: "Yellow", D: "White" } }
    ]
  },
  {
    part: 7,
    passage: `
      <p><b>To:</b> Managers<br><b>From:</b> Charlotte Black<br><b>Date:</b> August 16<br><b>Subject:</b> Employee of the month</p>
      <p>Dear Managers, It is time to vote for the Wilson Autos Employee of the Month for September. Here are the nominees:</p>
      <p>• <b>Erica Boyd</b> has been with us for only a few months but has already shown great promise and is eager to learn new things.<br>
      • <b>Lauren Almahdi</b> is very proactive. If something needs to be done, she will point it out to a manager and volunteer to take care of it herself.<br>
      • <b>Nick Salehi</b> found a glitch in our computer system and stopped us from incorrectly ordering unnecessary inventory (thus saving us money).<br>
      • <b>Max Rhodes</b> has been especially helpful with training new hires. He is calm and patient and explains our procedures well.</p>
      <p>Please respond to this e-mail by Friday with your vote. The winner must receive at least three votes. The winner will be posted at our front desk and on our Web site next Monday.<br>Charlotte Black, General Manager, Wilson Autos</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>Wilson Autos (Westchester) Customer Review</h4>
      <p>⭐⭐⭐⭐⭐</p>
      <p>My wife and I just bought a new Excelera truck at the Wilson Autos Westchester location with the help of Erica Boyd. Even though she was new, she was very knowledgeable about all the trucks on the lot that we wanted to test drive. The few questions she was unable to answer were quickly addressed by her mentor, Max. We were very pleased with the customer service and even more delighted when the general manager agreed to sell us the Excelera for the same price that a competing dealership was advertising. I highly recommend Wilson Autos if you are in the market for a new vehicle!<br>— Henry Riggs, August 22</p>
      <hr style="border:none; border-top:1px dashed var(--border); margin:14px 0;">
      <h4>Announcement: Employee of the Month</h4>
      <p><b>The employee of the month for September is ERICA BOYD!</b></p>
      <p>In her three months at Wilson Autos, Erica has picked up new skills quickly and is always trying to learn more. She has become very knowledgeable about our inventory and is able to share her knowledge with customers to complete sales. She has also been instrumental in encouraging satisfied customers to post comments on our social media pages. We received more great reviews in the past month than we did in the four previous months combined! Erica has received a $50 gift card to Alonzo's Restaurant as a thank-you for her excellent work. Congratulations, Erica!</p>
    `,
    items: [
      { qNum: 196, question: "What is the purpose of the e-mail?", options: { A: "To share a list of job candidates", B: "To ask for opinions from managers", C: "To summarize a managers' meeting", D: "To nominate a manager for an award" } },
      { qNum: 197, question: "According to the e-mail, who identified a technical problem?", options: { A: "Mr. Salehi", B: "Ms. Almahdi", C: "Mr. Rhodes", D: "Ms. Black" } },
      { qNum: 198, question: "What can be concluded about Mr. Riggs?", options: { A: "His previous vehicle was an Excelera truck.", B: "He is a neighbor of Ms. Boyd's.", C: "He has purchased a vehicle from Wilson Autos in the past.", D: "He negotiated with Ms. Black for a lower price." } },
      { qNum: 199, question: "What is indicated in the notice about Ms. Boyd?", options: { A: "She eats regularly at Alonzo's Restaurant.", B: "She manages social media sites for Wilson Autos.", C: "She is responsible for an increase in customer feedback.", D: "She recently completed a sales training course." } },
      { qNum: 200, question: "What is most likely true about Ms. Boyd?", options: { A: "She received votes from at least three managers.", B: "She was the top salesperson in August.", C: "She has years of experience in the auto industry.", D: "She was hired by Wilson Autos in April." } }
    ]
  }
];

// 3. FULL TRANSCRIPT LISTENING TEST 1
window.TOEIC_SCRIPTS[1] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question"><span class="script-speaker">1. W-Br</span><div class="script-opt">(A) The woman is carrying a tray of food.</div><div class="script-opt correct-pink">(B) The woman is wearing a jacket.</div><div class="script-opt">(C) The woman is tying up her hair.</div><div class="script-opt">(D) The woman is removing her hat.</div></div>
  <div class="script-question"><span class="script-speaker">2. W-Am</span><div class="script-opt">(A) Some people are standing next to a filing cabinet.</div><div class="script-opt">(B) Some people are searching through a desk.</div><div class="script-opt">(C) Some people are watching a presentation.</div><div class="script-opt correct-pink">(D) Some people are looking at a book.</div></div>
  <div class="script-question"><span class="script-speaker">3. M-Au</span><div class="script-opt">(A) A woman is holding a phone up to her ear.</div><div class="script-opt">(B) A woman is pouring a beverage into a glass.</div><div class="script-opt correct-pink">(C) Some light fixtures are hanging from the ceiling.</div><div class="script-opt">(D) Some tiles are being installed in a hallway.</div></div>
  <div class="script-question"><span class="script-speaker">4. W-Am</span><div class="script-opt correct-pink">(A) A wooden crate is filled with vegetables.</div><div class="script-opt">(B) One of the men is putting vegetables into a shopping bag.</div><div class="script-opt">(C) A backpack has been set on the ground.</div><div class="script-opt">(D) One of the men is reaching into a bucket.</div></div>
  <div class="script-question"><span class="script-speaker">5. M-Cn</span><div class="script-opt correct-pink">(A) Painting supplies have been laid out on the floor.</div><div class="script-opt">(B) He's laying a brush down on a window sill.</div><div class="script-opt">(C) He's lifting a can of paint by its handle.</div><div class="script-opt">(D) Cans of paint have been placed on a step stool.</div></div>
  <div class="script-question"><span class="script-speaker">6. M-Au</span><div class="script-opt">(A) A path is covered with fallen branches.</div><div class="script-opt">(B) A tree is lying across a grassy area.</div><div class="script-opt correct-pink">(C) Some water has pooled on a path.</div><div class="script-opt">(D) Some cyclists are riding through a field.</div></div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question"><span class="script-speaker">7. W-Am: Where is the conference being held?</span><div class="script-opt">(A) A three-day vacation.</div><div class="script-opt correct-pink">(B) At the Riverview Hotel.</div><div class="script-opt">(C) In the supply cabinet.</div></div>
  <div class="script-question"><span class="script-speaker">8. M-Cn: When does the warehouse manager arrive?</span><div class="script-opt">(A) Sure, no problem.</div><div class="script-opt">(B) About 12 shipping boxes.</div><div class="script-opt correct-pink">(C) Not until this afternoon.</div></div>
  <div class="script-question"><span class="script-speaker">9. M-Au: There's a nice park nearby, right?</span><div class="script-opt">(A) Did you order paper for the copier?</div><div class="script-opt correct-pink">(B) Yes, it's next to Greendale Lake.</div><div class="script-opt">(C) They're in the parking garage.</div></div>
  <div class="script-question"><span class="script-speaker">10. W-Br: Who sent the meeting minutes to the accounting department?</span><div class="script-opt correct-pink">(A) Our office assistant.</div><div class="script-opt">(B) They have a savings account.</div><div class="script-opt">(C) Cash and credit cards.</div></div>
  <div class="script-question"><span class="script-speaker">11. W-Am: I'd like to know what you think of our new finance analyst.</span><div class="script-opt">(A) I've prepared the decorations for tomorrow.</div><div class="script-opt correct-pink">(B) He seems very competent.</div><div class="script-opt">(C) It's finally stopped raining.</div></div>
  <div class="script-question"><span class="script-speaker">12. W-Br: Let's go on the company retreat.</span><div class="script-opt">(A) Oh, did he?</div><div class="script-opt correct-pink">(B) Yes, that's a good idea.</div><div class="script-opt">(C) He tried to solve that problem.</div></div>
  <div class="script-question"><span class="script-speaker">13. M-Cn: What time can I pick up my glasses?</span><div class="script-opt">(A) No, it's not very heavy.</div><div class="script-opt">(B) About 20 meters.</div><div class="script-opt correct-pink">(C) We close at 6:00.</div></div>
  <div class="script-question"><span class="script-speaker">14. M-Au: The sales team knows how to use the tracking software, don't they?</span><div class="script-opt">(A) It's on the lower shelf.</div><div class="script-opt">(B) A 12:30 departure.</div><div class="script-opt correct-pink">(C) I haven't seen them using it yet.</div></div>
  <div class="script-question"><span class="script-speaker">15. W-Br: Are you going to the hardware store on Mill Street?</span><div class="script-opt correct-pink">(A) That store hasn't opened yet.</div><div class="script-opt">(B) The blue package you sent me.</div><div class="script-opt">(C) Some nails and a hammer.</div></div>
  <div class="script-question"><span class="script-speaker">16. M-Cn: Would you be able to write the introduction for the workshop?</span><div class="script-opt">(A) That was a great book.</div><div class="script-opt correct-pink">(B) Okay, I'd be happy to.</div><div class="script-opt">(C) He doesn't have any more.</div></div>
  <div class="script-question"><span class="script-speaker">17. W-Br: I picked up some flowers for Tunji's retirement party.</span><div class="script-opt">(A) No, pick any day.</div><div class="script-opt correct-pink">(B) That was thoughtful.</div><div class="script-opt">(C) A delivery driver.</div></div>
  <div class="script-question"><span class="script-speaker">18. W-Br: Which meeting room did you tell the interns to go to?</span><div class="script-opt correct-pink">(A) The Jefferson room.</div><div class="script-opt">(B) The meeting was fun, thanks.</div><div class="script-opt">(C) Yes, it's a conference call.</div></div>
  <div class="script-question"><span class="script-speaker">19. W-Am: Is your dental appointment next Tuesday?</span><div class="script-opt">(A) You can borrow mine.</div><div class="script-opt correct-pink">(B) I'll have to check my calendar.</div><div class="script-opt">(C) Yes, it was a good meeting.</div></div>
  <div class="script-question"><span class="script-speaker">20. M-Cn: Why aren't there any brochures in the lobby?</span><div class="script-opt">(A) No, I haven't received my confirmation email yet.</div><div class="script-opt">(B) My winter coat.</div><div class="script-opt correct-pink">(C) Because someone just took the last one.</div></div>
  <div class="script-question"><span class="script-speaker">21. W-Br: What's the process for submitting my expense report?</span><div class="script-opt correct-pink">(A) You send it to the finance department.</div><div class="script-opt">(B) The end of the day.</div><div class="script-opt">(C) That's correct.</div></div>
  <div class="script-question"><span class="script-speaker">22. M-Cn: Do you sell your products online or in stores?</span><div class="script-opt">(A) About 20% off.</div><div class="script-opt">(B) A product demonstration.</div><div class="script-opt correct-pink">(C) Only online.</div></div>
  <div class="script-question"><span class="script-speaker">23. M-Au: How often do you charge this device?</span><div class="script-opt correct-pink">(A) Whenever the light turns red.</div><div class="script-opt">(B) A wireless one.</div><div class="script-opt">(C) At the hardware store.</div></div>
  <div class="script-question"><span class="script-speaker">24. W-Br: The tickets to Friday night's concert cost $10 each.</span><div class="script-opt correct-pink">(A) Actually, they're 15.</div><div class="script-opt">(B) No, I can't play the guitar.</div><div class="script-opt">(C) It's in aisle 5.</div></div>
  <div class="script-question"><span class="script-speaker">25. M-Cn: Can't you update the database today?</span><div class="script-opt correct-pink">(A) I did it yesterday.</div><div class="script-opt">(B) That's an interesting movie.</div><div class="script-opt">(C) No, just me.</div></div>
  <div class="script-question"><span class="script-speaker">26. W-Am: How are we going to fit the extra supplies in that closet?</span><div class="script-opt">(A) I've already read them.</div><div class="script-opt correct-pink">(B) Natalie's in charge of supplies.</div><div class="script-opt">(C) It's the door at the end of the hallway.</div></div>
  <div class="script-question"><span class="script-speaker">27. W-Br: Have all the new windows been installed?</span><div class="script-opt">(A) Sure, I'll close the blinds.</div><div class="script-opt correct-pink">(B) The construction crew is almost finished.</div><div class="script-opt">(C) This isn't the tallest ladder available.</div></div>
  <div class="script-question"><span class="script-speaker">28. W-Br: Would you rather go to lunch now or at noon?</span><div class="script-opt correct-pink">(A) I'm taking a client to lunch.</div><div class="script-opt">(B) On the corner of 4th and Main.</div><div class="script-opt">(C) The daily special is soup and a sandwich.</div></div>
  <div class="script-question"><span class="script-speaker">29. M-Cn: You're taking the training in the afternoon, aren't you?</span><div class="script-opt">(A) The new head of the accounting department.</div><div class="script-opt">(B) No, I take my coffee black.</div><div class="script-opt correct-pink">(C) Well, it depends on my schedule.</div></div>
  <div class="script-question"><span class="script-speaker">30. W-Br: Shouldn't Ms. Ishida look over the financial projections?</span><div class="script-opt">(A) I just got this monitor.</div><div class="script-opt">(B) To the south entrance.</div><div class="script-opt correct-pink">(C) I'm meeting with her at 10.</div></div>
  <div class="script-question"><span class="script-speaker">31. W-Br: When are you going to choose a new project manager?</span><div class="script-opt">(A) The projector's not working correctly.</div><div class="script-opt">(B) Next to the front entrance.</div><div class="script-opt correct-pink">(C) I'm really busy this week.</div></div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue"><b>[Questions 32 - 34]</b><br><b>W-Am:</b> Hey Oliver, did you see the focus group results for our new spicy cheddar cheese? Everyone really liked it.<br><b>M-Cn:</b> Yes, it should be a great addition to our company's line of cheeses.<br><b>W-Am:</b> Several people mentioned that they'd like to use it in recipes, to add to sauces for example.<br><b>M-Cn:</b> So maybe we should consider selling a shredded version that would melt easily when cooked.<br><b>W-Am:</b> I'm sure we could do that. I'll get in touch with the production manager with that request.</div>
  <div class="script-dialogue"><b>[Questions 35 - 37]</b><br><b>M-Au:</b> Hi, I'm calling to book three tickets for this Thursday's tennis match. Are there any seats left?<br><b>W-Br:</b> Just a few. Tickets for Thursday's match have been selling quickly.<br><b>M-Au:</b> I'm not surprised. After all, Ife Ratimi won the regional championship tournament last month. Everyone wants to see her play after her incredible performance. What seats are available?<br><b>W-Br:</b> Well, there's only one group of three seats together. Advance payment is required to hold them.</div>
  <div class="script-dialogue"><b>[Questions 38 - 40]</b><br><b>W-Br:</b> Thanks for agreeing to help me organize the library's annual fundraising dinner, Klaus. We hope the event brings in enough money to expand our children's book section.<br><b>M-Cn:</b> What task would you like me to start with?<br><b>W-Br:</b> Well, I could use some help sending out the invitations.<br><b>M-Cn:</b> Okay, I can take care of that. Is there a list of attendees available?<br><b>W-Br:</b> It's in my computer files. I'll email it to you.</div>
  <div class="script-dialogue"><b>[Questions 41 - 43]</b><br><b>W-Br:</b> Hey Brian and Matteo, I found some great pens to give away at the community festival to promote our business.<br><b>M1:</b> Great, can we put our cleaning service logo on them?<br><b>W-Br:</b> Yes, for no extra charge. And they're biodegradable, they're made from paper.<br><b>M2:</b> So when we hand them out, we can mention that.<br><b>M1:</b> As well as talk about the organic cleaning supplies our company uses.<br><b>W-Br:</b> Okay, I'll go ahead and order several cases.</div>
  <div class="script-dialogue"><b>[Questions 44 - 46]</b><br><b>W-Br:</b> Jamestown recycling facility. How can I help you?<br><b>M-Au:</b> Hi, I'm preparing to move soon and I have some electronics such as televisions and computers that I'd like to get rid of before I put my house on the market. My friend mentioned you might take them.<br><b>W-Br:</b> Yes, that's right. We'll take all electronics.<br><b>M-Au:</b> Great. I just have one question. Do you provide a pickup service?<br><b>W-Br:</b> No, unfortunately you'll have to bring everything here yourself. However, on our website we list a number of companies that can remove and dispose of the items for you.</div>
  <div class="script-dialogue"><b>[Questions 47 - 49]</b><br><b>M-Cn:</b> Zaynah, what a surprise! I haven't seen you since we took that class for business owners together last year. How are you?<br><b>W-Am:</b> Great, thanks. I was just in the neighborhood and thought I'd stop in for a cookie or a piece of cake. You have so many delicious baked goods here.<br><b>M-Cn:</b> Thank you. It's been a good year for business. I'm even considering opening a second location.<br><b>W-Am:</b> Really? Well, I noticed that Sunnyvale Restaurant went out of business and the building's up for lease. It's very close to the local university. You'd probably get a lot of walk-in customers.</div>
  <div class="script-dialogue"><b>[Questions 50 - 52]</b><br><b>W-Br:</b> Hi, Koji. I think our new video game is nearly ready to be released. Are you aware of any improvements that need to be made before then?<br><b>M-Au:</b> Actually, I just finished testing the game this morning. I found a problem in the third stage of the game. There were a few times when my character couldn't move.<br><b>W-Br:</b> Oh, that's strange.<br><b>M-Au:</b> I double-checked the problem using a different controller. The same issue came up.<br><b>W-Br:</b> Oh, I think Pauline had a similar problem with a game she tested. Maybe you should ask her about it.</div>
  <div class="script-dialogue"><b>[Questions 53 - 55]</b><br><b>M-Au:</b> You've reached the maintenance office at Hillview Apartment Complex.<br><b>W-Am:</b> Hi, this is Pallavi Sen from unit 35B. I'm calling because the new thermostat in my apartment isn't working. It keeps shutting off and turning on randomly, so my apartment is getting cold.<br><b>M-Au:</b> When did this issue start?<br><b>W-Am:</b> A few hours ago. The thermostat was just installed yesterday.<br><b>M-Au:</b> Okay, I can come and take a look at it tomorrow morning.<br><b>W-Am:</b> But it's supposed to be below freezing tonight!</div>
  <div class="script-dialogue"><b>[Questions 56 - 58]</b><br><b>W-Br:</b> Good morning. Welcome to Jasper Bank.<br><b>M1:</b> Thanks for meeting with us to discuss a loan for our business.<br><b>W-Br:</b> Why don't you tell me more about your business? I understand it's a repair shop?<br><b>M2:</b> Well, 10 years ago we opened as a snowmobile repair shop, but after a few years we also started renting out snowmobiles and other sports equipment.<br><b>M1:</b> Yes, and because winter tourism has increased recently, we'd like to expand our space so that we can carry more inventory.</div>
  <div class="script-dialogue"><b>[Questions 59 - 61]</b><br><b>M-Au:</b> Many of our factory workers have expressed interest in upgrading their skills. I'd like to implement a peer-training program, where learners shadow more experienced employees and observe how they do their jobs.<br><b>W-Am:</b> I'm afraid that might become a burden for our longtime employees. They'll have to slow down their work to explain what they're doing.<br><b>M-Au:</b> What if we videotaped experienced employees doing specific tasks? High-quality video can be recorded and edited with a smartphone.<br><b>W-Am:</b> I like that idea. It would allow us to capture our workers' expertise without slowing down the production line.</div>
  <div class="script-dialogue"><b>[Questions 62 - 64]</b><br><b>W-Am:</b> Hi Suresh, I'm at the airport waiting for my flight. I want to meet with a potential investor while I'm in Chicago. Her name's Marta Gomez. I can send you her contact information.<br><b>M-Cn:</b> Okay, which day would you prefer to meet with her?<br><b>W-Am:</b> How about right after my meeting with the Chicago staff?<br><b>M-Cn:</b> Okay. By the way, did you see that our company won an award for our contributions to the community? It was just announced this morning.</div>
  <div class="script-dialogue"><b>[Questions 65 - 67]</b><br><b>M-Au:</b> Marion, we keep getting calls from people who want to visit the botanical garden but can't find parking information. Isn't it on our website?<br><b>W-Br:</b> It is, but you have to click on the "About Us" page and scroll to the bottom of that page. Maybe people don't see it.<br><b>M-Au:</b> Oh, I think we should move that information from the "About Us" page and make a separate page for directions and parking information. That way, people can find it more easily.<br><b>W-Br:</b> I'd be happy to make that change, but we're in the middle of updating our software, so it'll have to wait until Monday.</div>
  <div class="script-dialogue"><b>[Questions 68 - 70]</b><br><b>M-Au:</b> Good news, we have finally received the go-ahead for our department's project to install bicycle racks at the train station downtown.<br><b>W-Am:</b> At last! So now we need to decide where to place the racks. How about by the station entrance?<br><b>M-Au:</b> Hmm, if we ask riders, I bet they'd say that the most convenient spot is as close to the platform as possible.<br><b>W-Am:</b> Let's do that. I'll contact some companies for estimates.</div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue"><b>[Questions 71 - 73]</b><br><b>W-Br:</b> You've reached Select Repair Service. We specialize in all makes and models of automobiles. Our factory-trained specialists will keep your vehicle running in top condition. As an added benefit, we offer extended warranties on all vehicles we service. You can enjoy three extra years of worry-free driving. Please note that Select Repair Service will be closing on Friday, June 30th, so we can complete our quarterly inventory of supplies. Thank you for your patience. A representative will be with you shortly.</div>
  <div class="script-dialogue"><b>[Questions 74 - 76]</b><br><b>M-Au:</b> Welcome, new employees. My name is Diego, and I facilitate all orientation sessions. Before we start today, you will need to set up your employee account. If you look at the first page of your training binder, you'll see your username and a temporary password. Please open the laptops you were given this morning and log in using those credentials. You will then be prompted to create your own password. Once that's complete, you'll have access to all your department's files. Please note that you can only access them from your company computer.</div>
  <div class="script-dialogue"><b>[Questions 77 - 79]</b><br><b>W-Br:</b> Hello, this is Heather Ross calling from Denville Amusement Park. About a month ago, I ordered one of your new video game machines, Space Defenders. I'm really happy with my purchase, since the game has been incredibly popular with our park guests. I'm considering buying some additional machines in the near future. I heard you may be releasing a new game soon. Could you call me back and let me know if that's true? Thanks.</div>
  <div class="script-dialogue"><b>[Questions 80 - 82]</b><br><b>W-Am:</b> The first agenda item for our board meeting is the annual sales report. We're all disappointed by the drop in our clothing sales. The decline is mostly due to distribution issues. Because our factories are all overseas, it takes too long for orders to reach customers. So I'm recommending that we start manufacturing some clothing locally. We'll be looking for a location to build a manufacturing facility. I hired a consultant to put together a list of locations we could use. He'll be at our next board meeting to explain the pros and cons of each.</div>
  <div class="script-dialogue"><b>[Questions 83 - 85]</b><br><b>M-Cn:</b> Attention passengers: All trains to Midway Station are delayed for track repairs. Repair crews are working on a stretch of track just south of the town of Weadon. They expect to complete the repair within the hour. We apologize for the delay. We understand that many commuters need to get to Midway as soon as possible. A bus will be departing for that destination in 15 minutes. Also, a reminder that the station café opens at 8:00 AM, and there are food kiosks on platform 1.</div>
  <div class="script-dialogue"><b>[Questions 86 - 88]</b><br><b>W-Br:</b> I'm calling about the work my design team is doing to update your company logo. I've just emailed two versions for you to review. The first is a modern design with bold colors and simple lettering. The second image reflects the history of your brand and its logo. It's less trendy, but it doesn't depart much from the original, which you may prefer. Take your time to think about which one you'd like to choose. I'll be on vacation all next week, but if you call the office, my assistant will set up a meeting for when I get back.</div>
  <div class="script-dialogue"><b>[Questions 89 - 91]</b><br><b>W-Am:</b> After the transportation agency released the draft of our improvement plan last week, members of the press asked if we're considering installing more fuel-efficient engines in our trains. I've scheduled this press conference to officially respond to your inquiries. 18 months ago, we hired a firm to determine if this upgrade would be feasible for our trains. It reported that the upgrade would be economical only for relatively new trains—that is, those less than five years old. All of ours are at least 10 years old. I hope this addresses your questions. If you're interested in more details, email our media relations department to receive a summary of the findings.</div>
  <div class="script-dialogue"><b>[Questions 92 - 94]</b><br><b>M-Cn:</b> As regional sales manager, I want to explore the use of a more modernized payment system in our cosmetics stores. This system would allow any sales associate to take customer payments from a tablet anywhere in the store. Why should we do this? The main complaint about shopping at our stores is waiting in long lines to pay. A lot of our stores could benefit from this, but I've decided to conduct a trial run at our store in the Center City Mall. By far, that's our busiest location.</div>
  <div class="script-dialogue"><b>[Questions 95 - 97]</b><br><b>W-Br:</b> In local news, the downtown Reston Office Tower is completed. The most extraordinary feature of the building is its beautiful garden, located in the lobby. Reston's management office has confirmed the tenant list for the building, and we interviewed the CEO of Barnum Financial Services about its new offices. He said he and his team are excited to move in in January. A recording of the full interview with the CEO is available on our website.</div>
  <div class="script-dialogue"><b>[Questions 98 - 100]</b><br><b>M-Au:</b> Good morning, and thank you for attending this meeting for prospective investors. ZZ Mining has been planning to expand our operations by opening an additional silver mine. Let me show you the laboratory analysis of our exploratory drilling. On the screen, you can see information about the ore extracted from different sites. The highest-grade site had 410 grams of silver per ton of ore. However, the site with 390 grams per ton has a larger deposit, so that's where we'll build the new mine. Our next step is to apply for the necessary permits. We'll do that next week.</div>
`;

// 4. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 1
window.TOEIC_EXPLANATIONS[1] = {
  101: "💡 <b>Đáp án (B) after:</b> Giới từ chỉ thời gian 'after which' (sau đó) diễn tả người tham dự có thể đặt câu hỏi sau khi bài thuyết trình kết thúc lúc 6:00 P.M.",
  102: "💡 <b>Đáp án (A) last:</b> Tính từ 'last' mang nghĩa 'cửa hàng đồ cổ cuối cùng' tại Pepper Valley.",
  103: "💡 <b>Đáp án (A) update:</b> Cụm danh từ 'status update' mang nghĩa bản cập nhật tình trạng tiến độ thi công cầu.",
  104: "💡 <b>Đáp án (B) her:</b> Tính từ sở hữu 'her' đứng trước cụm danh từ 'many years leading media organizations'.",
  105: "💡 <b>Đáp án (B) spread:</b> Danh từ 'spread' (sự lây lan, phát tán của virus máy tính).",
  106: "💡 <b>Đáp án (C) carefully:</b> Trạng từ 'carefully' (một cách cẩn thận) bổ nghĩa cho động từ 'considered'.",
  107: "💡 <b>Đáp án (C) and:</b> Liên từ 'and' dùng để nối hai vế mệnh đề vị ngữ cùng chủ ngữ 'Mr. Sakamoto'.",
  108: "💡 <b>Đáp án (D) line:</b> Cụm danh từ ghép 'product line' (dòng sản phẩm thuốc không kê đơn).",
  109: "💡 <b>Đáp án (A) seeks:</b> Chủ ngữ số ít 'Dynart, Inc.' đi với động từ chia thì hiện tại đơn 'seeks' (tìm kiếm các phương thức mới).",
  110: "💡 <b>Đáp án (A) calculate:</b> Động từ chính 'calculate' (tính toán lượng sách tồn kho còn lại).",
  111: "💡 <b>Đáp án (C) precisely:</b> Trạng từ 'precisely' (một cách chính xác) bổ nghĩa cho động từ 'locate' (định vị khoáng sản ngầm).",
  112: "💡 <b>Đáp án (C) financially:</b> Trạng từ 'financially' bổ nghĩa cho tính từ 'responsible' (có trách nhiệm về mặt tài chính).",
  113: "💡 <b>Đáp án (A) certainty:</b> Cụm giới từ 'with any certainty' (với bất kỳ sự chắc chắn nào).",
  114: "💡 <b>Đáp án (C) actively:</b> Trạng từ 'actively' (một cách tích cực) bổ nghĩa cho 'soliciting feedback' (tích cực thu thập ý kiến phản hồi).",
  115: "💡 <b>Đáp án (C) absorb:</b> Động từ 'absorb' (thấm hút, hấp thụ nước để ngăn ngập lụt đường sá).",
  116: "💡 <b>Đáp án (D) productivity:</b> Sau mạo từ 'the' cần danh từ 'productivity' (năng suất của các hệ thống sản xuất).",
  117: "💡 <b>Đáp án (A) in:</b> Cụm cố định 'role in doing something' (vai trò trong việc giành được hợp đồng quốc tế).",
  118: "💡 <b>Đáp án (D) so that:</b> Liên từ chỉ mục đích 'so that' (để dự án có thể được xúc tiến triển khai).",
  119: "💡 <b>Đáp án (C) compensate:</b> Cụm động từ 'compensate for' (bù đắp cho việc thiếu kinh nghiệm làm việc).",
  120: "💡 <b>Đáp án (B) neither:</b> Đại từ chỉ định 'neither' (không ai trong hai người nhận được công việc).",
  121: "💡 <b>Đáp án (D) despite:</b> Giới từ 'despite' đi với cụm danh từ 'the high cost' (mặc dù chi phí cao).",
  122: "💡 <b>Đáp án (C) sell:</b> Cấu trúc 'wish to do something' (cư dân muốn bán nhà).",
  123: "💡 <b>Đáp án (B) cooperative:</b> Cụm danh từ 'cooperative agreement' (thỏa thuận hợp tác đôi bên cùng có lợi).",
  124: "💡 <b>Đáp án (C) restrictions:</b> Danh từ số nhiều 'parking restrictions' (các quy định hạn chế đỗ xe mới).",
  125: "💡 <b>Đáp án (A) diligently:</b> Trạng từ 'diligently' (một cách chăm chỉ, siêng năng) bổ nghĩa cho động từ 'studied'.",
  126: "💡 <b>Đáp án (A) assurance:</b> Sau tính từ 'fixed' cần danh từ 'assurance' (sự đảm bảo cố định không tăng giá cước).",
  127: "💡 <b>Đáp án (D) dedication:</b> Cụm từ 'with great dedication' (với sự cống hiến to lớn trong suốt hơn 20 năm).",
  128: "💡 <b>Đáp án (D) rather than:</b> Cụm từ mang nghĩa 'thay vì' (phục vụ cả tuần thay vì chỉ vào các ngày trong tuần).",
  129: "💡 <b>Đáp án (D) commercial:</b> Cụm danh từ 'commercial supplier' (nhà cung cấp thương mại gần đó).",
  130: "💡 <b>Đáp án (D) diagnose:</b> Động từ nguyên thể chỉ mục đích sau cấu trúc 'determine/diagnose what repairs are needed'.",
  131: "💡 <b>Đáp án (D):</b> 'Riessler Landscaping's goal is to make your vision a reality' phù hợp với ý câu trước về việc lắng nghe mong muốn làm vườn của bạn.",
  132: "💡 <b>Đáp án (C) beauty:</b> Danh từ 'beauty' (thêm vẻ đẹp rực rỡ cho khu vườn của bạn).",
  133: "💡 <b>Đáp án (A) also:</b> Trạng từ liên kết 'also' (cũng được trang bị để xây dựng hồ cá hoặc cảnh quan nước).",
  134: "💡 <b>Đáp án (B) our:</b> Tính từ sở hữu 'our expertise' (chuyên môn hơn 40 năm của chúng tôi).",
  135: "💡 <b>Đáp án (D):</b> 'You have been a valuable member of our team' nối tiếp câu chúc mừng kỷ niệm 30 năm làm việc.",
  136: "💡 <b>Đáp án (C) have shown:</b> Thì hiện tại hoàn thành diễn tả chuỗi đóng góp xuyên suốt 'Over the years, you have shown...'.",
  137: "💡 <b>Đáp án (B) soon:</b> Trạng từ chỉ thời gian 'soon' (bạn sẽ sớm nhận được kỷ niệm chương qua đường bưu điện).",
  138: "💡 <b>Đáp án (A) milestone:</b> Cụm từ 'reaching this milestone' (chạm tới cột mốc sự nghiệp đáng nhớ này).",
  139: "💡 <b>Đáp án (A) finalizing:</b> Cấu trúc 'in the process of + V-ing' (trong quá trình hoàn thiện các bản kế hoạch).",
  140: "💡 <b>Đáp án (C) colors:</b> Từ câu trước nhắc đến việc chọn sơn tường khác nhau nên câu sau là 'new colors' (màu sắc mới).",
  141: "💡 <b>Đáp án (B):</b> 'We are not planning to begin work for another two weeks' giải thích lý do tại sao khách hàng vẫn kịp đổi màu sơn.",
  142: "💡 <b>Đáp án (D) me:</b> Cụm câu giao tiếp quen thuộc 'Please let me know' (Hãy cho tôi biết nếu có thắc mắc).",
  143: "💡 <b>Đáp án (C) satisfactory:</b> Cấu trúc 'find something + Adj': 'found our services satisfactory' (thấy dịch vụ của chúng tôi thỏa đáng).",
  144: "💡 <b>Đáp án (C) summary:</b> Cụm danh từ 'posted a summary of your consultation' (đăng tải bản tóm tắt buổi khám).",
  145: "💡 <b>Đáp án (B) For instance:</b> Cụm liên từ nêu ví dụ 'For instance, you can make appointments...' (Chẳng hạn như, bạn có thể đặt lịch hẹn...).",
  146: "💡 <b>Đáp án (A):</b> 'We hope you will use this resource to manage your health-care needs' chốt lại lợi ích của cổng thông tin y tế.",
  147: "💡 <b>Đáp án (C):</b> Thông báo gửi tới cư dân nhằm thông báo về dự án rải lại nhựa đường bãi đỗ xe sắp tới.",
  148: "💡 <b>Đáp án (D):</b> Chi tiết 'if your parking space is moved...' cho thấy các căn hộ thuê được chỉ định vị trí đỗ xe cụ thể.",
  149: "💡 <b>Đáp án (B):</b> Bà Seang giảng dạy lớp ghép mảnh khảm thủy tinh nghệ thuật (mosaic workshop) -> Giáo viên mỹ thuật.",
  150: "💡 <b>Đáp án (C):</b> Khi nói 'I have plenty to go around', bà Seang khẳng định mình có đủ nguyên liệu thủy tinh biển cho toàn bộ 15 học viên.",
  151: "💡 <b>Đáp án (D):</b> Email thông báo anh Norton sẽ chuyển công tác tới trụ sở chính tại Kingston vào tháng tới.",
  152: "💡 <b>Đáp án (C):</b> Quản lý yêu cầu thành viên đội ngũ xác nhận xem có thể tham dự tiệc trưa chia tay trước ngày 12/10 hay không.",
  153: "💡 <b>Đáp án (B):</b> Bài báo đưa tin nhà hát Crown Coastal chuẩn bị mở cửa trở lại sau hơn một năm đóng cửa nâng cấp.",
  154: "💡 <b>Đáp án (C):</b> Bài báo nhắc đến 'The friends, who also own the popular Blue Bay Bistro', chỉ Morgan Flanagan và Christine Lafferty là đối tác kinh doanh cùng mua lại rạp.",
  155: "💡 <b>Đáp án (D):</b> Kính thiên văn khách đặt bị hết hàng (back order), nên email gợi ý một mẫu kính tương đương của hãng khác để thay thế.",
  156: "💡 <b>Đáp án (C):</b> Bức thư ghi rõ: 'all Belter telescopes include a padded carrying case' (bao gồm túi đựng có đệm bảo vệ).",
  157: "💡 <b>Đáp án (B):</b> Vị trí [2] nằm ngay sau câu mô tả thông số kỹ thuật khẩu độ và nắp kính của mẫu Belter BTR-1483.",
  158: "💡 <b>Đáp án (D):</b> Mục đích email tự động thông báo người gửi đang đi nghỉ mát và vắng mặt tại văn phòng cho đến ngày 15/3.",
  159: "💡 <b>Đáp án (B):</b> Đoạn cuối thông báo phần mềm đồ họa mới sẽ được phát hành/ra mắt vào ngày 2 tháng 4.",
  160: "💡 <b>Đáp án (C):</b> Người dùng có thể đăng ký nhận bản tin hàng tuần tại trang web mới của Hamerkoptech theo chỉ dẫn trên trang chủ.",
  161: "💡 <b>Đáp án (C):</b> Bài báo thông báo tập đoàn Vimalo Brands chuẩn bị tung ra dòng thực phẩm đông lạnh hoàn toàn mới (Nutridinna).",
  162: "💡 <b>Đáp án (D):</b> Cụm 'not just about convenience' mang nghĩa không đơn thuần/không chỉ vì sự tiện lợi -> 'just' tương đương với **only**.",
  163: "💡 <b>Đáp án (B):</b> Giám đốc khẳng định phương pháp cấp đông nhanh giúp thực phẩm giữ nguyên kết cấu, hương vị và vitamin, đảm bảo dinh dưỡng như đồ tươi.",
  164: "💡 <b>Đáp án (B):</b> Đoạn 2 giới thiệu bà Shirin Navani là CEO kiêm người sáng lập công ty thiết kế (business owner).",
  165: "💡 <b>Đáp án (B):</b> Công ty khởi đầu cách đây 10 năm chỉ với quy mô 2 nhân sự tại nhà riêng của người sáng lập.",
  166: "💡 <b>Đáp án (A):</b> Tiêu chí tuyển dụng yêu cầu: 'Demonstrates a strong ability to work closely with colleagues' (Kỹ năng làm việc nhóm với đồng nghiệp).",
  167: "💡 <b>Đáp án (B):</b> Câu cuối thông báo hạn chót nhận hồ sơ ứng tuyển là ngày 31 tháng 3 (A deadline will occur).",
  168: "💡 <b>Đáp án (C):</b> Nhà hàng phải tạm đóng cửa 3 tháng qua do sự cố rò rỉ nước gây hư hỏng nặng khu vực bếp và khu ăn uống.",
  169: "💡 <b>Đáp án (B):</b> Chủ quán Tom Marco đã luân chuyển tạm thời nhân viên nhà hàng sang làm việc tại chợ Marco's Italian Market ngay trước mùa cao điểm.",
  170: "💡 <b>Đáp án (B):</b> Sự kiện khai trương lại vào ngày 25/6 sẽ giới thiệu ban nhạc biểu diễn trực tiếp và thực đơn nếm thử món mới (new tasting menu).",
  171: "💡 <b>Đáp án (A):</b> Vị trí [1] hợp lý nhất vì nối tiếp câu trước nói về công việc sửa chữa phòng ăn và mở rộng phục vụ các đoàn khách đông người hơn.",
  172: "💡 <b>Đáp án (D):</b> Bà Barry nhắn tin để hỏi rõ lại yêu cầu xem ông Kubelski cần danh sách toàn bộ người dùng hay chỉ nhóm độ tuổi cụ thể.",
  173: "💡 <b>Đáp án (A):</b> Ông Kubelski xác nhận chỉ cần danh sách khách hàng trong độ tuổi từ 55 đến 65 để mời dự hội thảo hưu trí.",
  174: "💡 <b>Đáp án (B):</b> Cô Choi đề xuất: 'We can update your current request form for you' (cập nhật chỉnh sửa trực tiếp trên biểu mẫu yêu cầu hiện tại).",
  175: "💡 <b>Đáp án (C):</b> Khi nói 'There are several projects ahead of yours', bà Barry ngụ ý yêu cầu của ông Kubelski không thể được xử lý đầu tiên ngay lập tức.",
  176: "💡 <b>Đáp án (A):</b> Đoạn 1 nêu rõ các xe tải bán đồ ăn thường dựa vào phương thức truyền miệng (word of mouth) hoặc mạng xã hội.",
  177: "💡 <b>Đáp án (D):</b> Bài viết hướng dẫn thông tin về món ăn theo mùa và chương trình khuyến mãi nên đưa vào trang Tin tức (News page), không cần nằm ở trang chủ.",
  178: "💡 <b>Đáp án (C):</b> Ông Abruzzo là người tạo ra nguyên mẫu website cho doanh nghiệp xe đồ ăn -> Chuyên viên thiết kế web.",
  179: "💡 <b>Đáp án (D):</b> Thông tin khuyến mãi tặng món tráng miệng miễn phí từ giữa tháng 4 là tin khuyến mãi, theo bài báo sẽ thuộc trang Tin tức (News page).",
  180: "💡 <b>Đáp án (C):</b> Email ghi rõ website sẽ được ra mắt chính thức vào ngày 5 tháng 4 ('launch it as the official site on April 5').",
  181: "💡 <b>Đáp án (D):</b> Dự án Net Zero của Đại học Rilamore lắp đặt hệ thống giếng địa nhiệt để sưởi ấm và làm mát toàn bộ khuôn viên, giảm phụ thuộc vào nhiên liệu hóa thạch.",
  182: "💡 <b>Đáp án (D):</b> Từ 'conduct' trong cụm 'conduct test drilling' (tiến hành/thực hiện khoan thử nghiệm) đồng nghĩa với **carry out**.",
  183: "💡 <b>Đáp án (A):</b> Vị trí khoan nằm sát ngay bên cạnh khu thương mại Red Hills Business District và khu căn hộ Oak Street, chứng tỏ khu thương mại nằm sát cạnh khuôn viên trường.",
  184: "💡 <b>Đáp án (C):</b> Chuỗi hòa nhạc giờ ăn trưa diễn ra trên đường Oak Street vào các thứ Năm tháng 6, trùng với lịch khoan gây ồn của trường nên hiệp hội đã lùi lịch sang tháng 7.",
  185: "💡 <b>Đáp án (B):</b> Thông cáo báo chí nêu các nghệ nhân địa phương sẽ trưng bày và bán các tác phẩm nghệ thuật trên bãi cỏ của Trung tâm Văn hóa.",
  186: "💡 <b>Đáp án (B):</b> Quảng cáo liệt kê các dịch vụ làm mái nhà, bao gồm sửa chữa và phục hồi máng xối (gutter restoration).",
  187: "💡 <b>Đáp án (A):</b> Ông Gerson điền trên form rằng ngói bị bung và 'water has begun to drip through the section over the patio' (nước bắt đầu rỉ giọt -> mái bị dột).",
  188: "💡 <b>Đáp án (B):</b> Đơn yêu cầu gửi ngày 12/12 và bài đánh giá kể chuyên viên ước tính chi phí đã đến kiểm tra ngay ngày hôm sau ('the very next day' -> 13 tháng 12).",
  189: "💡 <b>Đáp án (A):</b> Bài đánh giá kể Diana Perez có mặt tại công trường suốt quá trình thi công đúng như cam kết quảng cáo về vị trí người giám sát dự án (project supervisor).",
  190: "💡 <b>Đáp án (D):</b> Đội thi công dùng thiết bị nam châm quét sạch đinh rụng trên bãi cỏ, một dụng cụ mà ông Gerson chưa từng thấy trước đây.",
  191: "💡 <b>Đáp án (D):</b> Darboury Company thiết kế các mẫu bìa minh họa cho sổ tay theo đặt hàng của hiệu sách Bun Bun Books -> Công ty thiết kế đồ họa.",
  192: "💡 <b>Đáp án (B):</b> Email của ông Balaji giải thích mẫu bìa 'World Suitcase' bị trễ do phải đổi màu nền đen ban đầu sang màu be sáng để nổi bật hình dán tem du lịch.",
  193: "💡 <b>Đáp án (B):</b> Ông Balaji nhắc khách hàng chỉ cần gửi duyệt toàn bộ các mẫu bìa trước ngày 11 tháng 6 ('by June 11') để kịp tiến độ giao hàng.",
  194: "💡 <b>Đáp án (A):</b> Mục cuối cùng trên đơn đặt hàng là mã D1: 'Large metal display rack' (kệ kim loại lớn dùng trưng bày sổ tay).",
  195: "💡 <b>Đáp án (A):</b> Mã N3-GT có tên thiết kế là 'Great Thoughts', đối chiếu bảng ở email đầu tiên thì mẫu bìa này có màu nền xanh dương (Blue).",
  196: "💡 <b>Đáp án (B):</b> Quản lý Charlotte Black gửi email kêu gọi các nhà quản lý bỏ phiếu bình chọn Nhân viên xuất sắc nhất tháng 9.",
  197: "💡 <b>Đáp án (A):</b> Nick Salehi phát hiện ra lỗi hệ thống máy tính ngăn chặn việc đặt hàng thừa thãi, giúp tiết kiệm chi phí cho công ty.",
  198: "💡 <b>Đáp án (D):</b> Khách hàng Henry Riggs chia sẻ ông rất hài lòng khi đích thân Tổng giám đốc (General Manager - tức bà Black) đồng ý bán xe bằng giá quảng cáo của đối thủ.",
  199: "💡 <b>Đáp án (C):</b> Thông báo vinh danh nhấn mạnh Erica đóng vai trò quan trọng trong việc khuyến khích khách hàng đánh giá trên mạng xã hội, mang lại lượng đánh giá tăng vọt.",
  200: "💡 <b>Đáp án (A):</b> Thể lệ nêu người chiến thắng phải nhận ít nhất 3 phiếu bầu, và Erica đã trở thành Nhân viên xuất sắc nhất tháng, chứng tỏ cô nhận được ít nhất 3 phiếu bầu."
};
