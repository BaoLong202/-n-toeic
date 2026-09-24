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

// 2. FULL TRANSCRIPT LISTENING TEST 1 (CHUẨN 100% THEO FILE AUDIO ETS)
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
    <div class="script-opt">(B) About twelve shipping boxes.</div>
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
    <div class="script-opt">(B) About twenty meters.</div>
    <div class="script-opt correct-pink">(C) We close at six o'clock.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Au: The sales team knows how to use the tracking software, don't they?</span>
    <div class="script-opt">(A) It's on the lower shelf.</div>
    <div class="script-opt">(B) A twelve thirty departure.</div>
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
    <div class="script-opt correct-pink">(A) The Jefferson Room.</div>
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
    <div class="script-opt">(A) About twenty percent off.</div>
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
    <span class="script-speaker">24. W-Br: The tickets to Friday night's concert cost ten dollars each.</span>
    <div class="script-opt correct-pink">(A) Actually, they're fifteen.</div>
    <div class="script-opt">(B) No, I can't play the guitar.</div>
    <div class="script-opt">(C) It's in aisle five.</div>
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
    <div class="script-opt">(B) On the corner of Fourth and Main.</div>
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
    <div class="script-opt correct-pink">(C) I'm meeting with her at ten.</div>
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
    <b>M-Cn:</b> Yes, it should be a great addition to our company's line of <span class="correct-pink">[32] cheeses</span>.<br>
    <b>W-Am:</b> Several people mentioned that they'd like to use it in recipes, to add to sauces for example.<br>
    <b>M-Cn:</b> So maybe we should consider <span class="correct-pink">[33] selling a shredded version</span> that would melt easily when cooked.<br>
    <b>W-Am:</b> I'm sure we could do that. <span class="correct-pink">[34] I'll get in touch with the production manager</span> with that request.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>M-Au:</b> Hi, <span class="correct-pink">[35] I'm calling to book three tickets for this Thursday's tennis match</span>. Are there any seats left?<br>
    <b>W-Br:</b> Just a few. Tickets for Thursday's match have been selling quickly.<br>
    <b>M-Au:</b> I'm not surprised. After all, <span class="correct-pink">[36] Ife Rotimi won the regional championship tournament</span> last month. Everyone wants to see her play after her incredible performance. What seats are available?<br>
    <b>W-Br:</b> Well, there's only one group of three seats together. <span class="correct-pink">[37] Advance payment is required</span> to hold them.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>W-Br:</b> Thanks for agreeing to help me organize the <span class="correct-pink">[38] library's annual fundraising dinner</span>, Klaus. We hope the event brings in enough money to expand our children's book section.<br>
    <b>M-Cn:</b> What task would you like me to start with?<br>
    <b>W-Br:</b> Well, I could use some help <span class="correct-pink">[39] sending out the invitations</span>.<br>
    <b>M-Cn:</b> Okay, I can take care of that. Is there a list of attendees available?<br>
    <b>W-Br:</b> It's in my computer files. <span class="correct-pink">[40] I'll email it to you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>W-Br:</b> Hey Brian and Bente, I found some great pens to give away at the <span class="correct-pink">[41] community festival</span> to promote our business.<br>
    <b>M-Au:</b> Great, can we put our cleaning service logo on them?<br>
    <b>W-Br:</b> Yes, for no extra charge. And <span class="correct-pink">[42] they're biodegradable, they're made from paper</span>.<br>
    <b>M-Cn:</b> So when we hand them out, we can mention that, as well as talk about the organic cleaning supplies our company uses.<br>
    <b>W-Br:</b> Okay, <span class="correct-pink">[43] I'll go ahead and order several cases</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Br:</b> Jamestown <span class="correct-pink">[44] Recycling Facility</span>. How can I help you?<br>
    <b>M-Au:</b> Hi, I'm preparing to move soon, and I have some electronics such as <span class="correct-pink">[45] televisions and computers</span> that I'd like to get rid of before I put my house on the market. My friend mentioned you might take them.<br>
    <b>W-Br:</b> Yes, that's right. We'll take all electronics.<br>
    <b>M-Au:</b> Great. I just have one question: Do you provide a pick-up service?<br>
    <b>W-Br:</b> No, unfortunately you'll have to bring everything here yourself. However, on our website, <span class="correct-pink">[46] we list a number of companies that can remove and dispose of the items for you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>M-Cn:</b> Zena, what a surprise! I haven't seen you since we <span class="correct-pink">[47] took that class for business owners together</span> last year. How are you?<br>
    <b>W-Am:</b> Great, thanks! I was just in the neighborhood and thought I'd stop in for a cookie or a piece of cake. You have so many delicious <span class="correct-pink">[48] baked goods</span> here.<br>
    <b>M-Cn:</b> Thank you. It's been a good year for business. I'm even considering opening a second location.<br>
    <b>W-Am:</b> Really? Well, I noticed that Sunnyvale Restaurant went out of business and the building's up for lease. <span class="correct-pink">[49] It's very close to the local university. You'd probably get a lot of walk-in customers</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>W-Br:</b> Hi Koji, I think our new <span class="correct-pink">[50] video game</span> is nearly ready to be released. Are you aware of any improvements that need to be made before then?<br>
    <b>M-Au:</b> Actually, <span class="correct-pink">[51] I just finished testing the game this morning</span>. I found a problem in the third stage of the game. There were a few times when my character couldn't move.<br>
    <b>W-Br:</b> Oh, that's strange.<br>
    <b>M-Au:</b> I double-checked the problem using a different controller; the same issue came up.<br>
    <b>W-Br:</b> Oh, I think Pauline had a similar problem with a game she tested. <span class="correct-pink">[52] Maybe you should ask her about it</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>M-Au:</b> You've reached the <span class="correct-pink">[53] maintenance office at Hillview Apartment Complex</span>.<br>
    <b>W-Am:</b> Hi, this is Pallavi Sen from unit 35B. I'm calling because <span class="correct-pink">[54] the new thermostat in my apartment isn't working</span>. It keeps shutting off and turning on randomly, so my apartment is getting cold.<br>
    <b>M-Au:</b> When did this issue start?<br>
    <b>W-Am:</b> A few hours ago. The thermostat was just installed yesterday.<br>
    <b>M-Au:</b> Okay, I can come and take a look at it tomorrow morning.<br>
    <b>W-Am:</b> <span class="correct-pink">[55] But it's supposed to be below freezing tonight!</span> <i>(Ngụ ý: Yêu cầu thợ phải đến sửa gấp ngay hôm nay)</i>
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W-Br:</b> Good morning. Welcome to Jasper Bank.<br>
    <b>M-Cn:</b> Thanks for meeting with us to <span class="correct-pink">[56] discuss a loan for our business</span>.<br>
    <b>W-Br:</b> Why don't you tell me more about your business? I understand it's a repair shop?<br>
    <b>M-Au:</b> Well, ten years ago we opened as a <span class="correct-pink">[57] snowmobile repair shop</span>. But after a few years, we also started renting out snowmobiles and other sports equipment.<br>
    <b>M-Cn:</b> Yes, and because <span class="correct-pink">[58] winter tourism has increased recently</span>, we'd like to expand our space so that we can carry more inventory.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>M-Au:</b> Many of our factory workers have expressed interest in upgrading their skills. <span class="correct-pink">[59] I'd like to implement a peer-training program</span> where learners shadow more experienced employees and observe how they do their jobs.<br>
    <b>W-Am:</b> <span class="correct-pink">[60] I'm afraid that might become a burden for our longtime employees. They'll have to slow down their work</span> to explain what they're doing.<br>
    <b>M-Au:</b> What if we videotaped experienced employees doing specific tasks? <span class="correct-pink">[61] High-quality video can be recorded and edited with a smartphone</span>. <i>(Ngụ ý: Giải pháp này rất đơn giản và dễ thực hiện)</i><br>
    <b>W-Am:</b> I like that idea. It would allow us to capture our workers' expertise without slowing down the production line.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64: Graphic / Lịch trình]</b><br>
    <b>W-Am:</b> Hi Suresh, <span class="correct-pink">[62] I'm at the airport waiting for my flight</span>. I want to meet with a potential investor while I'm in Chicago. Her name's Marta Gomez. I can send you her contact information.<br>
    <b>M-Cn:</b> Okay, which day would you prefer to meet with her?<br>
    <b>W-Am:</b> How about <span class="correct-pink">[63] right after my meeting with the Chicago staff</span>?<br>
    <b>M-Cn:</b> Okay. By the way, did you see that <span class="correct-pink">[64] our company won an award for our contributions to the community</span>? It was just announced this morning.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67: Graphic / Trang Web]</b><br>
    <b>M-Au:</b> Marion, we keep getting calls from people who want to visit the <span class="correct-pink">[65] botanical garden</span> but can't find parking information. Isn't it on our website?<br>
    <b>W-Br:</b> It is, but you have to click on the "About Us" page and scroll to the bottom of that page. Maybe people don't see it.<br>
    <b>M-Au:</b> Oh, I think we should move that information from the <span class="correct-pink">[66] "About Us" page</span> and make a separate page for directions and parking information. That way, people can find it more easily.<br>
    <b>W-Br:</b> I'd be happy to make that change, but <span class="correct-pink">[67] we're in the middle of updating our software</span>, so it'll have to wait until Monday.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70: Graphic / Bản Đồ Ga Tàu]</b><br>
    <b>M-Au:</b> Good news! We have finally received the go-ahead for our department's project to <span class="correct-pink">[68] install bicycle racks at the train station downtown</span>.<br>
    <b>W-Am:</b> At last! So now we need to decide where to place the racks. How about by the station entrance?<br>
    <b>M-Au:</b> Hmm, if we ask riders, I bet they'd say that the most convenient spot is <span class="correct-pink">[69] as close to the platform as possible</span>.<br>
    <b>W-Am:</b> Let's do that. <span class="correct-pink">[70] I'll contact some companies for estimates</span>.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>

  <div class="script-dialogue">
    <b>[Questions 71 - 73: Recorded Message]</b><br>
    <b>W-Br:</b> You've reached Select Repair Service. We specialize in all makes and models of <span class="correct-pink">[71] automobiles</span>. Our factory-trained specialists will keep your vehicle running in top condition. As an added benefit, <span class="correct-pink">[72] we offer extended warranties</span> on all vehicles we service: you can enjoy three extra years of worry-free driving. Please note that Select Repair Service will be <span class="correct-pink">[73] closing on Friday, June 30th, so we can complete our quarterly inventory of supplies</span>. Thank you for your patience. A representative will be with you shortly.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76: Orientation Talk]</b><br>
    <b>M-Au:</b> Welcome, new employees. My name is Diego and <span class="correct-pink">[74] I facilitate all orientation sessions</span>. Before we start today, you will need to set up your employee account. If you look at the first page of your training binder, <span class="correct-pink">[75] you'll see your username and a temporary password</span>. Please open the laptops you were given this morning and log in using those credentials. You will then be prompted to create your own password. Once that's complete, you'll have access to all your department's files. Please note that <span class="correct-pink">[76] you can only access them from your company computer</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79: Telephone Message]</b><br>
    <b>W-Br:</b> Hello, this is Heather Ross calling from Danville <span class="correct-pink">[77] Amusement Park</span>. About a month ago, I ordered one of your new video game machines, Space Defenders. <span class="correct-pink">[78] I'm really happy with my purchase, since the game has been incredibly popular with our park guests</span>. I'm considering buying some additional machines in the near future. I heard you may be releasing a new game soon. <span class="correct-pink">[79] Could you call me back and let me know if that's true</span>? Thanks.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82: Meeting Excerpt]</b><br>
    <b>W-Am:</b> The first agenda item for our board meeting is the annual sales report. We're all disappointed by the drop in our <span class="correct-pink">[80] clothing</span> sales. The decline is mostly due to distribution issues. Because our factories are all overseas, it takes too long for orders to reach customers. So, <span class="correct-pink">[81] I'm recommending that we start manufacturing some clothing locally</span>. We'll be looking for a location to build a manufacturing facility. I hired a consultant to put together a list of locations we could use. <span class="correct-pink">[82] He'll be at our next board meeting to explain the pros and cons of each</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85: Announcement]</b><br>
    <b>M-Cn:</b> Attention passengers: <span class="correct-pink">[83] All trains to Midway Station are delayed for track repairs</span>. Repair crews are working on a stretch of track just south of the town of Weadon. They expect to complete the repair within the hour. We apologize for the delay. We understand that many commuters need to get to Midway as soon as possible. <span class="correct-pink">[84] A bus will be departing for that destination in 15 minutes</span>. Also, a reminder that the station cafe opens at 8:00 AM, and <span class="correct-pink">[85] there are food kiosks on platform one</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88: Telephone Message]</b><br>
    <b>W-Br:</b> I'm calling about the work my <span class="correct-pink">[86] design team</span> is doing to update your company logo. <span class="correct-pink">[87] I've just emailed two versions for you to review</span>. The first is a modern design with bold colors and simple lettering. The second image reflects the history of your brand and its logo; it's less trendy, but it doesn't depart much from the original, which you may prefer. Take your time to think about which one you'd like to choose. <span class="correct-pink">[88] I'll be on vacation all next week</span>, but if you call the office, my assistant will set up a meeting for when I get back.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91: Press Conference Speech]</b><br>
    <b>W-Am:</b> After the Transportation Agency released the draft of our improvement plan last week, <span class="correct-pink">[89] members of the press</span> asked if we're considering installing more fuel-efficient engines in our trains. I've scheduled this press conference to officially respond to your inquiries. Eighteen months ago, we hired a firm to determine if this upgrade would be feasible for our trains. It reported that the upgrade would be economical only for relatively new trains, that is, those less than five years old. <span class="correct-pink">[90] All of ours are at least ten years old</span>. <i>(Ngụ ý: Sẽ không nâng cấp động cơ vì các tàu hiện tại đều quá cũ)</i>. If you're interested in more details, <span class="correct-pink">[91] email our media relations department to receive a summary of the findings</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94: Meeting Excerpt]</b><br>
    <b>M-Cn:</b> As regional sales manager, <span class="correct-pink">[92] I want to explore the use of a more modernized payment system</span> in our cosmetics stores. This system would allow any sales associate to take customer payments from a tablet anywhere in the store. Why should we do this? <span class="correct-pink">[93] The main complaint about shopping at our stores is waiting in long lines to pay</span>. A lot of our stores could benefit from this, but I've decided to conduct a trial run at our store in the Center City Mall. By far, <span class="correct-pink">[94] that's our busiest location</span>. <i>(Ngụ ý: Giải thích lý do chọn cửa hàng này để chạy thử nghiệm)</i>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97: Broadcast with Table]</b><br>
    <b>W-Br:</b> In local news, the downtown Reston Office Tower is completed. The most extraordinary feature of the building is <span class="correct-pink">[95] its beautiful garden located in the lobby</span>. Reston's management office has confirmed the tenant list for the building, and we interviewed the CEO of <span class="correct-pink">[96] Barnum Financial Services</span> about its new offices. He said he and his team are excited to move in in January. <span class="correct-pink">[97] A recording of the full interview with the CEO is available on our website</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100: Meeting Excerpt with Table]</b><br>
    <b>M-Au:</b> Good morning, and thank you for attending this meeting for <span class="correct-pink">[98] prospective investors</span>. ZZ Mining has been planning to expand our operations by opening an additional silver mine. Let me show you the laboratory analysis of our exploratory drilling. On the screen, you can see information about the ore extracted from different sites. The highest-grade site had 410 grams of silver per ton of ore. However, the site with <span class="correct-pink">[99] 390 grams per ton</span> has a larger deposit, so that's where we'll build the new mine. Our next step is to <span class="correct-pink">[100] apply for the necessary permits</span>. We'll do that next week.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200)
window.TOEIC_EXPLANATIONS[1] = {
  101: "💡 <b>Đáp án (B) after which:</b> Cụm đại từ quan hệ chỉ thời gian mang nghĩa 'sau đó'. Mệnh đề sau chỉ hành động đặt câu hỏi diễn ra sau bài thuyết trình.",
  102: "💡 <b>Đáp án (A) The last:</b> Cần mạo từ xác định 'The' đi với số thứ tự/tính từ 'last' bổ nghĩa cho cụm danh từ 'antique shop'.",
  103: "💡 <b>Đáp án (A) status update:</b> Cụm danh từ ghép cố định mang nghĩa 'bản cập nhật tiến độ / trạng thái công việc'.",
  104: "💡 <b>Đáp án (B) her:</b> Cần tính từ sở hữu đứng trước cụm danh từ 'newly published novel'.",
  105: "💡 <b>Đáp án (B) closely:</b> Trạng từ đuôi -ly bổ nghĩa cho động từ 'monitor' (theo dõi sát sao tiến độ).",
  106: "💡 <b>Đáp án (C) experienced:</b> Tính từ đứng trước danh từ 'technician' (kỹ thuật viên có nhiều kinh nghiệm).",
  107: "💡 <b>Đáp án (C) reservation:</b> Cụm 'make a reservation' là colocation mang nghĩa 'đặt chỗ trước'.",
  108: "💡 <b>Đáp án (D) despite:</b> Giới từ 'despite' + Cụm danh từ mang nghĩa nhượng bộ: 'mặc dù bão tuyết, chuyến bay vẫn cất cánh đúng giờ'.",
  109: "💡 <b>Đáp án (A) will be held:</b> Thì tương lai bị động cho sự kiện diễn ra vào tuần tới.",
  110: "💡 <b>Đáp án (A) quickly:</b> Trạng từ bổ nghĩa cho động từ hành động 'respond' (phản hồi nhanh chóng).",
  111: "💡 <b>Đáp án (C) expansion:</b> Cần danh từ sau tính từ sở hữu 'its' (sự mở rộng quy mô chi nhánh).",
  112: "💡 <b>Đáp án (C) between:</b> Cặp từ 'between A and B' (ở giữa khung giờ A và B).",
  113: "💡 <b>Đáp án (A) eligible:</b> Cấu trúc 'be eligible for something' (đủ điều kiện nhận quyền lợi/thưởng).",
  114: "💡 <b>Đáp án (C) promptly:</b> Trạng từ mang nghĩa 'ngay lập tức / kịp thời', bổ nghĩa cho hành động gửi báo cáo.",
  115: "💡 <b>Đáp án (C) whether:</b> Cấu trúc 'whether ... or not' diễn đạt sự lựa chọn hoặc nghi vấn.",
  116: "💡 <b>Đáp án (D) completely:</b> Phó từ bổ nghĩa cho tính từ 'satisfied' (hoàn toàn hài lòng).",
  117: "💡 <b>Đáp án (A) inspection:</b> Cần danh từ sau tính từ 'routine' (buổi kiểm tra / thanh tra định kỳ).",
  118: "💡 <b>Đáp án (D) unless:</b> Liên từ mang nghĩa 'trừ khi' có sự đồng ý bằng văn bản của giám đốc.",
  119: "💡 <b>Đáp án (C) accurately:</b> Trạng từ bổ nghĩa cho động từ 'recorded' (được ghi chép lại một cách chính xác).",
  120: "💡 <b>Đáp án (B) exceptional:</b> Tính từ mang nghĩa 'xuất sắc / vượt trội', bổ nghĩa cho 'leadership qualities'.",
  121: "💡 <b>Đáp án (D) will have completed:</b> Dấu hiệu 'By the end of this year' -> chia thì Tương lai hoàn thành.",
  122: "💡 <b>Đáp án (C) conveniently:</b> Cụm 'conveniently located' (tọa lạc ở vị trí rất thuận lợi).",
  123: "💡 <b>Đáp án (B) representatives:</b> Cần danh từ chỉ người số nhiều làm chủ ngữ cho động từ 'are available'.",
  124: "💡 <b>Đáp án (C) accessible:</b> Cấu trúc 'make something accessible to someone' (làm cho cái gì trở nên dễ tiếp cận).",
  125: "💡 <b>Đáp án (A) prior to:</b> Cụm giới từ đồng nghĩa với 'before' (trước khi tham gia khóa đào tạo).",
  126: "💡 <b>Đáp án (D) compliance:</b> Cụm 'in compliance with' (tuân thủ theo đúng các quy định an toàn).",
  127: "💡 <b>Đáp án (D) significantly:</b> Trạng từ chỉ mức độ bổ nghĩa cho 'increased' (tăng trưởng một cách đáng kể).",
  128: "💡 <b>Đáp án (D) unanimously:</b> Trạng từ mang nghĩa 'nhất trí / đồng thuận 100%'.",
  129: "💡 <b>Đáp án (D) throughout:</b> Giới từ chỉ phạm vi 'throughout the company' (trên toàn bộ công ty).",
  130: "💡 <b>Đáp án (B) subsequent:</b> Tính từ mang nghĩa 'xảy ra sau đó', bổ nghĩa cho 'investigation'.",
  131: "💡 <b>Đáp án (D) renewal:</b> Cần danh từ sau tính từ sở hữu 'its', chỉ việc gia hạn hợp đồng thuê mặt bằng.",
  132: "💡 <b>Đáp án (C) will provide:</b> Thì tương lai đơn diễn tả dịch vụ mới sẽ được cung cấp vào tháng tới.",
  133: "💡 <b>Đáp án (A) In addition:</b> Liên từ nối mang nghĩa 'Thêm vào đó', bổ sung thêm tiện ích mới cho cư dân.",
  134: "💡 <b>Đáp án (B) Câu nối ngữ cảnh:</b> 'Please contact the leasing office if you have questions.'",
  135: "💡 <b>Đáp án (D) feedback:</b> Danh từ không đếm được mang nghĩa 'ý kiến đóng góp / phản hồi'.",
  136: "💡 <b>Đáp án (C) regularly:</b> Trạng từ tần suất mang nghĩa 'thường xuyên', mô tả việc cập nhật định kỳ.",
  137: "💡 <b>Đáp án (B) to enhance:</b> Dùng To-V chỉ mục đích: 'để nâng cao trải nghiệm người dùng'.",
  138: "💡 <b>Đáp án (A) Câu nối:</b> Khẳng định cam kết về chất lượng dịch vụ của công ty.",
  139: "💡 <b>Đáp án (A) launch:</b> Danh từ chỉ 'buổi ra mắt / sự kiện công bố' dòng sản phẩm mới.",
  140: "💡 <b>Đáp án (C) scheduled:</b> Thể bị động 'is scheduled for' (được lên lịch vào thời gian cụ thể).",
  141: "💡 <b>Đáp án (B) attendees:</b> Danh từ chỉ người số nhiều mang nghĩa 'những người tham dự sự kiện'.",
  142: "💡 <b>Đáp án (D) Câu nối:</b> Nhắc nhở người tham gia mang theo vé mời điện tử khi check-in.",
  143: "💡 <b>Đáp án (C) invoice:</b> Hóa đơn thanh toán gửi cho bộ phận kế toán.",
  144: "💡 <b>Đáp án (C) within:</b> Giới từ chỉ khung thời gian 'within 30 days' (trong vòng 30 ngày).",
  145: "💡 <b>Đáp án (B) processed:</b> Động từ dạng bị động chỉ giao dịch 'đã được xử lý thành công'.",
  146: "💡 <b>Đáp án (A) Câu nối:</b> Cung cấp thông tin liên hệ phòng tài vụ nếu có thắc mắc.",
  147: "💡 <b>Đáp án (C):</b> Mục đích email là thông báo bảo trì hệ thống thang máy tòa nhà.",
  148: "💡 <b>Đáp án (D):</b> Cư dân được yêu cầu sử dụng lối cầu thang bộ phía bắc.",
  149: "💡 <b>Đáp án (B):</b> Đoạn chat: 'I am on my way' ngụ ý người gửi đang trên đường tới điểm hẹn.",
  150: "💡 <b>Đáp án (C):</b> Người nhận đồng ý giữ chỗ ở quán cà phê trong lúc chờ đồng nghiệp.",
  151: "💡 <b>Đáp án (D):</b> Bài đăng tuyển dụng vị trí chuyên viên phân tích tài chính.",
  152: "💡 <b>Đáp án (C):</b> Yêu cầu ứng viên có tối thiểu 3 năm kinh nghiệm trong ngành ngân hàng.",
  153: "💡 <b>Đáp án (B):</b> Nộp hồ sơ trực tuyến qua cổng thông tin tuyển dụng trên website.",
  154: "💡 <b>Đáp án (C):</b> Nêu bật tính năng tiết kiệm điện năng của dòng máy in văn phòng mới.",
  155: "💡 <b>Đáp án (D):</b> Khách mua trong tuần khai trương được tặng thêm một hộp mực dự phòng.",
  156: "💡 <b>Đáp án (C):</b> Vé hòa nhạc được hoàn tiền 100% nếu buổi diễn bị hủy do thời tiết.",
  157: "💡 <b>Đáp án (B):</b> Cổng soát vé mở trước giờ biểu diễn 45 phút.",
  158: "💡 <b>Đáp án (D):</b> Khán giả không được phép mang đồ ăn và nước uống từ bên ngoài vào rạp.",
  159: "💡 <b>Đáp án (B):</b> Vị trí phù hợp nhất: [2] nối tiếp thông tin về bãi đỗ xe.",
  160: "💡 <b>Đáp án (C):</b> Bản ghi nhớ yêu cầu nhân viên tham gia khảo sát môi trường làm việc.",
  161: "💡 <b>Đáp án (C):</b> Kết quả khảo sát hoàn toàn ẩn danh để bảo mật thông tin nhân sự.",
  162: "💡 <b>Đáp án (D):</b> Hạn chót nộp phiếu khảo sát là trước 5 giờ chiều thứ Sáu.",
  163: "💡 <b>Đáp án (B):</b> Đơn hàng bị giao trễ do nhà máy đối tác thiếu linh kiện lắp ráp.",
  164: "💡 <b>Đáp án (B):</b> Nhân viên bán hàng chiết khấu 10% cho đơn tiếp theo để bù đắp.",
  165: "💡 <b>Đáp án (B):</b> Quản lý đồng ý ký gia hạn hợp đồng giao nhận hàng hóa.",
  166: "💡 <b>Đáp án (A):</b> Bài viết ca ngợi sự thành công của một doanh nhân khởi nghiệp địa phương.",
  167: "💡 <b>Đáp án (B):</b> Công ty mở rộng thêm 2 chi nhánh mới tại khu vực trung tâm.",
  168: "💡 <b>Đáp án (C):</b> Từ 'sound' trong đoạn 2 đồng nghĩa với 'reliable / solid' (vững chắc, uy tín).",
  169: "💡 <b>Đáp án (B):</b> Vị trí [2] giải thích rõ bước tiếp cận thị trường ban đầu của công ty.",
  170: "💡 <b>Đáp án (B):</b> Phiên thảo luận chuyên đề sẽ diễn ra tại hội trường A.",
  171: "💡 <b>Đáp án (A):</b> Diễn giả chính đến từ Viện Nghiên cứu Công nghệ Ứng dụng.",
  172: "💡 <b>Đáp án (D):</b> Bữa trưa buffet nhẹ đã được tính gộp trong giá vé đăng ký tham dự.",
  173: "💡 <b>Đáp án (A):</b> Cần đăng ký trước bàn thực hành vì số lượng chỗ ngồi có hạn.",
  174: "💡 <b>Đáp án (B):</b> Khách hàng khiếu nại về việc gói bưu phẩm bị ướt khi nhận.",
  175: "💡 <b>Đáp án (C):</b> Công ty vận chuyển cam kết đền bù toàn bộ giá trị hàng hóa bị hỏng.",
  176: "💡 <b>Đáp án (A):</b> Thư điện tử xác nhận đặt phòng khách sạn cho chuyến công tác.",
  177: "💡 <b>Đáp án (D):</b> Phòng có ban công nhìn ra sông và đã bao gồm bữa sáng miễn phí.",
  178: "💡 <b>Đáp án (C):</b> Phí đỗ xe qua đêm được tính thêm vào hóa đơn thanh toán lúc trả phòng.",
  179: "💡 <b>Đáp án (D):</b> Chính sách hủy phòng yêu cầu thông báo trước tối thiểu 24 giờ.",
  180: "💡 <b>Đáp án (C):</b> Vị trí [3] là vị trí phù hợp nhất để gắn câu mô tả tiện ích phòng tập gym.",
  181: "💡 <b>Đáp án (D):</b> Người nhận thư là trưởng đoàn đại biểu tham dự hội nghị.",
  182: "💡 <b>Đáp án (D):</b> Xe đưa đón sẽ đón khách tại sân bay quốc tế vào lúc 9 giờ sáng.",
  183: "💡 <b>Đáp án (A):</b> Buổi tiệc tối giao lưu được tổ chức tại nhà hàng tầng thượng.",
  184: "💡 <b>Đáp án (C):</b> Thay đổi phòng họp do số lượng đại biểu đăng ký đông hơn dự kiến.",
  185: "💡 <b>Đáp án (B):</b> Đại biểu cần ký nhận thẻ đeo an ninh tại sảnh chính.",
  186: "💡 <b>Đáp án (B):</b> Trang web giới thiệu khóa đào tạo kỹ năng quản lý dự án trực tuyến.",
  187: "💡 <b>Đáp án (A):</b> Khóa học kéo dài trong 6 tuần và có cấp chứng chỉ hoàn thành.",
  188: "💡 <b>Đáp án (B):</b> Email phản hồi của học viên đánh giá rất cao phần bài tập nhóm thực tế.",
  189: "💡 <b>Đáp án (A):</b> Giảng viên hướng dẫn là chuyên gia có hơn 15 năm kinh nghiệm quản lý.",
  190: "💡 <b>Đáp án (D):</b> Đăng ký theo nhóm từ 3 người trở lên sẽ được giảm 15% học phí.",
  191: "💡 <b>Đáp án (D):</b> Bài viết đánh giá sản phẩm phần mềm quản lý kho vận.",
  192: "💡 <b>Đáp án (B):</b> Giao diện trực quan, dễ thao tác ngay cả với nhân viên mới bắt đầu.",
  193: "💡 <b>Đáp án (B):</b> Điểm hạn chế là tốc độ đồng bộ đám mây đôi khi bị chậm vào giờ cao điểm.",
  194: "💡 <b>Đáp án (A):</b> Bản cập nhật phần mềm phiên bản 2.1 dự kiến ra mắt vào quý tới.",
  195: "💡 <b>Đáp án (A):</b> Đội ngũ hỗ trợ kỹ thuật làm việc 24/7 qua cổng chat trực tuyến.",
  196: "💡 <b>Đáp án (B):</b> Hợp đồng cung cấp suất ăn công nghiệp cho căng tin nhân viên.",
  197: "💡 <b>Đáp án (A):</b> Thực đơn được đổi mới hàng tuần nhằm đảm bảo cân bằng dinh dưỡng.",
  198: "💡 <b>Đáp án (D):</b> Nhà cung cấp cam kết 100% nguyên liệu rau củ sạch có nguồn gốc rõ ràng.",
  199: "💡 <b>Đáp án (C):</b> Email khiếu nại về việc món tráng miệng hôm thứ Ba bị giao thiếu suất.",
  200: "💡 <b>Đáp án (A):</b> Quản lý căng tin đã gửi lời xin lỗi và bổ sung trái cây tươi vào ngày hôm sau."
};
