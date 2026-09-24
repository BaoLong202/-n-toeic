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
