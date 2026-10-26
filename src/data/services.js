// Content for the treatment pages, one entry per page, shown by ServicePage.vue.
// A new entry gets its URL, title and schema automatically, but still needs a line in
// public/_redirects and public/sitemap.xml (the build stops and says so if either is missing).
//
// Write each answer so its first sentence answers the question on its own:
// search engines and AI assistants often quote just that sentence.
// Name medicine groups only (SSRIs, benzodiazepines), never individual medicines or brands.

export const SERVICES = {
  anxiety: {
    path: '/anxiety-treatment-jaipur',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Anxiety Treatment in Jaipur | CBT & Psychiatrist | Dr. Ashish Yadav',
      description: 'Treatment for anxiety, panic attacks and social anxiety in Jaipur and online: CBT sessions, medicines only when needed, and breathwork. By a DNB psychiatrist.',
    },
    navLabel: 'Anxiety treatment',
    navHint: 'Worry, panic attacks, social anxiety',

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
}
