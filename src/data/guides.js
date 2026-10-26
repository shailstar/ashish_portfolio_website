// Web versions of the free PDF guides in /public/resources, shown by GuidePage.vue.
// Keep the wording the same as the PDF, so the page and the download match.
// A new entry gets its URL, title and schema automatically, but still needs a line in
// public/_redirects and public/sitemap.xml (the build stops and says so if either is missing).
// Name medicine groups only, never individual medicines or brands.
//
// Section blocks:
//   { type: 'p', html }                      paragraph
//   { type: 'h3', text }                     sub-heading
//   { type: 'list', items, ordered }         bullet or numbered list (items may hold HTML)
//   { type: 'cards', cards: [{ title, text, items }] }
//   { type: 'table', head: [a, b], rows: [[a, b]] }
//   { type: 'stats', stats: [{ value, label }] }   big numbers
//   { type: 'callout', title, html, items }  highlighted box
// A section can have a small tag line under its heading ({ tag }), and { plain: true } leaves it unnumbered.

export const GUIDES = {
  'guide-anxiety': {
    path: '/guides/anxiety-guide',
    pdf: '/resources/anxiety-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Managing Anxiety, Panic & Health Worries: Free Guide | Dr. Ashish Yadav',
      description: 'A free self-help guide by psychiatrist Dr. Ashish Yadav: what to do during a panic attack, slow breathing, 5-4-3-2-1 grounding, and reducing health anxiety.',
    },
    eyebrow: 'Free self-help guide',
    title: 'Managing anxiety, panic',
    emphasis: 'and health worries.',
    subtitle: 'Practical, evidence-based tools you can start using today.',
    lead: 'Anxiety, panic attacks and constant health worries are common, and they respond well to the right habits. The tools in this guide come from cognitive behavioural therapy (CBT), the most widely studied approach for these problems. Read it once, then keep the reminder card at the end handy.',
    // The page to suggest next: a route id and its button label
    next: { route: 'anxiety', label: 'Anxiety treatment in Jaipur' },

    sections: [
      {
        title: 'What is happening in a panic attack',
        blocks: [
          { type: 'p', html: 'A panic attack is a sudden surge of intense fear with strong body symptoms: racing heart, shortness of breath, dizziness, shaking or chest tightness. It usually peaks within a few minutes and then settles.' },
          {
            type: 'cards',
            cards: [
              { title: 'Not dangerous', text: 'It feels frightening, but a panic attack is not life-threatening.' },
              { title: 'It passes', text: 'It settles on its own, usually within minutes, whatever you do.' },
              { title: 'Fighting feeds it', text: 'Running away or fighting the feeling makes it stronger. Staying put teaches your brain it is safe.' },
            ],
          },
        ],
      },
      {
        title: 'What to do while it is happening',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Stay where you are,</strong> if it is safe to do so.',
              '<strong>Slow your breathing.</strong> In gently through the nose for about 4 seconds, out slowly through the mouth for 4 to 6 seconds.',
              '<strong>Name it:</strong> "This is panic, not danger. It will pass."',
              '<strong>Look outward.</strong> Focus on one object, a sound, or what is around you.',
              '<strong>Use a coping line:</strong> "I have felt this before and it passed. I can handle this."',
            ],
          },
          {
            type: 'callout',
            title: 'Try to avoid',
            items: [
              'Leaving the place the moment panic starts (when it is safe to stay)',
              'Holding your breath or breathing too fast',
              'Telling yourself "I am dying" or "I am losing control"',
            ],
          },
        ],
      },
      {
        title: 'Breathing: practise when calm',
        blocks: [
          { type: 'p', html: "Slow breathing calms the body's alarm response. It works best when practised daily, so it becomes automatic when panic arrives." },
          { type: 'p', html: 'Sit or stand comfortably. Breathe in through the nose and let your stomach rise. Out slowly through the mouth.' },
          { type: 'callout', title: 'The rhythm', html: '<strong>In</strong> for 4 seconds, <strong>hold</strong> for 2 seconds, <strong>out</strong> for 4 to 6 seconds, and repeat. Practise for 1 to 3 minutes, once a day.' },
        ],
      },
      {
        title: 'Grounding: the 5-4-3-2-1 technique',
        blocks: [
          { type: 'p', html: 'Grounding pulls your attention out of racing thoughts and into the present moment. Say each one silently or out loud.' },
          {
            type: 'table',
            head: ['Notice', 'For example'],
            rows: [
              ['5 things you can see', 'colours, shapes, objects'],
              ['4 things you can touch', 'chair, phone, fabric'],
              ['3 things you can hear', 'traffic, a fan, voices'],
              ['2 things you can smell', 'or 2 textures'],
              ['1 thing you can taste', 'or 1 slow breath'],
            ],
          },
        ],
      },
      {
        title: 'Cut down your safety behaviours',
        blocks: [
          { type: 'p', html: 'Safety behaviours feel protective but keep panic going. Each one tells your brain the danger was real. Common ones are:' },
          { type: 'list', items: ['Always carrying water', 'Sitting near exits', 'Avoiding exercise', 'Checking your pulse', 'Needing someone with you'] },
          {
            type: 'callout',
            title: 'This week',
            items: [
              'Pick one safety behaviour to reduce. If you always check your pulse, delay it by 10 minutes, then 20, then skip it once.',
              'Stay in a situation you would normally avoid (a crowded shop) a few minutes longer each time.',
            ],
            html: 'This is how your brain learns the feared outcome does not happen.',
          },
        ],
      },
      {
        title: 'Daily routine that lowers baseline anxiety',
        blocks: [
          {
            type: 'cards',
            cards: [
              { title: 'Move', text: 'Walking, running, swimming or yoga, most days.' },
              { title: 'Sleep', text: 'Keep a steady sleep and wake time.' },
              { title: 'Eat', text: 'Regular, balanced meals keep energy stable.' },
              { title: 'Cut back', text: 'Alcohol, nicotine and recreational drugs worsen anxiety.' },
            ],
          },
          { type: 'p', html: '<strong>Add one relaxation practice each day:</strong> breathing, stretching, mindfulness or a short walk.' },
        ],
      },
      {
        title: 'When the worry is about your health',
        blocks: [
          { type: 'p', html: 'Checking your body, searching symptoms online and asking for reassurance bring short relief, but they keep health worries alive.' },
          { type: 'h3', text: 'Reduce checking and reassurance-seeking' },
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Keep a one-week diary</strong> of how often you check your body, search symptoms or ask for reassurance.',
              '<strong>Reduce it gradually.</strong> If you check 10 times a day, aim for 8, then 6.',
              '<strong>Delay the urge.</strong> When you want to check or google, wait 10 to 15 minutes and do something else.',
              '<strong>Limit symptom searching.</strong> Set specific times, if at all, and use trusted sources only.',
            ],
          },
          { type: 'h3', text: 'Swap the catastrophic thought for a balanced one' },
          {
            type: 'table',
            head: ['Worry thought', 'More balanced thought'],
            rows: [
              ['"This headache means I have a brain tumour."', '"Headaches are common and usually not serious. I have had this before and it passed."'],
              ['"My heart is racing, something is wrong."', '"Anxiety can make the heart race. This has settled before and it will again."'],
            ],
          },
          { type: 'p', html: '<strong>Ask yourself:</strong> What is the evidence for and against this thought? What would I tell a friend with this worry?' },
          { type: 'h3', text: 'Reduce avoidance' },
          { type: 'p', html: 'Skipping exercise, appointments or social plans out of health fear keeps anxiety strong. List what you avoid, do the easiest one this week, then work up. Avoiding the gym for fear of a heart problem? Start with a 5-minute walk.' },
        ],
      },
      {
        title: 'When to seek professional help',
        blocks: [
          { type: 'p', html: 'Professional support can speed recovery. Talk to a clinician if:' },
          {
            type: 'list',
            items: [
              'Panic attacks are frequent, or you are avoiding many places and activities',
              'Health worries take over your day or cause significant distress',
              'You have chest pain, fainting or symptoms you are unsure about. <strong>Get medical advice first to rule out physical causes.</strong>',
            ],
          },
          { type: 'p', html: 'CBT (including guided self-help) is effective, and sometimes medication alongside therapy helps.' },
        ],
      },
    ],

    reminder: {
      title: 'Quick reminder card',
      cards: [
        { title: 'During panic', items: ['Stay put.', 'Breathe: in 4, out 4 to 6.', 'Say: "This will pass. I am safe."', 'Ground with 5-4-3-2-1.'] },
        { title: 'Health worries', items: ['Delay checking or googling 10 to 15 minutes.', 'Write the worry, then a balanced thought.', 'Do one avoided activity this week.'] },
        { title: 'Daily basics', items: ['Move your body.', 'Sleep at regular times.', 'Practise breathing once a day.'] },
      ],
    },

    // Direct answers drawn only from the guide above, for readers and the FAQ schema
    answers: [
      {
        q: 'What should I do during a panic attack?',
        a: '<p>Stay where you are if it is safe, and slow your breathing: in through the nose for about 4 seconds, out through the mouth for 4 to 6 seconds. Name it ("This is panic, not danger. It will pass."), focus on something around you, and use a coping line such as "I have felt this before and it passed."</p>',
      },
      {
        q: 'Is a panic attack dangerous?',
        a: '<p>No. A panic attack feels frightening, but it is not life-threatening. It usually peaks within a few minutes and settles on its own. If you have chest pain, fainting or symptoms you are unsure about, get medical advice first to rule out physical causes.</p>',
      },
      {
        q: 'What is the 5-4-3-2-1 grounding technique?',
        a: '<p>It is a way to pull your attention out of racing thoughts by noticing 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell and 1 you can taste. Say each one silently or out loud.</p>',
      },
      {
        q: 'What are safety behaviours, and why cut them down?',
        a: '<p>Safety behaviours are habits that feel protective, such as always carrying water, sitting near exits or checking your pulse, but they keep panic going because each one tells your brain the danger was real. Reduce one at a time, for example by delaying a pulse check by 10 minutes, then 20, then skipping it once.</p>',
      },
      {
        q: 'How do I stop googling symptoms and checking my body?',
        a: '<p>Cut it down gradually rather than all at once. Keep a one-week diary of how often you check, then reduce it step by step, from 10 times a day to 8, then 6. When the urge comes, wait 10 to 15 minutes and do something else, and limit symptom searching to set times and trusted sources.</p>',
      },
      {
        q: 'When should I get professional help for anxiety?',
        a: '<p>Talk to a clinician if panic attacks are frequent, if you are avoiding many places and activities, or if health worries take over your day. CBT, including guided self-help, is effective, and sometimes medication alongside therapy helps.</p>',
      },
    ],

    // For the schema markup
    condition: {
      name: 'Anxiety disorders',
      alternateName: ['Panic attacks', 'Panic disorder', 'Health anxiety'],
      treatments: ['Cognitive behavioural therapy (CBT)', 'Slow breathing', 'Grounding techniques'],
    },
  },

  'guide-social-anxiety': {
    path: '/guides/social-anxiety-guide',
    pdf: '/resources/social-anxiety-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Social Anxiety: Practical Self-Help Guide | Dr. Ashish Yadav',
      description: 'A free CBT-based guide to social anxiety by psychiatrist Dr. Ashish Yadav: build a fear ladder, look outward, check anxious thoughts and drop safety behaviours.',
    },
    eyebrow: 'Free self-help guide',
    title: 'Social anxiety,',
    emphasis: 'practical self-help.',
    subtitle: 'Practical self-help you can start today.',
    lead: 'Social anxiety is not shyness. It is a strong fear of being judged, embarrassed or rejected, often with blushing, shaking, sweating or a racing heart. The good news: it is very treatable. These steps come from CBT, an evidence-based approach.',
    next: { route: 'anxiety', label: 'Anxiety treatment in Jaipur' },

    sections: [
      {
        title: 'The loop that keeps it going',
        plain: true,
        blocks: [
          { type: 'p', html: 'Social anxiety runs in a loop. <strong>Break any link</strong> and the loop weakens.' },
          {
            type: 'cards',
            cards: [
              { title: 'Negative thought', text: '"They will think I am stupid."' },
              { title: 'Self-focus', text: 'Watching how you look and sound.' },
              { title: 'Safety behaviours', text: 'Avoiding eyes, phone, over-rehearsing.' },
              { title: 'Relief now, fear later', text: 'Your brain learns it was dangerous.' },
            ],
          },
        ],
      },
      {
        title: 'Build a fear ladder',
        blocks: [
          { type: 'p', html: 'List situations that scare you, score each 0 to 10, and start at the easiest. Stay until anxiety dips a little, repeat, then climb one rung. Say hi, ask one question, sit with others for 10 minutes, then lunch with a small group.' },
        ],
      },
      {
        title: 'Look outward',
        blocks: [
          { type: 'p', html: 'Anxiety pulls attention inward. In a conversation, listen to their words, notice their expression, and silently pick three details about them or the room. Practise this daily.' },
        ],
      },
      {
        title: 'Check the thought',
        blocks: [
          { type: 'p', html: 'Ask: What is the evidence? What is a more balanced version? Will this matter in a month? Keep one line on your phone: "Most people are busy thinking about themselves."' },
        ],
      },
      {
        title: 'Drop one safety behaviour',
        blocks: [
          { type: 'p', html: 'Phone in your pocket for the first 15 minutes. Eye contact with 2 or 3 people. One extra sentence when you speak. Prepare 2 conversation starters, but do not script everything.' },
        ],
      },
      {
        title: 'Slow the body down',
        blocks: [
          { type: 'p', html: 'Hand on belly. Breathe in through the nose for 4, hold 2, out slowly for 4 to 6. Do it for 1 to 3 minutes before or during. A short walk before you go helps too.' },
        ],
      },
      {
        title: 'After the event',
        blocks: [
          { type: 'p', html: 'No detailed post-mortem for 24 hours. If you reflect, write only one thing that went okay and one thing to try next time. Skip global verdicts like "I always mess up."' },
        ],
      },
      {
        title: 'When to get extra help',
        plain: true,
        blocks: [
          { type: 'p', html: 'Talk to a clinician if you avoid important parts of work, study or relationships, if anxiety brings low mood or heavy distress, or if these steps feel too hard to do alone. CBT, guided self-help and, for some people, medication alongside therapy all work well. Asking for help early speeds things up.' },
        ],
      },
    ],

    reminder: {
      title: 'Quick reminder card',
      cards: [
        {
          title: 'Before and during',
          items: [
            'Breathe: in 4, hold 2, out 4 to 6.',
            'Focus outward on the person and the room.',
            'One balanced thought before you walk in.',
            'Drop one safety behaviour today.',
            'One small step up your ladder.',
          ],
        },
      ],
    },

    answers: [
      {
        q: 'Is social anxiety the same as shyness?',
        a: '<p>No. Social anxiety is a strong fear of being judged, embarrassed or rejected, often with blushing, shaking, sweating or a racing heart. It is very treatable, and CBT is an evidence-based approach for it.</p>',
      },
      {
        q: 'What is a fear ladder?',
        a: '<p>A fear ladder is a list of situations that scare you, each scored from 0 to 10, which you face one at a time starting from the easiest. Stay in each until the anxiety dips a little, repeat it, then climb one rung, for example from saying hi, to asking one question, to lunch with a small group.</p>',
      },
      {
        q: 'What are safety behaviours in social anxiety?',
        a: '<p>Safety behaviours are habits such as avoiding eye contact, looking at your phone or over-rehearsing what to say. They bring relief in the moment but teach your brain that the situation was dangerous. Try dropping one at a time, such as keeping your phone in your pocket for the first 15 minutes.</p>',
      },
      {
        q: 'What should I do after a social event that went badly?',
        a: '<p>Avoid a detailed post-mortem for 24 hours. If you reflect, write down only one thing that went okay and one thing to try next time, and skip global verdicts like "I always mess up."</p>',
      },
      {
        q: 'When should I get professional help for social anxiety?',
        a: '<p>Talk to a clinician if you avoid important parts of work, study or relationships, if anxiety brings low mood or heavy distress, or if the steps feel too hard to do alone. CBT, guided self-help and, for some people, medication alongside therapy all work well.</p>',
      },
    ],

    condition: {
      name: 'Social anxiety disorder',
      alternateName: ['Social anxiety', 'Social phobia'],
      treatments: ['Cognitive behavioural therapy (CBT)', 'Graded exposure (fear ladder)', 'Slow breathing'],
    },
  },

  'guide-stress': {
    path: '/guides/daily-stress-toolkit',
    pdf: '/resources/daily-stress-toolkit.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'The Daily Stress Toolkit: 6 Evidence-Based Tools | Dr. Ashish Yadav',
      description: 'Six quick, evidence-based tools for daily stress from psychiatrist Dr. Ashish Yadav: the cyclic sigh, a fixed wake time, a 10-minute walk, a worry window and more.',
    },
    eyebrow: 'Free guide',
    title: 'The daily',
    emphasis: 'stress toolkit.',
    subtitle: 'Six evidence-based tools. No equipment, no long routines.',
    lead: 'Stress pulls attention off the desk, and a memory with no attention never gets filed. These tools bring the clerk back. Pick one, run it for two weeks, then add the next.',
    next: { route: 'anxiety', label: 'Anxiety and stress treatment' },

    sections: [
      {
        title: 'Cyclic sigh',
        tag: 'In the moment, 1 min',
        blocks: [
          { type: 'p', html: 'Inhale through the nose, then take a second short sip of air on top. Exhale slowly through the mouth, longer than the inhale. Repeat for one minute.' },
          { type: 'p', html: '<strong>Evidence:</strong> Balban et al., 2023: five minutes daily lifted mood more than mindfulness meditation.' },
        ],
      },
      {
        title: 'Fix your wake time',
        tag: 'Every day',
        blocks: [
          { type: 'p', html: 'Same wake time, 7 days a week. Get daylight within an hour of waking. Caffeine stops by early afternoon. Sleep is the first thing stress eats.' },
          { type: 'p', html: "<strong>Evidence:</strong> Yoo et al., 2007: sleep loss made the brain's threat centre far more reactive to the same stress." },
        ],
      },
      {
        title: 'Walk 10 minutes',
        tag: 'After meetings or meals',
        blocks: [
          { type: 'p', html: 'Brisk enough that talking takes effort. Phone stays in the pocket. Walking counts as exercise for your mood.' },
          { type: 'p', html: '<strong>Evidence:</strong> Randomised trials and meta-analyses show regular exercise lowers anxiety symptoms.' },
        ],
      },
      {
        title: 'Worry window',
        tag: '15 min, same time daily',
        blocks: [
          { type: 'p', html: 'Pick a slot, write every worry down, and mark what you can act on. Outside the slot, a worry gets "see you at 6" and nothing more.' },
          { type: 'p', html: "<strong>Evidence:</strong> Borkovec's worry postponement is a core CBT method with trial support." },
        ],
      },
      {
        title: 'Label the feeling',
        tag: 'One sentence',
        blocks: [
          { type: 'p', html: 'Write one line: "I feel anxious because the deadline moved." Naming it moves the work from the alarm centre to the thinking brain.' },
          { type: 'p', html: '<strong>Evidence:</strong> Lieberman et al., 2007: putting feelings into words reduced amygdala activity.' },
        ],
      },
      {
        title: 'Yoga nidra or body scan',
        tag: '10 min, evening',
        blocks: [
          { type: 'p', html: 'Lie down, move attention slowly from toes to head, and let go of effort. Use it as the hinge between work and rest.' },
          { type: 'p', html: '<strong>Evidence:</strong> Mindfulness-based programmes have the strongest trial evidence for stress reduction.' },
        ],
      },
      {
        title: 'Your 10-minute minimum',
        plain: true,
        blocks: [
          {
            type: 'cards',
            cards: [
              { title: 'Morning', text: 'Fixed wake time + 5 min of daylight.' },
              { title: 'Midday', text: '10-minute walk + one cyclic sigh before the next task.' },
              { title: 'Evening', text: '15-min worry window, then body scan and lights down.' },
            ],
          },
        ],
      },
      {
        title: 'When tools are not enough',
        plain: true,
        blocks: [
          { type: 'p', html: 'Stress lasting over two weeks with poor sleep, low mood, panic, or changes in appetite needs a proper evaluation. So do getting lost on familiar routes and repeating the same questions. Do not wait on those.' },
        ],
      },
    ],

    answers: [
      {
        q: 'What is the cyclic sigh?',
        a: '<p>The cyclic sigh is a one-minute breathing technique: inhale through the nose, take a second short sip of air on top, then exhale slowly through the mouth for longer than the inhale. In a 2023 study by Balban and colleagues, five minutes a day lifted mood more than mindfulness meditation.</p>',
      },
      {
        q: 'What is a worry window?',
        a: '<p>A worry window is a fixed 15-minute slot each day when you write down every worry and mark what you can act on. Outside that slot, a worry gets "see you at 6" and nothing more. Worry postponement is a core CBT method with trial support.</p>',
      },
      {
        q: 'Does labelling a feeling really help with stress?',
        a: '<p>Yes. Writing one line such as "I feel anxious because the deadline moved" shifts the work from the alarm centre to the thinking brain. A 2007 study by Lieberman and colleagues found that putting feelings into words reduced amygdala activity.</p>',
      },
      {
        q: 'What is the minimum daily routine for managing stress?',
        a: '<p>About ten minutes spread across the day: a fixed wake time and 5 minutes of daylight in the morning, a 10-minute walk and one cyclic sigh at midday, and a 15-minute worry window followed by a body scan in the evening.</p>',
      },
      {
        q: 'When is stress a reason to see a doctor?',
        a: '<p>Get a proper evaluation if stress lasts over two weeks with poor sleep, low mood, panic or changes in appetite. Getting lost on familiar routes or repeating the same questions also needs prompt assessment, so do not wait on those.</p>',
      },
    ],

    condition: {
      name: 'Psychological stress',
      alternateName: ['Stress', 'Work stress', 'Burnout'],
      treatments: ['Cyclic sighing', 'Regular exercise', 'Worry postponement (CBT)', 'Yoga nidra and body scan'],
    },
  },

  'guide-adhd': {
    path: '/guides/adhd-guide',
    pdf: '/resources/adhd-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Your ASRS Result Is Not a Diagnosis: Adult ADHD Guide | Dr. Ashish Yadav',
      description: 'What an ASRS ADHD screening can and cannot tell you, why it can mislead, and what a comprehensive adult ADHD evaluation covers. By psychiatrist Dr. Ashish Yadav.',
    },
    eyebrow: 'Free guide · Adult ADHD',
    title: 'Your ASRS result is a starting point,',
    emphasis: 'not a diagnosis.',
    subtitle: "What the screening can tell you, what it can't, and what a proper evaluation looks like.",
    lead: 'The ASRS asks the question. A comprehensive evaluation answers it.',
    next: { route: 'adhd', label: 'Adult ADHD assessment' },

    sections: [
      {
        title: 'Screening and evaluation are different',
        plain: true,
        blocks: [
          {
            type: 'cards',
            cards: [
              {
                title: 'What you did: ASRS screening',
                items: [
                  'A short self-report questionnaire',
                  'Shows whether your patterns resemble ADHD',
                  'Depends on how you read each question',
                  'Cannot confirm or rule out ADHD',
                ],
              },
              {
                title: 'What confirms it: comprehensive evaluation',
                items: [
                  'A structured clinical assessment',
                  'Looks at your history, not just today',
                  'Checks what else could explain the symptoms',
                  'Gives a clear, reasoned answer',
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Why the screening alone can mislead',
        plain: true,
        blocks: [
          { type: 'p', html: 'Distractibility, restlessness, forgetfulness and poor follow-through show up in anxiety, depression, sleep problems, burnout, thyroid issues, substance use and past trauma. Two people can score the same on the ASRS and have completely different explanations behind it. A high score means a proper look is worthwhile. A low score does not always mean you are in the clear either.' },
          { type: 'callout', title: 'In short', html: 'The ASRS asks the question. A comprehensive evaluation answers it.' },
        ],
      },
      {
        title: 'What the evaluation covers',
        plain: true,
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Detailed clinical interview.</strong> Childhood history, school and work functioning, and how symptoms affect your daily life now.',
              '<strong>Standardised ADHD scales.</strong> Validated assessment tools, interpreted clinically and not just scored.',
              '<strong>Overlapping condition screening.</strong> Anxiety, depression, mood disorders, sleep issues and substance use, which often mimic or sit alongside ADHD.',
              '<strong>One-to-one clinical consultation.</strong> A focused conversation about your history, your concerns and what you want from this.',
              '<strong>Post-assessment feedback.</strong> I explain what the findings mean and what the sensible next step is for you.',
            ],
          },
        ],
      },
      {
        title: 'Comprehensive ADHD evaluation',
        tag: 'One-time fee · 60 to 90 minutes',
        plain: true,
        blocks: [
          {
            type: 'cards',
            cards: [
              {
                title: 'Included',
                items: ['Standardised ADHD scales', 'Overlapping disorder screening', 'Clinical consultation', 'Post-assessment feedback', 'Test reports'],
              },
              {
                title: 'Online or in person',
                items: [
                  'Online: join from wherever you are, with a quiet space and a stable connection.',
                  'In person: sit down with me face to face, whichever feels more comfortable for you.',
                ],
              },
              {
                title: 'Add-ons, charged separately',
                items: [
                  'Treatment: if the evaluation shows treatment is needed, planning and follow-up are charged separately from the evaluation fee.',
                  'Additional documentation: test reports are included. Documentation for a specific purpose, such as work, academic or accommodation requests, is an add-on.',
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'How to prepare',
        plain: true,
        blocks: [
          {
            type: 'list',
            items: [
              'Think back to your school years. Report cards, teacher remarks and family stories all help.',
              'Be ready to talk about work, relationships, sleep and how you cope with stress.',
              'A parent, partner or sibling who can share what they have noticed adds useful perspective. This is optional.',
              'Keep any previous medical or psychological records handy.',
            ],
          },
        ],
      },
      {
        title: 'Ready to book?',
        plain: true,
        blocks: [
          { type: 'p', html: 'Message me on WhatsApp and tell me whether you prefer online or in person. I will share the available slots and confirm your booking. The fee and online booking are on the <a href="/adult-adhd-assessment">adult ADHD assessment page</a>.' },
        ],
      },
    ],

    answers: [
      {
        q: 'Can the ASRS diagnose ADHD?',
        a: '<p>No. The ASRS is a short self-report screening questionnaire that shows whether your patterns resemble ADHD. It cannot confirm or rule out ADHD. Only a comprehensive clinical evaluation can.</p>',
      },
      {
        q: 'Why can an ADHD screening test be misleading?',
        a: '<p>Distractibility, restlessness, forgetfulness and poor follow-through also show up in anxiety, depression, sleep problems, burnout, thyroid issues, substance use and past trauma. Two people can get the same ASRS score for completely different reasons, and a low score does not always mean you are in the clear.</p>',
      },
      {
        q: 'What does a comprehensive adult ADHD evaluation include?',
        a: '<p>A detailed clinical interview about your childhood, school and work, standardised ADHD scales interpreted clinically, screening for overlapping conditions such as anxiety, depression, sleep problems and substance use, a one-to-one consultation, and feedback on what the findings mean. Test reports are included.</p>',
      },
      {
        q: 'How long does an adult ADHD evaluation take?',
        a: '<p>The comprehensive evaluation takes 60 to 90 minutes and is a one-time fee. It can be done online or in person.</p>',
      },
      {
        q: 'How should I prepare for an ADHD evaluation?',
        a: '<p>Think back to your school years: report cards, teacher remarks and family stories all help. Be ready to talk about work, relationships, sleep and stress, and keep any previous medical or psychological records handy. A parent, partner or sibling who can share what they have noticed is useful but optional.</p>',
      },
    ],

    condition: {
      name: 'Attention deficit hyperactivity disorder (ADHD)',
      alternateName: ['Adult ADHD', 'ADHD'],
    },
  },

  'guide-sleep': {
    path: '/guides/how-to-sleep-better',
    pdf: '/resources/how-to-sleep-better.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: "How to Sleep Better: A Psychiatrist's Guide | Dr. Ashish Yadav",
      description: 'Why sleep and mental health are linked, and five evidence-based strategies for better sleep, including the 20-minute rule and CBT-I. A free guide by Dr. Ashish Yadav.',
    },
    eyebrow: "A psychiatrist's perspective",
    title: 'How to',
    emphasis: 'sleep better.',
    subtitle: 'Integrating modern evidence-based psychiatry with yogic sciences.',
    lead: 'Most people think sleep is the absence of living. It is not. It is closer to a second shift, and fixing it very often moves the needle on mood.',

    sections: [
      {
        title: 'The night your brain goes to work',
        plain: true,
        blocks: [
          { type: 'p', html: "While you lie still, your brain launches into one of the most complex biochemical operations in nature. Memories are filed and cross-referenced. Emotional wounds are quietly processed. Toxic proteins, the kind linked to Alzheimer's disease, are flushed out through a recently discovered glymphatic drainage system that only activates during deep sleep. Miss a night, and that cleaning crew never shows up." },
          { type: 'p', html: 'As a psychiatrist, I spend a good part of my day talking to people whose minds have turned against them: anxiety that will not quiet, moods that swing without warning, thoughts that spiral at 3 a.m. And almost without exception, when I ask about sleep, the answer tells me everything.' },
          { type: 'p', html: 'That is not a footnote. It is a headline. Yet most people still treat poor sleep as a side effect of stress, not a cause of it.' },
          {
            type: 'stats',
            stats: [
              { value: '10x', label: 'more likely to have depression with insomnia' },
              { value: '17x', label: 'more likely to have anxiety with insomnia' },
            ],
          },
        ],
      },
      {
        title: 'The two-way street nobody talks about',
        plain: true,
        blocks: [
          { type: 'p', html: "Sleep and mental health do not have a one-way relationship. They are in a constant, two-way conversation. Research from Stanford Medicine's Computational Psychiatry, Neuroscience, and Sleep Laboratory shows, through real-time brain imaging, how a single bad night rewires the emotional centres of the brain." },
          { type: 'p', html: 'For those managing depression or bipolar disorder, irregular sleep does not just make symptoms harder to bear. It can actively trigger mood episodes.' },
          { type: 'p', html: "A 2024 University of Bristol review found that problems with sleep and the internal body clock can trigger or worsen a range of psychiatric disorders, and that understanding an individual's sleep-circadian patterns could unlock earlier, more precise intervention." },
          { type: 'stats', stats: [{ value: '30%', label: 'higher anxiety after just one night of poor sleep (2024, Journal of Neuroscience)' }] },
          { type: 'callout', title: 'The takeaway', html: 'The message is uncomfortable but liberating: fix the sleep, and you very often move the needle on the mood.' },
        ],
      },
      {
        title: 'What is actually happening when you "can\'t sleep"',
        plain: true,
        blocks: [
          { type: 'p', html: "Insomnia rarely arrives alone. In clinical experience, it almost always carries a companion: unprocessed anxiety, a nervous system stuck in overdrive, or a lifestyle quietly at war with the brain's ancient rhythms." },
          { type: 'p', html: 'Your brain runs on a 24-hour internal clock called the circadian rhythm. This clock regulates not just when you feel sleepy, but when your cortisol peaks, when your body temperature drops, and when melatonin floods in like a tide. Disrupt it through late screens, erratic schedules, or weekend sleep binges, and you are not just tired the next day. You are destabilising one of the most fundamental biological systems you have.' },
          {
            type: 'stats',
            stats: [
              { value: '24 min', label: 'less sleep from one hour of screen time before bed' },
              { value: '59%', label: 'higher insomnia risk (2024, Journal of Sleep Research)' },
            ],
          },
          { type: 'p', html: 'Your phone is not just keeping your eyes busy. It is sending a false sunrise signal directly to your brain, suppressing melatonin and telling your biology that the day is not over yet.' },
        ],
      },
      {
        title: 'Anchor your clock, every single day',
        blocks: [
          { type: 'p', html: 'Wake up at the same time every morning, including weekends, and get natural light within the first hour. This resets your circadian clock like recalibrating a compass. Over days, your body begins to anticipate sleep at the same hour, making it easier to fall and stay asleep.' },
          { type: 'callout', title: 'Shifts, work or family?', html: 'If you cannot control your wake-up time, anchor the other end. Go to bed at the same time every night. A fixed bedtime gives your body a steady starting point even when your mornings are unpredictable.' },
        ],
      },
      {
        title: 'Treat the bedroom like a cave',
        blocks: [
          { type: 'p', html: 'Cool. Dark. Quiet. The brain needs environmental cues to shift into sleep mode. A room that is too warm, too bright, or too noisy keeps the nervous system subtly activated, the biological equivalent of sleeping with one eye open.' },
        ],
      },
      {
        title: 'Cut the evening stimulants',
        blocks: [
          { type: 'p', html: 'Caffeine has a half-life of 5 to 7 hours, so a 4 p.m. coffee is still half-strength in your bloodstream at 10 p.m. Alcohol is more insidious: it may help you fall asleep but fragments the second half of your night, decimating the REM sleep your brain needs for emotional regulation.' },
          {
            type: 'table',
            head: ['A 4 p.m. coffee', 'Still active'],
            rows: [
              ['4 p.m.', '100%, full dose'],
              ['10 p.m.', '50%, half still active'],
              ['4 a.m.', '25%, a quarter still active'],
            ],
          },
          { type: 'p', html: 'Illustration assumes a 6-hour half-life, the midpoint of the 5 to 7 hour range.' },
        ],
      },
      {
        title: 'The 20-minute rule',
        blocks: [
          { type: 'p', html: 'If you are lying in bed and sleep will not come, do not fight it. You cannot force sleep. It is better to let go of the struggle, pick up a book, and read until you are sleepy. When you lie awake frustrated, your brain begins to associate the bed with wakefulness and anxiety, a conditioned response that makes the next night harder.' },
        ],
      },
      {
        title: 'CBT-I, the psychiatric gold standard',
        blocks: [
          { type: 'p', html: 'Cognitive Behavioural Therapy for Insomnia (CBT-I) restructures the thoughts and habits that sustain insomnia, often outperforming sleep medication in long-term outcomes.' },
          { type: 'p', html: 'In the initial phase, medicines may sometimes be needed alongside it. That decision is not one to take alone. It is made together with your psychiatrist.' },
          {
            type: 'stats',
            stats: [
              { value: '29', label: 'randomised controlled trials' },
              { value: '9,475', label: 'participants, 2025 meta-analysis' },
            ],
          },
        ],
      },
      {
        title: 'Sleep as mental health care',
        plain: true,
        blocks: [
          { type: 'p', html: 'We tend to treat sleep as a lifestyle preference, something to optimise between productivity hacks and morning routines. Psychiatry sees it differently. Sleep problems are common in psychiatric and neurodevelopmental disorders, and often emerge before other symptoms, making sleep a potential early warning signal and a key target for intervention.' },
          { type: 'p', html: 'Think about that. Before the depression fully arrives. Before the anxiety takes hold. The sleep starts to unravel first. Which means the reverse is also true: protect the sleep, and you are doing something profound. You are protecting the mind before the storm hits.' },
        ],
      },
      {
        title: "Don't just count the hours",
        plain: true,
        blocks: [
          { type: 'p', html: 'Quantity is only half the story. Quality matters just as much. Eight hours that leave you groggy are not doing the job. Judge your sleep by how you feel, not only by what the clock says:' },
          {
            type: 'list',
            items: [
              '<strong>Refreshed on waking.</strong> You wake up feeling rested, not dragged out of bed.',
              '<strong>No morning grogginess.</strong> Your head clears within a short time of getting up.',
              '<strong>No daytime sleepiness.</strong> You get through the next day without fighting to stay awake.',
            ],
          },
        ],
      },
      {
        title: 'A final word from the clinic',
        plain: true,
        blocks: [
          { type: 'p', html: 'I have seen patients transform, not through dramatic interventions, but through the quiet discipline of taking sleep seriously. Going to bed at the same time. Dimming the phone an hour before bed. Getting outside in the morning light. It sounds ordinary. The results are not.' },
          { type: 'p', html: 'Your brain is not malfunctioning when it cannot sleep. In most cases, it is responding rationally to an environment, physical and psychological, that is not supporting rest. Change the environment. Change the signals you send your nervous system. Give your brain a reason to power down.' },
          { type: 'callout', title: 'When to seek help', html: 'If sleep difficulties persist beyond 3 to 4 weeks, or are significantly affecting mood, cognition or daily function, consult a psychiatrist or sleep specialist. Chronic insomnia is a treatable condition, not a character flaw.' },
        ],
      },
    ],

    answers: [
      {
        q: 'How are sleep and mental health connected?',
        a: '<p>Sleep and mental health affect each other in both directions. People with insomnia are about 10 times more likely to have depression and 17 times more likely to have anxiety, and irregular sleep can trigger mood episodes in depression or bipolar disorder. Fixing sleep very often improves mood.</p>',
      },
      {
        q: 'What is the 20-minute rule for insomnia?',
        a: '<p>If sleep will not come, do not lie in bed fighting it. Get up, read until you feel sleepy, then go back to bed. Lying awake frustrated teaches your brain to link the bed with wakefulness and anxiety, which makes the next night harder.</p>',
      },
      {
        q: 'How late can I drink coffee without it affecting sleep?',
        a: '<p>Caffeine has a half-life of 5 to 7 hours, so a 4 p.m. coffee is still about half-strength at 10 p.m. and a quarter-strength at 4 a.m. Cutting evening stimulants, including alcohol, which fragments the second half of the night, helps sleep quality.</p>',
      },
      {
        q: 'What is CBT-I?',
        a: '<p>Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard treatment for chronic insomnia. It restructures the thoughts and habits that keep insomnia going and often outperforms sleep medication in the long term. Medicines are sometimes needed at first, a decision made together with your psychiatrist.</p>',
      },
      {
        q: 'When should I see a doctor about sleep problems?',
        a: '<p>Consult a psychiatrist or sleep specialist if sleep difficulties last beyond 3 to 4 weeks, or if they are significantly affecting your mood, thinking or daily life. Chronic insomnia is a treatable condition, not a character flaw.</p>',
      },
    ],

    condition: {
      name: 'Insomnia',
      alternateName: ['Sleep problems', 'Chronic insomnia'],
      treatments: ['Cognitive behavioural therapy for insomnia (CBT-I)', 'Consistent wake time and morning light', 'Reducing evening stimulants'],
    },
  },

  'guide-pmdd': {
    path: '/guides/pmdd-guide',
    pdf: '/resources/pmdd-non-pharmacological-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'PMDD: A Non-Medication Action Plan | Dr. Ashish Yadav',
      description: 'Lifestyle and behavioural strategies for premenstrual dysphoric disorder (PMDD): symptom tracking, exercise, sleep, diet and daily stress practice. By Dr. Ashish Yadav.',
    },
    eyebrow: 'Free guide',
    title: 'PMDD: a non-medication',
    emphasis: 'action plan.',
    subtitle: 'Premenstrual dysphoric disorder: lifestyle and behavioural strategies you can start this cycle.',
    lead: 'PMDD is a cyclical, biologically driven sensitivity to normal hormonal shifts in the luteal phase, not a lack of willpower. The measures below are first-line for mild-to-moderate symptoms and remain essential alongside medication for moderate-to-severe PMDD. Apply them consistently across the cycle, not only when symptoms appear.',

    sections: [
      {
        title: 'Start here: track before you treat',
        plain: true,
        blocks: [
          { type: 'p', html: 'Rate mood, anxiety, irritability, sleep, energy and physical symptoms daily for 2 cycles (a 0–3 severity scale, or a DRSP-style diary). This confirms the luteal-phase pattern and identifies your personal high-risk window, usually the 6 days before your period.' },
        ],
      },
      {
        title: 'Move: aerobic exercise',
        blocks: [
          {
            type: 'list',
            items: [
              '3–5 sessions a week, 30–45 minutes, moderate intensity (brisk walk, cycling, swimming)',
              'Keep sessions going through the luteal phase. Lighter is fine, but do not skip.',
              'Yoga or Pilates 2–3 times a week adds both movement and stress-reduction benefit',
            ],
          },
        ],
      },
      {
        title: 'Sleep: fixed schedule',
        blocks: [
          {
            type: 'list',
            items: [
              'Same bed and wake time (±30 min) every day, weekends included',
              '7–9 hours nightly; no screens for 60 minutes before bed',
              'Caffeine cut-off by 2 pm; avoid alcohol as a sleep aid',
            ],
          },
        ],
      },
      {
        title: 'Eat: stable-blood-sugar plate',
        blocks: [
          {
            type: 'list',
            items: [
              'Half vegetables, quarter protein, quarter complex carbs (oats, millets, whole wheat) at each meal',
              'Small, frequent meals; pair carbs with protein to blunt cravings and mood dips',
              'Reduce salt (bloating), caffeine (anxiety), alcohol and ultra-processed food, especially before your period',
            ],
          },
        ],
      },
      {
        title: 'Regulate: daily stress practice',
        blocks: [
          {
            type: 'list',
            items: [
              '10 minutes a day of breathing work (for example 4-7-8 breathing) or mindfulness',
              'Progressive muscle relaxation for 10–15 minutes a day in the luteal phase',
              'One longer practice a week: guided yoga or an MBSR-style session',
            ],
          },
        ],
      },
      {
        title: 'Match the strategy to the dominant symptom',
        plain: true,
        blocks: [
          {
            type: 'table',
            head: ['Dominant symptom', 'Prioritise'],
            rows: [
              ['Anxiety / irritability', 'CBT, mindfulness, yoga, daily breathing practice'],
              ['Bloating / physical pain', 'Low-salt diet, gentle exercise, heat, magnesium-rich foods'],
              ['Cravings / mood swings', 'Regular small meals, complex carbs, calcium-rich foods'],
            ],
          },
          { type: 'callout', title: 'Supplements (adjunct, discuss with your clinician)', html: 'Calcium, vitamin D, magnesium and omega-3 have the best supporting evidence and are reasonable adjuncts once the four habits above are in place.' },
        ],
      },
      {
        title: 'When to seek more help',
        plain: true,
        blocks: [
          { type: 'p', html: 'If lifestyle measures do not meaningfully improve symptoms after 2–3 tracked cycles, if symptoms significantly impair work, relationships or daily functioning, or if there is any thought of self-harm or suicide at any point in the cycle, seek clinical review promptly.' },
          { type: 'p', html: 'There is no need to fear medication if it becomes necessary. PMDD is usually managed with intermittent, luteal-phase-only dosing rather than a daily medicine, which keeps the side-effect burden very low. Medication is a low-risk addition to the habits above, not a replacement for them.' },
        ],
      },
    ],

    answers: [
      {
        q: 'What is PMDD?',
        a: '<p>Premenstrual dysphoric disorder (PMDD) is a cyclical, biologically driven sensitivity to normal hormonal shifts in the luteal phase, the days before a period. It is not a lack of willpower.</p>',
      },
      {
        q: 'How do I know if my symptoms follow a PMDD pattern?',
        a: '<p>Track before you treat. Rate mood, anxiety, irritability, sleep, energy and physical symptoms daily for 2 cycles, on a 0–3 scale or a DRSP-style diary. This confirms the luteal-phase pattern and shows your personal high-risk window, usually the 6 days before your period.</p>',
      },
      {
        q: 'Can PMDD be managed without medication?',
        a: '<p>For mild-to-moderate symptoms, yes: lifestyle and behavioural measures are first-line. The four core habits are regular aerobic exercise, a fixed sleep schedule, a stable-blood-sugar diet and a daily stress practice, applied across the whole cycle. For moderate-to-severe PMDD, they remain essential alongside medication.</p>',
      },
      {
        q: 'Do supplements help PMDD?',
        a: '<p>Calcium, vitamin D, magnesium and omega-3 have the best supporting evidence and are reasonable add-ons once the four core habits are in place. Discuss them with your clinician first.</p>',
      },
      {
        q: 'When should I see a doctor for PMDD?',
        a: '<p>Seek clinical review if symptoms do not improve after 2–3 tracked cycles, if they significantly affect work, relationships or daily life, or promptly if there is any thought of self-harm or suicide at any point in the cycle. When medication is needed, it is usually taken only in the luteal phase, which keeps side effects low.</p>',
      },
    ],

    condition: {
      name: 'Premenstrual dysphoric disorder (PMDD)',
      alternateName: ['PMDD', 'Severe premenstrual syndrome'],
      treatments: ['Aerobic exercise', 'Fixed sleep schedule', 'Stable-blood-sugar diet', 'Cognitive behavioural therapy (CBT) and mindfulness'],
    },
  },

  'guide-ibs-c': {
    path: '/guides/ibs-c-guide',
    pdf: '/resources/ibs-c-patient-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Living Well with IBS-C: A Non-Medication Guide | Dr. Ashish Yadav',
      description: 'A practical guide to irritable bowel syndrome with constipation (IBS-C): warning signs, routine, fluids, the right fibre, low-FODMAP, toilet habits and the gut-brain loop.',
    },
    eyebrow: 'Patient resource',
    title: 'Living well',
    emphasis: 'with IBS-C.',
    subtitle: 'A practical, non-medication guide to irritable bowel syndrome with constipation.',
    lead: 'IBS-C means recurring belly pain linked with constipation or hard stools. It is real, it is common, and it responds better to several small, steady changes than to one dramatic fix. Your gut is a bit like a smoke alarm set too sensitive: nothing is burning, but it keeps going off. Most of what follows is about turning that sensitivity down. Give any change at least 2 to 4 weeks before judging it, and change one thing at a time so you know what actually helped.',

    sections: [
      {
        title: 'Get checked first if you notice any of these',
        plain: true,
        blocks: [
          {
            type: 'list',
            items: [
              'Blood in the stool, or black stools',
              'Weight loss you cannot explain, fever, repeated vomiting, or anaemia',
              'Symptoms that wake you from sleep',
              'A new change in bowel habit, especially if you are older',
              'A family history of colon cancer, inflammatory bowel disease, or celiac disease',
              'Severe or worsening pain, marked swelling of the belly, or being unable to pass stool or gas',
              'Symptoms that began after you started a new medicine',
            ],
          },
          { type: 'p', html: 'IBS is diagnosed by a doctor from your symptom pattern after other causes are considered. Do not label yourself.' },
        ],
      },
      {
        title: 'Build a rhythm',
        blocks: [
          {
            type: 'list',
            items: [
              'Eat at regular times. Skip the long gaps and the huge meals.',
              'Eat slowly and chew well.',
              'Keep sleep and wake times steady.',
              'Keep a symptom diary for 2 to 4 weeks: meals, stool form, pain, bloating, stress, sleep.',
            ],
          },
          { type: 'p', html: 'Your gut moves most after meals. Use that window for your toilet visit, ideally after breakfast, and never in a rush.' },
        ],
      },
      {
        title: 'Fluids',
        blocks: [
          { type: 'p', html: 'Drink regularly through the day. Roughly 1.5 to 2 litres suits most adults, more in hot weather. If you have a heart, kidney or liver condition, check with your doctor first.' },
          { type: 'p', html: 'Water alone will not fix IBS-C if your fibre intake is low. The two work as a pair.' },
        ],
      },
      {
        title: 'Move most days',
        blocks: [
          { type: 'p', html: 'Aim for 20 to 30 minutes of brisk walking, cycling, swimming, yoga or strength work on most days. Build up slowly. Sudden intense workouts can flare the belly, so ease in.' },
        ],
      },
      {
        title: 'Fibre: choose the right kind',
        blocks: [
          { type: 'p', html: 'Soluble fibre is the usual first choice in IBS-C. It forms a soft gel in the gut and helps stool pass comfortably. Good sources are ispaghula (isabgol) husk, oats, barley, linseed, chia, and well-tolerated fruits and vegetables.' },
          {
            type: 'list',
            items: [
              'Start with a small amount and raise it every few days.',
              'Take it with a full glass of water.',
              'Give it 1 to 2 weeks before deciding if it works.',
              'Go easy on wheat bran and other coarse fibre. It often worsens bloating and pain.',
            ],
          },
          { type: 'p', html: 'More fibre is not always better. If bloating or pain keeps rising, stop increasing it and get it reviewed. Some people need a different approach altogether.' },
        ],
      },
      {
        title: 'Food',
        blocks: [
          { type: 'p', html: 'No single food causes IBS in everyone. Start simple: smaller meals, less deep-fried and very fatty food, fewer fizzy drinks, and moderate tea, coffee and alcohol if they set you off. Avoid detoxes, fasting and crash diets.' },
          { type: 'h3', text: 'The low-FODMAP diet' },
          { type: 'p', html: 'It helps some people with pain and bloating, though the evidence is weaker in IBS-C than in the diarrhoea type. It is a short experiment with three phases, never a lifelong diet.' },
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Restrict</strong> for about 4 to 6 weeks.',
              '<strong>Reintroduce</strong> food groups one at a time and watch your response.',
              '<strong>Personalise</strong> to the least restrictive diet that keeps you comfortable.',
            ],
          },
          { type: 'p', html: 'Do this with a dietitian who knows gut disorders. Skip it, or get supervision, if you have ever had an eating disorder, are losing weight, are underweight, or are pregnant.' },
          { type: 'p', html: 'A gluten-free diet is not routine for IBS. If celiac disease is a possibility, get tested before cutting gluten, since stopping it can hide the result.' },
        ],
      },
      {
        title: 'Toilet habits that help',
        blocks: [
          {
            type: 'list',
            items: [
              'Go when the urge comes. Repeatedly postponing trains the gut to stop signalling.',
              'Raise your feet on a small stool so your knees sit above your hips.',
              'Relax the belly. Avoid long, forceful straining.',
              'Judge progress by stool form, not daily frequency. The goal is soft, formed stool that passes comfortably. The Bristol Stool Chart is a handy reference.',
            ],
          },
          { type: 'p', html: 'If stool is soft but you still struggle to empty, or it feels blocked, tell your doctor. Pelvic floor problems are common and treatable with biofeedback.' },
        ],
      },
      {
        title: 'Calm the gut-brain loop',
        blocks: [
          { type: 'p', html: 'IBS is not "all in your head". Gut and brain talk constantly through nerves, hormones and immune signals. Stress, poor sleep and anxiety turn the volume up on gut sensations, and gut symptoms feed the anxiety back. Both ends can be worked on.' },
          {
            type: 'list',
            items: [
              '5 to 10 minutes of slow diaphragmatic breathing daily',
              'Mindfulness or guided relaxation',
              'Gentle yoga',
              'Consistent sleep, and a steady, moderate caffeine intake',
              'Gut-directed CBT or gut-directed hypnotherapy if symptoms stay troublesome',
            ],
          },
        ],
      },
      {
        title: 'Supplements and quick fixes',
        blocks: [
          { type: 'p', html: 'Probiotic evidence is mixed and depends on the strain. If you want to try one, use one product at a time, at the labelled dose, for up to about 12 weeks. Stop if nothing improves. A pricier multi-strain product is not automatically better.' },
          { type: 'p', html: 'Avoid colon cleanses, unregulated herbal mixes and repeated laxative or enema use without medical advice. Quality and contamination are real concerns. If lifestyle changes are not enough, speak to your doctor about treatment options suited to you.' },
        ],
      },
      {
        title: 'Your step-by-step plan',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Confirm the basics.</strong> Rule out red flags, review your medicines, and start the symptom diary.',
              '<strong>Lay the foundation.</strong> Regular meals, fluids, movement, soluble fibre, a toilet routine, and cutting only the triggers you have clearly identified.',
              '<strong>Review at 2 to 6 weeks.</strong> Check stool form, pain, bloating and effort. Keep what helps, drop what does not.',
              '<strong>Go targeted.</strong> Dietitian-led low-FODMAP trial, gut-directed therapy, pelvic floor assessment, or medical treatment under supervision.',
            ],
          },
        ],
      },
    ],

    answers: [
      {
        q: 'What is IBS-C?',
        a: '<p>IBS-C is irritable bowel syndrome with constipation: recurring belly pain linked with constipation or hard stools. It is real and common, and it responds better to several small, steady changes than to one dramatic fix. It is diagnosed by a doctor from your symptom pattern after other causes are considered.</p>',
      },
      {
        q: 'What warning signs mean IBS-C needs a doctor first?',
        a: '<p>Get checked first if you have blood in the stool or black stools, unexplained weight loss, fever, repeated vomiting or anaemia, symptoms that wake you at night, a new change in bowel habit (especially when older), a family history of colon cancer, IBD or celiac disease, severe or worsening pain, or symptoms that began after a new medicine.</p>',
      },
      {
        q: 'What kind of fibre is best for IBS-C?',
        a: '<p>Soluble fibre is the usual first choice, such as ispaghula (isabgol) husk, oats, barley, linseed and chia. Start small, increase every few days, take it with a full glass of water and give it 1 to 2 weeks. Go easy on wheat bran and other coarse fibre, which often worsen bloating and pain.</p>',
      },
      {
        q: 'Does the low-FODMAP diet work for IBS-C?',
        a: '<p>It helps some people with pain and bloating, though the evidence is weaker in IBS-C than in IBS-D. It is a short three-phase experiment, not a lifelong diet: restrict for 4 to 6 weeks, reintroduce food groups one at a time, then personalise. Do it with a dietitian who knows gut disorders.</p>',
      },
      {
        q: 'Is IBS all in the head?',
        a: '<p>No. Gut and brain talk constantly through nerves, hormones and immune signals. Stress, poor sleep and anxiety turn up gut sensations, and gut symptoms feed anxiety back, so both ends can be treated, for example with daily slow breathing, gentle yoga, and gut-directed CBT or hypnotherapy if symptoms stay troublesome.</p>',
      },
    ],

    condition: {
      name: 'Irritable bowel syndrome with constipation (IBS-C)',
      alternateName: ['IBS-C', 'Irritable bowel syndrome'],
      treatments: ['Soluble fibre', 'Low-FODMAP diet (dietitian-led)', 'Gut-directed CBT', 'Gut-directed hypnotherapy'],
    },
  },

  'guide-ibs-d': {
    path: '/guides/ibs-d-guide',
    pdf: '/resources/ibs-d-patient-guide.pdf',
    lastReviewed: '2026-10-26',
    meta: {
      title: 'Living Well with IBS-D: A Non-Medication Guide | Dr. Ashish Yadav',
      description: 'A practical guide to irritable bowel syndrome with diarrhoea (IBS-D): warning signs, rehydration, caffeine, low-FODMAP, living with urgency and the gut-brain loop.',
    },
    eyebrow: 'Patient resource',
    title: 'Living well',
    emphasis: 'with IBS-D.',
    subtitle: 'A practical, non-medication guide to irritable bowel syndrome with diarrhoea.',
    lead: 'IBS-D means recurring belly pain along with loose or frequent stools, often with urgency. It is real, it is common, and it settles best with several steady changes rather than one dramatic fix. Think of a gut that has its accelerator sensitised: the engine is fine, but the pedal responds to the lightest touch. Most of what follows is about calming that response. Give any change 2 to 4 weeks before judging it, and change one thing at a time so you know what actually helped.',

    sections: [
      {
        title: 'Get checked first if you notice any of these',
        plain: true,
        blocks: [
          {
            type: 'list',
            items: [
              'Blood in the stool, or black stools',
              'Weight loss you cannot explain, fever, repeated vomiting, or anaemia',
              'Diarrhoea that wakes you from sleep',
              'Severe or worsening pain',
              'Dizziness, fainting, or being unable to keep fluids down',
              'Oily, pale, hard-to-flush stools',
              'New bowel symptoms at an older age',
              'A family history of colon cancer, inflammatory bowel disease, or celiac disease',
              'Symptoms after recent antibiotics, a hospital stay, or a bout of travel diarrhoea',
              'Symptoms that persist despite sensible diet and lifestyle changes',
            ],
          },
          { type: 'p', html: 'Several other conditions can look like IBS-D, including infection, celiac disease, inflammatory bowel disease, thyroid overactivity and bile-acid problems. A doctor may order a few basic tests before calling it IBS. Do not label yourself.' },
        ],
      },
      {
        title: 'Build a rhythm',
        blocks: [
          {
            type: 'list',
            items: [
              'Eat at regular times. Long gaps followed by a big meal often set off urgency.',
              'Eat slowly and chew well.',
              'Keep sleep and wake times steady.',
              'Keep a symptom diary for 2 to 4 weeks: food and drink, stool form, urgency, any leakage, pain, bloating, stress, sleep.',
            ],
          },
          { type: 'p', html: 'The diary is there to spot patterns. It is not a reason to start cutting out half your diet.' },
        ],
      },
      {
        title: 'Fluids and rehydration',
        blocks: [
          { type: 'p', html: 'Drink regularly, and more after loose stools. Around 2 litres a day suits many adults, adjusted for heat, activity and body size. If you have a heart, kidney or liver condition, check with your doctor first.' },
          { type: 'p', html: 'When diarrhoea is frequent or lasts more than a day or two, an oral rehydration solution works better than plain water because it replaces salt and sugar along with fluid. Use a ready-made sachet as directed.' },
        ],
      },
      {
        title: 'Caffeine, alcohol and fizzy drinks',
        blocks: [
          { type: 'p', html: 'Caffeine speeds up the gut, and for many people that means urgency. Try keeping tea and coffee to about three cups a day, and cut back on energy drinks, alcohol and fizzy drinks. You do not have to quit everything. Watch your own response and adjust.' },
        ],
      },
      {
        title: 'Move most days',
        blocks: [
          { type: 'p', html: 'Walking, cycling, swimming, yoga and strength work all help mood, sleep and gut symptoms. Start gently if you are inactive and build up. Time hard workouts away from your usual urgent hours.' },
        ],
      },
      {
        title: 'Food',
        blocks: [
          { type: 'p', html: 'Start simple. Smaller meals, less very fatty or fried food, fewer fizzy drinks, and moderate caffeine and alcohol. Do not skip meals or fast to "rest the gut". It tends to backfire.' },
          { type: 'p', html: '<strong>Sugar-free products deserve a look.</strong> Sorbitol and similar sweeteners in sugar-free sweets, chewing gum, "diet" drinks and some diabetic foods pull water into the gut and loosen stools. Check labels.' },
          { type: 'p', html: '<strong>Fibre:</strong> soluble fibre, such as ispaghula (isabgol) husk, oats and barley, is the better choice. Coarse fibre like wheat bran can worsen bloating and urgency. Start with a small amount, raise it slowly, take it with water, and cut back if things get worse. More fibre is not automatically better.' },
          { type: 'h3', text: 'The low-FODMAP diet' },
          { type: 'p', html: 'It helps some people with pain, bloating and stool problems. It is a short experiment with three phases, never a lifelong diet.' },
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Restrict</strong> for about 4 to 6 weeks.',
              '<strong>Reintroduce</strong> food groups one at a time and watch your response.',
              '<strong>Personalise</strong> to a varied diet with the foods you tolerate.',
            ],
          },
          { type: 'p', html: 'Do this with a dietitian who knows gut disorders. Skip it, or get supervision, if you have ever had an eating disorder, are losing weight, eat a very limited diet, or are pregnant.' },
          { type: 'p', html: '<strong>Lactose and gluten:</strong> if symptoms reliably follow milk, a time-limited cut in lactose can make sense. Many people still handle yoghurt and hard cheese, so full dairy exclusion is rarely needed. A gluten-free diet is not routine for IBS. If celiac disease is possible, get tested before cutting gluten, since stopping it can hide the result. Some people who feel better off wheat are reacting to the wheat sugars, not gluten.' },
        ],
      },
      {
        title: 'Living with urgency',
        blocks: [
          {
            type: 'list',
            items: [
              'Keep to your eating pattern and avoid your known triggers before travel or big events.',
              'Know where the nearest toilets are when you are out.',
              'Carry a small kit: tissues, sanitiser, spare underwear.',
              'Do not restrict food or fluids to avoid going. It does not work and it drains you.',
              'Use the diary to tell food triggers apart from stress triggers.',
            ],
          },
          { type: 'p', html: 'If diarrhoea is getting in the way of work, travel or sleep, talk to your doctor. There are treatments for that, and you do not need to grit your teeth through it.' },
        ],
      },
      {
        title: 'Calm the gut-brain loop',
        blocks: [
          { type: 'p', html: 'IBS is not imaginary. Gut and brain talk constantly through nerves, hormones and immune signals. Stress, poor sleep and fear of urgency turn up the volume on gut sensations, and the gut feeds that fear back. When the fear of an accident starts shrinking your life, that loop needs treatment too.' },
          {
            type: 'list',
            items: [
              '5 to 10 minutes of slow diaphragmatic breathing daily',
              'Mindfulness or guided relaxation',
              'Gentle yoga',
              'Steady sleep and lower caffeine',
              'Gradually returning to places and situations you have started avoiding',
              'Gut-directed CBT or gut-directed hypnotherapy, which have some of the strongest evidence among psychological options for IBS',
            ],
          },
        ],
      },
      {
        title: 'Supplements and quick fixes',
        blocks: [
          { type: 'p', html: 'Probiotic evidence is mixed and depends on the strain, and no single product suits everyone. If you want to try one, use one product at a time, at the labelled dose, for up to about 12 weeks. Stop if nothing improves. A pricier multi-strain product is not automatically better.' },
          { type: 'p', html: 'Avoid colon cleanses, unregulated herbal mixes and "IBS cure" products. Quality and contamination are real concerns.' },
          { type: 'p', html: 'Medicines for diarrhoea, cramps and pain do exist, and some are useful for the right person. Please do not start antidiarrhoeal medicines, antibiotics or antidepressants on your own. Diarrhoea also should not be suppressed before a doctor has looked into it. The right choice depends on your main symptoms, other conditions, pregnancy and what else you take.' },
        ],
      },
      {
        title: 'Your step-by-step plan',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '<strong>Set your baseline.</strong> Rule out red flags, review recent antibiotics, travel and medicines, and start the diary. Pick one or two goals, such as fewer urgent trips or being able to leave the house comfortably.',
              '<strong>Use the basics for 2 to 4 weeks.</strong> Regular meals, fluids, less caffeine, alcohol, fizzy drinks and sorbitol, gentle activity, and a cautious trial of soluble fibre.',
              '<strong>Review.</strong> Are stools firmer, is urgency down, is pain better, and is your diet still varied?',
              '<strong>Escalate selectively.</strong> Dietitian-led low-FODMAP trial, gut-directed therapy, further tests, or a medication discussion. See a gastroenterologist if symptoms are severe, unclear or not responding.',
            ],
          },
        ],
      },
    ],

    answers: [
      {
        q: 'What is IBS-D?',
        a: '<p>IBS-D is irritable bowel syndrome with diarrhoea: recurring belly pain along with loose or frequent stools, often with urgency. It is real and common, and settles best with several steady changes rather than one dramatic fix. Other conditions can look similar, so a doctor may order a few basic tests before calling it IBS.</p>',
      },
      {
        q: 'Is oral rehydration solution better than water for diarrhoea?',
        a: '<p>Yes, when diarrhoea is frequent or lasts more than a day or two. An oral rehydration solution replaces salt and sugar along with fluid, which plain water does not. Use a ready-made sachet as directed.</p>',
      },
      {
        q: 'Can sugar-free products cause diarrhoea?',
        a: '<p>They can. Sorbitol and similar sweeteners in sugar-free sweets, chewing gum, "diet" drinks and some diabetic foods pull water into the gut and loosen stools, so check labels.</p>',
      },
      {
        q: 'How can I cope with IBS urgency when I go out?',
        a: '<p>Keep to your eating pattern and avoid known triggers before travel or big events, know where the nearest toilets are, and carry a small kit with tissues, sanitiser and spare underwear. Do not restrict food or fluids to avoid going. If diarrhoea is getting in the way of work, travel or sleep, talk to your doctor, as there are treatments for it.</p>',
      },
      {
        q: 'Should I take antidiarrhoeal medicines for IBS-D on my own?',
        a: '<p>No. Medicines for diarrhoea, cramps and pain can help the right person, but do not start antidiarrhoeal medicines, antibiotics or antidepressants on your own, and diarrhoea should not be suppressed before a doctor has looked into it. The right choice depends on your symptoms, other conditions, pregnancy and other medicines.</p>',
      },
    ],

    condition: {
      name: 'Irritable bowel syndrome with diarrhoea (IBS-D)',
      alternateName: ['IBS-D', 'Irritable bowel syndrome'],
      treatments: ['Soluble fibre', 'Low-FODMAP diet (dietitian-led)', 'Gut-directed CBT', 'Gut-directed hypnotherapy'],
    },
  },
}
