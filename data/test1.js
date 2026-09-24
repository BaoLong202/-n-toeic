
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

// 2. FULL TRANSCRIPT LISTENING (CÂU 1 - 100)
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
    <span class="script-speaker">2. M-Au</span>
    <div class="script-opt">(A) A man is typing on a keyboard.</div>
    <div class="script-opt">(B) A woman is standing at a whiteboard.</div>
    <div class="script-opt">(C) Some papers have been scattered on the floor.</div>
    <div class="script-opt correct-pink">(D) Some people are looking at a book.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">3. W-Am</span>
    <div class="script-opt">(A) Some chairs have been stacked in a corner.</div>
    <div class="script-opt">(B) A rug has been rolled up against a wall.</div>
    <div class="script-opt correct-pink">(C) Some light fixtures are hanging from the ceiling.</div>
    <div class="script-opt">(D) A clock has been mounted between two windows.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">4. M-Cn</span>
    <div class="script-opt correct-pink">(A) A wooden crate is filled with vegetables.</div>
    <div class="script-opt">(B) Some shelves are being assembled.</div>
    <div class="script-opt">(C) Customers are waiting in line at a counter.</div>
    <div class="script-opt">(D) Bags of groceries have been loaded into a cart.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">5. W-Br</span>
    <div class="script-opt correct-pink">(A) Painting supplies have been laid out on the floor.</div>
    <div class="script-opt">(B) A ladder is leaning against a bookcase.</div>
    <div class="script-opt">(C) A worker is painting a doorframe.</div>
    <div class="script-opt">(D) Some brushes have been placed in a container.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">6. M-Au</span>
    <div class="script-opt">(A) A bench overlooks a harbor.</div>
    <div class="script-opt">(B) A stone wall runs along a path.</div>
    <div class="script-opt correct-pink">(C) Some water has pooled on a path.</div>
    <div class="script-opt">(D) Some boats are passing under a bridge.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. M-Au: Where is the annual conference being held this year?</span>
    <div class="script-opt">(A) Yes, every single year.</div>
    <div class="script-opt correct-pink">(B) At the Riverview Hotel downtown.</div>
    <div class="script-opt">(C) On Tuesday afternoon.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">8. W-Am: When will the new office supplies arrive?</span>
    <div class="script-opt">(A) About twenty boxes.</div>
    <div class="script-opt">(B) In the supply closet on the second floor.</div>
    <div class="script-opt correct-pink">(C) Not until later this afternoon.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">9. M-Cn: Where did you park your car this morning?</span>
    <div class="script-opt">(A) Yes, it's very clean.</div>
    <div class="script-opt correct-pink">(B) Right next to the lake in the visitor lot.</div>
    <div class="script-opt">(C) At about eight thirty.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">10. W-Br: Who is going to help us review these contracts?</span>
    <div class="script-opt correct-pink">(A) Our new legal assistant, Mr. Henderson.</div>
    <div class="script-opt">(B) Yes, I already signed it.</div>
    <div class="script-opt">(C) By the end of this month.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">11. M-Au: How did the job candidate do during the interview?</span>
    <div class="script-opt">(A) In the main conference room.</div>
    <div class="script-opt correct-pink">(B) She seemed very competent and experienced.</div>
    <div class="script-opt">(C) To apply for a marketing role.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">12. W-Am: Why don't we ask for an extension on the project deadline?</span>
    <div class="script-opt">(A) No, it was quite short.</div>
    <div class="script-opt correct-pink">(B) That sounds like a sensible idea.</div>
    <div class="script-opt">(C) Mr. Gomez is the manager.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">13. M-Cn: What time does the post office close today?</span>
    <div class="script-opt">(A) Just a package of letters.</div>
    <div class="script-opt">(B) It is across from the bank.</div>
    <div class="script-opt correct-pink">(C) At six o'clock this evening.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">14. W-Br: Have the accounting staff started using the new software yet?</span>
    <div class="script-opt">(A) A couple hundred dollars.</div>
    <div class="script-opt">(B) Tomorrow morning at nine.</div>
    <div class="script-opt correct-pink">(C) I haven't seen any of them using it yet.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">15. M-Au: Did you try the dessert at the new bakery down the street?</span>
    <div class="script-opt correct-pink">(A) It hasn't actually opened for business yet.</div>
    <div class="script-opt">(B) Yes, chocolate cake is my favorite.</div>
    <div class="script-opt">(C) Just two blocks from here.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">16. W-Am: Would you mind carrying these flyers to the reception desk?</span>
    <div class="script-opt">(A) No, I haven't received it.</div>
    <div class="script-opt correct-pink">(B) I'd be more than happy to do that.</div>
    <div class="script-opt">(C) There are about fifty copies.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">17. M-Cn: Mr. Tanaka sent everyone a gift basket to say thank you.</span>
    <div class="script-opt">(A) No, he didn't call me.</div>
    <div class="script-opt correct-pink">(B) That was very thoughtful of him.</div>
    <div class="script-opt">(C) At the local grocery store.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">18. W-Br: Which room was reserved for our department workshop?</span>
    <div class="script-opt correct-pink">(A) The Jefferson Room on the third floor.</div>
    <div class="script-opt">(B) For the entire afternoon.</div>
    <div class="script-opt">(C) All current employees.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">19. M-Au: Could you schedule a follow-up consultation with Dr. Miller?</span>
    <div class="script-opt">(A) No, she is a dentist.</div>
    <div class="script-opt correct-pink">(B) Let me check her availability calendar first.</div>
    <div class="script-opt">(C) At the corner pharmacy.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">20. W-Am: Aren't there any extra chairs available in the storage closet?</span>
    <div class="script-opt">(A) Yes, they are very comfortable.</div>
    <div class="script-opt">(B) To sit near the window.</div>
    <div class="script-opt correct-pink">(C) I think the marketing team just took the last one.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">21. M-Cn: Should I send this reimbursement form to payroll or to human resources?</span>
    <div class="script-opt correct-pink">(A) Actually, it needs to go directly to the finance department.</div>
    <div class="script-opt">(B) Yes, you should sign your name at the bottom.</div>
    <div class="script-opt">(C) The total was fifty dollars.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">22. W-Br: Where can I buy tickets for tonight's theater performance?</span>
    <div class="script-opt">(A) It starts at seven sharp.</div>
    <div class="script-opt">(B) I really enjoyed the main act.</div>
    <div class="script-opt correct-pink">(C) They are being sold exclusively online.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">23. M-Au: How do I know when the photocopier has run out of toner?</span>
    <div class="script-opt correct-pink">(A) The warning light on the control panel turns red.</div>
    <div class="script-opt">(B) It produces high-quality prints.</div>
    <div class="script-opt">(C) In the drawer underneath the paper tray.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">24. W-Am: I thought only ten people had registered for the orientation seminar.</span>
    <div class="script-opt correct-pink">(A) Actually, fifteen more signed up this morning.</div>
    <div class="script-opt">(B) In the auditorium at noon.</div>
    <div class="script-opt">(C) Welcome to our team.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">25. M-Cn: Don't we need to submit our travel expense receipts by Friday?</span>
    <div class="script-opt correct-pink">(A) I turned mine in yesterday afternoon.</div>
    <div class="script-opt">(B) By train, because it was faster.</div>
    <div class="script-opt">(C) It was an productive conference.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">26. W-Br: Who made the decision to change the company logo?</span>
    <div class="script-opt">(A) In the graphic design department.</div>
    <div class="script-opt correct-pink">(B) Natalie in public relations was in charge of that.</div>
    <div class="script-opt">(C) Yes, it looks much more modern.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">27. M-Au: When will the road repairs in front of the building be completed?</span>
    <div class="script-opt">(A) Two detour signs were installed.</div>
    <div class="script-opt correct-pink">(B) The maintenance crew said they are almost finished.</div>
    <div class="script-opt">(C) Because of water pipe installation.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">28. W-Am: Would you like to join us for lunch at the Italian bistro?</span>
    <div class="script-opt correct-pink">(A) I'm taking an important client out for lunch today.</div>
    <div class="script-opt">(B) A plate of pasta with garlic bread.</div>
    <div class="script-opt">(C) Right around twelve thirty.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">29. M-Cn: Are you taking public transit home or driving your vehicle?</span>
    <div class="script-opt">(A) A fast express route.</div>
    <div class="script-opt">(B) Parking space number fourteen.</div>
    <div class="script-opt correct-pink">(C) It depends entirely on when I finish work.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">30. W-Br: The supervisor wants an update on the client portfolio.</span>
    <div class="script-opt">(A) In a brown leather folder.</div>
    <div class="script-opt">(B) Yes, the client was very satisfied.</div>
    <div class="script-opt correct-pink">(C) I have a meeting scheduled with her at ten o'clock.</div>
  </div>
  <div class="script-question">
    <span class="script-speaker">31. M-Au: Can we review the training manual together sometime this week?</span>
    <div class="script-opt">(A) On page seventy-five.</div>
    <div class="script-opt">(B) A complete safety guide.</div>
    <div class="script-opt correct-pink">(C) My schedule is quite packed until next Monday.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>Questions 32-34</b><br>
    <b>W-Br:</b> Hi Marco, did the delivery of dairy products arrive this morning?<br>
    <b>M-Au:</b> Yes, but they delivered regular cheddar cheese instead of the shredded cheddar we ordered for the taco special.<br>
    <b>W-Br:</b> That is problematic since lunch service starts in two hours. Could you call the distributor right away and request an emergency delivery?<br>
    <b>M-Au:</b> Sure, I'll contact our sales representative immediately and see if they can send a driver over.
  </div>

  <div class="script-dialogue">
    <b>Questions 35-37</b><br>
    <b>M-Cn:</b> Hello, I'd like to book indoor court three for tennis practice this Saturday afternoon.<br>
    <b>W-Am:</b> All our indoor courts are currently reserved because of the regional championship tournament, but we do have outdoor courts available.<br>
    <b>M-Cn:</b> That should be fine as long as the weather stays clear. How much is the hourly fee?<br>
    <b>W-Am:</b> It's twenty-five dollars per hour, and we require full payment in advance to confirm your reservation.
  </div>

  <div class="script-dialogue">
    <b>Questions 38-40</b><br>
    <b>W-Am:</b> Thanks for meeting with me, Carl. We need to begin planning the public library's annual fundraising dinner.<br>
    <b>M-Au:</b> Yes, we should send out invitations soon so patrons have enough time to RSVP.<br>
    <b>W-Am:</b> Should we mail traditional paper cards or send electronic invitations this year?<br>
    <b>M-Au:</b> Emailing them through our subscriber mailing list will save money on postage and printing costs.
  </div>

  <div class="script-dialogue">
    <b>Questions 41-43</b><br>
    <b>M-Cn:</b> Excuse me, I'm trying to locate the display of portable space heaters.<br>
    <b>W-Br:</b> They were moved to aisle eight next to the dehumidifiers yesterday morning.<br>
    <b>M-Cn:</b> Great, thank you. Do you happen to know if they come with a manufacturer's warranty?<br>
    <b>W-Br:</b> Yes, all models on that shelf carry a standard one-year replacement warranty.
  </div>

  <div class="script-dialogue">
    <b>Questions 44-46</b><br>
    <b>W-Am:</b> Did you attend the presentation on the proposed manufacturing plant expansion?<br>
    <b>M-Au:</b> Yes, the architects showed 3D renderings of the new automated assembly line layout.<br>
    <b>W-Am:</b> Will construction impact our current manufacturing deadlines?<br>
    <b>M-Au:</b> They plan to build in phases over the weekend to minimize operational downtime.
  </div>

  <div class="script-dialogue">
    <b>Questions 47-49</b><br>
    <b>M-Cn:</b> Good morning. I'm calling from Summit Office Furniture regarding your order.<br>
    <b>W-Br:</b> Oh, are the conference tables ready to be delivered?<br>
    <b>M-Cn:</b> They are, but our delivery truck can only arrive around four o'clock today.<br>
    <b>W-Br:</b> That's perfectly fine. Someone will be at our loading dock until five thirty.
  </div>

  <div class="script-dialogue">
    <b>Questions 50-52</b><br>
    <b>W-Am:</b> Have you noticed that the cafeteria line has been much longer lately?<br>
    <b>M-Au:</b> Yes, since the third-floor kitchen closed for renovations, everyone comes here.<br>
    <b>W-Am:</b> Management should consider staggering lunch breaks across teams.<br>
    <b>M-Au:</b> I'll bring that suggestion up at this afternoon's departmental staff meeting.
  </div>

  <div class="script-dialogue">
    <b>Questions 53-55</b><br>
    <b>M-Cn:</b> Ms. Keller, here is the updated contract from the marketing consultant.<br>
    <b>W-Br:</b> Did they adjust the payment milestone schedule we requested?<br>
    <b>M-Cn:</b> Yes, the second payment is now due after the campaign launch, not before.<br>
    <b>W-Br:</b> Perfect. I will review it carefully and sign it before the end of the day.
  </div>

  <div class="script-dialogue">
    <b>Questions 56-58</b><br>
    <b>W-Am:</b> I heard you're leading the software demonstration for our international clients tomorrow.<br>
    <b>M-Au:</b> Yes, but I'm having trouble connecting my laptop to the projector in room B.<br>
    <b>W-Am:</b> You probably need the HDMI adapter. IT keeps a spare set in their cabinet.<br>
    <b>M-Au:</b> Thanks for the tip, I'll stop by the help desk right now.
  </div>

  <div class="script-dialogue">
    <b>Questions 59-61</b><br>
    <b>M-Cn:</b> Welcome to Lakeview Health Clinic. Do you have an appointment today?<br>
    <b>W-Br:</b> Yes, I'm scheduled for an eye examination with Dr. Patel at two fifteen.<br>
    <b>M-Cn:</b> Please fill out this brief health history questionnaire while you wait.<br>
    <b>W-Br:</b> Sure, do you have a pen I could borrow?
  </div>

  <div class="script-dialogue">
    <b>Questions 62-64</b><br>
    <b>W-Am:</b> Look at this sales report. Our online book orders increased by twenty percent last month.<br>
    <b>M-Au:</b> That promotional discount we ran on social media really paid off.<br>
    <b>W-Am:</b> We should prepare another campaign targeting college students for September.<br>
    <b>M-Au:</b> Good idea. I'll ask the design team to draft several banner concepts.
  </div>

  <div class="script-dialogue">
    <b>Questions 65-67</b><br>
    <b>M-Cn:</b> The maintenance crew is scheduled to steam-clean the building carpets this Saturday.<br>
    <b>W-Br:</b> Does that mean employees won't have access to their desks over the weekend?<br>
    <b>M-Cn:</b> Exactly. The offices will remain locked until Monday morning at seven.<br>
    <b>W-Br:</b> I'll send an all-staff email reminding everyone to take essential files home.
  </div>

  <div class="script-dialogue">
    <b>Questions 68-70</b><br>
    <b>W-Am:</b> Hi Henry, did you finish editing the promotional video for the upcoming trade show?<br>
    <b>M-Au:</b> Almost, but the client testimonials segment is running a bit too long.<br>
    <b>W-Am:</b> We can cut the middle clip and keep the video under three minutes.<br>
    <b>M-Au:</b> That will work. I'll render the final cut and send you the download link.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>Questions 71-73: Recorded Announcement</b><br>
    <b>W-Br:</b> Attention passengers on platform four. The eleven fifteen express train to Manchester has been delayed due to emergency track maintenance outside Birmingham. Passengers holding standard tickets may board the local stopping service on platform two without additional charge. We apologize for the inconvenience and thank you for your patience.
  </div>

  <div class="script-dialogue">
    <b>Questions 74-76: Voicemail Message</b><br>
    <b>M-Au:</b> Hello Mr. Chen, this is David calling from Riverside Motors. I'm calling to let you know that our technicians have finished inspecting your sedan. We replaced the front brake pads as requested, and the routine oil service is complete. Your vehicle is ready for pickup anytime before our service garage closes at six o'clock today.
  </div>

  <div class="script-dialogue">
    <b>Questions 77-79: Radio Broadcast</b><br>
    <b>W-Am:</b> Good morning listeners. Traffic on Highway 101 southbound is backed up for three miles approaching the harbor bridge due to emergency road resurfacing work. Commuters heading toward downtown are encouraged to detour via the scenic parkway or consider using the light rail system. Expect delays of up to thirty minutes during peak morning rush hour.
  </div>

  <div class="script-dialogue">
    <b>Questions 80-82: Tour Guide Introduction</b><br>
    <b>M-Cn:</b> Welcome everyone to the historic Oakwood Botanical Gardens. Our ninety-minute walking tour will take us through the rose pavilions, the tropical greenhouse, and our newly restored Japanese stone garden. Please keep to the marked gravel pathways at all times, and feel free to take photographs throughout the property.
  </div>

  <div class="script-dialogue">
    <b>Questions 83-85: Business Meeting Excerpt</b><br>
    <b>W-Br:</b> To conclude today's session, I want to review the transition timeline for our cloud accounting software. Data migration will begin next Friday evening after office hours. All staff members are required to attend a mandatory thirty-minute virtual training webinar on Thursday to familiarize themselves with the new invoicing dashboard.
  </div>

  <div class="script-dialogue">
    <b>Questions 86-88: Store Announcement</b><br>
    <b>M-Au:</b> Attention shoppers at Westwood Electronics. For the next hour only, all floor-model flat-panel televisions in our home entertainment department are an additional twenty-five percent off the lowest marked price. Please ask any store associate wearing a blue vest for assistance with item reservations and doorstep delivery options.
  </div>

  <div class="script-dialogue">
    <b>Questions 89-91: Conference Speech</b><br>
    <b>W-Am:</b> It is my distinct privilege to introduce tonight's keynote speaker, Dr. Samuel Vance. Dr. Vance has spent over two decades researching renewable energy storage systems at leading technology institutes. Tonight, he will share valuable insights into how emerging battery technologies are transforming urban transit networks across the globe.
  </div>

  <div class="script-dialogue">
    <b>Questions 92-94: Telephone Automated Message</b><br>
    <b>M-Cn:</b> Thank you for calling Apex Courier Logistics. Our regional dispatch offices are currently closed for the holiday weekend. If you are inquiring about the delivery status of an urgent international package, please visit our website and enter your ten-digit tracking code. For all other billing and invoice inquiries, please call back on Monday morning.
  </div>

  <div class="script-dialogue">
    <b>Questions 95-97: Radio Advertisement</b><br>
    <b>W-Br:</b> Looking to refresh your living room this autumn? Maple & Pine Furniture is hosting its annual warehouse clearance event this weekend. Save up to fifty percent on handcrafted solid wood dining sets, ergonomic leather armchairs, and matching coffee tables. Visit our central showroom on Commercial Avenue before Sunday evening.
  </div>

  <div class="script-dialogue">
    <b>Questions 98-100: Staff Meeting Presentation</b><br>
    <b>M-Au:</b> Before we adjourn, please review the printout showing our customer satisfaction ratings across five branch locations. As you can observe, the North Street branch received outstanding feedback for friendly service, but wait times during checkout received lower ratings. We will discuss scheduling additional cashiers during peak lunchtime hours next week.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT PART 5 READING (CÂU 101 - 130)
window.TOEIC_EXPLANATIONS[1] = {
  101: "💡 <b>Đáp án (B) after which:</b> Cụm đại từ quan hệ chỉ thời gian mang nghĩa 'sau đó'. Câu có hai mệnh đề, 'after which' nối mệnh đề sau để chỉ hành động đặt câu hỏi diễn ra sau bài thuyết trình.",
  102: "💡 <b>Đáp án (A) The last:</b> Cần mạo từ xác định 'The' đi với số thứ tự/tính từ chỉ thứ tự 'last' để bổ nghĩa cho cụm danh từ 'antique shop'.",
  103: "💡 <b>Đáp án (A) status update:</b> Cụm danh từ ghép cố định trong môi trường công sở mang nghĩa 'bản cập nhật tiến độ / trạng thái công việc'.",
  104: "💡 <b>Đáp án (B) her:</b> Cần một tính từ sở hữu đứng trước cụm danh từ 'newly published novel' (cuốn tiểu thuyết mới xuất bản của cô ấy).",
  105: "💡 <b>Đáp án (B) closely:</b> Cần một phó từ (trạng từ đuôi -ly) để bổ nghĩa cho động từ 'monitor' (theo dõi sát sao / chặt chẽ tiến độ kiểm tra chất lượng).",
  106: "💡 <b>Đáp án (C) experienced:</b> Cần tính từ đứng trước danh từ 'technician' để mô tả người thợ kỹ thuật 'có nhiều kinh nghiệm / lành nghề'.",
  107: "💡 <b>Đáp án (C) reservation:</b> Sau mạo từ 'a' cần một danh từ đếm được số ít. Cụm 'make a reservation' là colocation quen thuộc mang nghĩa 'đặt chỗ trước'.",
  108: "💡 <b>Đáp án (D) despite:</b> Giới từ 'despite' + Noun phrase ('the heavy snowstorm'). Mang nghĩa nhượng bộ: 'mặc dù bão tuyết lớn, chuyến bay vẫn cất cánh đúng giờ'.",
  109: "💡 <b>Đáp án (A) will be held:</b> Sự kiện diễn ra vào 'next Friday' (thì tương lai) và hội thảo được tổ chức (thể bị động) -> chọn 'will be held'.",
  110: "💡 <b>Đáp án (A) quickly:</b> Trạng từ bổ nghĩa cho động từ hành động 'respond' (phản hồi một cách nhanh chóng).",
  111: "💡 <b>Đáp án (C) expansion:</b> Cần một danh từ làm tân ngữ sau tính từ sở hữu 'its'. 'Expansion' có nghĩa là sự mở rộng quy mô chi nhánh.",
  112: "💡 <b>Đáp án (C) between:</b> Cấu trúc đi theo cặp từ 'between A and B' (ở giữa khung giờ A và khung giờ B).",
  113: "💡 <b>Đáp án (A) eligible:</b> Cấu trúc quen thuộc 'be eligible for something' (đủ điều kiện, đủ tiêu chuẩn nhận quyền lợi/thưởng).",
  114: "💡 <b>Đáp án (C) promptly:</b> Trạng từ mang nghĩa 'ngay lập tức / đúng giờ', bổ nghĩa cho hành động gửi báo cáo chi tiêu.",
  115: "💡 <b>Đáp án (C) whether:</b> Liên từ 'whether ... or not' dùng để diễn đạt sự lựa chọn hoặc nghi vấn liệu điều gì có xảy ra hay không.",
  116: "💡 <b>Đáp án (D) completely:</b> Phó từ mức độ bổ nghĩa cho tính từ 'satisfied' (hoàn toàn hài lòng với dịch vụ).",
  117: "💡 <b>Đáp án (A) inspection:</b> Cần danh từ sau tính từ 'routine' (buổi kiểm tra / thanh tra định kỳ).",
  118: "💡 <b>Đáp án (D) unless:</b> Liên từ chỉ điều kiện mang nghĩa 'trừ khi' (trừ khi có sự chấp thuận bằng văn bản của giám đốc).",
  119: "💡 <b>Đáp án (C) accurately:</b> Cần trạng từ bổ nghĩa cho động từ 'recorded' (được ghi chép lại một cách chính xác).",
  120: "💡 <b>Đáp án (B) exceptional:</b> Tính từ mang nghĩa 'xuất sắc / đặc biệt tốt', bổ nghĩa cho danh từ 'leadership qualities'.",
  121: "💡 <b>Đáp án (D) will have completed:</b> Có dấu hiệu 'By the end of this year' (trước thời điểm trong tương lai) -> chia thì Tương lai hoàn thành 'will have completed'.",
  122: "💡 <b>Đáp án (C) conveniently:</b> Cụm quen thuộc 'conveniently located' (tọa lạc ở vị trí vô cùng thuận tiện đi lại).",
  123: "💡 <b>Đáp án (B) representatives:</b> Cần danh từ chỉ người số nhiều làm chủ ngữ cho động từ 'are available' (các đại diện chăm sóc khách hàng).",
  124: "💡 <b>Đáp án (C) accessible:</b> Cấu trúc 'make something accessible to someone' (làm cho cái gì trở nên dễ tiếp cận đối với ai đó).",
  125: "💡 <b>Đáp án (A) prior to:</b> Cụm giới từ đồng nghĩa với 'before' (trước khi tham gia khóa đào tạo).",
  126: "💡 <b>Đáp án (D) compliance:</b> Cụm cố định 'in compliance with' (tuân thủ theo đúng các quy định an toàn lao động).",
  127: "💡 <b>Đáp án (D) significantly:</b> Trạng từ chỉ mức độ bổ nghĩa cho động từ 'increased' (doanh thu tăng trưởng một cách đáng kể).",
  128: "💡 <b>Đáp án (D) unanimously:</b> Trạng từ mang nghĩa 'nhất trí / đồng lòng', diễn tả việc hội đồng quản trị đồng thuận phê duyệt kế hoạch ngân sách.",
  129: "💡 <b>Đáp án (D) throughout:</b> Giới từ chỉ không gian / thời gian mang nghĩa 'khắp mọi nơi' ('throughout the company' - trên toàn công ty).",
  130: "💡 <b>Đáp án (B) subsequent:</b> Tính từ mang nghĩa 'xảy ra sau đó', bổ nghĩa cho danh từ 'investigation' (cuộc điều tra diễn ra sau đó đã làm rõ nguyên nhân)."
  // PART 6: ĐIỀN ĐOẠN VĂN (Câu 131 - 146)
  131: "💡 <b>Đáp án (D) renewal:</b> Cần danh từ sau tính từ sở hữu 'its', chỉ việc 'gia hạn' hợp đồng thuê mặt bằng.",
  132: "💡 <b>Đáp án (C) will provide:</b> Thì tương lai đơn diễn tả sự việc dịch vụ mới sẽ được triển khai vào tháng tới.",
  133: "💡 <b>Đáp án (A) In addition:</b> Liên từ nối mang nghĩa 'Thêm vào đó', bổ sung thêm một tiện ích mới cho cư dân.",
  134: "💡 <b>Đáp án (B) Câu nối ngữ cảnh:</b> Chọn câu liên kết logic: 'Please contact the leasing office if you have questions.'",
  135: "💡 <b>Đáp án (D) feedback:</b> Danh từ không đếm được mang nghĩa 'ý kiến đóng góp / phản hồi' từ khách hàng.",
  136: "💡 <b>Đáp án (C) regularly:</b> Trạng từ tần suất mang nghĩa 'thường xuyên', mô tả việc cập nhật hệ thống định kỳ.",
  137: "💡 <b>Đáp án (B) to enhance:</b> Dùng To-V chỉ mục đích: 'để nâng cao trải nghiệm người dùng'.",
  138: "💡 <b>Đáp án (A) Câu nối:</b> Khẳng định cam kết chất lượng dịch vụ của công ty.",
  139: "💡 <b>Đáp án (A) launch:</b> Danh từ chỉ 'buổi ra mắt / sự kiện công bố' dòng sản phẩm điện tử mới.",
  140: "💡 <b>Đáp án (C) scheduled:</b> Thể bị động 'is scheduled for' (được lên lịch diễn ra vào thời gian cụ thể).",
  141: "💡 <b>Đáp án (B) attendees:</b> Danh từ chỉ người số nhiều mang nghĩa 'những người tham dự sự kiện'.",
  142: "💡 <b>Đáp án (D) Câu nối:</b> Nhắc nhở người tham gia mang theo vé mời điện tử khi check-in.",
  143: "💡 <b>Đáp án (C) invoice:</b> Hóa đơn thanh toán gửi kèm cho bộ phận kế toán.",
  144: "💡 <b>Đáp án (C) within:</b> Giới từ chỉ khung thời gian 'within 30 days' (trong vòng 30 ngày kể từ ngày xuất hóa đơn).",
  145: "💡 <b>Đáp án (B) processed:</b> Động từ dạng bị động chỉ giao dịch thanh toán 'đã được xử lý thành công'.",
  146: "💡 <b>Đáp án (A) Câu nối:</b> Cung cấp thông tin liên hệ của phòng tài vụ nếu có thắc mắc về số tiền.",

  // PART 7: ĐỌC HIỂU ĐOẠN VĂN (Câu 147 - 200)
  147: "💡 <b>Đáp án (C):</b> Mục đích của email là thông báo lịch bảo trì thang máy tòa nhà.",
  148: "💡 <b>Đáp án (D):</b> Thông tin dòng 3: Cư dân được yêu cầu sử dụng cầu thang bộ ở phía bắc.",
  149: "💡 <b>Đáp án (B):</b> Đoạn chat: 'I am on my way' ngụ ý người gửi đang trên đường tới chỗ hẹn.",
  150: "💡 <b>Đáp án (C):</b> Người nhận đồng ý giữ chỗ ở quán cà phê trong lúc chờ đồng nghiệp.",
  151: "💡 <b>Đáp án (D):</b> Bài quảng cáo tuyển dụng vị trí chuyên viên phân tích tài chính.",
  152: "💡 <b>Đáp án (C):</b> Yêu cầu ứng viên phải có tối thiểu 3 năm kinh nghiệm trong ngành ngân hàng.",
  153: "💡 <b>Đáp án (B):</b> Hình thức nộp hồ sơ: gửi CV trực tiếp qua cổng tuyển dụng trên website.",
  154: "💡 <b>Đáp án (C):</b> Đoạn văn nêu bật tính năng tiết kiệm năng lượng của dòng máy in văn phòng mới.",
  155: "💡 <b>Đáp án (D):</b> Khách hàng mua trong tuần lễ khai trương được tặng thêm một hộp mực dự phòng.",
  156: "💡 <b>Đáp án (C):</b> Vé xem hòa nhạc được hoàn tiền 100% nếu sự kiện bị hủy do thời tiết.",
  157: "💡 <b>Đáp án (B):</b> Dòng 4: Cổng soát vé sẽ mở trước giờ biểu diễn 45 phút.",
  158: "💡 <b>Đáp án (D):</b> Khán giả không được phép mang đồ ăn và nước uống từ bên ngoài vào khán phòng.",
  159: "💡 <b>Đáp án (B):</b> Vị trí phù hợp nhất để chèn câu: [2] nối tiếp thông tin về chính sách gửi xe.",
  160: "💡 <b>Đáp án (C):</b> Bản ghi nhớ nội bộ yêu cầu nhân viên hoàn thành khảo sát môi trường làm việc.",
  161: "💡 <b>Đáp án (C):</b> Kết quả khảo sát hoàn toàn ẩn danh để bảo mật thông tin nhân sự.",
  162: "💡 <b>Đáp án (D):</b> Hạn chót nộp lại phiếu khảo sát là trước 5 giờ chiều thứ Sáu.",
  163: "💡 <b>Đáp án (B):</b> Đơn hàng bị trễ do nhà máy đối tác thiếu linh kiện lắp ráp.",
  164: "💡 <b>Đáp án (B):</b> Đại diện bán hàng đề xuất chiết khấu 10% cho đơn tiếp theo để bù đắp.",
  165: "💡 <b>Đáp án (B):</b> Người quản lý đồng ý gia hạn hợp đồng giao nhận hàng hóa.",
  166: "💡 <b>Đáp án (A):</b> Bài viết ca ngợi sự thành công của một doanh nhân khởi nghiệp địa phương.",
  167: "💡 <b>Đáp án (B):</b> Công ty mở rộng thêm 2 chi nhánh mới tại khu vực trung tâm thương mại.",
  168: "💡 <b>Đáp án (C):</b> Từ 'sound' trong đoạn 2 đồng nghĩa với 'reliable / solid' (vững chắc, đáng tin cậy).",
  169: "💡 <b>Đáp án (B):</b> Vị trí [2] giải thích rõ bước tiếp cận thị trường ban đầu của công ty.",
  170: "💡 <b>Đáp án (B):</b> Lịch trình hội thảo: phiên thảo luận chuyên đề diễn ra tại hội trường A.",
  171: "💡 <b>Đáp án (A):</b> Diễn giả chính đến từ Viện Nghiên cứu Công nghệ Ứng dụng.",
  172: "💡 <b>Đáp án (D):</b> Bữa trưa buffet nhẹ đã được bao gồm trong giá vé đăng ký tham dự.",
  173: "💡 <b>Đáp án (A):</b> Người tham gia cần đăng ký trước bàn thực hành vì số lượng chỗ ngồi có hạn.",
  174: "💡 <b>Đáp án (B):</b> Khách hàng viết thư khiếu nại về việc gói bưu phẩm bị ướt khi nhận.",
  175: "💡 <b>Đáp án (C):</b> Dịch vụ vận chuyển hứa sẽ đền bù toàn bộ giá trị hàng hóa bị hỏng hóc.",
  176: "💡 <b>Đáp án (A):</b> Thư điện tử xác nhận việc đặt phòng khách sạn cho chuyến công tác.",
  177: "💡 <b>Đáp án (D):</b> Phòng nghỉ được chọn có view hướng ra bờ sông và gồm bữa sáng miễn phí.",
  178: "💡 <b>Đáp án (C):</b> Chi phí đỗ xe qua đêm được tính thêm vào hóa đơn thanh toán lúc trả phòng.",
  179: "💡 <b>Đáp án (D):</b> Chính sách hủy phòng yêu cầu thông báo trước tối thiểu 24 giờ.",
  180: "💡 <b>Đáp án (C):</b> Vị trí [3] là vị trí phù hợp nhất để gắn câu mô tả tiện ích phòng tập gym.",
  181: "💡 <b>Đáp án (D):</b> Đoạn 1 (Thư mời) và Đoạn 2 (Lịch trình): Người nhận thư là trưởng đoàn đại biểu.",
  182: "💡 <b>Đáp án (D):</b> Xe buýt đưa đón sẽ đón khách tại sân bay quốc tế vào lúc 9 giờ sáng.",
  183: "💡 <b>Đáp án (A):</b> Buổi tiệc tối giao lưu được tổ chức tại nhà hàng trên tầng thượng.",
  184: "💡 <b>Đáp án (C):</b> Sự thay đổi phòng họp do số lượng đại biểu tham gia đông hơn dự kiến.",
  185: "💡 <b>Đáp án (B):</b> Người đại diện cần ký nhận thẻ đeo an ninh tại sảnh chính.",
  186: "💡 <b>Đáp án (B):</b> Trang web giới thiệu khóa đào tạo kỹ năng quản lý dự án trực tuyến.",
  187: "💡 <b>Đáp án (A):</b> Khóa học kéo dài trong 6 tuần và có cấp chứng chỉ hoàn thành.",
  188: "💡 <b>Đáp án (B):</b> Email phản hồi của học viên đánh giá cao phần bài tập thực hành theo nhóm.",
  189: "💡 <b>Đáp án (A):</b> Giảng viên hướng dẫn là chuyên gia có hơn 15 năm làm việc tại tập đoàn đa quốc gia.",
  190: "💡 <b>Đáp án (D):</b> Học viên đăng ký theo nhóm từ 3 người trở lên sẽ được giảm 15% học phí.",
  191: "💡 <b>Đáp án (D):</b> Bài đánh giá sản phẩm phần mềm quản lý kho hàng.",
  192: "💡 <b>Đáp án (B):</b> Giao diện trực quan, dễ thao tác ngay cả với nhân viên mới.",
  193: "💡 <b>Đáp án (B):</b> Điểm trừ duy nhất là tốc độ đồng bộ dữ liệu đám mây đôi khi bị chậm vào giờ cao điểm.",
  194: "💡 <b>Đáp án (A):</b> Bản cập nhật phần mềm phiên bản 2.1 dự kiến phát hành vào quý tới.",
  195: "💡 <b>Đáp án (A):</b> Đội ngũ hỗ trợ kỹ thuật làm việc 24/7 qua cổng chat trực tuyến.",
  196: "💡 <b>Đáp án (B):</b> Hợp đồng cung cấp suất ăn công nghiệp cho căng tin công ty.",
  197: "💡 <b>Đáp án (A):</b> Thực đơn được thay đổi hàng tuần nhằm đảm bảo cân bằng dinh dưỡng.",
  198: "💡 <b>Đáp án (D):</b> Nhà cung cấp cam kết sử dụng 100% nguyên liệu rau củ sạch có nguồn gốc rõ ràng.",
  199: "💡 <b>Đáp án (C):</b> Email khiếu nại của nhân viên về việc món tráng miệng hôm thứ Ba bị thiếu.",
  200: "💡 <b>Đáp án (A):</b> Quản lý căng tin đã gửi lời xin lỗi và bổ sung thêm trái cây tươi vào bữa phụ ngày tiếp theo."
};
