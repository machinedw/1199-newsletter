// 1199SEIU Connections Newsletter - 2026 Issue #1
// Complete word-for-word content (Cleaned Version)
// No Spanish, No Chapter Meetings, No Annual Reports

const CHAPTERS = [
    { id: 1, name: "Welcome & Resources", days: 3 },
    { id: 2, name: "Leadership Messages", days: 5 },
    { id: 3, name: "Health & Wellness", days: 3 },
    { id: 4, name: "Programs & Classes", days: 4 }
];

const LESSONS = [
    // CHAPTER 1: WELCOME & RESOURCES
    {
        day: 1,
        chapter: 1,
        title: "Table of Contents",
        text: "3 Message from the Executive Director\n4 President's Message\n5 Discover the building blocks to support a healthier you!\n6 Message from Yvonne Armstrong, 1199SEIU President\n8 Come to a \"Seniors Out Speaking\" meeting\n8 The Healthy Living Resource Center is your wellness toolkit\n8 Tune in to SEASON 3 of our podcast!\n9 Improve your mental and physical health with these online mind and body classes!\n10 Join us for in-person classes!",
        image: "https://sspark.genspark.ai/cfimages?u1=vh%2BDHIsgxKEjgmFoafV6c2FZWAxeHIsYW4VqQ861ZTfTr%2FfmzKZWpbZ0eLbenFsDQ2N7fJSYGpghI6Ledh%2BnwrYXZPO30lOCbq%2BWTWdiHT6zBujLCwudt%2BgbbLEJu8%2FPwMJM%2FA%3D%3D&u2=cDSGT1jHAoID7ogG&width=2560"
    },
    {
        day: 2,
        chapter: 1,
        title: "Calling All Retired Nurses!",
        text: "Friday, February 27, and Friday, April 24, noon to 2:00 pm\n\nThe Retired Members Division holds quarterly meetings to help retired nurses stay connected and informed about the latest educational and social issues affecting them. You can join the nurses' meeting in person or online using the information below.\n\n1199SEIU Retired Members Division\n498 Seventh Avenue, RMD Conference Room 2\nNew York, NY 10018\n\nJoin Zoom meeting:\nwww.1199SEIUBenefits.org/dfge\nMeeting ID: 839 7540 7210\nPasscode: 088006\nCall in: (646) 558-8656 or (301) 715-8592",
        image: "https://sspark.genspark.ai/cfimages?u1=hzKUWb%2BWls6LKm6zREpvAq4McQBsCtVJfOx1bP2eY3Kkn2HA2E8uVAtcv8YdzmEZTgrFVPM2%2FtfLLuk1A0U%2By8IamBxl5ad%2FJy%2FiDWxhXnkuAsakCmLsaFxw7kekpWTELaipxQ4jsjvpMsDWHWoXTBisyHmfC2%2BQFm4W%2BZDatN7GiuERE8UbzzS36pHefkIigmw%3D&u2=fYGIbBI8G0n4Dt6%2B&width=2560"
    },
    {
        day: 3,
        chapter: 1,
        title: "Find Help When You Need It",
        text: "Life's needs can be unexpected, but you can always count on getting support at findhelp.1199SEIUBenefits.org. This search engine has been curated by your Benefit Funds to support you in locating free and low-cost community services and programs to assist you with transportation, emotional well-being, nutritional and food programs, financial and legal assistance, and more.\n\nAlthough we are pleased to share these resources and services, the offered are not benefits covered by your Benefit Funds.\n\nVisit findhelp.1199SEIUBenefits.org\n\nQUESTIONS: CALL (646) 473-8666\nOUTSIDE NYC (877) 369-8340",
        image: "https://sspark.genspark.ai/cfimages?u1=Hplr7SBsnQX7WxhkVpN%2BDiGbhkbkDalVE6DtkSFjC4mrOaTPbXmSnj6KZgJBKy%2FgzosUSpKLT%2BImM2o8EhH6%2FBmM7QV%2FIUzGy0Nk7lrTSB7gDWJr&u2=wH8EOYHBA9oTUyc%2B&width=2560"
    },

    // CHAPTER 2: LEADERSHIP MESSAGES
    {
        day: 4,
        chapter: 2,
        title: "Message from the Executive Director",
        text: "Dear Retired Members,\n\nHappy New Year! As we begin this exciting new chapter together, I'd like to take a moment to reflect on everything we accomplished this past year. I am grateful for every step we took, every challenge we met and every new idea we embraced on our health journeys.\n\nThe start of a new year can be a powerful catalyst for change—a time to focus on what we want to accomplish in the coming months. Whatever your goals may be, we're here to support you.",
        image: "https://sspark.genspark.ai/cfimages?u1=VnrEIP94yit8LBYd1Um9xpCQsMKu28PoXMtZMx31gJrwjs8oF90D6iUUVjnhdzez4tqHABQ0GgLEuk4PdhdKubBiC13nz5sQnzdg3ycBghQMj%2FRUppNH4zS0MurDYrTXq%2FgluNRUnA5Mwr0uFXzwltpYPRd4IpciQQ%3D%3D&u2=46RDW9alTFvLH8co&width=2560"
    },
    {
        day: 5,
        chapter: 2,
        title: "Executive Director - Healthy Now, Healthy Later",
        text: "We offer a variety of in-person and online classes to support your physical well-being. Preventive Care is at the heart of our journey together—and it serves as the foundation of our emerging theme and philosophy for 2026: Healthy Now, Healthy Later. This approach is about taking simple, achievable steps today that will help protect your health and keep you strong.\n\nPlease take a moment to look at the three-month class and events schedule inside. You can view it online by visiting:\nwww.1199SEIUBenefits.org/rmb/#rmb-events\n\nThis schedule also includes information about your chapter meeting dates, locations, and times.",
        image: "https://sspark.genspark.ai/cfimages?u1=VnrEIP94yit8LBYd1Um9xpCQsMKu28PoXMtZMx31gJrwjs8oF90D6iUUVjnhdzez4tqHABQ0GgLEuk4PdhdKubBiC13nz5sQnzdg3ycBghQMj%2FRUppNH4zS0MurDYrTXq%2FgluNRUnA5Mwr0uFXzwltpYPRd4IpciQQ%3D%3D&u2=46RDW9alTFvLH8co&width=2560"
    },
    {
        day: 6,
        chapter: 2,
        title: "Executive Director - Season 3 Podcast",
        text: "I'm also pleased to share that Season Three of our Health Is the Key podcast is officially live! This year, we're leveling up with more exciting episodes, an exciting mix of guests and even a few surprise giveaways along the way—so please be sure to tune in.\n\nIf you want to catch up on any earlier episodes, you can find them at:\nwww.1199SEIUBenefits.org/health-is-the-key\n\nOr subscribe wherever you get your podcasts.\n\nAs we move into the new year, let's carry this momentum forward by continuing to learn, grow and believe in the power of our health journeys. Together, we've got this, and the Benefit Funds will be here every step of the way!\n\nIn good health,\nDonna Rey, EdD",
        image: "https://sspark.genspark.ai/cfimages?u1=6udsudPQHAH3G%2BvOkHAH0vor2rk3PfGvQYbSG8BfGCSiycg2i1xoIeYhVfUw1KuJ6GS17gClb%2BPHW%2BXiPulvy4KwOK4ghUqOx2PMPWQHiyZv%2BA%3D%3D&u2=KhceobEosKu2r5Fv&width=2560"
    },
    {
        day: 7,
        chapter: 2,
        title: "President's Message - Mary Stovall-Merrill",
        text: "Dear Sisters and Brothers,\n\nWelcome to 2026! I hope your holiday season was restful and filled with spending time with your friends and loved ones. As we settle into the new year, now is the time to set new habits and plan to make changes (or keep going!) with activities that support our minds and our bodies.\n\nIt can be easy to hunker down and hibernate during the winter months, although restful days away from time to time, it is equally important to maintain social connections, even when it feels hard.",
        image: "https://sspark.genspark.ai/cfimages?u1=XBLMW5Zb3Zl2%2FnS9qtTl4T9IeTfogh06FK4tCAhMNB1SKlvCykQe4c4HjztjxS8CtEJwbd21Bnq8PhbqSrBX3vbHOIy7ri9ReuBREd%2BQJ4jJbJmMzoulGcfa514juiCqkTz9X%2BOq1WOsFV0oOb7B5u%2BN6uEFiBtaiw%3D%3D&u2=lGoQIZ5ITDoGPwFa&width=2560"
    },
    {
        day: 8,
        chapter: 2,
        title: "President's Message - Your Health Priority",
        text: "With so much change and uncertainty in the world, it is more important than ever to start the new year off with a solid bill of health. How can you know where you're going if you don't have a clear view of what's in front of you?\n\nMake your health a top priority by scheduling all of your preventive screenings and checkups with your primary care doctor as soon as possible. I understand there are certain anxieties that can make it difficult to the doctor, but having peace of mind is the best remedy.\n\nWhat's better is knowing that if there is an issue, you can start a treatment plan as soon as possible, which yields your long-term results and puts you back on the path to health.\n\nWe're also coming out of cold and flu season, so getting yourself from getting seriously sick by getting checked out and vaccinated is the best way to keep everyone safe and healthy.",
        image: "https://sspark.genspark.ai/cfimages?u1=XBLMW5Zb3Zl2%2FnS9qtTl4T9IeTfogh06FK4tCAhMNB1SKlvCykQe4c4HjztjxS8CtEJwbd21Bnq8PhbqSrBX3vbHOIy7ri9ReuBREd%2BQJ4jJbJmMzoulGcfa514juiCqkTz9X%2BOq1WOsFV0oOb7B5u%2BN6uEFiBtaiw%3D%3D&u2=lGoQIZ5ITDoGPwFa&width=2560"
    },
    {
        day: 9,
        chapter: 2,
        title: "President's Message - Stay Connected",
        text: "Sometimes it can feel hard to keep our spirits high, especially when it gets dark by 4:00 pm and many of us are still dealing with cold weather that doesn't bring its part of your total body health is creating a healthy head space and supporting your mental health.\n\nIf you can, encourage you to avoid 'stinking thinking' and stay connected to your community. The Retired Members Division offers a wide variety of ways to get involved in a new way, whether it's learning a new skill, joining a Chapter Meeting or staying active with an exercise class.\n\nHealthy habits take time but remember: every step counts. Your 1199 retired family is here to support you on your journey.\n\nYou can reach out to the Retired Members Division by calling (646) 473-8666 or (877) 369-8340 for those outside of New York.\n\nIn solidarity,\nMary Stovall-Merrill",
        image: "https://sspark.genspark.ai/cfimages?u1=XBLMW5Zb3Zl2%2FnS9qtTl4T9IeTfogh06FK4tCAhMNB1SKlvCykQe4c4HjztjxS8CtEJwbd21Bnq8PhbqSrBX3vbHOIy7ri9ReuBREd%2BQJ4jJbJmMzoulGcfa514juiCqkTz9X%2BOq1WOsFV0oOb7B5u%2BN6uEFiBtaiw%3D%3D&u2=lGoQIZ5ITDoGPwFa&width=2560"
    },
    {
        day: 10,
        chapter: 2,
        title: "Message From Yvonne Armstrong - Member Leadership",
        text: "PRESIDENT, 1199SEIU UNITED HEALTHCARE WORKERS EAST\n\nMember Leadership in Action: Onward to 2026 & the Medicaid Fightback!\n\nAs we enter a new year, we do so with the acknowledgment that 2026 will set the stage for the future of healthcare for generations to come. Our collective fight to defend Medicaid, the nation's most important healthcare program, which sustains life-saving care for 70 million Americans, is our overarching priority.\n\nWhy? Because the stability of the Medicaid system underpins everything we do—our ability to deliver quality care, to secure fair wage increases, to protect and improve our benefits, to prevent layoffs and fix the staffing crisis in our institutions, and to win real healthcare equity in this country.",
        image: "https://sspark.genspark.ai/cfimages?u1=gEhqrtNjgTadvRuv3E5%2FsQLrCNcXqBbLjy9%2BJQtUsTjPcqrBB5cR9qEkiM55R%2BS44QO7RUljRgsXXw6hS1nyUHT08FQPftanl3%2FaGpoOk%2F%2BnnT4alfSDdH%2Bx3j%2Ff2U0ROQA8d8OqqHt%2BPIw6SnlUc6v11ztT7fmlAQ%3D%3D&u2=OWHQcfYqQNvnABa7&width=2560"
    },
    {
        day: 11,
        chapter: 2,
        title: "Yvonne Armstrong - Union Strength",
        text: "If 2025 was about getting our own house in order—recentering our Union around principles of trust, transparency, and empowering members to lead—2026 is when we will unleash the full force of our collective strength as an organization.\n\nThrough our Union-wide listening tours this fall, Secretary-Treasurer Veronica Turner-Biggs and I have traveled to every corner of 1199, met with thousands of elected delegates, visited worksites and gathered input from members about how to grow as a union.\n\nThe ideas, insights and priorities shared by members are being transformed into a comprehensive plan of action that will be discussed and voted on by delegates at our Union-wide convention early next year.",
        image: "https://sspark.genspark.ai/cfimages?u1=gEhqrtNjgTadvRuv3E5%2FsQLrCNcXqBbLjy9%2BJQtUsTjPcqrBB5cR9qEkiM55R%2BS44QO7RUljRgsXXw6hS1nyUHT08FQPftanl3%2FaGpoOk%2F%2BnnT4alfSDdH%2Bx3j%2Ff2U0ROQA8d8OqqHt%2BPIw6SnlUc6v11ztT7fmlAQ%3D%3D&u2=OWHQcfYqQNvnABa7&width=2560"
    },
    {
        day: 12,
        chapter: 2,
        title: "Yvonne Armstrong - Political Victories",
        text: "This incredible work that members are undertaking to build our union from within coincides with the herculean struggles we are making to grow our political power.\n\n1199 members delivered resounding victories in the November 4 election: Democrats swept Long Island as we secured a blowout victory for Mikie Sherrill as New Jersey governor. We won important mayoral races in Boston, Buffalo, Rochester, Syracuse and Albany, and winning numerous down-ballot races in the Orlando City Council in Florida, in the NY legislature (where 22 of 24 of our candidates won), in county races in the Hudson Valley and Long Island, and beyond.\n\nA very special shoutout goes to two 1199 members at Guthrie Corning Hospital in upstate New York: RN Lauren Gaige was elected to the Corning Town Council and Justin Eberlin, Surgical Tech, was elected to the Steuben County Legislature.",
        image: "https://sspark.genspark.ai/cfimages?u1=gEhqrtNjgTadvRuv3E5%2FsQLrCNcXqBbLjy9%2BJQtUsTjPcqrBB5cR9qEkiM55R%2BS44QO7RUljRgsXXw6hS1nyUHT08FQPftanl3%2FaGpoOk%2F%2BnnT4alfSDdH%2Bx3j%2Ff2U0ROQA8d8OqqHt%2BPIw6SnlUc6v11ztT7fmlAQ%3D%3D&u2=OWHQcfYqQNvnABa7&width=2560"
    },
    {
        day: 13,
        chapter: 2,
        title: "Yvonne Armstrong - The Fight Ahead",
        text: "Trump and Republican leaders cut $1 trillion from Medicaid and are about to let the Affordable Care Act (ACA) subsidies expire, causing premiums to skyrocket for millions of people, making healthcare the defining political issue for 2026.\n\nWe need to make clear that individual states will be confronted by voters who are against these federal cuts and call on our state leaders to enact budgets that fill in the gaps. Our states have called 'rainy day funds' meant specifically for times of crisis—and it is certainly the time to draw on these resources.\n\nEverywhere, we must call attention to the fact that protecting access to healthcare is not a partisan issue: It is supported by overwhelming majorities of Democratic and Republican voters alike.\n\nWe must let politicians know that voting in any way to cut Medicaid or the ACA, or refusing to spend vital dollars needed to safeguard care, will spell the end of their political careers in the next election.",
        image: "https://sspark.genspark.ai/cfimages?u1=gEhqrtNjgTadvRuv3E5%2FsQLrCNcXqBbLjy9%2BJQtUsTjPcqrBB5cR9qEkiM55R%2BS44QO7RUljRgsXXw6hS1nyUHT08FQPftanl3%2FaGpoOk%2F%2BnnT4alfSDdH%2Bx3j%2Ff2U0ROQA8d8OqqHt%2BPIw6SnlUc6v11ztT7fmlAQ%3D%3D&u2=OWHQcfYqQNvnABa7&width=2560"
    },
    {
        day: 14,
        chapter: 2,
        title: "Yvonne Armstrong - Moving Forward",
        text: "We will be in state capitals, week after week, starting in January, with an unrelenting message that healthcare must be protected!\n\nAs we embrace this new year, clear-eyed about the heavy challenges ahead but also with deep resolve, commitment and love for our families, communities and co-workers, let's carry forward the spirit of unity that defined our movement in 2025.\n\nLet's recoup our batteries and prepare ourselves to expand the boundaries of what is possible when healthcare workers stand together.\n\nI wish you and your family a Happy New Year, and I look forward to marching alongside you in 2026.\n\nTHIS PAGE IS PAID FOR BY 1199SEIU UNITED HEALTHCARE WORKERS EAST",
        image: "https://sspark.genspark.ai/cfimages?u1=gEhqrtNjgTadvRuv3E5%2FsQLrCNcXqBbLjy9%2BJQtUsTjPcqrBB5cR9qEkiM55R%2BS44QO7RUljRgsXXw6hS1nyUHT08FQPftanl3%2FaGpoOk%2F%2BnnT4alfSDdH%2Bx3j%2Ff2U0ROQA8d8OqqHt%2BPIw6SnlUc6v11ztT7fmlAQ%3D%3D&u2=OWHQcfYqQNvnABa7&width=2560"
    },

    // CHAPTER 3: HEALTH & WELLNESS
    {
        day: 15,
        chapter: 3,
        title: "Building Blocks - Healthy Eating & Activity",
        text: "Discover the building blocks to support a healthier you!\n\nEstablishing a healthier lifestyle doesn't happen overnight—it's built step by step, block by block. Taking the first steps can feel like the hardest part. By focusing on a few core building blocks, you can strengthen your foundation for long-term well-being and reduce your risk of illness.\n\nHealthy Eating: Food fuels your body and mind. A balanced diet rich in fruits, vegetables, whole grains, lean proteins and healthy fats gives you the nutrients you need to thrive. Limit processed foods, sugary drinks and excessive salt to protect your heart, maintain energy levels.\n\nPhysical Activity: Movement is medicine. Aim for at least 150 minutes of moderate activity each week—whether it's brisk walking, dancing, biking or anything else that makes your heart beat faster. Exercise helps manage weight, improves mood, lowers blood pressure and strengthens your muscles and bones.",
        image: "https://sspark.genspark.ai/cfimages?u1=Q6rX9BhotfC7P6ymXyH1h9piPxh427aVzj1TTgJjusSJSM9%2Fir2hthMjMWUaKdTFymyisV%2FZYBZzNkFZ1DHayMJXJNsrte68Ozp%2FSeG6V24Ysak7K1Vs358F13oq6cXA7w2cISG13XM60hkmPoSvDtCsATTr6H98OQ%3D%3D&u2=MOcBF45SubuHmh2X&width=2560"
    },
    {
        day: 16,
        chapter: 3,
        title: "Building Blocks - Sleep & Emotional Fitness",
        text: "Sleep: Rest is not a luxury—it's essential. Adults should strive for seven to nine hours of quality sleep each night. Sleep recharges your body, sharpens your mind and helps regulate hormones that affect hunger, stress and immunity.\n\nEmotional Fitness: Your mental health is just as important as your physical health. Manage stress through deep breathing, mindfulness, journaling or connecting with loved ones. Don't hesitate to seek support from a counselor or health professional if you're struggling.",
        image: "https://sspark.genspark.ai/cfimages?u1=fSbyM10oojso1rGwtFHK2LvScJBU0TomddTPMTx9CXDoONyB0jdwWl2deNSJ9YLB58YCx1OzTz%2FggsFYpARv%2BmqmsPYJuspc1Swluj1DA%2FdXfTxFwFq6CMiFNDg%2FjPBTyaKijrO1YTD5iAam6BOa4JaiXmJ%2FSY1DGw%3D%3D&u2=fqhYDPM%2BII8DFNXj&width=2560"
    },
    {
        day: 17,
        chapter: 3,
        title: "Building Blocks - Know Your Numbers",
        text: "Know Your Numbers: Awareness is essential. Keeping track of your health numbers helps you and your doctor catch and treat any concerns early.\n\n• BMI (Body Mass Index): Indicator of weight and body composition.\n• Blood pressure: High blood pressure can damage your heart and arteries.\n• Blood sugar: Helps identify your risk for diabetes.\n• Cholesterol: High levels can raise the risk of heart disease.\n\nAvoid Smoking, Vaping and Other Substances: Tobacco use and recreational drugs can harm your lungs, heart and overall health. If you smoke or vape, talk to your doctor about tools and programs that can help you quit. Even small steps toward cutting down can make a big difference.\n\nPutting It All Together: Think of each of these building blocks as part of a structure. When you strengthen one area—like sleep or nutrition—you support the others.\n\nLearn more: www.1199SEIUBenefits.org/HealthyLiving",
        image: "https://sspark.genspark.ai/cfimages?u1=fSbyM10oojso1rGwtFHK2LvScJBU0TomddTPMTx9CXDoONyB0jdwWl2deNSJ9YLB58YCx1OzTz%2FggsFYpARv%2BmqmsPYJuspc1Swluj1DA%2FdXfTxFwFq6CMiFNDg%2FjPBTyaKijrO1YTD5iAam6BOa4JaiXmJ%2FSY1DGw%3D%3D&u2=fqhYDPM%2BII8DFNXj&width=2560"
    },
    {
        day: 18,
        chapter: 3,
        title: "Healthy Living Resource Center",
        text: "The Healthy Living Resource Center is your wellness toolkit\n\nThe Healthy Living Resource Center has six sections:\n• Healthy Minds\n• Healthy Bodies\n• Healthy Hearts\n• Healthy Eating\n• Healthy Babies\n• Healthy Provider Relationships\n\nBrowse each section for expert insight, wellness tools, exercise videos and screening guidelines. Be sure to check back often for updates and new information.\n\nVisit www.1199SEIUBenefits.org/HealthyLiving",
        image: "https://sspark.genspark.ai/cfimages?u1=fSbyM10oojso1rGwtFHK2LvScJBU0TomddTPMTx9CXDoONyB0jdwWl2deNSJ9YLB58YCx1OzTz%2FggsFYpARv%2BmqmsPYJuspc1Swluj1DA%2FdXfTxFwFq6CMiFNDg%2FjPBTyaKijrO1YTD5iAam6BOa4JaiXmJ%2FSY1DGw%3D%3D&u2=fqhYDPM%2BII8DFNXj&width=2560"
    },
    {
        day: 19,
        chapter: 3,
        title: "Health Is the Key Podcast - Season 3",
        text: "Tune in to SEASON 3 of our podcast!\n\nWe're excited to announce that the third season of our podcast is here! This year, we have an exciting lineup of guests, with more video episodes, and even a few surprise giveaways—so please be sure to tune in.\n\nTo listen to any of our previous episodes, visit:\nwww.1199SEIUBenefits.org/health-is-the-key\n\nOr subscribe wherever you get your podcasts!\n\nListen on:\nApple Podcasts, Spotify, Amazon Music, iHeartRadio, YouTube Music, Podcast Addict, Podchaser, Player FM, Podcast Index, TuneIn, Listen Notes, and more.",
        image: "https://sspark.genspark.ai/cfimages?u1=6udsudPQHAH3G%2BvOkHAH0vor2rk3PfGvQYbSG8BfGCSiycg2i1xoIeYhVfUw1KuJ6GS17gClb%2BPHW%2BXiPulvy4KwOK4ghUqOx2PMPWQHiyZv%2BA%3D%3D&u2=KhceobEosKu2r5Fv&width=2560"
    },

    // CHAPTER 4: PROGRAMS & CLASSES
    {
        day: 20,
        chapter: 4,
        title: "Seniors Out Speaking - February",
        text: "Come to a \"Seniors Out Speaking\" meeting\n\nThe Medicare Rights Center's \"Seniors Out Speaking\" (SOS) program provides 1199SEIU retirees with timely Medicare information via monthly webinar presentations.\n\nFebruary:\nTuesday, February 24, at 3:30 pm\nLocation: Zoom\nTopic: What's New for 2026?\n\nIN-PERSON! Friday, March 13, at 10:00 am\nTopic: Emergency and Urgently Needed Care\nThere will only be ONE in-person meeting per quarter, so attendance is important!\nLocation: 498 Seventh Avenue, Retired Members Division",
        image: "https://sspark.genspark.ai/cfimages?u1=uTjKjBcha6BDHBd0MioLfkHrzQtBP6TWHT8NLrGgyJZUqsGbcDExBjPJ8oP3gve%2FvgI3T70%2BwFQy7A87PPyqg7Oh7gzBiPcsisgiy3eUS48H%2BG0r5B3oG4oxvmcv7rMt3bozs6GBXa1SjKmL6wkrV0JVbvfaqnKVGw%3D%3D&u2=AAwfZMJ6rmUyen41&width=2560"
    },
    {
        day: 21,
        chapter: 4,
        title: "Seniors Out Speaking - March & April",
        text: "March:\nTuesday, March 24, at 3:30 pm\nLocation: Zoom\nTopic: Emergency and Urgently Needed Care\n\nApril:\nTuesday, April 28, at 3:30 pm\nLocation: Zoom\nTopic: Medicare Telehealth Coverage\n\nLink for all Zoom meetings:\nwww.1199SEIUBenefits.org/rsos\n\nIf you do not have Internet access, please use this call-in information:\nConference line: (646) 558-8656\nWebinar ID: 999 7268 1095\n\nContact mi@medicarerights.org for registration questions.\nTo access materials: www.1199SEIUBenefits.org/sos",
        image: "https://sspark.genspark.ai/cfimages?u1=uTjKjBcha6BDHBd0MioLfkHrzQtBP6TWHT8NLrGgyJZUqsGbcDExBjPJ8oP3gve%2FvgI3T70%2BwFQy7A87PPyqg7Oh7gzBiPcsisgiy3eUS48H%2BG0r5B3oG4oxvmcv7rMt3bozs6GBXa1SjKmL6wkrV0JVbvfaqnKVGw%3D%3D&u2=AAwfZMJ6rmUyen41&width=2560"
    },
    {
        day: 22,
        chapter: 4,
        title: "Online Mind & Body Classes - Mondays & Tuesdays",
        text: "Improve your mental and physical health with these online mind and body classes!\n\nWe've partnered again with Mind over Matter Fitness to bring you classes for your mental and physical well-being. View the class descriptions and join the classes online via Zoom. For more information, please call (646) 473-8761.\n\nMONDAYS:\nTai Chi – 11:00 am to 11:30 am\nExperience a gentle breath and movement meditation to help you feel more open, limber and calm.\nFebruary: 2/2, 2/9, 2/16, 2/23\nMarch: 3/2, 3/9, 3/16, 3/23\nApril: 4/6, 4/13, 4/20, 4/27\nJoin Zoom: www.1199SEIUBenefits.org/rtcc\nMeeting ID: 848 6128 3210",
        image: "https://sspark.genspark.ai/cfimages?u1=YlGwrZPtmX%2Bae%2Bx7cmIoVZtg1ha2fIManXwX%2B8Aw0tYd27RB2jKcmf7kLsSFsJb%2BNkHv7Yq%2B4dYkvS5IKq%2BjPeKHmLUbOrlVurBq4m0BSO4XfA%3D%3D&u2=B16Lwp%2Fd%2FGlDk%2FhU&width=2560"
    },
    {
        day: 23,
        chapter: 4,
        title: "Online Classes - Tuesdays",
        text: "TUESDAYS:\n\nMindful Meditation – 11:00 am to 11:30 am\nEncourages a healthy mind-body connection with meditation and breathing techniques.\nFebruary: 2/3, 2/10, 2/17, 2/24\nMarch: 3/3, 3/10, 3/17, 3/24\nApril: 4/7, 4/14, 4/21, 4/28\nJoin Zoom: www.1199SEIUBenefits.org/mmdb\nMeeting ID: 871 7247 2969\nCall in: (360) 209-5623\n\nStanding Yoga – 1:00 pm to 1:30 pm\nConnect body, breath and mind for better health—using standing poses, breathing exercises and relaxation.\nFebruary: 2/3, 2/10, 2/17, 2/24\nMarch: 3/3, 3/10, 3/17, 3/24\nApril: 4/7, 4/14, 4/21, 4/28\nJoin Zoom: www.1199SEIUBenefits.org/rsuy\nMeeting ID: 842 7889 6267",
        image: "https://sspark.genspark.ai/cfimages?u1=YlGwrZPtmX%2Bae%2Bx7cmIoVZtg1ha2fIManXwX%2B8Aw0tYd27RB2jKcmf7kLsSFsJb%2BNkHv7Yq%2B4dYkvS5IKq%2BjPeKHmLUbOrlVurBq4m0BSO4XfA%3D%3D&u2=B16Lwp%2Fd%2FGlDk%2FhU&width=2560"
    },
    {
        day: 24,
        chapter: 4,
        title: "Online Classes - Wednesdays & Fridays",
        text: "WEDNESDAYS:\n\nChair Yoga – 11:00 am to 11:30 am\nLoosen and stretch tense muscles, reduce stress, improve circulation, and build strength and balance while seated exercises.\nFebruary: 2/4, 2/11, 2/18, 2/25\nMarch: 3/4, 3/11, 3/18, 3/25\nApril: 4/1, 4/8, 4/15, 4/22\nJoin Zoom: www.1199SEIUBenefits.org/rcyc\nMeeting ID: 884 1636 6703\n\nHeart and Soul Afro Cardio Jam – 1:00 pm to 1:30 pm\nCome dance, connect and move on a soulful dance journey to the rhythms of African drums.\nFebruary: 2/4, 2/11, 2/18, 2/25\nMarch: 3/4, 3/11, 3/18, 3/25\nApril: 4/1, 4/8, 4/15, 4/22\nJoin Zoom: www.1199SEIUBenefits.org/racj\nMeeting ID: 810 2197 1718",
        image: "https://sspark.genspark.ai/cfimages?u1=YlGwrZPtmX%2Bae%2Bx7cmIoVZtg1ha2fIManXwX%2B8Aw0tYd27RB2jKcmf7kLsSFsJb%2BNkHv7Yq%2B4dYkvS5IKq%2BjPeKHmLUbOrlVurBq4m0BSO4XfA%3D%3D&u2=B16Lwp%2Fd%2FGlDk%2FhU&width=2560"
    },
    {
        day: 25,
        chapter: 4,
        title: "Online Classes - Fridays",
        text: "FRIDAYS:\n\nLatin Cardio Dance – 11:00 am to 11:30 am\nAn exhilarating cardio class set to Latin music that uses easy-to-follow choreography to keep you moving and grooving while toning your body and burning fat.\nFebruary: 2/6, 2/13, 2/20, 2/27\nMarch: 3/6, 3/13, 3/20, 3/27\nApril: 4/3, 4/10, 4/17, 4/24\nJoin Zoom: www.1199SEIUBenefits.org/rssc\nMeeting ID: 851 3295 5230\n\nRead your Connections newsletter online!\nDid you know that you can view your newsletter on your computer or smartphone before you receive it in the mail? Just scan this QR code to get all the latest news and information—and see if there are any schedule changes! If you don't have a smart phone, visit www.1199SEIUBenefits.org/RMB.",
        image: "https://sspark.genspark.ai/cfimages?u1=YlGwrZPtmX%2Bae%2Bx7cmIoVZtg1ha2fIManXwX%2B8Aw0tYd27RB2jKcmf7kLsSFsJb%2BNkHv7Yq%2B4dYkvS5IKq%2BjPeKHmLUbOrlVurBq4m0BSO4XfA%3D%3D&u2=B16Lwp%2Fd%2FGlDk%2FhU&width=2560"
    },
    {
        day: 26,
        chapter: 4,
        title: "In-Person Classes - Mondays",
        text: "Join us for in-person classes!\n\nClasses are free of charge and open to all retirees. All classes are held at our Manhattan Headquarters at 498 Seventh Avenue in the Retired Members Center on the 2nd floor, unless otherwise indicated.\n\nMONDAYS:\n\nOpera Appreciation – 10:30 am to 11:45 am\nGain a deeper knowledge of opera, whether you're a fan or only know the \"famous ones.\"\nFebruary: 2/2, 2/9, 2/23\nMarch: 3/2, 3/9, 3/16, 3/23\nApril: 4/6, 4/13, 4/20, 4/27\n\nNeedle Work – noon to 2:00 pm\nLearn how to knit and crochet in this class.\nBeginners Only\nFebruary: 2/2\nMarch: 3/2, 3/16\nApril: 4/6, 4/20\n\nAdvanced & Intermediate Only\nFebruary: 2/9, 2/23\nMarch: 3/9, 3/23\nApril: 4/13, 4/27",
        image: "https://sspark.genspark.ai/cfimages?u1=7JVylMdNl980owcGQl0ZD5QOLO9Fyo2GFfGcbaEF1g716pRdzVDGlsEQqqlfMCoaz3OWBaReebC%2Blc0XODaLKjAxGnS9hBtIAXX0ZrBceVuhyfuCgKupwTs4euatn0hMrwq5egFRDp3E9%2FOIhIrAL74bt0XxktywOA%3D%3D&u2=Qpf57wXvCvIJUH3V&width=2560"
    },
    {
        day: 27,
        chapter: 4,
        title: "In-Person Classes - Mondays & Tuesdays",
        text: "MONDAYS (continued):\n\nSharqui Belly Dance – 2:15 pm to 3:15 pm\nMove to the beat as you learn the ancient art of belly dancing in this interactive and entertaining dance class.\nFebruary: 2/2, 2/9, 2/23\nMarch: 3/2, 3/9, 3/16, 3/23\nApril: 4/6, 4/13, 4/20, 4/27\n\nTUESDAYS:\n\nShakespeare on Seventh Avenue – 10:30 am to 11:30 am\nDiscover the beauty of Shakespeare with dramatic readings of his classic plays.\nFebruary: 2/3, 2/10, 2/17, 2/24\nMarch: 3/3, 3/10, 3/17, 3/24\nApril: 4/7, 4/14, 4/21, 4/28\n\nArt History – noon to 1:00 pm\nExplore the genius of the great masters and learn the history behind their most famous works.\nFebruary: 2/3, 2/10, 2/17, 2/24\nMarch: 3/3, 3/10, 3/17, 3/24\nApril: 4/7, 4/14, 4/21, 4/28",
        image: "https://sspark.genspark.ai/cfimages?u1=7JVylMdNl980owcGQl0ZD5QOLO9Fyo2GFfGcbaEF1g716pRdzVDGlsEQqqlfMCoaz3OWBaReebC%2Blc0XODaLKjAxGnS9hBtIAXX0ZrBceVuhyfuCgKupwTs4euatn0hMrwq5egFRDp3E9%2FOIhIrAL74bt0XxktywOA%3D%3D&u2=Qpf57wXvCvIJUH3V&width=2560"
    },
    {
        day: 28,
        chapter: 4,
        title: "In-Person Classes - Tuesdays, Wednesdays & Thursdays",
        text: "TUESDAYS (continued):\n\nArts & Crafts – 1:30 pm to 3:30 pm\nUnleash your creativity with fun, do-it-yourself projects while socializing with your fellow retirees.\nFebruary: 2/3, 2/10, 2/17, 2/24\nMarch: 3/3, 3/10, 3/17, 3/24\nApril: 4/7, 4/14, 4/21, 4/28\n\nWEDNESDAYS:\n\nPhotography – 10:00 am to noon\nTap into your visual creativity and get great tips on taking amazing photos.\nFebruary: 2/4, 2/11, 2/18, 2/25\nMarch: 3/4, 3/11, 3/18, 3/25\nApril: 4/1, 4/8, 4/15, 4/22\n\nPhotography Lab – 12:30 pm to 2:30 pm\nLearn about the photo development process and try your hand at developing your own creative class.\nFebruary: 2/4, 2/11, 2/18, 2/25\nMarch: 3/4, 3/11, 3/18, 3/25\nApril: 4/1, 4/8, 4/15, 4/22",
        image: "https://sspark.genspark.ai/cfimages?u1=7JVylMdNl980owcGQl0ZD5QOLO9Fyo2GFfGcbaEF1g716pRdzVDGlsEQqqlfMCoaz3OWBaReebC%2Blc0XODaLKjAxGnS9hBtIAXX0ZrBceVuhyfuCgKupwTs4euatn0hMrwq5egFRDp3E9%2FOIhIrAL74bt0XxktywOA%3D%3D&u2=Qpf57wXvCvIJUH3V&width=2560"
    },
    {
        day: 29,
        chapter: 4,
        title: "In-Person Classes - Thursdays & Fridays",
        text: "THURSDAYS:\n\nInspirational Choir – noon to 2:00 pm\nLend your voice to this talented group of singers who explore a wide catalog of songs each week.\nFebruary: 2/5, 2/12, 2/19, 2/26\nMarch: 3/5, 3/12, 3/19, 3/26\nApril: 4/2, 4/9, 4/16, 4/23\n\nSewing – 2:30 pm to 4:30 pm\nLearn the basics of handling a needle and thread or pick up new techniques for advanced projects.\nBeginners Only\nFebruary: 2/5, 2/19\nMarch: 3/5, 3/19\nApril: 4/2, 4/16\n\nAdvanced & Intermediate Only\nFebruary: 2/12, 2/26\nMarch: 3/12, 3/26\nApril: 4/9, 4/23\n\nFRIDAYS:\n\nLine Dancing – 1:00 pm to 2:00 pm\nGet in sync with your fellow retirees as you learn steps to popular line dance routines.\nFebruary: 2/6, 2/13, 2/20, 2/27\nMarch: 3/6, 3/13, 3/20, 3/27\nApril: 3/10, 3/17, 3/24",
        image: "https://sspark.genspark.ai/cfimages?u1=7JVylMdNl980owcGQl0ZD5QOLO9Fyo2GFfGcbaEF1g716pRdzVDGlsEQqqlfMCoaz3OWBaReebC%2Blc0XODaLKjAxGnS9hBtIAXX0ZrBceVuhyfuCgKupwTs4euatn0hMrwq5egFRDp3E9%2FOIhIrAL74bt0XxktywOA%3D%3D&u2=Qpf57wXvCvIJUH3V&width=2560"
    }
];

// Utility functions
function getChapterInfo(day) {
    let cumulativeDays = 0;
    for (let chapter of CHAPTERS) {
        if (day <= cumulativeDays + chapter.days) {
            const dayInChapter = day - cumulativeDays;
            return {
                chapterId: chapter.id,
                chapterName: chapter.name,
                dayInChapter: dayInChapter,
                totalDaysInChapter: chapter.days
            };
        }
        cumulativeDays += chapter.days;
    }
    return null;
}

function getLessonByDay(day) {
    return LESSONS.find(lesson => lesson.day === day) || LESSONS[0];
}