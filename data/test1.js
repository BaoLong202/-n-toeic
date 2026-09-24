window.TOEIC_KEYS = window.TOEIC_KEYS || {};
window.TOEIC_SCRIPTS = window.TOEIC_SCRIPTS || {};
window.TOEIC_EXPLANATIONS = window.TOEIC_EXPLANATIONS || {};

function parseKey(text) {
  const key = {};
  const re = /(\d{1,3})\s*[.\-:)]?\s*([A-Da-d])/g;
  let m;
  while ((m = re.exec(text)) !== null) key[parseInt(m[1], 10)] = m[2].toUpperCase();
  return key;
}

// 1. DÀN KEY 200 CÂU TEST 1
window.TOEIC_KEYS[1] = parseKey("1B 2D 3C 4A 5A 6C 7B 8C 9B 10A 11B 12B 13C 14C 15A 16B 17B 18A 19B 20C 21A 22C 23A 24A 25A 26B 27B 28A 29C 30C 31C 32B 33D 34B 35C 36A 37D 38A 39D 40A 41C 42D 43B 44C 45C 46A 47A 48D 49C 50C 51B 52A 53C 54A 55B 56B 57A 58C 59A 60C 61B 62C 63C 64D 65D 66A 67C 68B 69A 70C 71B 72C 73A 74B 75D 76A 77B 78D 79A 80D 81A 82B 83D 84A 85D 86A 87B 88C 89D 90B 91C 92B 93A 94D 95A 96C 97D 98D 99C 100A 101B 102A 103A 104B 105B 106C 107C 108D 109A 110A 111C 112C 113A 114C 115C 116D 117A 118D 119C 120B 121D 122C 123B 124C 125A 126D 127D 128D 129D 130B 131D 132C 133A 134B 135D 136C 137B 138A 139A 140C 141B 142D 143C 144C 145B 146A 147C 148D 149B 150C 151D 152C 153B 154C 155D 156C 157B 158D 159B 160C 161C 162D 163B 164B 165B 166A 167B 168C 169B 170B 171A 172D 173A 174B 175C 176A 177D 178C 179D 180C 181D 182D 183A 184C 185B 186B 187A 188B 189A 190D 191D 192B 193B 194A 195A 196B 197A 198D 199C 200A");

// 2. FULL TRANSCRIPT LISTENING TEST 1 (CHUẨN THEO FILE AUDIO)
window.TOEIC_SCRIPTS[1] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. W-Br</span>
    <div class="script-opt">(A) The woman is carrying a tray of food.</div>
    <div class="script-opt correct-pink">(B) The woman is wearing a jacket.</div>
    <div class="script-opt">(C) The woman is tying up her hair.</div>
    <div class="script-opt">(D) The woman is removing her hat.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Am</span>
    <div class="script-opt">(A) Some people are standing next to a filing cabinet.</div>
    <div class="script-opt">(B) Some people are searching through a desk.</div>
    <div class="script-opt">(C) Some people are watching a presentation.</div>
    <div class="script-opt correct-pink">(D) Some people are looking at a book.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Au</span>
    <div class="script-opt">(A) A woman is holding a phone up to her ear.</div>
    <div class="script-opt">(B) A woman is pouring a beverage into a glass.</div>
    <div class="script-opt correct-pink">(C) Some light fixtures are hanging from the ceiling.</div>
    <div class="script-opt">(D) Some tiles are being installed in a hallway.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. W-Am</span>
    <div class="script-opt correct-pink">(A) A wooden crate is filled with vegetables.</div>
    <div class="script-opt">(B) One of the men is putting vegetables into a shopping bag.</div>
    <div class="script-opt">(C) A backpack has been set on the ground.</div>
    <div class="script-opt">(D) One of the men is reaching into a bucket.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. M-Cn</span>
    <div class="script-opt correct-pink">(A) Painting supplies have been laid out on the floor.</div>
    <div class="script-opt">(B) He's laying a brush down on a window sill.</div>
    <div class="script-opt">(C) He's lifting a can of paint by its handle.</div>
    <div class="script-opt">(D) Cans of paint have been placed on a step stool.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. M-Au</span>
    <div class="script-opt">(A) A path is covered with fallen branches.</div>
    <div class="script-opt">(B) A tree is lying across a grassy area.</div>
    <div class="script-opt correct-pink">(C) Some water has pooled on a path.</div>
    <div class="script-opt">(D) Some cyclists are riding through a field.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. W-Am: Where is the conference being held?</span>
    <div class="script-opt">(A) A three-day vacation.</div>
    <div class="script-opt correct-pink">(B) At the Riverview Hotel.</div>
    <div class="script-opt">(C) In the supply cabinet.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. M-Cn: When does the warehouse manager arrive?</span>
    <div class="script-opt">(A) Sure, no problem.</div>
    <div class="script-opt">(B) About 12 shipping boxes.</div>
    <div class="script-opt correct-pink">(C) Not until this afternoon.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. M-Au: There's a nice park nearby, right?</span>
    <div class="script-opt">(A) Did you order paper for the copier?</div>
    <div class="script-opt correct-pink">(B) Yes, it's next to Greendale Lake.</div>
    <div class="script-opt">(C) They're in the parking garage.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Br: Who sent the meeting minutes to the accounting department?</span>
    <div class="script-opt correct-pink">(A) Our office assistant.</div>
    <div class="script-opt">(B) They have a savings account.</div>
    <div class="script-opt">(C) Cash and credit cards.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. W-Am: I'd like to know what you think of our new finance analyst.</span>
    <div class="script-opt">(A) I've prepared the decorations for tomorrow.</div>
    <div class="script-opt correct-pink">(B) He seems very competent.</div>
    <div class="script-opt">(C) It's finally stopped raining.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. W-Br: Let's go on the company retreat.</span>
    <div class="script-opt">(A) Oh, did he?</div>
    <div class="script-opt correct-pink">(B) Yes, that's a good idea.</div>
    <div class="script-opt">(C) He tried to solve that problem.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. M-Cn: What time can I pick up my glasses?</span>
    <div class="script-opt">(A) No, it's not very heavy.</div>
    <div class="script-opt">(B) About 20 meters.</div>
    <div class="script-opt correct-pink">(C) We close at 6:00.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Au: The sales team knows how to use the tracking software, don't they?</span>
    <div class="script-opt">(A) It's on the lower shelf.</div>
    <div class="script-opt">(B) A 12:30 departure.</div>
    <div class="script-opt correct-pink">(C) I haven't seen them using it yet.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. W-Br: Are you going to the hardware store on Mill Street?</span>
    <div class="script-opt correct-pink">(A) That store hasn't opened yet.</div>
    <div class="script-opt">(B) The blue package you sent me.</div>
    <div class="script-opt">(C) Some nails and a hammer.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Cn: Would you be able to write the introduction for the workshop?</span>
    <div class="script-opt">(A) That was a great book.</div>
    <div class="script-opt correct-pink">(B) Okay, I'd be happy to.</div>
    <div class="script-opt">(C) He doesn't have any more.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. W-Br: I picked up some flowers for Tunji's retirement party.</span>
    <div class="script-opt">(A) No, pick any day.</div>
    <div class="script-opt correct-pink">(B) That was thoughtful.</div>
    <div class="script-opt">(C) A delivery driver.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. W-Br: Which meeting room did you tell the interns to go to?</span>
    <div class="script-opt correct-pink">(A) The Jefferson room.</div>
    <div class="script-opt">(B) The meeting was fun, thanks.</div>
    <div class="script-opt">(C) Yes, it's a conference call.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Am: Is your dental appointment next Tuesday?</span>
    <div class="script-opt">(A) You can borrow mine.</div>
    <div class="script-opt correct-pink">(B) I'll have to check my calendar.</div>
    <div class="script-opt">(C) Yes, it was a good meeting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. M-Cn: Why aren't there any brochures in the lobby?</span>
    <div class="script-opt">(A) No, I haven't received my confirmation email yet.</div>
    <div class="script-opt">(B) My winter coat.</div>
    <div class="script-opt correct-pink">(C) Because someone just took the last one.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. W-Br: What's the process for submitting my expense report?</span>
    <div class="script-opt correct-pink">(A) You send it to the finance department.</div>
    <div class="script-opt">(B) The end of the day.</div>
    <div class="script-opt">(C) That's correct.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. M-Cn: Do you sell your products online or in stores?</span>
    <div class="script-opt">(A) About 20% off.</div>
    <div class="script-opt">(B) A product demonstration.</div>
    <div class="script-opt correct-pink">(C) Only online.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. M-Au: How often do you charge this device?</span>
    <div class="script-opt correct-pink">(A) Whenever the light turns red.</div>
    <div class="script-opt">(B) A wireless one.</div>
    <div class="script-opt">(C) At the hardware store.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. W-Br: The tickets to Friday night's concert cost $10 each.</span>
    <div class="script-opt correct-pink">(A) Actually, they're 15.</div>
    <div class="script-opt">(B) No, I can't play the guitar.</div>
    <div class="script-opt">(C) It's in aisle 5.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. M-Cn: Can't you update the database today?</span>
    <div class="script-opt correct-pink">(A) I did it yesterday.</div>
    <div class="script-opt">(B) That's an interesting movie.</div>
    <div class="script-opt">(C) No, just me.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. W-Am: How are we going to fit the extra supplies in that closet?</span>
    <div class="script-opt">(A) I've already read them.</div>
    <div class="script-opt correct-pink">(B) Natalie's in charge of supplies.</div>
    <div class="script-opt">(C) It's the door at the end of the hallway.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. W-Br: Have all the new windows been installed?</span>
    <div class="script-opt">(A) Sure, I'll close the blinds.</div>
    <div class="script-opt correct-pink">(B) The construction crew is almost finished.</div>
    <div class="script-opt">(C) This isn't the tallest ladder available.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. W-Br: Would you rather go to lunch now or at noon?</span>
    <div class="script-opt correct-pink">(A) I'm taking a client to lunch.</div>
    <div class="script-opt">(B) On the corner of 4th and Main.</div>
    <div class="script-opt">(C) The daily special is soup and a sandwich.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. M-Cn: You're taking the training in the afternoon, aren't you?</span>
    <div class="script-opt">(A) The new head of the accounting department.</div>
    <div class="script-opt">(B) No, I take my coffee black.</div>
    <div class="script-opt correct-pink">(C) Well, it depends on my schedule.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. W-Br: Shouldn't Ms. Ishida look over the financial projections?</span>
    <div class="script-opt">(A) I just got this monitor.</div>
    <div class="script-opt">(B) To the south entrance.</div>
    <div class="script-opt correct-pink">(C) I'm meeting with her at 10.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. W-Br: When are you going to choose a new project manager?</span>
    <div class="script-opt">(A) The projector's not working correctly.</div>
    <div class="script-opt">(B) Next to the front entrance.</div>
    <div class="script-opt correct-pink">(C) I'm really busy this week.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>W-Am:</b> Hey Oliver, did you see the focus group results for our new spicy cheddar cheese? Everyone really liked it.<br>
    <b>M-Cn:</b> Yes, it should be a great addition to our company's line of cheeses.<br>
    <b>W-Am:</b> Several people mentioned that they'd like to use it in recipes, to add to sauces for example.<br>
    <b>M-Cn:</b> So maybe we should consider selling a shredded version that would melt easily when cooked.<br>
    <b>W-Am:</b> I'm sure we could do that. I'll get in touch with the production manager with that request.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>M-Au:</b> Hi, I'm calling to book three tickets for this Thursday's tennis match. Are there any seats left?<br>
    <b>W-Br:</b> Just a few. Tickets for Thursday's match have been selling quickly.<br>
    <b>M-Au:</b> I'm not surprised. After all, Ife Ratimi won the regional championship tournament last month. Everyone wants to see her play after her incredible performance. What seats are available?<br>
    <b>W-Br:</b> Well, there's only one group of three seats together. Advance payment is required to hold them.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>W-Br:</b> Thanks for agreeing to help me organize the library's annual fundraising dinner, Klaus. We hope the event brings in enough money to expand our children's book section.<br>
    <b>M-Cn:</b> What task would you like me to start with?<br>
    <b>W-Br:</b> Well, I could use some help sending out the invitations.<br>
    <b>M-Cn:</b> Okay, I can take care of that. Is there a list of attendees available?<br>
    <b>W-Br:</b> It's in my computer files. I'll email it to you.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>W-Br:</b> Hey Brian and Matteo, I found some great pens to give away at the community festival to promote our business.<br>
    <b>M1:</b> Great, can we put our cleaning service logo on them?<br>
    <b>W-Br:</b> Yes, for no extra charge. And they're biodegradable, they're made from paper.<br>
    <b>M2:</b> So when we hand them out, we can mention that.<br>
    <b>M1:</b> As well as talk about the organic cleaning supplies our company uses.<br>
    <b>W-Br:</b> Okay, I'll go ahead and order several cases.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Br:</b> Jamestown recycling facility. How can I help you?<br>
    <b>M-Au:</b> Hi, I'm preparing to move soon and I have some electronics such as televisions and computers that I'd like to get rid of before I put my house on the market. My friend mentioned you might take them.<br>
    <b>W-Br:</b> Yes, that's right. We'll take all electronics.<br>
    <b>M-Au:</b> Great. I just have one question. Do you provide a pickup service?<br>
    <b>W-Br:</b> No, unfortunately you'll have to bring everything here yourself. However, on our website we list a number of companies that can remove and dispose of the items for you.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>M-Cn:</b> Zaynah, what a surprise! I haven't seen you since we took that class for business owners together last year. How are you?<br>
    <b>W-Am:</b> Great, thanks. I was just in the neighborhood and thought I'd stop in for a cookie or a piece of cake. You have so many delicious baked goods here.<br>
    <b>M-Cn:</b> Thank you. It's been a good year for business. I'm even considering opening a second location.<br>
    <b>W-Am:</b> Really? Well, I noticed that Sunnyvale Restaurant went out of business and the building's up for lease. It's very close to the local university. You'd probably get a lot of walk-in customers.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>W-Br:</b> Hi, Koji. I think our new video game is nearly ready to be released. Are you aware of any improvements that need to be made before then?<br>
    <b>M-Au:</b> Actually, I just finished testing the game this morning. I found a problem in the third stage of the game. There were a few times when my character couldn't move.<br>
    <b>W-Br:</b> Oh, that's strange.<br>
    <b>M-Au:</b> I double-checked the problem using a different controller. The same issue came up.<br>
    <b>W-Br:</b> Oh, I think Pauline had a similar problem with a game she tested. Maybe you should ask her about it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>M-Au:</b> You've reached the maintenance office at Hillview Apartment Complex.<br>
    <b>W-Am:</b> Hi, this is Pallavi Sen from unit 35B. I'm calling because the new thermostat in my apartment isn't working. It keeps shutting off and turning on randomly, so my apartment is getting cold.<br>
    <b>M-Au:</b> When did this issue start?<br>
    <b>W-Am:</b> A few hours ago. The thermostat was just installed yesterday.<br>
    <b>M-Au:</b> Okay, I can come and take a look at it tomorrow morning.<br>
    <b>W-Am:</b> But it's supposed to be below freezing tonight!
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W-Br:</b> Good morning. Welcome to Jasper Bank.<br>
    <b>M1:</b> Thanks for meeting with us to discuss a loan for our business.<br>
    <b>W-Br:</b> Why don't you tell me more about your business? I understand it's a repair shop?<br>
    <b>M2:</b> Well, 10 years ago we opened as a snowmobile repair shop, but after a few years we also started renting out snowmobiles and other sports equipment.<br>
    <b>M1:</b> Yes, and because winter tourism has increased recently, we'd like to expand our space so that we can carry more inventory.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>M-Au:</b> Many of our factory workers have expressed interest in upgrading their skills. I'd like to implement a peer-training program, where learners shadow more experienced employees and observe how they do their jobs.<br>
    <b>W-Am:</b> I'm afraid that might become a burden for our longtime employees. They'll have to slow down their work to explain what they're doing.<br>
    <b>M-Au:</b> What if we videotaped experienced employees doing specific tasks? High-quality video can be recorded and edited with a smartphone.<br>
    <b>W-Am:</b> I like that idea. It would allow us to capture our workers' expertise without slowing down the production line.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>W-Am:</b> Hi Suresh, I'm at the airport waiting for my flight. I want to meet with a potential investor while I'm in Chicago. Her name's Marta Gomez. I can send you her contact information.<br>
    <b>M-Cn:</b> Okay, which day would you prefer to meet with her?<br>
    <b>W-Am:</b> How about right after my meeting with the Chicago staff?<br>
    <b>M-Cn:</b> Okay. By the way, did you see that our company won an award for our contributions to the community? It was just announced this morning.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>M-Au:</b> Marion, we keep getting calls from people who want to visit the botanical garden but can't find parking information. Isn't it on our website?<br>
    <b>W-Br:</b> It is, but you have to click on the "About Us" page and scroll to the bottom of that page. Maybe people don't see it.<br>
    <b>M-Au:</b> Oh, I think we should move that information from the "About Us" page and make a separate page for directions and parking information. That way, people can find it more easily.<br>
    <b>W-Br:</b> I'd be happy to make that change, but we're in the middle of updating our software, so it'll have to wait until Monday.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>M-Au:</b> Good news, we have finally received the go-ahead for our department's project to install bicycle racks at the train station downtown.<br>
    <b>W-Am:</b> At last! So now we need to decide where to place the racks. How about by the station entrance?<br>
    <b>M-Au:</b> Hmm, if we ask riders, I bet they'd say that the most convenient spot is as close to the platform as possible.<br>
    <b>W-Am:</b> Let's do that. I'll contact some companies for estimates.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Br:</b> You've reached Select Repair Service. We specialize in all makes and models of automobiles. Our factory-trained specialists will keep your vehicle running in top condition. As an added benefit, we offer extended warranties on all vehicles we service. You can enjoy three extra years of worry-free driving. Please note that Select Repair Service will be closing on Friday, June 30th, so we can complete our quarterly inventory of supplies. Thank you for your patience. A representative will be with you shortly.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>M-Au:</b> Welcome, new employees. My name is Diego, and I facilitate all orientation sessions. Before we start today, you will need to set up your employee account. If you look at the first page of your training binder, you'll see your username and a temporary password. Please open the laptops you were given this morning and log in using those credentials. You will then be prompted to create your own password. Once that's complete, you'll have access to all your department's files. Please note that you can only access them from your company computer.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>W-Br:</b> Hello, this is Heather Ross calling from Denville Amusement Park. About a month ago, I ordered one of your new video game machines, Space Defenders. I'm really happy with my purchase, since the game has been incredibly popular with our park guests. I'm considering buying some additional machines in the near future. I heard you may be releasing a new game soon. Could you call me back and let me know if that's true? Thanks.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>W-Am:</b> The first agenda item for our board meeting is the annual sales report. We're all disappointed by the drop in our clothing sales. The decline is mostly due to distribution issues. Because our factories are all overseas, it takes too long for orders to reach customers. So I'm recommending that we start manufacturing some clothing locally. We'll be looking for a location to build a manufacturing facility. I hired a consultant to put together a list of locations we could use. He'll be at our next board meeting to explain the pros and cons of each.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>M-Cn:</b> Attention passengers: All trains to Midway Station are delayed for track repairs. Repair crews are working on a stretch of track just south of the town of Weadon. They expect to complete the repair within the hour. We apologize for the delay. We understand that many commuters need to get to Midway as soon as possible. A bus will be departing for that destination in 15 minutes. Also, a reminder that the station café opens at 8:00 AM, and there are food kiosks on platform 1.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>W-Br:</b> I'm calling about the work my design team is doing to update your company logo. I've just emailed two versions for you to review. The first is a modern design with bold colors and simple lettering. The second image reflects the history of your brand and its logo. It's less trendy, but it doesn't depart much from the original, which you may prefer. Take your time to think about which one you'd like to choose. I'll be on vacation all next week, but if you call the office, my assistant will set up a meeting for when I get back.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>W-Am:</b> After the transportation agency released the draft of our improvement plan last week, members of the press asked if we're considering installing more fuel-efficient engines in our trains. I've scheduled this press conference to officially respond to your inquiries. 18 months ago, we hired a firm to determine if this upgrade would be feasible for our trains. It reported that the upgrade would be economical only for relatively new trains—that is, those less than five years old. All of ours are at least 10 years old. I hope this addresses your questions. If you're interested in more details, email our media relations department to receive a summary of the findings.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>M-Cn:</b> As regional sales manager, I want to explore the use of a more modernized payment system in our cosmetics stores. This system would allow any sales associate to take customer payments from a tablet anywhere in the store. Why should we do this? The main complaint about shopping at our stores is waiting in long lines to pay. A lot of our stores could benefit from this, but I've decided to conduct a trial run at our store in the Center City Mall. By far, that's our busiest location.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>W-Br:</b> In local news, the downtown Reston Office Tower is completed. The most extraordinary feature of the building is its beautiful garden, located in the lobby. Reston's management office has confirmed the tenant list for the building, and we interviewed the CEO of Barnum Financial Services about its new offices. He said he and his team are excited to move in in January. A recording of the full interview with the CEO is available on our website.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>M-Au:</b> Good morning, and thank you for attending this meeting for prospective investors. ZZ Mining has been planning to expand our operations by opening an additional silver mine. Let me show you the laboratory analysis of our exploratory drilling. On the screen, you can see information about the ore extracted from different sites. The highest-grade site had 410 grams of silver per ton of ore. However, the site with 390 grams per ton has a larger deposit, so that's where we'll build the new mine. Our next step is to apply for the necessary permits. We'll do that next week.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 1
window.TOEIC_EXPLANATIONS[1] = {
  101: "💡 <b>Đáp án (B) is engineered:</b> Chủ ngữ là 'The all-new Amore sports sedan' (số ít) và mang nghĩa bị động (được thiết kế), nên ta chọn động từ bị động số ít 'is engineered'.",
  102: "💡 <b>Đáp án (A) to expand:</b> Cấu trúc chỉ mục đích 'be expected to V' (được kỳ vọng/dự kiến để làm gì).",
  103: "💡 <b>Đáp án (A) funding:</b> Cần một danh từ ghép 'funding issues' (các vấn đề về tài trợ/vốn) để phù hợp nghĩa.",
  104: "💡 <b>Đáp án (B) overseas:</b> Trạng từ/tính từ chỉ vị trí 'overseas' (ở nước ngoài) bổ nghĩa cho vị trí nhà máy.",
  105: "💡 <b>Đáp án (B) recommending:</b> Sau liên từ 'Because' có thể dùng dạng V-ing rút gọn chủ ngữ cùng mệnh đề chính.",
  106: "💡 <b>Đáp án (C) facility:</b> Danh từ 'facility' (cơ sở vật chất/nhà máy sản xuất) hoàn thành ý nghĩa câu chỉ vị trí dự kiến xây dựng.",
  107: "💡 <b>Đáp án (C) put together:</b> Cụm động từ 'put together' mang nghĩa tổng hợp, chuẩn bị (tạo ra một danh sách các địa điểm).",
  108: "💡 <b>Đáp án (D) each:</b> Đại từ/tính từ chỉ định 'each' đi với danh từ số ít 'of' để chỉ từng thành phần trong số nhiều.",
  109: "💡 <b>Đáp án (A) annual:</b> Tính từ 'annual' (hàng năm) bổ nghĩa cho bữa tối gây quỹ từ thiện của thư viện.",
  110: "💡 <b>Đáp án (A) bring in:</b> Cụm động từ 'bring in' mang nghĩa kiếm ra, mang lại (lợi nhuận/tiền bạc).",
  111: "💡 <b>Đáp án (C) section:</b> Danh từ 'section' (khu vực, bộ phận) trong cụm 'children's book section' (khu vực sách thiếu nhi).",
  112: "💡 <b>Đáp án (C) invitations:</b> Cần danh từ số nhiều 'invitations' (giấy mời) làm tân ngữ cho cụm 'sending out'.",
  113: "💡 <b>Đáp án (B) available:</b> Tính từ 'available' (có sẵn) mô tả trạng thái của danh sách khách mời tham dự.",
  114: "💡 <b>Đáp án (C) give away:</b> Cụm động từ 'give away' mang nghĩa phát miễn phí, tặng quà.",
  115: "💡 <b>Đáp án (A) extra:</b> Tính từ 'extra' (phụ, thêm) trong cụm 'no extra charge' (không tính phí thêm).",
  116: "💡 <b>Đáp án (D) paper:</b> Danh từ đóng vai trò danh từ ghép 'made from paper' (được làm từ giấy).",
  117: "💡 <b>Đáp án (B) organic:</b> Tính từ 'organic' (hữu cơ) chỉ các loại dung dịch/vật liệu sạch thân thiện.",
  118: "💡 <b>Đáp án (A) Facility:</b> Danh từ chỉ tên riêng địa điểm cơ sở tái chế (Jamestown Recycling Facility).",
  119: "💡 <b>Đáp án (D) electronics:</b> Danh từ chỉ các thiết bị điện tử (tivi, máy tính).",
  120: "💡 <b>Đáp án (B) market:</b> Cụm cố định 'put a house on the market' (đưa nhà ra bán trên thị trường).",
  121: "💡 <b>Đáp án (D) dispose:</b> Cụm động từ 'dispose of' mang nghĩa xử lý, vứt bỏ rác thải/đồ đạc.",
  122: "💡 <b>Đáp án (C) location:</b> Danh từ 'location' (vị trí, địa điểm) chỉ việc mở chi nhánh thứ hai.",
  123: "💡 <b>Đáp án (B) lease:</b> Danh từ/động từ 'lease' (thuê/cho thuê mặt bằng). Cụm 'up for lease' (đang cho thuê).",
  124: "💡 <b>Đáp án (A) walk-in:</b> Tính từ chỉ khách hàng ghé vào trực tiếp không cần đặt lịch trước.",
  125: "💡 <b>Đáp án (C) release:</b> Danh từ/động từ 'release' (phát hành, tung ra thị trường tựa game mới).",
  126: "💡 <b>Đáp án (B) tested:</b> Phân từ quá khứ rút gọn mệnh đề quan hệ chỉ hành động thử nghiệm trò chơi.",
  127: "💡 <b>Đáp án (D) controller:</b> Danh từ 'controller' (bộ điều khiển trò chơi điện tử).",
  128: "💡 <b>Đáp án (A) maintenance:</b> Danh từ chỉ bộ phận kỹ thuật, bảo trì (maintenance office).",
  129: "💡 <b>Đáp án (C) thermostat:</b> Danh từ 'thermostat' (thiết bị điều chỉnh nhiệt độ trong nhà).",
  130: "💡 <b>Đáp án (B) randomly:</b> Trạng từ 'randomly' (một cách ngẫu nhiên, chập chờn lúc bật lúc tắt).",
  131: "💡 <b>Đáp án (D) loan:</b> Danh từ 'loan' (khoản vay vốn kinh doanh tại ngân hàng).",
  132: "💡 <b>Đáp án (C) equipment:</b> Danh từ không đếm được 'equipment' (thiết bị thể thao, máy móc).",
  133: "💡 <b>Đáp án (A) expand:</b> Động từ nguyên thể 'expand' đi sau 'would like to' để chỉ ý định mở rộng quy mô.",
  134: "💡 <b>Đáp án (B) upgrade:</b> Động từ 'upgrade' (nâng cao, nâng cấp kỹ năng tay nghề nhân viên).",
  135: "💡 <b>Đáp án (D) burden:</b> Danh từ 'burden' (gánh nặng) cho nhân viên lâu năm khi phải kèm cặp người mới.",
  136: "💡 <b>Đáp án (C) specific:</b> Tính từ 'specific' (cụ thể) chỉ các nhiệm vụ công việc nhất định.",
  137: "💡 <b>Đáp án (B) expertise:</b> Danh từ 'expertise' (chuyên môn, sự thành thạo trong công việc).",
  138: "💡 <b>Đáp án (C) productivity:</b> Suy luận từ việc giảm tốc độ làm việc dẫn đến giảm năng suất sản xuất.",
  139: "💡 <b>Đáp án (A) potential:</b> Tính từ 'potential' (tiềm năng) bổ nghĩa cho danh từ 'investor'.",
  140: "💡 <b>Đáp án (C) award:</b> Danh từ 'award' (giải thưởng) ghi nhận những đóng góp cho cộng đồng.",
  141: "💡 <b>Đáp án (C) botanical:</b> Tính từ 'botanical' trong cụm 'botanical garden' (vườn bách thảo).",
  142: "💡 <b>Đáp án (A) separate:</b> Tính từ 'separate' (riêng biệt) chỉ trang web cung cấp thông tin đỗ xe độc lập.",
  143: "💡 <b>Đáp án (C) software:</b> Danh từ 'software' (phần mềm hệ thống) đang trong quá trình cập nhật.",
  144: "💡 <b>Đáp án (A) covered:</b> Tính từ 'covered' (có mái che) miêu tả bãi đỗ xe an toàn tại ga tàu.",
  145: "💡 <b>Đáp án (D) estimates:</b> Danh từ số nhiều 'estimates' (bản báo giá dự trù chi phí).",
  146: "💡 <b>Đáp án (C) specialize:</b> Cấu trúc 'specialize in' (chuyên về lĩnh vực sửa chữa ô tô các đời xe).",
  147: "💡 <b>Đáp án (A) extended:</b> Tính từ 'extended' chỉ chế độ bảo hành kéo dài thêm nhiều năm.",
  148: "💡 <b>Đáp án (A) quarterly:</b> Tính từ mang nghĩa 'hàng quý' (kiểm kê hàng tồn kho định kỳ mỗi quý).",
  149: "💡 <b>Đáp án (D) credentials:</b> Danh từ 'credentials' (thông tin xác thực / tên đăng nhập và mật khẩu tạm thời).",
  150: "💡 <b>Đáp án (A) accessible:</b> Cấu trúc tương đương 'can only be accessed' -> 'are only accessible'.",
  151: "💡 <b>Đáp án (D) pleased:</b> Tính từ 'pleased' chỉ trạng thái hài lòng với sản phẩm đã mua.",
  152: "💡 <b>Đáp án (A) available:</b> Tính từ 'available' chỉ sản phẩm mới có sẵn trên thị trường/sắp ra mắt.",
  153: "💡 <b>Đáp án (D) clothing:</b> Danh từ chỉ ngành hàng quần áo, thời trang trong báo cáo doanh số.",
  154: "💡 <b>Đáp án (A) locally:</b> Trạng từ chỉ địa điểm 'locally' (sản xuất ngay tại địa phương/trong nước).",
  155: "💡 <b>Đáp án (B) presentation:</b> Danh từ 'presentation' (bài thuyết trình của chuyên gia tư vấn).",
  156: "💡 <b>Đáp án (D) delay:</b> Danh từ 'delay' chỉ tình trạng trì hoãn chuyến tàu do sửa chữa đường ray.",
  157: "💡 <b>Đáp án (A) alternative:</b> Tính từ chỉ phương án thay thế (phương án xe buýt di chuyển thay tàu).",
  158: "💡 <b>Đáp án (D) food:</b> Cụm từ 'food kiosks' (quầy bán đồ ăn nhanh tại sân ga).",
  159: "💡 <b>Đáp án (A) graphic:</b> Tính từ 'graphic' trong cụm 'graphic design team' (đội ngũ thiết kế đồ họa).",
  160: "💡 <b>Đáp án (B) images:</b> Danh từ số nhiều 'images' (các hình ảnh mẫu logo gửi qua email).",
  161: "💡 <b>Đáp án (C) vacation:</b> Danh từ 'vacation' (kỳ nghỉ cá nhân của trưởng nhóm thiết kế vào tuần tới).",
  162: "💡 <b>Đáp án (B) feasible:</b> Tính từ 'feasible' (có tính khả thi) dùng để đánh giá việc nâng cấp động cơ tàu.",
  163: "💡 <b>Đáp án (C) summary:</b> Danh từ 'summary' (bản tóm tắt kết quả nghiên cứu/khảo sát).",
  164: "💡 <b>Đáp án (B) upgrade:</b> Động từ/danh từ 'upgrade' (nâng cấp hệ thống thanh toán di động).",
  165: "💡 <b>Đáp án (A) lines:</b> Danh từ số nhiều 'lines' chỉ hàng người xếp dài chờ thanh toán tiền tại cửa hàng.",
  166: "💡 <b>Đáp án (D) justify:</b> Động từ 'justify' (biện minh, chứng minh sự hợp lý cho một lựa chọn địa điểm).",
  167: "💡 <b>Đáp án (A) garden:</b> Danh từ 'garden' chỉ khu vườn cảnh quan đặc biệt tại sảnh tòa nhà.",
  168: "💡 <b>Đáp án (C) Floors:</b> Danh từ chỉ số tầng tòa nhà văn phòng cho thuê (tầng 11-14).",
  169: "💡 <b>Đáp án (D) interview:</b> Danh từ 'interview' chỉ buổi phỏng vấn được ghi hình lại trên web.",
  170: "💡 <b>Đáp án (C) Site:</b> Danh từ chỉ vị trí địa điểm thăm dò khai thác mỏ bạc (Site 3).",
  171: "💡 <b>Đáp án (A) permits:</b> Danh từ số nhiều 'permits' chỉ các loại giấy phép pháp lý bắt buộc phải xin."
  172: "💡 <b>Đáp án (D) To ask for clarification about a request:</b> Trong đoạn chat, cô Barry mở đầu để hỏi làm rõ liệu ông Kubelski cần danh sách toàn bộ chủ tài khoản hay chỉ trong một nhóm độ tuổi cụ thể ('Do you really need the e-mail addresses of all account holders?... Or do you need the e-mail addresses of account holders only within a certain age-group?').",
  173: "💡 <b>Đáp án (A) Account holders in one age-group:</b> Ông Kubelski nêu rõ: 'I want to e-mail account holders aged 55 to 65 to invite them to meet with a retirement planning expert' (chỉ gửi cho nhóm tuổi từ 55 đến 65).",
  174: "💡 <b>Đáp án (B) Make a change to a form:</b> Cô Choi đề nghị: 'We can update your current request form for you. You do not want to lose your place in the queue' (cập nhật biểu mẫu yêu cầu hiện tại thay vì bắt làm form mới).",
  175: "💡 <b>Đáp án (C) Mr. Kubelski's request will not be the first job Ms. Barry completes:</b> Khi ông Kubelski xin lấy danh sách ngay, câu 'There are several projects ahead of yours' ngụ ý có nhiều dự án xếp hàng trước nên yêu cầu của ông sẽ không được xử lý ngay lập tức.",
  176: "💡 <b>Đáp án (A) By word of mouth:</b> Đoạn 1 bài đọc nêu rõ các chủ xe tải thức ăn 'often rely on word of mouth or social media to attract customers'.",
  177: "💡 <b>Đáp án (D) Seasonal food items:</b> Bài báo hướng dẫn Trang chủ (Home page) hiển thị tên xe tải, vị trí, giờ hoạt động, trong khi thông tin món ăn theo mùa ('seasonal food items') được đặt ở trang Tin tức (News page).",
  178: "💡 <b>Đáp án (C) Web design:</b> Trong email, ông Ed gửi lời cảm ơn ông Abruzzo: 'creating the prototype Web site for my food-truck business' và thảo luận về việc thiết kế website.",
  179: "💡 <b>Đáp án (D) The News page:</b> Ed yêu cầu bổ sung thông tin chương trình khuyến mãi sắp tới ('new promotion that will begin in mid-April'), mà bài báo đã lưu ý trang Tin tức (News page) là nơi cập nhật 'upcoming promotions'.",
  180: "💡 <b>Đáp án (C) On April 5:</b> Trong email có ghi: 'we will move forward with the prototype Web site and launch it as the official site on April 5'.",
  181: "💡 <b>Đáp án (D) It will change the way an institution heats its buildings:</b> Email chỉ ra rằng dự án Net Zero Initiative sẽ lắp đặt giếng địa nhiệt ('geothermal wells') phục vụ cho 'the heating and cooling of our entire campus', tức thay đổi cách sưởi/làm mát khuôn viên trường.",
  182: "💡 <b>Đáp án (D) carry out:</b> Từ 'conduct' trong ngữ cảnh 'conduct test drilling' có nghĩa là tiến hành/thực hiện cuộc khoan thử nghiệm, đồng nghĩa với 'carry out'.",
  183: "💡 <b>Đáp án (A) It is located near a university campus:</b> Trong email của đại diện Đại học Rilamore có nhắc đến việc đội khoan sẽ làm việc 'adjacent to the Red Hills Business District... near the campus', cho thấy khu kinh doanh này nằm ngay cạnh khuôn viên trường.",
  184: "💡 <b>Đáp án (C) To avoid noise from nearby construction:</b> Các buổi khoan thử nghiệm diễn ra gần đường Oak từ ngày 5/6 và kéo dài 2 tuần với mức độ tiếng ồn cao ('higher-than-usual noise level'), nên chuỗi hòa nhạc vốn diễn ra vào các ngày thứ Năm tháng 6 đã dời sang tháng 7.",
  185: "💡 <b>Đáp án (B) It will have artwork for sale on its property:</b> Thông cáo báo chí nêu rõ: 'local arts-and-crafts vendors will display their work on the lawn of the Cultural Center' (các nghệ nhân sẽ trưng bày sản phẩm thủ công mỹ nghệ trên bãi cỏ của Trung tâm Văn hóa).",
  186: "💡 <b>Đáp án (B) Repairing gutters:</b> Trong quảng cáo, Lawal Home Service liệt kê các dịch vụ bao gồm 'attic insulation and gutter restoration' (phục hồi/sửa chữa máng nước).",
  187: "💡 <b>Đáp án (A) It has developed a leak:</b> Trong biểu mẫu, ông Gerson mô tả: 'water has begun to drip through the section over the patio' (nước đã bắt đầu rò rỉ/nhỏ giọt qua khu vực mái hiên).",
  188: "💡 <b>Đáp án (B) On December 13:</b> Biểu mẫu được gửi ngày 12/12 ('December 12') và bài đánh giá của ông Gerson ghi rõ người thẩm định đã đến khảo sát mái nhà vào ngay ngày hôm sau ('the very next day' -> December 13).",
  189: "💡 <b>Đáp án (A) A project supervisor:</b> Bài quảng cáo khẳng định 'Our project supervisors are always on-site to answer client questions', khớp với đánh giá của khách hàng: 'Diana Perez was on-site for the whole job as promised and answered all my questions'.",
  190: "💡 <b>Đáp án (D) The tools they used for a job:</b> Ông Gerson ngạc nhiên và nhận xét: 'They used two magnetic devices resembling lawnmowers and swept over my entire lawn to find any dropped roofing nails. I had never seen anything like that!'.",
  191: "💡 <b>Đáp án (D) Graphic design:</b> Email của Juanita nhờ công ty Darboury thiết kế mẫu bìa sổ tay ('help creating the following cover designs'), và phản hồi của ông Omar Balaji liên quan đến 'sticker art', màu nền, duyệt thiết kế bìa mẫu.",
  192: "💡 <b>Đáp án (B) World Suitcase:</b> Email của Omar cho biết thiết kế có 'sticker art did not show up well against the original black background' phải đổi màu nền. Bảng thiết kế bìa ở email 1 xác nhận 'World Suitcase' có hình dán nhãn vali và nền màu đen ('Black').",
  193: "💡 <b>Đáp án (B) June 11:</b> Trong email phản hồi của Omar có ghi: 'As long as you send your approval of all covers by June 11, we will be able to ship your entire order...'.",
  194: "💡 <b>Đáp án (A) It will include a display stand:</b> Trên đơn hàng (Order Form), mã sản phẩm D1 được ghi là 'Large metal display rack' (giá/kệ trưng bày bằng kim loại lớn).",
  195: "💡 <b>Đáp án (A) Blue:</b> Đơn hàng ghi mặt hàng N3-GT có tên thiết kế là 'Great Thoughts'. Tra vào bảng ở email 1, thiết kế 'Great Thoughts' có màu nền là 'Blue'.",
  196: "💡 <b>Đáp án (B) To ask for opinions from managers:</b> Giám đốc Charlotte Black gửi thư cho các nhà quản lý để yêu cầu bình chọn Nhân viên của tháng ('It is time to vote for the Wilson Autos Employee of the Month... Please respond to this e-mail by Friday with your vote').",
  197: "💡 <b>Đáp án (A) Mr. Salehi:</b> Email của Charlotte mô tả Nick Salehi: 'found a glitch in our computer system and stopped us from incorrectly ordering unnecessary inventory' (phát hiện lỗi hệ thống máy tính).",
  198: "💡 <b>Đáp án (D) He negotiated with Ms. Black for a lower price:</b> Trong bài đánh giá, ông Riggs viết: 'when the general manager agreed to sell us the Excelera for the same price that a competing dealership was advertising'. Mà email 1 xác định Charlotte Black chính là Tổng giám đốc ('General Manager').",
  199: "💡 <b>Đáp án (C) She is responsible for an increase in customer feedback:</b> Bản thông báo vinh danh ghi nhận: 'She has also been instrumental in encouraging satisfied customers to post comments on our social media pages. We received more great reviews in the past month than we did in the four previous months combined!'.",
  200: "💡 <b>Đáp án (A) She received votes from at least three managers:</b> Email 1 quy định thể lệ: 'The winner must receive at least three votes'. Vì Erica Boyd đã thắng giải Nhân viên của tháng, chắc chắn cô đã nhận được phiếu bầu từ ít nhất ba nhà quản lý."
};
