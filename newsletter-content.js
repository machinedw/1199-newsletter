// 1199SEIU Connections Newsletter - 2026 Issue #1
// Content organized into 15 pages

const CHAPTERS = [
    { id: 1, name: "Welcome & Health Resources", days: 5 },
    { id: 2, name: "Member Messages & Programs", days: 5 },
    { id: 3, name: "Classes & Meetings", days: 3 },
    { id: 4, name: "Benefit Fund Reports", days: 2 }
];

const LESSONS = [
    {
        day: 1,
        chapter: 1,
        title: "Table of Contents",
        text: "Your complete guide to retired member resources. Inside: Executive Director message, President's update, health programs, wellness classes, senior meetings, podcast Season 3, chapter meetings, and legal notices. Everything you need in one place.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
        day: 2,
        chapter: 1,
        title: "Message from Executive Director Donna Rey",
        text: "Welcome to 2026! Our theme 'Healthy Now, Healthy Later' focuses on achievable health steps. Check events at www.1199SEIUBenefits.org/rmb. Season 3 of our Health Is the Key podcast is live. Contact: (646) 473-8666 or (877) 369-8340.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
        day: 3,
        chapter: 1,
        title: "President's Message - Mary Stovall-Merrill",
        text: "Set new health habits for 2026. Schedule preventive screenings and checkups. Stay connected to community through chapter meetings, classes, or exercise. Combat 'stinking thinking' by staying positive and engaged. Retired Members Division: (646) 473-8666.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
    },
    {
        day: 4,
        chapter: 1,
        title: "Building Blocks for a Healthier You",
        text: "Focus on core health areas: balanced diet, 150 minutes weekly exercise, 7-9 hours sleep, emotional fitness, know your health numbers (BMI, blood pressure, cholesterol), avoid smoking/vaping. Small consistent steps build lasting health. Visit www.1199SEIUBenefits.org/HealthyLiving.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
    },
    {
        day: 5,
        chapter: 1,
        title: "Retired Nurses Meetings",
        text: "Quarterly meetings Feb 27 and Apr 24, noon-2pm. Connect with nurses about educational and social issues. Location: 1199SEIU, 498 Seventh Ave, RMD Conference Room 2, NYC. Zoom: www.1199SEIUBenefits.org/dfge, ID: 839 7540 7210. Call: (646) 558-8656 or (301) 715-8592.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    },
    {
        day: 6,
        chapter: 2,
        title: "President Yvonne Armstrong - Medicaid Fight",
        text: "2026 marks our collective fight to defend Medicaid, sustaining care for 70 million Americans. Trump and Republicans threaten $1 trillion in cuts. We must protect healthcare access now. State budgets called 'rainy day funds' must be used for this crisis.",
        image: "https://images.unsplash.com/photo-1579154491235-c2b76e5f0afe?w=800&q=80"
    },
    {
        day: 7,
        chapter: 2,
        title: "Seniors Out Speaking Medicare Meetings",
        text: "Monthly Medicare info webinars: Feb 24 (What's New 2026), Mar 24 (Emergency Care), Apr 28 (Telehealth). IN-PERSON: Mar 13, 10am at 498 Seventh Ave. Zoom link: www.1199SEIUBenefits.org/rsos. Conference: (646) 558-8656, ID: 999 7268 1095.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        day: 8,
        chapter: 2,
        title: "Health Is the Key Podcast - Season 3",
        text: "Season 3 is live! Exciting guest lineup with video episodes and surprise giveaways. Listen to previous episodes by scanning QR code or visit www.1199SEIUBenefits.org/health-is-the-key. Available on all major podcast platforms. Subscribe wherever you get podcasts!",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
    },
    {
        day: 9,
        chapter: 2,
        title: "Online Mind & Body Classes",
        text: "Free Zoom classes: Mondays (Tai Chi 11am), Tuesdays (Mindful Meditation 11am, Standing Yoga 1pm), Wednesdays (Chair Yoga 11am, Heart & Soul Afro Cardio 1pm), Fridays (Latin Cardio Dance 11am). Feb-Apr schedule. Call (646) 473-8761 for info.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    },
    {
        day: 10,
        chapter: 2,
        title: "Healthy Living Resource Center",
        text: "Your wellness toolkit has 6 sections: Healthy Minds, Bodies, Hearts, Eating, Babies, and Provider Relationships. Browse expert insight, wellness tools, exercise videos, screening guidelines. Visit www.1199SEIUBenefits.org/HealthyLiving. Check back often for updates!",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
    },
    {
        day: 11,
        chapter: 3,
        title: "In-Person Classes at Manhattan HQ",
        text: "Free classes at 498 Seventh Ave, 2nd floor: Mondays (Opera, Needle Work, Sharqui Dance), Tuesdays (Shakespeare, Art History, Arts & Crafts), Wednesdays (Photography, Photo Lab), Thursdays (Inspirational Choir, Sewing), Fridays (Line Dancing). Feb-Apr schedules available.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80"
    },
    {
        day: 12,
        chapter: 3,
        title: "Monthly Chapter Meetings Nationwide",
        text: "Connect with retirees at in-person and Zoom meetings across NYC (Bronx, Queens, Staten Island, Manhattan, Brooklyn), plus Leon Davis/Manhattan, Suffolk, White Plains, Hudson Valley locations. Meetings typically noon-2pm. Check www.1199SEIUBenefits.org/Retiree-Activities for details.",
        image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80"
    },
    {
        day: 13,
        chapter: 3,
        title: "Florida & Regional Chapter Meetings",
        text: "In-person Florida meetings return! Fort Myers, Palm Bay, North Port, Miami, Orlando, Delray Beach, Tampa, Port St. Lucie, Casselberry chapters. Plus Zoom meetings for Florida statewide, Puerto Rico/Virgin Islands, Maryland/Delaware/Ohio, Texas/Tennessee, New Jersey/Virginia/Pennsylvania, Washington/Oregon/California/Nevada, Alabama/Georgia.",
        image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
    },
    {
        day: 14,
        chapter: 4,
        title: "Benefit Fund Annual Reports",
        text: "Summary reports for 1199SEIU Greater NY Benefit Fund and National Benefit Fund (Health & Human Service Employees). Plan assets total $220.9M and $491.2M respectively as of Dec 31, 2024. Contact (646) 473-8666 for full reports. Self-insured plans with experience-rated contracts.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80"
    },
    {
        day: 15,
        chapter: 4,
        title: "Plan Updates & Legal Information",
        text: "Effective Jan 1, 2026: National Benefit Fund excludes surgery assistance coverage except exigent circumstances. Plans remain 'grandfathered' under Affordable Care Act. Discrimination protections apply. Language assistance available. Visit www.1199SEIUBenefits.org or call (646) 473-8666 for questions.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
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