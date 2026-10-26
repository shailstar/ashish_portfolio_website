// Content for the treatment pages, one entry per page, shown by ServicePage.vue.
// A new entry gets its URL, title and schema automatically, but still needs a line in
// public/_redirects and public/sitemap.xml (the build stops and says so if either is missing).
//
// Write each answer so its first sentence answers the question on its own:
// search engines and AI assistants often quote just that sentence.
// Name medicine groups only (SSRIs, benzodiazepines), never individual medicines or brands.
//
// navGroup places the page under a heading in the Treatments menu: 'Mood & stress' or 'Other conditions'.

export const SERVICES = {
  anxiety: {
    path: '/anxiety-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Anxiety Treatment in Jaipur | CBT & Psychiatrist | Dr. Ashish Yadav',
      description: 'Treatment for anxiety, panic attacks and social anxiety in Jaipur and online: CBT sessions, medicines only when needed, and breathwork. By a DNB psychiatrist.',
    },
    navLabel: 'Anxiety treatment',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'anxiety treatment',
    navHint: 'Worry, panic attacks, social anxiety',
    navGroup: 'Mood & stress',

    eyebrow: 'Anxiety treatment · Jaipur · In person & online',
    title: 'Anxiety treatment in Jaipur,',
    emphasis: 'that lasts.',
    lead: 'Anxiety is one of the most treatable mental health conditions, and most people feel clearly better within a few months. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), treats generalised anxiety, panic attacks, social anxiety and stress with structured CBT sessions, medicines only when needed, and breathwork, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    // What the page helps with
    conditionsTitle: 'Kinds of anxiety',
    conditionsEmphasis: 'treated here.',
    conditions: [
      { title: 'Generalised anxiety', text: 'Constant worry that is hard to switch off, with tension, restlessness and poor sleep.' },
      { title: 'Panic attacks', text: 'Sudden waves of fear with a racing heart, breathlessness or dizziness, and dread of the next attack.' },
      { title: 'Social anxiety', text: 'Intense fear of being judged, leading to avoiding meetings, calls, presentations or gatherings.' },
      { title: 'Health anxiety', text: 'Persistent worry about having a serious illness, even after normal tests and reassurance.' },
      { title: 'Phobias', text: 'Strong fear of specific things such as flying, heights, injections, driving or crowds.' },
      { title: 'Work stress and burnout', text: 'Pressure at work that spills over into sleep, mood, health and relationships.' },
    ],

    // When to seek help
    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when anxiety has lasted more than a few weeks, or when it affects your work, studies, sleep or relationships.',
    signs: [
      'You worry most days, and it is hard to stop',
      'You have physical symptoms such as palpitations, stomach upset, headaches or muscle tension',
      'You have had a panic attack, or you fear having one',
      'You avoid places, people or tasks because of anxiety',
      'You rely on alcohol, smoking or sleeping pills to calm down',
      'Your sleep, appetite or concentration has changed',
    ],

    // How treatment works, in order
    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed assessment.', text: 'Your first consultation covers your symptoms, triggers, sleep, lifestyle and medical history, and checks for physical causes that can mimic anxiety, such as thyroid problems, anaemia or too much caffeine.' },
      { title: 'A clear diagnosis and plan.', text: 'You leave knowing what kind of anxiety you have, what is keeping it going, and every sensible option for treating it.' },
      { title: 'CBT sessions.', text: 'Structured cognitive behavioural therapy helps you spot anxious thinking patterns and step by step face the situations you have been avoiding. Sessions are available in person and online.' },
      { title: 'Medicines, only when needed.', text: 'If symptoms are moderate to severe, non-addictive medicines such as SSRIs may be suggested. The decision is always made together with you.' },
      { title: 'Breathwork and yogic practices.', text: 'Slow breathing and pranayama calm the body\'s stress response. They are taught alongside treatment, not instead of it.' },
      { title: 'Follow-ups and relapse prevention.', text: 'Regular reviews track progress and adjust the plan. When you are ready, medicines are tapered slowly and you leave with a plan for keeping anxiety away.' },
    ],

    // Clinical questions, in a click-to-open FAQ and included in the FAQ schema
    answersTitle: 'Anxiety treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is an anxiety disorder?',
        a: '<p>An anxiety disorder is a medical condition in which worry or fear is stronger, more frequent or longer-lasting than the situation calls for, and gets in the way of daily life. Everyone feels anxious at times. In an anxiety disorder, the body’s alarm system goes off too easily, with physical symptoms such as a racing heart, tight chest, stomach upset or poor sleep, even when there is no real danger. It is common and very treatable.</p>',
      },
      {
        q: 'What is the best treatment for anxiety?',
        a: '<p>For most anxiety disorders, the most effective treatments are cognitive behavioural therapy (CBT) and SSRI medicines, used alone or together. Mild anxiety often improves with CBT and lifestyle changes alone. Moderate to severe anxiety, or anxiety that comes with depression, usually does better with both. The right choice depends on how severe your symptoms are, how long they have lasted, your health history and your own preference.</p>',
      },
      {
        q: 'CBT or medication for anxiety: which is better?',
        a: '<p>Both work well, and neither is best for everyone. CBT teaches skills that keep working after therapy ends, so anxiety is less likely to return once treatment stops. Medicines can bring relief sooner when anxiety is too severe to start therapy. Many people do best with both: medicine to bring symptoms down, and CBT to build skills that last.</p>',
      },
      {
        q: 'How long does anxiety treatment take?',
        a: '<p>Most people notice a real improvement within 6 to 12 weeks of starting treatment. A course of CBT is usually 8 to 16 weekly sessions. SSRI medicines take 2 to 6 weeks to start working and are usually continued for 6 to 12 months after you feel well, then reduced slowly under supervision so the anxiety is less likely to come back. Anxiety that is severe or has lasted for years may need longer.</p>',
      },
      {
        q: 'Are anxiety medicines addictive?',
        a: '<p>The medicines used for long-term anxiety treatment, SSRIs and SNRIs, are not addictive. They should still be stopped gradually and with your doctor, to avoid discontinuation symptoms. Sedative medicines called benzodiazepines can cause dependence, so they are used only for short periods, if at all.</p>',
      },
      {
        q: 'Can anxiety be treated without medicines?',
        a: '<p>Yes, often. Mild to moderate anxiety frequently improves with CBT, regular exercise, better sleep, less caffeine and alcohol, and breathing practices. Medicines are suggested only when they are likely to make a clear difference, and the decision is always yours to make together with your doctor.</p>',
      },
      {
        q: 'Is it anxiety, or something physical?',
        a: '<p>A proper assessment checks for physical causes before diagnosing anxiety. Thyroid problems, anaemia, low blood sugar, heart rhythm problems, too much caffeine and some medicines can all cause anxiety-like symptoms, so simple blood tests or an ECG may be advised. If you have chest pain or breathlessness for the first time, go to an emergency department first to rule out a heart problem.</p>',
      },
      {
        q: 'Should I see a psychiatrist or a psychologist for anxiety?',
        a: '<p>See a psychiatrist if your anxiety is severe, has not improved with therapy alone, comes with panic attacks, depression or poor sleep, or if you want to know whether medicines could help. A psychiatrist is a medical doctor who can diagnose, rule out physical causes and prescribe. Here, CBT sessions are also available with the same doctor, so assessment, therapy and medicines are all in one place.</p>',
      },
      {
        q: 'Will anxiety come back after treatment?',
        a: '<p>It can, but complete treatment lowers the risk a great deal. Finishing the full course of any medicines, reducing them slowly, and keeping up the skills learned in CBT all make relapse less likely. If early signs return, an early follow-up usually settles them before they grow.</p>',
      },
      {
        q: 'What should I do during a panic attack?',
        a: '<p>Stay where you are if it is safe, and slow your breathing: in through the nose for about 4 seconds, out through the mouth for 4 to 6 seconds. Tell yourself "This is panic, not danger. It will pass", focus on something around you, and let it peak and settle, which usually happens within minutes. The <a href="/guides/anxiety-guide">free anxiety guide</a> has the full steps and a reminder card.</p>',
      },
      {
        q: 'How can I stop constantly googling my symptoms?',
        a: '<p>Cut it down gradually rather than all at once. Keep a one-week diary of how often you check your body, search symptoms or ask for reassurance, then reduce it step by step. When the urge comes, wait 10 to 15 minutes and do something else. Each check brings short relief but keeps the worry alive. More in the <a href="/guides/anxiety-guide">anxiety guide</a>.</p>',
      },
      {
        q: 'What helps social anxiety day to day?',
        a: '<p>Face feared situations step by step with a fear ladder, focus outward on the other person rather than on how you look and sound, drop one safety behaviour at a time, and skip the detailed post-mortem afterwards. The <a href="/guides/social-anxiety-guide">social anxiety guide</a> explains each step.</p>',
      },
      {
        q: 'Can anxiety cause stomach problems or IBS?',
        a: '<p>Anxiety can trigger and worsen gut symptoms. The gut and brain talk constantly through nerves, hormones and immune signals, so stress and anxiety turn up gut sensations, and gut symptoms feed the anxiety back. Working on both ends helps, for example with daily slow diaphragmatic breathing and, if needed, gut-directed CBT. See the guides for <a href="/guides/ibs-d-guide">IBS-D</a> and <a href="/guides/ibs-c-guide">IBS-C</a>.</p>',
      },
    ],

    // Practical questions, in the FAQ accordion
    faqs: [
      {
        q: 'What happens at the first consultation for anxiety?',
        a: '<p>A 60-minute first consultation is recommended for anxiety, so there is time to understand your symptoms, history and daily life properly. You leave with a diagnosis, a clear explanation and a written plan. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'Are CBT sessions available online?',
        a: '<p>Yes. CBT sessions work well over video for most people, and are held one-to-one on Google Meet. You can also mix clinic and online sessions.</p>',
      },
      {
        q: 'How much does anxiety treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If CBT sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Do you treat anxiety in children and teenagers?',
        a: '<p>Yes. Child and adolescent psychiatry was part of Dr. Ashish Yadav\'s specialist training. Children and teenagers are always seen together with a parent or guardian, after proper consent.</p>',
      },
      {
        q: 'Can a family member join the consultation?',
        a: '<p>Yes, one family member can join with your consent. They can often add helpful details, and you can ask for part of the session to be one-to-one.</p>',
      },
    ],

    // Free guides from /public/resources
    resources: [
      { title: 'Anxiety guide', text: 'Panic attacks and health worries: what helps, step by step.', url: '/guides/anxiety-guide' },
      { title: 'Social anxiety: practical self-help', text: 'Steps you can start on your own.', url: '/guides/social-anxiety-guide' },
      { title: 'Daily stress toolkit', text: 'Short daily practices for stress.', url: '/guides/daily-stress-toolkit' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    // For the schema markup
    condition: {
      name: 'Anxiety disorders',
      alternateName: ['Generalised anxiety disorder', 'Panic disorder', 'Social anxiety disorder', 'Phobias', 'Health anxiety'],
      treatments: ['Cognitive behavioural therapy (CBT)', 'SSRI and SNRI medicines', 'Breathwork and yogic practices'],
    },
  },

  stress: {
    path: '/stress-management-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Stress Management in Jaipur | Psychiatrist & CBT | Dr. Ashish Yadav',
      description: 'Help for long-term stress in Jaipur and online: a medical assessment, CBT-based stress skills, sleep care and breathwork, with medicines only if needed. By a DNB psychiatrist.',
    },
    navLabel: 'Stress management',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'stress management',
    navHint: 'Long-term stress, tension, overwhelm',
    navGroup: 'Mood & stress',

    eyebrow: 'Stress management · Jaipur · In person & online',
    title: 'Stress management in Jaipur,',
    emphasis: 'for a calmer everyday.',
    lead: 'Stress is the body’s normal response to pressure, but when it stays switched on for weeks or months it starts to affect sleep, health, mood and relationships. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) and yoga teacher, helps people manage long-term stress with a medical assessment, CBT-based skills, sleep care and breathwork, with medicines only when an underlying condition needs them, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'Kinds of stress',
    conditionsEmphasis: 'helped here.',
    conditions: [
      { title: 'Work and study pressure', text: 'Deadlines, targets and exams that leave you tense, distracted and unable to switch off.' },
      { title: 'Chronic stress', text: 'Feeling on edge or overwhelmed most days for weeks or months, even when nothing big is happening.' },
      { title: 'Stress in the body', text: 'Headaches, neck and shoulder tension, acidity, gut upset or palpitations that flare with stress.' },
      { title: 'Stress and sleep', text: 'Lying awake with a racing mind, waking at night, or waking up already tired.' },
      { title: 'Family and relationship stress', text: 'Ongoing conflict, caregiving or big changes at home that wear you down.' },
      { title: 'After a difficult event', text: 'Stress that does not settle after an accident, illness, loss or other upsetting experience.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when stress has lasted more than a few weeks and self-help has not been enough, or when it affects your sleep, health, work or relationships.',
    signs: [
      'You feel tense, irritable or overwhelmed most days',
      'You cannot switch off, even on holidays or weekends',
      'Your sleep has become poor or unrefreshing',
      'You have physical symptoms such as headaches, acidity or palpitations that come with stress',
      'You rely on alcohol, smoking, caffeine or sleeping pills to cope',
      'You feel low, anxious or hopeless, or have lost interest in things',
    ],

    stepsTitle: 'How stress management',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed assessment.', text: 'Your first consultation covers what is causing your stress, how it shows up in your body, sleep and mood, and checks for conditions that often hide behind stress, such as anxiety, depression, burnout or thyroid problems.' },
      { title: 'A clear picture and plan.', text: 'You leave knowing whether this is everyday stress that skills can fix, or an underlying condition that needs treatment, and with a written plan for the next few weeks.' },
      { title: 'CBT-based stress skills.', text: 'Structured sessions help you notice stressful thinking patterns, solve problems step by step, set boundaries and manage time and worry. Sessions are available in person and online.' },
      { title: 'Sleep and daily routine.', text: 'A fixed wake time, morning light, movement and less late-evening screen time steady the body’s stress system and protect sleep.' },
      { title: 'Breathwork and yogic practices.', text: 'Slow breathing, pranayama and yoga nidra calm the body’s stress response. They are practical tools you can use every day, alongside treatment.' },
      { title: 'Medicines, only when needed.', text: 'Stress on its own rarely needs medicines. If an anxiety disorder, depression or a serious sleep problem is found, treatment options are discussed and decided together with you.' },
    ],

    answersTitle: 'Stress management,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is stress?',
        a: '<p>Stress is the body’s natural response to pressure or threat, in which stress hormones raise your heart rate, sharpen attention and prepare you to act. In short bursts it is helpful. When it stays switched on for weeks or months, it starts to wear down sleep, mood, concentration and physical health.</p>',
      },
      {
        q: 'When does stress become a problem?',
        a: '<p>Stress becomes a problem when it lasts for weeks, does not ease when the pressure lifts, or starts to affect your sleep, health, work or relationships. Warning signs include constant tension, irritability, poor sleep, frequent headaches or acidity, and relying on alcohol, smoking or caffeine to cope.</p>',
      },
      {
        q: 'What is the difference between stress and anxiety?',
        a: '<p>Stress is a response to a clear pressure, such as a deadline or a family problem, and it usually eases once the pressure passes. Anxiety is worry or fear that continues even without a clear cause, or is far stronger than the situation calls for. Long-term stress can turn into an anxiety disorder, which is why a proper assessment helps.</p>',
      },
      {
        q: 'Can stress cause physical symptoms?',
        a: '<p>Yes. Long-term stress commonly causes headaches, muscle tension, acidity, gut upset, palpitations, tiredness and poor sleep, and can worsen conditions such as high blood pressure, IBS and skin problems. Physical causes are checked first, so nothing important is missed.</p>',
      },
      {
        q: 'Does stress need medicines?',
        a: '<p>Usually not. Everyday and work stress mostly improves with CBT-based skills, better sleep, regular movement and breathing practices. Medicines are considered only if stress has led to an anxiety disorder, depression or a serious sleep problem, and the decision is always made together with you.</p>',
      },
      {
        q: 'How long does it take to manage stress better?',
        a: '<p>Most people notice a difference within 2 to 4 weeks of practising stress skills daily, and a short course of 4 to 8 sessions is often enough. Stress that has lasted for years, or that comes with anxiety, depression or burnout, may need longer.</p>',
      },
      {
        q: 'What can I do right now to calm stress?',
        a: '<p>Try the cyclic sigh: breathe in through the nose, take a second short sip of air on top, then breathe out slowly through the mouth, longer than the inhale. Repeat for one minute. Slow breathing like this calms the body’s stress response within minutes. The <a href="/guides/daily-stress-toolkit">daily stress toolkit</a> has five more tools.</p>',
      },
      {
        q: 'Do yoga and breathwork help with stress?',
        a: '<p>Yes. Slow breathing, pranayama, yoga and yoga nidra have good evidence for lowering stress, and they are simple to practise daily. They work best as part of a wider plan that also looks at sleep, routine and the causes of stress, not as a replacement for treatment when it is needed.</p>',
      },
      {
        q: 'Is it stress or burnout?',
        a: '<p>Stress usually feels like too much: too much pressure, urgency and tension. Burnout feels like too little: exhaustion, detachment and a sense that nothing you do makes a difference, usually after long periods of work stress. Both are common, both are treatable, and they often overlap.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for stress?',
        a: '<p>The first consultation covers what is causing your stress, how it affects your sleep, body and mood, and whether an underlying condition needs treatment. You leave with a clear explanation and a written plan. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'Are stress management sessions available online?',
        a: '<p>Yes. Sessions work well over video for most people, and are held one-to-one on Google Meet. You can also mix clinic and online sessions.</p>',
      },
      {
        q: 'How much does stress management cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If CBT-based sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Do you run stress management workshops for organisations?',
        a: '<p>Yes. Talks and workshops on stress, sleep and breathwork are offered for schools, colleges and workplaces, in person in Jaipur and online. See <a href="/talks-and-workshops">talks and workshops</a>.</p>',
      },
    ],

    resources: [
      { title: 'Daily stress toolkit', text: 'Six short, evidence-based daily practices for stress.', url: '/guides/daily-stress-toolkit' },
      { title: 'How to sleep better', text: 'Why stress steals sleep, and what helps.', url: '/guides/how-to-sleep-better' },
      { title: 'Anxiety guide', text: 'When stress turns into worry or panic.', url: '/guides/anxiety-guide' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Chronic stress',
      alternateName: ['Work stress', 'Occupational stress', 'Psychological stress'],
      treatments: ['CBT-based stress management', 'Sleep and lifestyle care', 'Breathwork and yogic practices'],
    },
  },

  burnout: {
    path: '/burnout-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Burnout Treatment in Jaipur | Psychiatrist & CBT | Dr. Ashish Yadav',
      description: 'Help for burnout and work exhaustion in Jaipur and online: a medical assessment, CBT, sleep and energy recovery, and a plan for work, with medicines only if needed. By a DNB psychiatrist.',
    },
    navLabel: 'Burnout',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'burnout treatment',
    navHint: 'Exhaustion, detachment, work fatigue',
    navGroup: 'Mood & stress',

    eyebrow: 'Burnout treatment · Jaipur · In person & online',
    title: 'Burnout treatment in Jaipur,',
    emphasis: 'to get your energy back.',
    lead: 'Burnout is a state of physical and emotional exhaustion that builds up after long periods of stress, usually at work, and it is very possible to recover from it. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) and yoga teacher, helps people recover from burnout with a medical assessment, CBT, sleep and energy recovery, and a practical plan for work, with medicines only when depression or anxiety needs treating, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'Signs of burnout',
    conditionsEmphasis: 'helped here.',
    conditions: [
      { title: 'Exhaustion', text: 'Feeling drained most days, and waking up tired even after a full night’s sleep.' },
      { title: 'Detachment and cynicism', text: 'Feeling distant, irritable or negative about work, colleagues or the people you care for.' },
      { title: 'Doing less, achieving less', text: 'Struggling to focus, falling behind and feeling that nothing you do makes a difference.' },
      { title: 'Caregiver burnout', text: 'Worn down after months or years of caring for a child, a parent or a family member who is unwell.' },
      { title: 'Student and exam burnout', text: 'Running on empty after long stretches of studying, coaching and exam pressure.' },
      { title: 'Burnout in health and care work', text: 'Doctors, nurses, teachers and others in caring roles who feel emotionally emptied by their work.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when exhaustion has lasted more than a few weeks and rest has not helped, or when it affects your work, health or relationships.',
    signs: [
      'You feel exhausted most days, and weekends or holidays do not restore you',
      'You dread work, or feel numb and detached about it',
      'You find it hard to concentrate, remember things or make decisions',
      'Your sleep has become poor, or you sleep a lot and still feel tired',
      'You are more irritable with family, colleagues or friends',
      'You feel low, hopeless or anxious much of the time. If you have thoughts that life is not worth living, please seek help today',
    ],

    stepsTitle: 'How burnout treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed assessment.', text: 'Your first consultation covers your work, stresses, sleep, energy and mood, and checks for conditions that look like burnout or come with it, such as depression, anxiety, thyroid problems, anaemia or vitamin deficiencies.' },
      { title: 'A clear picture and plan.', text: 'You leave knowing whether this is burnout, depression or both, what is draining you most, and a written plan for the first few weeks of recovery.' },
      { title: 'Rest and energy recovery.', text: 'Recovery starts by protecting sleep, building in real breaks, and slowly rebuilding energy with movement and daylight, rather than pushing through.' },
      { title: 'CBT and boundaries.', text: 'Structured sessions help you change patterns such as perfectionism and over-responsibility, set limits, and plan conversations about workload. Sessions are available in person and online.' },
      { title: 'Breathwork and yogic practices.', text: 'Slow breathing, pranayama and yoga nidra help the body switch out of constant alert and into rest, alongside treatment.' },
      { title: 'Medicines, only when needed.', text: 'Burnout itself is not treated with medicines. If depression, an anxiety disorder or a serious sleep problem is found, treatment options are discussed and decided together with you.' },
    ],

    answersTitle: 'Burnout treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is burnout?',
        a: '<p>Burnout is a state of exhaustion, detachment and reduced effectiveness caused by long-term stress that has not been managed, most often at work. The World Health Organization describes it as an occupational phenomenon rather than a medical illness. It is real, it is common, and with the right changes people recover from it.</p>',
      },
      {
        q: 'What are the three signs of burnout?',
        a: '<p>Burnout has three main signs: exhaustion, feeling distant or cynical about your work, and feeling less effective at it. Many people also notice poor sleep, irritability, headaches, frequent illness and difficulty concentrating.</p>',
      },
      {
        q: 'Is it burnout or depression?',
        a: '<p>Burnout is mostly tied to work or a specific role, and often eases when you are away from it. Depression affects every part of life, including things you used to enjoy, and usually does not lift with a break. The two often overlap, and burnout can turn into depression if it is not addressed, which is why a proper assessment helps. See <a href="/depression-treatment-jaipur">depression treatment</a>.</p>',
      },
      {
        q: 'What is the difference between stress and burnout?',
        a: '<p>Stress usually feels like too much: too much pressure, urgency and tension. Burnout feels like too little: too little energy, motivation and hope that things will change. Long-term stress that is not managed is the most common path into burnout. See <a href="/stress-management-jaipur">stress management</a>.</p>',
      },
      {
        q: 'How long does it take to recover from burnout?',
        a: '<p>Mild burnout often improves within a few weeks of real changes to rest, sleep and workload. Moderate to severe burnout usually takes several months to recover from fully. Recovery is faster when the causes are addressed, not just the symptoms.</p>',
      },
      {
        q: 'Do I need to quit my job to recover from burnout?',
        a: '<p>Usually not. Many people recover while staying in their job by changing workload, boundaries, sleep and how they recover after work. Sometimes a short break from work helps, and occasionally a bigger change is the right choice, but this is decided carefully, not in the middle of exhaustion.</p>',
      },
      {
        q: 'Does burnout need medicines?',
        a: '<p>Burnout on its own is not treated with medicines. Treatment focuses on recovery, CBT, sleep and changes at work. If depression, an anxiety disorder or a sleep problem has developed alongside burnout, medicines may help, and this is always decided together with you.</p>',
      },
      {
        q: 'Can burnout cause physical symptoms?',
        a: '<p>Yes. Burnout commonly causes tiredness, headaches, muscle aches, stomach and gut problems, frequent colds and poor sleep. Physical causes such as thyroid problems, anaemia and vitamin deficiencies are checked, because they can cause similar tiredness.</p>',
      },
      {
        q: 'What can I do today to start recovering from burnout?',
        a: '<p>Start small: keep the same wake time every day, take one real break away from screens during work, walk for 10 minutes after lunch, and end the day with a short body scan or yoga nidra. Pick one, keep it for two weeks, then add the next. The <a href="/guides/daily-stress-toolkit">daily stress toolkit</a> explains each one.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for burnout?',
        a: '<p>A 60-minute first consultation is recommended, so there is time to understand your work, energy, sleep and mood properly. You leave with a clear explanation and a written recovery plan. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'Can you give a medical certificate for time off work?',
        a: '<p>If, after assessment, a period of rest is medically advised, a certificate can be provided. This is decided based on your health, not on request alone.</p>',
      },
      {
        q: 'Are burnout sessions available online?',
        a: '<p>Yes. Sessions work well over video for most people, and are held one-to-one on Google Meet. You can also mix clinic and online sessions.</p>',
      },
      {
        q: 'How much does burnout treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If CBT sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Do you run burnout workshops for organisations?',
        a: '<p>Yes. Talks and workshops on burnout, stress and recovery are offered for workplaces, hospitals, schools and colleges, in person in Jaipur and online. See <a href="/talks-and-workshops">talks and workshops</a>.</p>',
      },
    ],

    resources: [
      { title: 'Daily stress toolkit', text: 'Six short, evidence-based daily practices for recovery.', url: '/guides/daily-stress-toolkit' },
      { title: 'How to sleep better', text: 'Rebuilding sleep, the first step in recovery.', url: '/guides/how-to-sleep-better' },
      { title: 'PHQ-9 mood check', text: 'Check whether low mood has become depression.', url: '/phq9.html' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Burnout',
      alternateName: ['Occupational burnout', 'Work burnout', 'Caregiver burnout'],
      treatments: ['Cognitive behavioural therapy (CBT)', 'Sleep and energy recovery', 'Breathwork and yogic practices'],
    },
  },

  depression: {
    path: '/depression-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Depression Treatment in Jaipur | Psychiatrist & CBT | Dr. Ashish Yadav',
      description: 'Treatment for depression, low mood and burnout in Jaipur and online: CBT sessions, medicines only when needed, sleep and lifestyle care. By a DNB psychiatrist.',
    },
    navLabel: 'Depression treatment',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'depression treatment',
    navHint: 'Low mood, burnout, loss of interest',
    navGroup: 'Mood & stress',

    eyebrow: 'Depression treatment · Jaipur · In person & online',
    title: 'Depression treatment in Jaipur,',
    emphasis: 'one step at a time.',
    lead: 'Depression is a common, treatable medical condition, and with the right treatment most people recover and get back to the life they want. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), treats depression, long-standing low mood and burnout with structured CBT sessions, medicines only when needed, and attention to sleep, routine and lifestyle, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'Kinds of depression',
    conditionsEmphasis: 'treated here.',
    conditions: [
      { title: 'Depression', text: 'Low mood, loss of interest and low energy most days for two weeks or more, affecting daily life.' },
      { title: 'High-functioning depression', text: 'Keeping up at work and home while feeling low, empty or exhausted inside, sometimes for years.' },
      { title: 'Burnout and exhaustion', text: 'Feeling drained, detached and less effective, often after long periods of stress at work or home.' },
      { title: 'Emotional numbness', text: 'Feeling flat or empty, unable to enjoy things or connect with the people around you.' },
      { title: 'Depression with anxiety', text: 'Low mood together with constant worry, restlessness or panic, which is very common and treated together.' },
      { title: 'Depression after a life event', text: 'Low mood that does not lift after a loss, a break-up, a job change or a health problem.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when low mood or loss of interest has lasted more than two weeks, or when it affects your work, studies, relationships or self-care.',
    signs: [
      'You feel low, empty or hopeless most of the day, nearly every day',
      'You have lost interest or pleasure in things you used to enjoy',
      'Your sleep, appetite or weight has changed noticeably',
      'You feel tired, slowed down, or find it hard to concentrate and decide',
      'You feel worthless or guilty much of the time',
      'You have thoughts that life is not worth living. If so, please seek help today',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed assessment.', text: 'Your first consultation covers your mood, sleep, energy, stresses and history, and checks for physical causes that can cause or worsen depression, such as thyroid problems, anaemia or vitamin deficiencies.' },
      { title: 'A clear diagnosis and plan.', text: 'You leave knowing what kind of depression you have, how severe it is, what may be keeping it going, and every sensible option for treating it.' },
      { title: 'CBT sessions.', text: 'Structured cognitive behavioural therapy helps you notice and change the thinking patterns and habits that keep low mood going, and gradually rebuild activity and routine. Sessions are available in person and online.' },
      { title: 'Medicines, only when needed.', text: 'For moderate to severe depression, non-addictive antidepressants such as SSRIs may be suggested. The decision is always made together with you.' },
      { title: 'Sleep, movement and yogic practices.', text: 'Regular sleep, daily movement, morning light, breathwork and yoga support recovery. They are used alongside treatment, not instead of it.' },
      { title: 'Follow-ups and relapse prevention.', text: 'Regular reviews track progress and adjust the plan. When you have been well for long enough, medicines are reduced slowly and you leave with a plan to spot and act on early warning signs.' },
    ],

    answersTitle: 'Depression treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is depression?',
        a: '<p>Depression is a medical condition in which low mood or loss of interest lasts most of the day, nearly every day, for at least two weeks, and affects how you think, feel, sleep and manage daily life. It is not weakness, laziness or something you can simply snap out of. It involves real changes in the brain and body, and it is treatable.</p>',
      },
      {
        q: 'What is the best treatment for depression?',
        a: '<p>For most people, the most effective treatments are talking therapy such as cognitive behavioural therapy (CBT), antidepressant medicines, or both together. Mild depression often improves with CBT, exercise and better sleep alone. Moderate to severe depression usually does best with a combination of therapy and medicine. The right choice depends on how severe it is, how long it has lasted, your health history and your own preference.</p>',
      },
      {
        q: 'Therapy or medication for depression: which is better?',
        a: '<p>Both work, and for moderate to severe depression the combination usually works best. CBT builds skills that keep protecting you after therapy ends, which lowers the chance of depression returning. Medicines can lift symptoms enough to make daily life and therapy manageable when depression is severe. Many people start with both and later continue with the skills alone.</p>',
      },
      {
        q: 'How long does depression treatment take?',
        a: '<p>Most people start to feel better within 4 to 8 weeks of starting treatment. Antidepressants usually take 2 to 4 weeks to begin working and 6 to 8 weeks for their full effect, and are generally continued for at least 6 to 12 months after you feel well, longer if depression has come back before. A course of CBT is often 12 to 20 weekly sessions.</p>',
      },
      {
        q: 'Are antidepressants addictive?',
        a: '<p>No. Antidepressants such as SSRIs and SNRIs are not addictive and do not cause cravings or a "high". They should still be reduced gradually with your doctor rather than stopped suddenly, to avoid discontinuation symptoms such as dizziness or irritability.</p>',
      },
      {
        q: 'Will I have to take antidepressants for life?',
        a: '<p>Usually not. Most people take them for a defined period, typically 6 to 12 months after they feel well, and then reduce them slowly under supervision. People who have had several episodes of depression may benefit from taking them for longer, and this is discussed openly with you.</p>',
      },
      {
        q: 'Can depression be treated without medicines?',
        a: '<p>Yes, often. Mild to moderate depression frequently improves with CBT, regular exercise, a steady sleep routine, daily structure and reduced alcohol. Medicines are suggested only when they are likely to make a clear difference, and the decision is always made together with you.</p>',
      },
      {
        q: 'Is it depression or bipolar disorder?',
        a: '<p>It matters to find out, because the treatment is different. If you have ever had a period of unusually high energy, very little need for sleep, racing thoughts or reckless decisions lasting several days, tell your psychiatrist. A careful history at the first consultation checks for this before any treatment is started.</p>',
      },
      {
        q: 'What is high-functioning depression?',
        a: '<p>High-functioning depression is a common way of describing depression in people who keep going to work, studying and caring for others while feeling low, empty, tired or joyless inside. It is not a separate diagnosis, but it is often a milder, long-lasting form of depression. Because life looks fine from the outside, it is easy to miss and to put off getting help, yet it responds well to the same treatments.</p>',
      },
      {
        q: 'What is the difference between sadness, burnout and depression?',
        a: '<p>Sadness is a normal reaction that eases with time. Burnout is exhaustion and detachment linked to ongoing stress, usually at work. Depression is a medical condition where low mood or loss of interest lasts most of the day for at least two weeks and affects sleep, energy, concentration and daily life. Burnout can turn into depression if it is not addressed.</p>',
      },
      {
        q: 'Can poor sleep cause depression?',
        a: '<p>Sleep and mood affect each other in both directions. People with insomnia are about 10 times more likely to have depression, and sleep problems often appear before other symptoms. Fixing sleep, with a fixed wake time, morning light and less screen time before bed, very often lifts mood. Read <a href="/guides/how-to-sleep-better">How to sleep better</a>.</p>',
      },
      {
        q: 'What daily habits help with low mood?',
        a: '<p>Small, steady habits help most: the same wake time every day with daylight soon after, a brisk 10-minute walk, writing one line that names how you feel, and a short body scan or yoga nidra in the evening. Start with one, keep it for two weeks, then add the next. The <a href="/guides/daily-stress-toolkit">daily stress toolkit</a> explains each one.</p>',
      },
      {
        q: 'Could mood changes before my period be PMDD?',
        a: '<p>Possibly. If low mood, irritability or anxiety reliably appear in the days before your period and ease once it starts, it may be premenstrual dysphoric disorder (PMDD). Track your symptoms daily for two cycles to confirm the pattern, and seek help if they disrupt work, relationships or daily life. See the <a href="/guides/pmdd-guide">PMDD action plan</a>.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for depression?',
        a: '<p>A 60-minute first consultation is recommended, so there is time to understand your mood, sleep, history and daily life properly. You leave with a diagnosis, a clear explanation and a written plan. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'I am already taking antidepressants from another doctor. Can I consult?',
        a: '<p>Yes. Bring your current prescriptions, and do not stop or change any medicine before the consultation. Your treatment will be reviewed and any changes made gradually and safely.</p>',
      },
      {
        q: 'Are CBT sessions for depression available online?',
        a: '<p>Yes. CBT sessions work well over video for most people, and are held one-to-one on Google Meet. You can also mix clinic and online sessions.</p>',
      },
      {
        q: 'How much does depression treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If CBT sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Can a family member join the consultation?',
        a: '<p>Yes, one family member can join with your consent. They can often add helpful details, and you can ask for part of the session to be one-to-one.</p>',
      },
    ],

    resources: [
      { title: 'PHQ-9 mood check', text: 'A standard 9-question check of low mood.', url: '/phq9.html' },
      { title: 'How to sleep better', text: 'Why sleep and mood are linked, and what helps.', url: '/guides/how-to-sleep-better' },
      { title: 'Daily stress toolkit', text: 'Six short daily practices for stress.', url: '/guides/daily-stress-toolkit' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Depression',
      alternateName: ['Major depressive disorder', 'Persistent depressive disorder', 'High-functioning depression', 'Low mood', 'Burnout'],
      treatments: ['Cognitive behavioural therapy (CBT)', 'Antidepressant medicines (SSRIs and SNRIs)', 'Exercise, sleep and lifestyle care'],
    },
  },

  bipolar: {
    path: '/bipolar-disorder-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Bipolar Disorder Treatment in Jaipur | Psychiatrist | Dr. Ashish Yadav',
      description: 'Diagnosis and long-term treatment for bipolar disorder in Jaipur and online: mood stabilising medicines, regular monitoring, psychoeducation and family support. By a DNB psychiatrist.',
    },
    navLabel: 'Bipolar disorder',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'bipolar disorder treatment',
    navHint: 'Mood swings, highs and lows',
    navGroup: 'Mood & stress',

    eyebrow: 'Bipolar disorder treatment · Jaipur · In person & online',
    title: 'Bipolar disorder treatment in Jaipur,',
    emphasis: 'for steadier days.',
    lead: 'Bipolar disorder is a long-term medical condition with periods of very high or irritable mood and periods of depression, and with regular treatment most people stay well and live full lives. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), diagnoses and treats bipolar disorder with mood stabilising medicines, regular monitoring, psychoeducation, sleep and routine care and family support, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'What is',
    conditionsEmphasis: 'treated here.',
    conditions: [
      { title: 'Bipolar I disorder', text: 'Episodes of mania, with very high energy, little need for sleep and risky decisions, usually alongside episodes of depression.' },
      { title: 'Bipolar II disorder', text: 'Milder highs, called hypomania, together with longer and often heavier periods of depression.' },
      { title: 'Cyclothymia', text: 'Frequent ups and downs in mood over at least two years that are milder than full episodes but still disrupt life.' },
      { title: 'Bipolar depression', text: 'The low phase of bipolar disorder, which needs a different treatment from ordinary depression.' },
      { title: 'Mixed episodes', text: 'High energy and restlessness at the same time as low mood, which can feel especially distressing.' },
      { title: 'Second opinions', text: 'A careful review if you are unsure of your diagnosis, or your current treatment is not working well.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist if you have had periods of unusually high or irritable mood, or if depression keeps coming back. If someone is in danger or out of control, go to the nearest emergency department.',
    signs: [
      'You have had days of very high energy, little need for sleep and racing thoughts',
      'Others have noticed you talking fast, spending heavily or taking unusual risks',
      'You have had periods of depression that came back several times',
      'Your mood swings between highs and lows that affect work and relationships',
      'Antidepressants made you feel wired, restless or unusually high',
      'You or a family member has been diagnosed with bipolar disorder before',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A careful assessment.', text: 'Your first consultation takes a detailed history of past highs and lows, often with a family member, and checks for physical causes such as thyroid problems, and for the effects of alcohol, drugs or other medicines.' },
      { title: 'A clear diagnosis and plan.', text: 'You leave knowing your diagnosis, what it means, and the treatment options, with time to ask every question you have.' },
      { title: 'Mood stabilising medicines.', text: 'Medicines are the foundation of bipolar treatment. Mood stabilisers and related medicines prevent new episodes and treat current ones. They are chosen with you and reviewed regularly.' },
      { title: 'Regular monitoring.', text: 'Some medicines need blood tests to check levels, kidney, thyroid and other health markers. Regular follow-ups catch side effects early and keep the dose right.' },
      { title: 'Psychoeducation and therapy.', text: 'Learning your early warning signs, tracking your mood, and building a relapse plan with your family make episodes less likely. Structured therapy helps alongside medicines.' },
      { title: 'Sleep, routine and lifestyle.', text: 'Steady sleep, regular daily routines and avoiding alcohol and drugs protect against relapse. Gentle yoga and breathing practices can support wellbeing, alongside medicines, never instead of them.' },
    ],

    answersTitle: 'Bipolar disorder,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is bipolar disorder?',
        a: '<p>Bipolar disorder is a long-term medical condition in which mood moves between episodes of mania or hypomania, with very high energy, and episodes of depression, with periods of normal mood in between. It involves changes in how the brain regulates mood, energy and sleep. It is not a weakness or a personality flaw, and it is treatable.</p>',
      },
      {
        q: 'What are the signs of mania?',
        a: '<p>Signs of mania include very high or irritable mood, much less need for sleep, talking fast, racing thoughts, big plans, overspending and risky decisions, lasting at least a week or needing hospital care. Hypomania is a milder form that lasts at least four days. People often do not see the change in themselves, so family members usually notice first.</p>',
      },
      {
        q: 'Is it bipolar disorder or just mood swings?',
        a: '<p>Everyday mood swings last hours and follow events. In bipolar disorder, mood changes last days to weeks, come with changes in sleep, energy and behaviour, and are clearly different from your usual self. A careful history from a psychiatrist, ideally with a family member, is the only reliable way to tell the difference.</p>',
      },
      {
        q: 'What is the best treatment for bipolar disorder?',
        a: '<p>The most effective treatment for bipolar disorder is long-term mood stabilising medicine combined with psychoeducation, regular sleep and routine, and family support. Medicines treat episodes and prevent new ones. Therapy and lifestyle care make relapse less likely, but they do not replace medicines.</p>',
      },
      {
        q: 'Will I need medicines for life?',
        a: '<p>Most people with bipolar disorder benefit from long-term treatment, because stopping medicines greatly raises the risk of a new episode. The aim is the lowest effective dose with the fewest side effects. Any change, including stopping, should only be made slowly with your psychiatrist.</p>',
      },
      {
        q: 'Why are blood tests needed in bipolar treatment?',
        a: '<p>Some mood stabilising medicines need regular blood tests to keep the dose in a safe and effective range and to check the kidneys, thyroid, liver, blood sugar and weight. These checks are a routine part of safe treatment, and how often you need them depends on your medicines.</p>',
      },
      {
        q: 'Why are antidepressants used carefully in bipolar disorder?',
        a: '<p>Antidepressants taken on their own can trigger a high or speed up mood cycles in some people with bipolar disorder. That is why bipolar depression is treated differently from ordinary depression, usually with mood stabilising medicines, and why checking for past highs matters before starting treatment for depression.</p>',
      },
      {
        q: 'Can people with bipolar disorder live a normal life?',
        a: '<p>Yes. With regular treatment, many people with bipolar disorder work, study, marry, raise families and stay well for long periods. Taking medicines regularly, protecting sleep, avoiding alcohol and drugs and acting early on warning signs make the biggest difference.</p>',
      },
      {
        q: 'Is bipolar disorder hereditary?',
        a: '<p>Bipolar disorder runs in families, and having a parent or sibling with it raises the risk, but most relatives of people with bipolar disorder never develop it. Genes, sleep disruption, stress and substance use all play a part.</p>',
      },
      {
        q: 'Can bipolar disorder be treated during pregnancy?',
        a: '<p>Yes, with careful planning. Some medicines are safer than others in pregnancy, and stopping treatment suddenly raises the risk of relapse, especially after delivery. If you are planning a pregnancy, discuss it with your psychiatrist in advance so treatment can be adjusted safely.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for bipolar disorder?',
        a: '<p>A 60-minute first consultation is recommended, so there is time for a detailed history of past highs and lows. It helps a great deal if a family member who knows you well can join. Bring all previous prescriptions, discharge summaries and blood reports.</p>',
      },
      {
        q: 'I am already on treatment from another doctor. Can I consult?',
        a: '<p>Yes. Bring your current prescriptions and recent blood reports, and do not stop or change any medicine before the consultation. Your treatment will be reviewed and any changes made gradually and safely.</p>',
      },
      {
        q: 'Can follow-ups be online?',
        a: '<p>Yes. Once you are stable, follow-ups work well online on Google Meet, with blood tests done at a lab near you. An in-person visit may be advised during an episode or when starting new medicines.</p>',
      },
      {
        q: 'How much does bipolar treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. Blood tests, when needed, are done at a lab of your choice and paid for separately.</p>',
      },
      {
        q: 'What should my family do if a high or low episode starts?',
        a: '<p>Contact your psychiatrist early, at the first warning signs, as treatment can often be adjusted before an episode becomes severe. If the person is at risk of harming themselves or others, or is out of control, take them to the nearest emergency department.</p>',
      },
    ],

    resources: [
      { title: 'PHQ-9 mood check', text: 'A standard 9-question check of low mood.', url: '/phq9.html' },
      { title: 'How to sleep better', text: 'Steady sleep is one of the best protections against relapse.', url: '/guides/how-to-sleep-better' },
      { title: 'Daily stress toolkit', text: 'Short daily practices for steadier days.', url: '/guides/daily-stress-toolkit' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Bipolar disorder',
      alternateName: ['Bipolar I disorder', 'Bipolar II disorder', 'Cyclothymia', 'Manic depression', 'Bipolar affective disorder'],
      treatments: ['Mood stabilising medicines', 'Psychoeducation and relapse prevention', 'Sleep, routine and family support'],
    },
  },

  sleep: {
    path: '/insomnia-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Insomnia & Sleep Problems Treatment in Jaipur | Dr. Ashish Yadav',
      description: 'Treatment for insomnia and sleep problems in Jaipur and online: CBT for insomnia (CBT-I), treatment of the anxiety or low mood behind poor sleep, and short-term medicines only if needed.',
    },
    navLabel: 'Sleep problems',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'insomnia treatment',
    navHint: 'Insomnia, night waking, poor sleep',
    navGroup: 'Mood & stress',

    eyebrow: 'Insomnia & sleep problems · Jaipur · In person & online',
    title: 'Insomnia treatment in Jaipur,',
    emphasis: 'for nights that restore you.',
    lead: 'Insomnia is one of the most common and most treatable sleep problems, and most people sleep clearly better within a few weeks of the right treatment. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) and yoga teacher, treats insomnia and other sleep problems with CBT for insomnia (CBT-I), treatment of the anxiety, low mood or stress behind poor sleep, and medicines only for short periods when needed, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'Sleep problems',
    conditionsEmphasis: 'treated here.',
    conditions: [
      { title: 'Trouble falling asleep', text: 'Lying awake for a long time with a busy mind, even when you feel tired.' },
      { title: 'Waking at night or too early', text: 'Waking up in the night or before dawn and not being able to get back to sleep.' },
      { title: 'Unrefreshing sleep', text: 'Sleeping enough hours but still waking up tired, foggy or irritable.' },
      { title: 'Sleep with anxiety or depression', text: 'Poor sleep that comes with worry or low mood, where each makes the other worse.' },
      { title: 'Body clock problems', text: 'Falling asleep and waking very late, often after shift work, travel or late-night screens.' },
      { title: 'Depending on sleeping pills', text: 'Wanting to sleep well without relying on sleeping pills you have taken for months or years.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when poor sleep happens three or more nights a week for more than a month, or when it affects your mood, work or health during the day.',
    signs: [
      'It takes you more than 30 minutes to fall asleep most nights',
      'You wake in the night and lie awake for a long time',
      'You feel tired, irritable or unfocused during the day',
      'You worry about sleep, or dread going to bed',
      'You need sleeping pills or alcohol to fall asleep',
      'Poor sleep comes with low mood, anxiety or racing thoughts',
    ],

    stepsTitle: 'How insomnia treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed sleep assessment.', text: 'Your first consultation covers your sleep pattern, routine, mood, stress, caffeine, screens and medicines, and checks for physical causes such as thyroid problems, pain or restless legs.' },
      { title: 'A sleep diary.', text: 'Recording your sleep for one to two weeks shows the real pattern, which is often different from how it feels, and guides the treatment plan.' },
      { title: 'CBT for insomnia (CBT-I).', text: 'CBT-I is the first-choice treatment for long-term insomnia. It resets your sleep pattern with a fixed wake time, better use of time in bed and calming the worry about sleep. Sessions are available in person and online.' },
      { title: 'Treating what is behind poor sleep.', text: 'If anxiety, depression, stress or another condition is keeping you awake, treating it properly is often what finally fixes sleep.' },
      { title: 'Breathwork and yoga nidra.', text: 'Slow breathing, a body scan or yoga nidra in the evening help the body switch from alert to rest, alongside treatment.' },
      { title: 'Medicines, only when needed.', text: 'Sleeping pills are used only for short periods, if at all, because some can cause dependence. If you already take them, they can be reduced slowly and safely as your sleep improves.' },
    ],

    answersTitle: 'Insomnia treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is insomnia?',
        a: '<p>Insomnia is difficulty falling asleep, staying asleep or waking too early, at least three nights a week, even when you have the chance to sleep, along with tiredness or poor functioning during the day. When it lasts three months or more, it is called chronic insomnia. It is very common and very treatable.</p>',
      },
      {
        q: 'What is the best treatment for insomnia?',
        a: '<p>CBT for insomnia (CBT-I) is the first-choice treatment for long-term insomnia and is recommended by international sleep guidelines ahead of sleeping pills. It works for most people within 4 to 8 sessions, and its benefits last after treatment ends, unlike sleeping pills, whose effect stops when you stop taking them.</p>',
      },
      {
        q: 'What is CBT-I?',
        a: '<p>CBT-I, or cognitive behavioural therapy for insomnia, is a structured, short treatment that retrains your sleep. It includes a fixed wake time, spending only as long in bed as you actually sleep, getting up when you cannot sleep, and changing the worries and habits that keep insomnia going.</p>',
      },
      {
        q: 'Are sleeping pills safe?',
        a: '<p>Some sleeping pills can cause dependence, tolerance and next-day drowsiness, especially sedatives such as benzodiazepines, so they are used only for short periods, if at all. Other medicines may be considered when insomnia comes with anxiety or depression. Never stop sleeping pills you have taken for a long time suddenly; reduce them slowly with your doctor.</p>',
      },
      {
        q: 'Can anxiety or depression cause insomnia?',
        a: '<p>Yes, and the link works both ways. People with insomnia are about 10 times more likely to have depression and about 17 times more likely to have anxiety, and poor sleep often appears before other symptoms. Treating the anxiety or low mood, together with sleep itself, usually works best.</p>',
      },
      {
        q: 'What is the 20-minute rule for sleep?',
        a: '<p>If you have been lying awake for about 20 minutes, get out of bed, go to another dim room and do something calm until you feel sleepy, then return to bed. This teaches your brain that bed is for sleeping, not for lying awake. The <a href="/guides/how-to-sleep-better">How to sleep better</a> guide explains it in full.</p>',
      },
      {
        q: 'How many hours of sleep do I need?',
        a: '<p>Most adults need 7 to 9 hours of sleep a night, though needs vary from person to person. How you feel during the day matters more than the exact number. Regular sleep and wake times are just as important as total hours.</p>',
      },
      {
        q: 'Could my sleep problem be sleep apnoea?',
        a: '<p>It could be, if you snore loudly, stop breathing or gasp during sleep, or feel very sleepy during the day despite enough hours in bed. Sleep apnoea needs a sleep study and different treatment, so you will be referred for testing if it is suspected.</p>',
      },
      {
        q: 'Do yoga and breathing help with sleep?',
        a: '<p>Yes. Slow breathing, gentle yoga and yoga nidra in the evening calm the body’s stress response and can make it easier to fall asleep. They work best together with a steady wake time and the other parts of CBT-I.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for sleep problems?',
        a: '<p>The first consultation covers your sleep pattern, routine, mood, stress and medicines, and checks for physical causes. You leave with a clear explanation, a sleep diary to keep and a written plan. Bring any previous prescriptions, including sleeping pills, and recent blood reports.</p>',
      },
      {
        q: 'I have been taking sleeping pills for years. Can you help me stop?',
        a: '<p>Yes. Sleeping pills are reduced slowly and safely, usually alongside CBT-I, so that sleep improves as the dose comes down. Do not stop them suddenly on your own before the consultation.</p>',
      },
      {
        q: 'Is CBT-I available online?',
        a: '<p>Yes. CBT-I works very well over video and is held one-to-one on Google Meet, with a sleep diary you keep between sessions.</p>',
      },
      {
        q: 'How much does insomnia treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If CBT-I sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
    ],

    resources: [
      { title: 'How to sleep better', text: 'Why sleep and mood are linked, and five strategies that help.', url: '/guides/how-to-sleep-better' },
      { title: 'Daily stress toolkit', text: 'Evening practices that help the body wind down.', url: '/guides/daily-stress-toolkit' },
      { title: 'PHQ-9 mood check', text: 'Check whether low mood is behind poor sleep.', url: '/phq9.html' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Insomnia',
      alternateName: ['Chronic insomnia', 'Sleep problems', 'Sleeplessness', 'Sleep disorders'],
      treatments: ['Cognitive behavioural therapy for insomnia (CBT-I)', 'Treatment of underlying anxiety or depression', 'Breathwork and yoga nidra'],
    },
  },

  ocd: {
    path: '/ocd-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'OCD Treatment in Jaipur | ERP Therapy & Psychiatrist | Dr. Ashish Yadav',
      description: 'Treatment for OCD in Jaipur and online: ERP therapy sessions, medicines only when needed, and family guidance. By a DNB psychiatrist, at Jhotwara and Vaishali Nagar.',
    },
    navLabel: 'OCD treatment',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'OCD treatment',
    navHint: 'Intrusive thoughts, checking, cleaning',
    navGroup: 'Other conditions',

    eyebrow: 'OCD treatment · Jaipur · In person & online',
    title: 'OCD treatment in Jaipur,',
    emphasis: 'to quiet the loop.',
    lead: 'Obsessive-compulsive disorder (OCD) is a common, treatable condition, and with the right treatment most people get much better control over their thoughts and rituals. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), treats OCD with exposure and response prevention (ERP) therapy sessions, medicines only when needed, and guidance for families, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'Kinds of OCD',
    conditionsEmphasis: 'treated here.',
    conditions: [
      { title: 'Contamination and cleaning', text: 'Fear of germs, dirt or illness, with repeated washing, bathing or cleaning.' },
      { title: 'Checking and doubt', text: 'Checking locks, the gas, switches or messages again and again, and still not feeling sure.' },
      { title: 'Order and symmetry', text: 'A strong need for things to feel "just right", with arranging, counting or repeating.' },
      { title: 'Intrusive thoughts', text: 'Unwanted, upsetting thoughts or images about harm, sex or blasphemy that go against who you are.' },
      { title: 'Religious and moral worries', text: 'Constant fear of having sinned or done wrong, with praying, confessing or seeking reassurance.' },
      { title: 'Relationship and health worries', text: 'Endless doubts about a partner or about having an illness, with checking and reassurance-seeking.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist when obsessions or rituals take up more than an hour a day, cause real distress, or get in the way of work, studies or relationships.',
    signs: [
      'Unwanted thoughts keep coming back, however hard you try to push them away',
      'You feel driven to wash, check, count, repeat or arrange until it feels right',
      'Rituals make you late, or take time away from work, family or sleep',
      'You keep asking others for reassurance, and it never settles the doubt for long',
      'You avoid places, people or objects to stop the thoughts from starting',
      'You feel low, exhausted or hopeless because of the struggle',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A detailed assessment.', text: 'Your first consultation maps your obsessions, rituals and avoidance, uses a standard OCD severity scale, and checks for conditions that often come with OCD, such as depression, anxiety or tics.' },
      { title: 'A clear diagnosis and plan.', text: 'You leave understanding how the OCD cycle works for you, how severe it is, and every sensible option for treating it.' },
      { title: 'ERP therapy sessions.', text: 'Exposure and response prevention, a form of CBT, helps you face feared thoughts and situations step by step while resisting the ritual, so the anxiety fades on its own. Sessions are available in person and online.' },
      { title: 'Medicines, only when needed.', text: 'For moderate to severe OCD, non-addictive medicines such as SSRIs may be suggested. The decision is always made together with you.' },
      { title: 'Guidance for your family.', text: 'With your consent, family members learn how to support you without feeding the OCD, for example by gently cutting back on reassurance and taking part in rituals.' },
      { title: 'Follow-ups and relapse prevention.', text: 'Regular reviews track progress on the severity scale and adjust the plan. You leave with ERP skills you can keep using if old patterns try to return.' },
    ],

    answersTitle: 'OCD treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is OCD?',
        a: '<p>Obsessive-compulsive disorder (OCD) is a medical condition in which unwanted, distressing thoughts (obsessions) keep coming back, and you feel driven to do certain acts or mental rituals (compulsions) to ease the anxiety they cause. The relief does not last, so the cycle repeats and can take up hours of the day. OCD is common, is not your fault, and is very treatable.</p>',
      },
      {
        q: 'What is the best treatment for OCD?',
        a: '<p>The most effective treatments for OCD are exposure and response prevention (ERP), a specific form of CBT, and SSRI medicines, used alone or together. Mild OCD often improves with ERP alone. Moderate to severe OCD usually does best with both. The right choice depends on how severe it is, how long it has lasted and your own preference.</p>',
      },
      {
        q: 'What is ERP, and how does it work?',
        a: '<p>ERP means gradually facing the thoughts, objects or situations that trigger your obsessions (exposure) while choosing not to do the ritual (response prevention). You start with easier steps and build up. Each time you resist the ritual, your brain learns that the anxiety passes on its own and the feared outcome does not happen, so the urge weakens over time.</p>',
      },
      {
        q: 'How long does OCD treatment take?',
        a: '<p>Most people notice clear improvement within 2 to 4 months. A course of ERP is often 12 to 20 weekly sessions, with practice between sessions. SSRI medicines for OCD can take 8 to 12 weeks to show their full effect, often at higher doses than for depression, and are usually continued for at least a year after you improve before being reduced slowly.</p>',
      },
      {
        q: 'Can OCD be cured?',
        a: '<p>Many people recover fully or get to the point where OCD has very little hold on their life. For others it becomes mild and manageable, with occasional flare-ups during stress. The skills learned in ERP keep working after treatment ends, which is why therapy is so important for long-term results.</p>',
      },
      {
        q: 'Do intrusive thoughts mean I want to act on them?',
        a: '<p>No. In OCD, intrusive thoughts about harm, sex or religion are upsetting precisely because they go against your values. Having a thought is not the same as wanting it or acting on it. Trying hard to push the thoughts away tends to make them stronger, and treatment teaches a different way of responding to them.</p>',
      },
      {
        q: 'Is OCD just being very clean or organised?',
        a: '<p>No. Liking things clean or tidy is a preference. OCD is driven by distressing thoughts and a strong urge to act to make the anxiety go away, and it takes up time and gets in the way of life. Many people with OCD have no cleaning rituals at all, and their compulsions are mental, such as checking memories or repeating phrases.</p>',
      },
      {
        q: 'How can family members help someone with OCD?',
        a: '<p>The kindest help is support without joining in the rituals. Repeatedly giving reassurance, checking things for the person or changing family routines to avoid triggers brings short relief but keeps OCD going. Family sessions can help everyone cut back on this gently, together with the person’s treatment plan.</p>',
      },
      {
        q: 'Why does reassurance make OCD worse?',
        a: '<p>Reassurance, checking and other safety behaviours bring quick relief, but each one tells your brain the danger was real, so the doubt comes back stronger. Cutting back gradually, for example delaying a check by 10 minutes, then 20, then skipping it once, teaches your brain that the anxiety passes on its own. This is the same principle ERP uses. The <a href="/guides/anxiety-guide">anxiety guide</a> shows how to reduce checking step by step.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for OCD?',
        a: '<p>A 60-minute first consultation is recommended, so there is time to understand your obsessions, rituals and daily life properly and to measure severity. You leave with a diagnosis, a clear explanation and a written plan. Bring any previous prescriptions and reports if you have them.</p>',
      },
      {
        q: 'Do ERP sessions work online?',
        a: '<p>Yes. ERP works well over video for most people, and doing exposures in your own home, where many triggers are, can be an advantage. Sessions are one-to-one on Google Meet, and you can also mix clinic and online sessions.</p>',
      },
      {
        q: 'I am already taking medicine for OCD. Can I consult?',
        a: '<p>Yes. Bring your current prescriptions, and do not stop or change any medicine before the consultation. Your treatment will be reviewed and any changes made gradually and safely.</p>',
      },
      {
        q: 'How much does OCD treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If ERP sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Can a family member join the consultation?',
        a: '<p>Yes, and in OCD it is often very helpful, since family routines can shape the symptoms. One family member can join with your consent, and you can ask for part of the session to be one-to-one.</p>',
      },
    ],

    resources: [
      { title: 'Anxiety guide', text: 'Cutting down checking and reassurance-seeking, step by step.', url: '/guides/anxiety-guide' },
      { title: 'Daily stress toolkit', text: 'Six short daily practices for stress.', url: '/guides/daily-stress-toolkit' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Obsessive-compulsive disorder (OCD)',
      alternateName: ['OCD', 'Intrusive thoughts', 'Contamination OCD', 'Checking OCD'],
      treatments: ['Exposure and response prevention (ERP)', 'Cognitive behavioural therapy (CBT)', 'SSRI medicines', 'Family guidance'],
    },
  },

  adhdTreatment: {
    path: '/adhd-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'ADHD Treatment in Jaipur | Adults & Children | Dr. Ashish Yadav',
      description: 'ADHD treatment in Jaipur and online after a proper diagnosis: medicines when suitable, CBT for ADHD, practical strategies for work and study, and family guidance. By a DNB psychiatrist.',
    },
    navLabel: 'ADHD treatment',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'ADHD treatment',
    navHint: 'Focus, organisation, follow-through',
    navGroup: 'Other conditions',

    eyebrow: 'ADHD treatment · Jaipur · In person & online',
    title: 'ADHD treatment in Jaipur,',
    emphasis: 'built around how your brain works.',
    lead: 'ADHD is a common, lifelong difference in how the brain manages attention, activity and impulses, and with the right treatment most people focus, organise and follow through far more easily. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), treats ADHD in adults, teenagers and children with medicines when suitable, CBT for ADHD, practical strategies for work, study and home, and family guidance, at clinics in Jhotwara and Vaishali Nagar and online across India.',

    conditionsTitle: 'What ADHD treatment',
    conditionsEmphasis: 'helps with.',
    conditions: [
      { title: 'Focus and attention', text: 'Drifting off in meetings, classes or conversations, and losing track of tasks halfway through.' },
      { title: 'Organisation and time', text: 'Missed deadlines, lateness, clutter, and starting many things but finishing few.' },
      { title: 'Restlessness and impulsivity', text: 'Feeling driven, interrupting, impulsive spending, or making quick decisions you regret.' },
      { title: 'Emotions and frustration', text: 'Quick frustration, mood swings and feeling overwhelmed by everyday demands.' },
      { title: 'ADHD with anxiety or low mood', text: 'Years of struggling and self-criticism often bring anxiety or depression, which are treated together.' },
      { title: 'ADHD in children and teens', text: 'Difficulties at school and home, treated together with parents and, where helpful, teachers.' },
    ],

    signsTitle: 'When to see',
    signsEmphasis: 'a psychiatrist.',
    signsLead: 'See a psychiatrist if attention, organisation or restlessness have caused problems since childhood and still affect your work, studies or relationships. If you have not been diagnosed yet, start with an assessment.',
    signs: [
      'You have always found it harder than others to stay focused or organised',
      'You often miss deadlines, lose things or forget appointments',
      'You start many tasks but struggle to finish them',
      'You feel restless, act on impulse or find it hard to wait',
      'You have been diagnosed with ADHD but your current treatment is not working well',
      'Your child’s school has raised concerns about attention or behaviour',
    ],

    stepsTitle: 'How ADHD treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A confirmed diagnosis first.', text: 'Treatment starts with a proper diagnosis. If you have not been assessed, the adult ADHD assessment comes first. If you were diagnosed elsewhere, your reports are reviewed at the first consultation.' },
      { title: 'A personal treatment plan.', text: 'You leave knowing which difficulties matter most to you, which treatments fit, and how progress will be measured, whether at work, in studies or at home.' },
      { title: 'Medicines, when suitable.', text: 'Stimulant and non-stimulant medicines can greatly improve focus and self-control for many people. They are started at a low dose, adjusted carefully, and chosen together with you after checking your heart health and other conditions.' },
      { title: 'CBT and practical strategies.', text: 'CBT for ADHD builds systems for planning, time and follow-through, and tackles procrastination and self-criticism. Sessions are available in person and online.' },
      { title: 'Sleep, movement and routine.', text: 'Steady sleep, regular exercise and simple daily structure make a real difference to ADHD symptoms. Breathing and mindfulness practices can help with restlessness and emotions, alongside treatment.' },
      { title: 'Regular follow-ups.', text: 'Follow-ups track what is working, check side effects and adjust the plan as your work, studies and life change.' },
    ],

    answersTitle: 'ADHD treatment,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is the best treatment for ADHD?',
        a: '<p>The most effective treatment for ADHD is usually a combination of medicines, when suitable, and practical skills such as CBT for ADHD and organisation strategies. Medicines reduce the core symptoms for most people, while skills help with habits and problems that medicines alone do not fix. For young children, parent training usually comes first.</p>',
      },
      {
        q: 'Do I need a diagnosis before ADHD treatment?',
        a: '<p>Yes. A proper diagnosis comes first, because problems with attention and restlessness can also come from anxiety, depression, sleep problems, thyroid issues or substance use, which need different treatment. If you have not been assessed, start with the <a href="/adult-adhd-assessment">adult ADHD assessment</a>.</p>',
      },
      {
        q: 'Are ADHD medicines safe?',
        a: '<p>ADHD medicines are among the most studied medicines in psychiatry and are safe for most people when prescribed and monitored by a doctor. Common side effects such as reduced appetite or trouble sleeping are usually mild and can be managed. Heart health, blood pressure and other conditions are checked before starting.</p>',
      },
      {
        q: 'Are ADHD medicines addictive?',
        a: '<p>When taken as prescribed for ADHD, these medicines do not usually lead to addiction, and treating ADHD may even lower the risk of substance problems. Stimulants can be misused if taken in higher doses or not as prescribed, which is why they are monitored carefully and never shared.</p>',
      },
      {
        q: 'Can ADHD medicines be prescribed online?',
        a: '<p>Some can and some cannot. Under India’s telemedicine rules, certain ADHD medicines, including stimulants, cannot be prescribed in an online consultation, so an in-person visit is needed to start them. Non-stimulant options, therapy and follow-ups can often be done online.</p>',
      },
      {
        q: 'Can ADHD be treated without medicines?',
        a: '<p>Yes, for some people. Mild ADHD, or ADHD where medicines are not suitable or wanted, can improve with CBT for ADHD, coaching-style strategies, exercise, good sleep and changes at work or school. For moderate to severe ADHD, medicines usually make the biggest difference, and the choice is always yours.</p>',
      },
      {
        q: 'Does ADHD go away with age?',
        a: '<p>ADHD often continues into adulthood, though it can look different. Hyperactivity often eases with age, while problems with attention, organisation and time management usually remain. Many adults are diagnosed only after years of struggling, and treatment still helps at any age.</p>',
      },
      {
        q: 'What is CBT for ADHD?',
        a: '<p>CBT for ADHD is a structured talking therapy that teaches practical skills for planning, prioritising, managing time and breaking down tasks, and helps change the negative thoughts that build up after years of struggling. It works well together with medicines.</p>',
      },
      {
        q: 'What helps with ADHD at work?',
        a: '<p>Practical changes help most: one written list for everything, breaking big tasks into small first steps, timers and reminders, working in short focused blocks, and reducing distractions such as notifications. Treating sleep problems, anxiety or low mood alongside ADHD also makes a big difference to work.</p>',
      },
    ],

    faqs: [
      {
        q: 'I was diagnosed with ADHD elsewhere. Can I start treatment here?',
        a: '<p>Yes. Bring your previous assessment reports and prescriptions. They are reviewed at the first consultation, and if anything is unclear, further assessment may be suggested before treatment starts.</p>',
      },
      {
        q: 'Do you treat ADHD in children?',
        a: '<p>Yes. Child and adolescent psychiatry was part of Dr. Ashish Yadav\'s specialist training. Children and teenagers are always seen together with a parent or guardian, after proper consent. See <a href="/child-psychiatry-jaipur">child and teen psychiatry</a>.</p>',
      },
      {
        q: 'Are ADHD follow-ups available online?',
        a: '<p>Yes. Follow-ups and CBT sessions work well on Google Meet. Starting some medicines, including stimulants, needs an in-person visit under India’s telemedicine rules.</p>',
      },
      {
        q: 'How much does ADHD treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. The adult ADHD assessment is a separate package. See <a href="/fees">fees</a> for details.</p>',
      },
    ],

    resources: [
      { title: 'ASRS ADHD self-check', text: 'A free adult ADHD screening questionnaire.', url: '/asrs.html' },
      { title: 'Adult ADHD guide', text: 'What the screening can and cannot tell you.', url: '/guides/adhd-guide' },
      { title: 'How to sleep better', text: 'Sleep problems are common with ADHD, and fixable.', url: '/guides/how-to-sleep-better' },
      { title: 'Daily stress toolkit', text: 'Short daily practices for focus and calm.', url: '/guides/daily-stress-toolkit' },
    ],

    condition: {
      name: 'Attention deficit hyperactivity disorder (ADHD)',
      alternateName: ['ADHD', 'Adult ADHD', 'ADD', 'Attention deficit disorder'],
      treatments: ['Stimulant and non-stimulant medicines', 'Cognitive behavioural therapy (CBT) for ADHD', 'Parent training and family guidance'],
    },
  },

  deaddiction: {
    path: '/de-addiction-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'De-addiction Treatment in Jaipur | Alcohol, Smoking & Phone | Dr. Ashish Yadav',
      description: 'Confidential de-addiction treatment in Jaipur and online for alcohol, tobacco, opioids (doda, afeem), cannabis and more, and for phone, gaming and porn habits.',
    },
    navLabel: 'De-addiction',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'de-addiction treatment',
    navHint: 'Alcohol, tobacco, opioids, phone habits',
    navGroup: 'Other conditions',

    eyebrow: 'De-addiction · Jaipur · In person & online',
    title: 'De-addiction treatment in Jaipur,',
    emphasis: 'without judgement.',
    lead: 'Addiction is a treatable medical condition, not a lack of willpower, and with the right support people do quit and stay quit. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) trained in de-addiction care, helps people cut down or stop alcohol, tobacco, opioids and other substances, and regain control over phone, gaming and porn habits, with safe withdrawal care, counselling, medicines only when needed and relapse prevention, at clinics in Jhotwara and Vaishali Nagar and online across India. Everything is kept confidential.',

    conditionsTitle: 'What we help',
    conditionsEmphasis: 'you quit.',
    conditions: [
      { title: 'Alcohol', text: 'Drinking more or more often than you mean to, morning drinks, or failed attempts to stop.' },
      { title: 'Tobacco and nicotine', text: 'Cigarettes, bidi, gutka, khaini and vaping, with planned support to quit for good.' },
      { title: 'Cannabis', text: 'Ganja, charas or bhang use that affects sleep, motivation, memory or mood.' },
      { title: 'Opioids', text: 'Doda post, afeem (opium), smack or heroin, and opioid painkillers or cough syrups, with safe withdrawal and long-term support.' },
      { title: 'Sleeping pills and tranquillisers', text: 'Depending on calming or sleeping tablets taken without, or beyond, a doctor’s advice, and finding it hard to stop.' },
      { title: 'Phone, OTT and gaming', text: 'Hours lost to scrolling, binge-watching or gaming, with sleep, studies or work suffering. The focus of Dr. Ashish Yadav’s NBEMS-commended research.' },
      { title: 'Porn and compulsive sexual behaviour', text: 'Use that feels out of control, affects relationships or sexual health, or brings guilt and secrecy.' },
      { title: 'Other substances', text: 'Inhalants such as whitener, stimulants and party drugs, assessed and treated the same careful way.' },
    ],

    signsTitle: 'When to',
    signsEmphasis: 'get help.',
    signsLead: 'Get help when you have tried to cut down and could not, or when the habit is harming your health, work, money or relationships.',
    signs: [
      'You use more, or for longer, than you meant to',
      'You have tried to cut down or stop and could not keep it up',
      'You feel strong cravings, or need more to get the same effect',
      'Stopping brings shaking, sweating, restlessness, poor sleep or irritability',
      'Work, studies, family or money are suffering because of it',
      'You hide how much you use, or feel guilty about it',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A confidential assessment.', text: 'Your first consultation looks at what you use, how much and how often, any withdrawal symptoms, your physical health, and the stresses, sleep problems or low mood that often sit underneath.' },
      { title: 'Safe withdrawal care.', text: 'If stopping could cause withdrawal, it is planned and supervised, with medicines to keep you safe and comfortable. Most people can do this as outpatients. If inpatient care is needed, you will be guided to the right place.' },
      { title: 'Counselling that builds motivation.', text: 'Structured sessions using motivational and CBT techniques help you understand your triggers, handle cravings and build a life that does not revolve around the habit.' },
      { title: 'Medicines, only when needed.', text: 'Anti-craving medicines and nicotine replacement can make quitting easier and lower the chance of relapse. The decision is always made together with you.' },
      { title: 'Family involvement.', text: 'With your consent, family members learn how to support recovery without blame, and how to respond if old patterns return.' },
      { title: 'Relapse prevention and follow-up.', text: 'Regular reviews in the first months, when the risk of relapse is highest, with a written plan for high-risk situations. A slip is treated as information to learn from, not a failure.' },
    ],

    answersTitle: 'De-addiction,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is addiction?',
        a: '<p>Addiction is a medical condition in which you keep using a substance or repeating a behaviour despite harm, find it hard to control, and feel cravings or discomfort when you stop. Repeated use changes the brain’s reward and self-control systems, which is why willpower alone is often not enough. It is treatable, and many people recover fully.</p>',
      },
      {
        q: 'Is it safe to stop drinking alcohol suddenly at home?',
        a: '<p>Not always. If you drink heavily every day, stopping suddenly can cause dangerous withdrawal, including severe shaking, confusion, seizures or hallucinations, usually within the first 1 to 3 days. Speak to a doctor before you stop, so withdrawal can be planned and managed safely with medicines.</p>',
      },
      {
        q: 'Can opioid addiction (doda post, afeem, smack) be treated?',
        a: '<p>Yes. Opioid withdrawal is very uncomfortable but can be managed safely with medicines that ease the symptoms. For many people, long-term medicine-assisted treatment greatly lowers the chance of relapse, and you will be guided on the right option. One important safety point: after a period without opioids, the body loses its tolerance, so going back to the old amount can cause a fatal overdose.</p>',
      },
      {
        q: 'How long does de-addiction treatment take?',
        a: '<p>Withdrawal itself usually settles within 5 to 10 days. Recovery takes longer: the first 3 to 6 months matter most, and regular follow-up for about a year gives the best chance of staying quit. Counselling and anti-craving medicines, where used, are usually continued for several months.</p>',
      },
      {
        q: 'Are de-addiction medicines addictive?',
        a: '<p>Most medicines used in de-addiction, such as anti-craving medicines and nicotine replacement, are not addictive and are used for a planned period. Medicines used for a few days during withdrawal are tapered and stopped under supervision. Your doctor will explain what each medicine does and how long it is needed.</p>',
      },
      {
        q: 'Can phone, gaming or porn use really be an addiction?',
        a: '<p>Yes, they can become behavioural addictions. When use feels out of control, keeps growing, crowds out sleep, work or relationships, and continues despite trying to stop, it follows the same pattern as substance addiction. Treatment uses CBT, practical limits and work on the stress, boredom or low mood that often drive it.</p>',
      },
      {
        q: 'Does a relapse mean treatment has failed?',
        a: '<p>No. Relapse is common in recovery, especially in the first year, and it is a signal to adjust the plan rather than give up. Most people who stay in treatment after a slip go on to longer periods of recovery. Getting back in touch quickly makes the biggest difference.</p>',
      },
      {
        q: 'What if my family member refuses treatment?',
        a: '<p>You can still come for guidance on your own. Family members can learn ways to talk that reduce conflict and make treatment more likely, and how to look after themselves. Forcing or shaming rarely works, but steady, calm support often does.</p>',
      },
      {
        q: 'Will my treatment be kept confidential?',
        a: '<p>Yes. What you share stays between you and your doctor, consultations are never recorded, and nothing is shared with your employer or family without your consent, except where the law requires it to keep someone safe.</p>',
      },
      {
        q: 'Does alcohol help you sleep?',
        a: '<p>No. Alcohol may help you fall asleep, but it fragments the second half of the night and cuts the REM sleep your brain needs for emotional balance, so you wake less rested. Sleep often takes a few weeks to settle after stopping. <a href="/guides/how-to-sleep-better">How to sleep better</a> has practical steps.</p>',
      },
      {
        q: 'How can I handle stress without going back to the habit?',
        a: '<p>Have quick, healthy tools ready for the moments that used to trigger use: a one-minute cyclic sigh, a brisk 10-minute walk, writing one line that names the feeling, and a fixed daily slot for worries. Practise them every day so they come naturally under pressure. See the <a href="/guides/daily-stress-toolkit">daily stress toolkit</a>.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first de-addiction consultation?',
        a: '<p>A 60-minute first consultation is recommended, so there is time to understand your use, health, withdrawal risk and daily life. You leave with a clear plan, including whether withdrawal needs supervision. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'Can I get de-addiction treatment online?',
        a: '<p>Yes, for many people. Counselling, follow-ups and quitting plans work well over video. If withdrawal needs close monitoring or a physical examination, an in-person visit at a clinic will be advised.</p>',
      },
      {
        q: 'How much does de-addiction treatment cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. If counselling sessions suit you, the number of sessions and their fees are discussed with you after the first consultation.</p>',
      },
      {
        q: 'Can a family member come with me?',
        a: '<p>Yes, one family member can join with your consent, and in de-addiction their support often helps a lot. You can also ask for part of the session to be one-to-one.</p>',
      },
    ],

    resources: [
      { title: 'Daily stress toolkit', text: 'Six short practices to handle stress without the habit.', url: '/guides/daily-stress-toolkit' },
      { title: 'How to sleep better', text: 'Sleep often suffers in early recovery. What helps.', url: '/guides/how-to-sleep-better' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Substance use and behavioural addictions',
      alternateName: ['Alcohol use disorder', 'Tobacco dependence', 'Opioid use disorder', 'Cannabis use disorder', 'Gaming disorder', 'Problematic smartphone use', 'Compulsive pornography use'],
      treatments: ['Supervised withdrawal management', 'Motivational interviewing and CBT', 'Anti-craving medicines', 'Nicotine replacement therapy', 'Relapse prevention'],
    },
  },

  sexual: {
    path: '/sexual-health-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Sexual Health Treatment in Jaipur | ED, PE & Low Desire | Dr. Ashish Yadav',
      description: 'Private, judgement-free treatment in Jaipur and online for erectile problems, premature ejaculation, low desire and performance anxiety. By a DNB psychiatrist.',
    },
    navLabel: 'Sexual health',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'help with a sexual health concern',
    navHint: 'Erection, ejaculation, desire, anxiety',
    navGroup: 'Other conditions',

    eyebrow: 'Sexual health · Jaipur · In person & online',
    title: 'Sexual health treatment in Jaipur,',
    emphasis: 'private and judgement-free.',
    lead: 'Sexual problems are common, nothing to be ashamed of, and very treatable. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry), helps with erection and ejaculation concerns, low desire, performance anxiety and worries about sex, looking at both the body and the mind, with counselling, couple sessions and medicines only when needed, at clinics in Jhotwara and Vaishali Nagar and online across India. Every conversation is private.',

    conditionsTitle: 'Concerns we',
    conditionsEmphasis: 'help with.',
    conditions: [
      { title: 'Erectile problems', text: 'Difficulty getting or keeping an erection firm enough for sex, all the time or only sometimes.' },
      { title: 'Premature ejaculation', text: 'Ejaculating sooner than you or your partner would like, with a feeling of no control.' },
      { title: 'Low desire', text: 'Little or no interest in sex, or a big mismatch in desire between partners.' },
      { title: 'Performance anxiety', text: 'Fear of "failing" in bed that makes problems more likely, often after one bad experience.' },
      { title: 'Delayed or difficult orgasm', text: 'Taking a very long time, or being unable, to reach orgasm or ejaculate.' },
      { title: 'Worries and myths', text: 'Guilt or fear about masturbation, night emissions or "weakness", often from misinformation.' },
    ],

    signsTitle: 'When to',
    signsEmphasis: 'get help.',
    signsLead: 'Get help when a sexual concern keeps coming back, causes you distress, or is affecting your relationship. Earlier is easier.',
    signs: [
      'The problem has lasted more than a few weeks, or keeps returning',
      'You avoid intimacy because you fear it will go wrong',
      'It is causing tension or distance with your partner',
      'You have tried online products or "shakti" remedies without lasting help',
      'You also have diabetes, high blood pressure, heart disease or smoke, which can affect erections',
      'Worry about sex is affecting your sleep, mood or confidence',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A private, detailed assessment.', text: 'Your first consultation covers the problem, your health, medicines, stress, relationship and beliefs about sex, in a calm, respectful conversation. No question is too embarrassing.' },
      { title: 'Checking physical causes.', text: 'Conditions such as diabetes, high blood pressure, heart disease, hormone problems and some medicines can affect sexual function. Simple blood tests may be advised.' },
      { title: 'A clear explanation and plan.', text: 'You leave understanding what is causing the problem, often a mix of body and mind, and every sensible option for treating it.' },
      { title: 'Counselling and practical techniques.', text: 'Sessions address performance anxiety and unhelpful beliefs, and teach proven techniques for control and confidence. Couple sessions are available if you would like your partner involved.' },
      { title: 'Medicines, only when needed.', text: 'For some concerns, prescription medicines such as PDE5 inhibitors for erections help a great deal, used safely after checking your health. The decision is always made together with you.' },
      { title: 'Follow-ups.', text: 'Regular reviews track progress and adjust the plan, until things feel natural again without depending on treatment.' },
    ],

    answersTitle: 'Sexual health,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'Should I see a sexologist or a psychiatrist for sexual problems?',
        a: '<p>A psychiatrist is a medical doctor who can assess both the physical and the psychological sides of a sexual problem, prescribe safely, and treat anxiety, depression or relationship stress that often sit behind it. Many sexual problems have a strong mind component, such as performance anxiety, so this combined approach often works well. If a specialist test or treatment is needed, you will be referred.</p>',
      },
      {
        q: 'Is erectile dysfunction physical or psychological?',
        a: '<p>Often it is both. Physical causes include diabetes, high blood pressure, heart disease, smoking, alcohol, hormone problems and some medicines. Psychological causes include performance anxiety, stress, depression and relationship problems. Erections that are normal at night or in the morning, but not with a partner, point more towards anxiety. A proper assessment looks at both.</p>',
      },
      {
        q: 'Can premature ejaculation be treated?',
        a: '<p>Yes. Most men improve with a combination of education, practical techniques such as the stop-start and squeeze methods, work on anxiety, and, when needed, prescription medicines. Treatment works best when it is tailored to whether the problem has been lifelong or started later.</p>',
      },
      {
        q: 'Is masturbation harmful?',
        a: '<p>No. Masturbation is a normal, common part of sexuality and does not cause weakness, loss of strength, problems with erections or infertility. Worry and guilt about it, often driven by myths, can cause anxiety that affects sexual confidence, and that worry is very treatable.</p>',
      },
      {
        q: 'Is night fall (nightly emission) a disease?',
        a: '<p>No. Night emissions are a normal body process, especially in young men, and they do not drain strength or cause any illness. Many people worry about them because of myths about semen loss. If the worry is affecting your mood or confidence, talking it through helps.</p>',
      },
      {
        q: 'Are medicines for erection problems safe?',
        a: '<p>They are safe for most people when prescribed by a doctor after checking your heart health and other medicines. They can be dangerous with certain heart medicines, so they should not be bought from advertisements or online without a prescription. Unregulated "power" or herbal products can also contain hidden medicines.</p>',
      },
      {
        q: 'Does my partner need to come?',
        a: '<p>No, you can come alone. Many people prefer that at first. If you would like, your partner can join later sessions, which often helps both of you feel more relaxed and work on the problem together.</p>',
      },
      {
        q: 'Will what I share be kept private?',
        a: '<p>Yes. Everything you share stays between you and your doctor, consultations are never recorded, and nothing is shared with anyone without your consent.</p>',
      },
      {
        q: 'How can I calm performance anxiety?',
        a: '<p>Slow the body down and move your attention outward. Breathe in through the nose for 4, hold for 2 and out for 4 to 6, for a minute or two. Focus on your partner and on sensations rather than watching yourself, and question thoughts like "It will go wrong again." These skills come from the same CBT approach used for anxiety, explained in the <a href="/guides/social-anxiety-guide">social anxiety guide</a> and the <a href="/guides/anxiety-guide">anxiety guide</a>.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation?',
        a: '<p>A 30 or 60-minute private consultation, online or in person, where you can talk openly about the concern, your health and your relationship. You leave with a clear explanation and plan. Bring any previous prescriptions and recent blood reports if you have them.</p>',
      },
      {
        q: 'Can I consult online for a sexual health concern?',
        a: '<p>Yes. Many people find it easier to talk from home. Consultations are one-to-one on Google Meet. If a physical examination is needed, an in-person visit will be suggested.</p>',
      },
      {
        q: 'How much does a consultation cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499.</p>',
      },
      {
        q: 'Do you see women and couples for sexual health concerns?',
        a: '<p>Yes. Concerns such as low desire, difficulty with arousal or orgasm, and anxiety around sex are discussed in the same private, respectful way, and couple sessions are available.</p>',
      },
    ],

    resources: [
      { title: 'Daily stress toolkit', text: 'Calming practices that also ease performance anxiety.', url: '/guides/daily-stress-toolkit' },
      { title: 'Anxiety guide', text: 'Breathing and grounding for anxious moments.', url: '/guides/anxiety-guide' },
      { title: '2-minute self assessment', text: 'A quick check of how you are doing.', url: '/assessment.html' },
    ],

    condition: {
      name: 'Sexual dysfunction',
      alternateName: ['Erectile dysfunction', 'Premature ejaculation', 'Low sexual desire', 'Sexual performance anxiety'],
      treatments: ['Psychosexual counselling', 'Couple therapy', 'Behavioural techniques', 'PDE5 inhibitor medicines'],
    },
  },

  child: {
    path: '/child-psychiatry-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Child & Adolescent Psychiatrist in Jaipur | Dr. Ashish Yadav',
      description: 'Help for children and teenagers in Jaipur and online: ADHD, anxiety, low mood, anger, exam stress, screen habits and sleep. Always with a parent. By a DNB psychiatrist.',
    },
    navLabel: 'Child & teen psychiatry',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'a child or teen psychiatrist',
    navHint: 'ADHD, anxiety, behaviour, exam stress',
    navGroup: 'Other conditions',

    eyebrow: 'Child & adolescent psychiatry · Jaipur · In person & online',
    title: 'Child and adolescent psychiatry in Jaipur,',
    emphasis: 'with parents alongside.',
    lead: 'Children and teenagers struggle too, and getting help early makes a lasting difference. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) whose training included child and adolescent psychiatry, helps with attention problems, anxiety, low mood, anger, exam stress, screen habits and sleep, with parent guidance, therapy and medicines only when needed, at clinics in Jhotwara and Vaishali Nagar and online across India. Children and teenagers are always seen with a parent or guardian.',

    conditionsTitle: 'What we',
    conditionsEmphasis: 'help with.',
    conditions: [
      { title: 'ADHD and attention problems', text: 'Trouble focusing, sitting still, finishing work or controlling impulses, at home and at school.' },
      { title: 'Anxiety and school refusal', text: 'Constant worry, fears, tummy aches before school, or refusing to go to school.' },
      { title: 'Low mood and withdrawal', text: 'Sadness, irritability, losing interest, or pulling away from friends and family.' },
      { title: 'Anger and behaviour problems', text: 'Frequent tantrums, aggression, defiance or trouble following rules.' },
      { title: 'Exam stress and study problems', text: 'Panic before exams, falling marks, procrastination or burnout from pressure.' },
      { title: 'Screen, gaming and sleep habits', text: 'Hours on phones or games, late nights, and the mood and study problems that follow.' },
    ],

    signsTitle: 'When to',
    signsEmphasis: 'seek help.',
    signsLead: 'Seek help when a change in your child’s mood or behaviour lasts more than a few weeks, or affects school, friendships or family life.',
    signs: [
      'Marks are falling, or teachers report problems with attention or behaviour',
      'Your child seems sad, irritable or withdrawn most days',
      'Worries, fears or physical complaints keep them from school or activities',
      'Anger outbursts are frequent or hard to manage',
      'Sleep, appetite or screen use has changed a lot',
      'Your child talks about self-harm or not wanting to live. Please seek help today',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'A careful assessment with you.', text: 'The first consultation is with your child and you together, with time for each to speak. It covers development, school, family, sleep, screens and health, and may include standard rating scales.' },
      { title: 'Information from school.', text: 'With your consent, teacher reports or school records help build a full picture, especially for attention and behaviour concerns.' },
      { title: 'A clear explanation and plan.', text: 'You leave understanding what is going on, explained in simple words for both you and your child, and every sensible option for helping.' },
      { title: 'Parent guidance.', text: 'Practical strategies for routines, screens, study, discipline and communication, so that home becomes part of the treatment.' },
      { title: 'Therapy for your child.', text: 'Age-appropriate CBT and skills sessions help children and teenagers handle worry, anger and low mood. Sessions are available in person and online.' },
      { title: 'Medicines, only when needed.', text: 'For some conditions, such as moderate to severe ADHD, anxiety or depression, medicines can help. They are used carefully, at the lowest effective dose, and always decided together with you.' },
    ],

    answersTitle: 'Child and teen mental health,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What does a child and adolescent psychiatrist do?',
        a: '<p>A child and adolescent psychiatrist is a medical doctor who assesses and treats emotional, behavioural and attention problems in children and teenagers. This includes checking for physical causes, working with parents and schools, providing therapy guidance, and prescribing medicine when it is truly needed.</p>',
      },
      {
        q: 'Is it just a phase, or should I be worried?',
        a: '<p>Ups and downs are normal, but a change in mood or behaviour that lasts more than a few weeks, keeps getting worse, or affects school, friendships or family life deserves a proper look. If your child talks about self-harm or not wanting to live, seek help the same day.</p>',
      },
      {
        q: 'Will my child be put on medicine?',
        a: '<p>Not necessarily. Many children improve with parent guidance, therapy and changes to routine, sleep and screen use. Medicines are considered only when a condition is moderate to severe or is not improving, and the decision is always made together with you, with regular reviews.</p>',
      },
      {
        q: 'How is ADHD diagnosed in children?',
        a: '<p>ADHD is diagnosed by a careful clinical assessment, not by a single test. It looks at symptoms at home and at school, when they started, how much they affect daily life, and whether something else, such as anxiety, sleep problems, learning difficulties or vision and hearing problems, could explain them. Teacher reports and rating scales are part of the process.</p>',
      },
      {
        q: 'How much screen time is too much for children?',
        a: '<p>There is no single number for every child, but screens become a problem when they replace sleep, physical activity, homework or time with family, or cause anger when taken away. Clear daily limits, no screens in the bedroom at night, and screen-free meals are good starting points.</p>',
      },
      {
        q: 'Will my teenager be able to talk privately?',
        a: '<p>Yes. Teenagers are seen with a parent present, and part of the session can be one-to-one so they can speak freely. What they share is kept private, except where there is a risk to their safety, which would always be discussed with the parent.</p>',
      },
      {
        q: 'Can therapy help with exam stress?',
        a: '<p>Yes. Exam stress responds well to practical skills: planning study in short blocks, steady sleep, breathing techniques for panic, and challenging all-or-nothing thoughts about results. If stress is causing panic attacks, low mood or sleep loss, a consultation helps.</p>',
      },
      {
        q: 'How do screens affect my child’s sleep?',
        a: '<p>Screens before bed delay and shorten sleep. One hour of screen time before bed is linked to about 24 minutes less sleep, because the light tells the brain the day is not over. Keep screens out of the bedroom at night and keep a steady wake time, even at weekends. More in <a href="/guides/how-to-sleep-better">How to sleep better</a>.</p>',
      },
      {
        q: 'What helps a teenager with social anxiety?',
        a: '<p>Gradual practice works best. Together, list feared situations from easiest to hardest and face them one step at a time, encourage your teenager to focus on the other person rather than on themselves, and avoid long post-mortems after a tough day. The <a href="/guides/social-anxiety-guide">social anxiety guide</a> has steps you can work through together.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation for my child?',
        a: '<p>A 60-minute first consultation is recommended, with your child and a parent or guardian present. Bring school report cards, any teacher remarks, previous prescriptions and reports. You leave with a clear explanation and plan.</p>',
      },
      {
        q: 'Can children and teenagers consult online?',
        a: '<p>Yes, for many concerns, with a parent present on the call. Some assessments, such as for ADHD, may need an in-person visit, and certain ADHD medicines cannot be prescribed online.</p>',
      },
      {
        q: 'How much does a consultation cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499.</p>',
      },
      {
        q: 'Does a parent have to be present?',
        a: '<p>Yes. Children and teenagers are always seen together with a parent or guardian, after proper consent, and never alone. Teenagers can still have part of the session one-to-one.</p>',
      },
    ],

    resources: [
      { title: 'How to sleep better', text: 'Sleep routines that help mood and focus.', url: '/guides/how-to-sleep-better' },
      { title: 'Social anxiety guide', text: 'Practical steps for shy or socially anxious teens.', url: '/guides/social-anxiety-guide' },
      { title: 'Daily stress toolkit', text: 'Short daily practices, useful at exam time.', url: '/guides/daily-stress-toolkit' },
    ],

    condition: {
      name: 'Child and adolescent mental health conditions',
      alternateName: ['ADHD in children', 'Childhood anxiety', 'School refusal', 'Adolescent depression', 'Behaviour problems', 'Exam stress'],
      treatments: ['Parent guidance', 'Cognitive behavioural therapy (CBT) for children', 'School coordination', 'Medicines when needed'],
    },
  },

  geriatric: {
    path: '/geriatric-psychiatry-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Geriatric Psychiatrist in Jaipur | Memory, Dementia & Elderly Care | Dr. Ashish Yadav',
      description: 'Mental health care for older adults in Jaipur: memory loss, dementia, depression, sleep and confusion, with family guidance and home visits. By a DNB psychiatrist.',
    },
    navLabel: 'Elderly mental health',
    // Finishes "Looking for … in Jaipur?"
    localPhrase: 'a geriatric psychiatrist',
    navHint: 'Memory, dementia, mood in older age',
    navGroup: 'Other conditions',

    eyebrow: 'Geriatric psychiatry · Jaipur · Clinic, home visits & online',
    title: 'Mental health care for older adults in Jaipur,',
    emphasis: 'with the family involved.',
    lead: 'Memory loss, low mood, poor sleep and confusion are common in later life, but they are not simply "old age", and many causes are treatable. Dr. Ashish Yadav, a neuro-psychiatrist (DNB Psychiatry) whose training included geriatric psychiatry, assesses and treats older adults with care that involves the family, careful use of medicines and support for caregivers, at clinics in Jhotwara and Vaishali Nagar, through home visits in selected areas, and online.',

    conditionsTitle: 'What we',
    conditionsEmphasis: 'help with.',
    conditions: [
      { title: 'Memory problems and dementia', text: 'Forgetting recent events, repeating questions, or getting lost in familiar places.' },
      { title: 'Depression in later life', text: 'Low mood, loss of interest, irritability or many physical complaints, often mistaken for ageing.' },
      { title: 'Anxiety and constant worry', text: 'Worry about health, money or family that is hard to switch off, with restlessness or poor sleep.' },
      { title: 'Sleep problems', text: 'Trouble falling or staying asleep, daytime sleepiness, or night-time wandering.' },
      { title: 'Behaviour changes in dementia', text: 'Agitation, suspicion, anger or seeing things, which are hard on the person and the family.' },
      { title: 'Loneliness and grief', text: 'Low mood after losing a partner, retiring, moving home or living alone.' },
    ],

    signsTitle: 'When to',
    signsEmphasis: 'seek help.',
    signsLead: 'Seek help when changes in memory, mood or behaviour last more than a few weeks, or affect safety and daily life. Sudden confusion needs a doctor the same day.',
    signs: [
      'Forgetting recent conversations or events, or asking the same questions again and again',
      'Getting lost in familiar places, or difficulty handling money, medicines or cooking',
      'Seeming sad, withdrawn, irritable or uninterested in usual activities',
      'Changes in personality, such as new suspicion, anger or loss of inhibition',
      'Poor sleep, or being awake and restless at night',
      'Sudden confusion or drowsiness over hours or days. Please see a doctor the same day',
    ],

    stepsTitle: 'How treatment',
    stepsEmphasis: 'works.',
    steps: [
      { title: 'An unhurried assessment with family.', text: 'The first consultation includes a family member or caregiver, and covers memory, mood, sleep, behaviour, daily functioning and safety at home.' },
      { title: 'Memory testing.', text: 'Standard memory and thinking tests help show whether there is a problem, how significant it is, and what kind it is likely to be.' },
      { title: 'Looking for treatable causes.', text: 'Thyroid problems, vitamin B12 deficiency, depression, hearing or vision loss, infections and medicine side effects can all affect memory and mood. Blood tests or a brain scan may be advised.' },
      { title: 'A review of all medicines.', text: 'Older adults often take many medicines. Each one is reviewed, and some may be reduced or changed to cut side effects and interactions.' },
      { title: 'Careful treatment.', text: 'Medicines, when needed, are started at low doses and increased slowly. Routine, activity, sleep and social contact are built into the plan.' },
      { title: 'Support for caregivers and follow-up.', text: 'Families get practical guidance on communication, safety and handling difficult behaviour, with regular reviews at the clinic, at home or online.' },
    ],

    answersTitle: 'Mental health in later life,',
    answersEmphasis: 'your questions answered.',
    answers: [
      {
        q: 'What is geriatric psychiatry?',
        a: '<p>Geriatric psychiatry is the branch of psychiatry that cares for the mental health of older adults, usually over 60. It covers memory problems and dementia, depression, anxiety, sleep problems and confusion, and takes into account physical illnesses, multiple medicines and the needs of the family.</p>',
      },
      {
        q: 'Is memory loss a normal part of ageing?',
        a: '<p>Some slowing is normal, such as taking longer to recall a name that comes back later. Memory loss that affects daily life, like forgetting recent conversations, repeating questions, getting lost or struggling with money or medicines, is not normal ageing and should be checked.</p>',
      },
      {
        q: 'What is the difference between dementia and Alzheimer’s disease?',
        a: '<p>Dementia is the general term for a decline in memory and thinking that affects daily life. Alzheimer’s disease is the most common cause of dementia. Other causes include blood-vessel problems in the brain (vascular dementia) and Lewy body disease, and the type matters because care and medicines differ.</p>',
      },
      {
        q: 'Can memory loss be reversed?',
        a: '<p>Sometimes, yes. Memory problems caused by depression, thyroid problems, vitamin B12 deficiency, infections, poor sleep or medicine side effects often improve when the cause is treated. This is why a proper assessment matters before assuming it is dementia.</p>',
      },
      {
        q: 'Can dementia be treated?',
        a: '<p>Most types of dementia cannot be cured, but a lot can be done. Some medicines can modestly help memory or slow symptoms for a time in certain types, and others ease sleep problems, agitation or low mood. Routine, activity, a safe home and caregiver support make a big difference to quality of life.</p>',
      },
      {
        q: 'How is depression different in older adults?',
        a: '<p>In older adults, depression often shows up as tiredness, aches and pains, poor sleep, irritability, memory complaints or withdrawal, rather than obvious sadness, so it is easily missed or put down to age. It is very treatable at any age.</p>',
      },
      {
        q: 'What should I do if an elderly parent suddenly becomes confused?',
        a: '<p>See a doctor the same day. Confusion that comes on over hours or days, often with drowsiness or agitation, is called delirium. It is usually caused by an infection, dehydration, a new medicine or another medical problem, and it needs urgent medical attention.</p>',
      },
      {
        q: 'How can families cope with caring for someone with dementia?',
        a: '<p>Keep daily routines simple and predictable, speak calmly in short sentences, and avoid arguing about mistaken memories. Make the home safe, and share the care so no one person is worn out. Caregivers’ own sleep, health and mood matter too, and guidance from the treating doctor helps the whole family.</p>',
      },
      {
        q: 'How can an older person sleep better?',
        a: '<p>Keep the same wake time every day, get natural light in the first hour, keep the bedroom cool, dark and quiet, and cut caffeine after early afternoon. If sleep does not come, get up and read until sleepy rather than lying awake. Sleeping tablets should be used only on a doctor’s advice, as they can raise the risk of falls and confusion in older adults. See <a href="/guides/how-to-sleep-better">How to sleep better</a>.</p>',
      },
      {
        q: 'How can caregivers manage their own stress?',
        a: '<p>Build a few short daily habits that fit around caring: a one-minute cyclic sigh in tense moments, a brisk 10-minute walk, a fixed 15-minute slot to write down worries, and a short body scan before sleep. Share the care with others where you can. The <a href="/guides/daily-stress-toolkit">daily stress toolkit</a> explains each one.</p>',
      },
    ],

    faqs: [
      {
        q: 'What happens at the first consultation?',
        a: '<p>A 60-minute first consultation is recommended, with a family member or caregiver present. Please bring a list of all current medicines, recent blood reports and any brain scans. You leave with a clear explanation and plan.</p>',
      },
      {
        q: 'Do you offer home visits for elderly patients?',
        a: '<p>Yes, in selected cases, around Vaishali Nagar, Mansarovar, Raja Park, Jhotwara, Shastri Nagar and nearby areas. A home visit is a 45–50 minute consultation for ₹4,499, booked and confirmed on WhatsApp.</p>',
      },
      {
        q: 'Can an older person consult online?',
        a: '<p>Yes, with a family member helping on the call. Online works well for follow-ups and family guidance. Some assessments, such as detailed memory testing, are better done in person or at home.</p>',
      },
      {
        q: 'How much does a consultation cost?',
        a: '<p>The first consultation is ₹799 for 30 minutes or ₹1,499 for 60 minutes, online or in person, and follow-ups are ₹499. Home visits are ₹4,499.</p>',
      },
    ],

    resources: [
      { title: 'How to sleep better', text: 'Steady routines that help sleep at any age.', url: '/guides/how-to-sleep-better' },
      { title: 'Daily stress toolkit', text: 'Short practices for caregivers under strain.', url: '/guides/daily-stress-toolkit' },
      { title: 'PHQ-9 mood check', text: 'A standard 9-question check of low mood.', url: '/phq9.html' },
    ],

    condition: {
      name: 'Mental health conditions in older adults',
      alternateName: ['Dementia', 'Alzheimer’s disease', 'Late-life depression', 'Delirium', 'Memory loss'],
      treatments: ['Memory assessment', 'Medicine review', 'Caregiver guidance', 'Medicines when needed'],
    },
  },
}
