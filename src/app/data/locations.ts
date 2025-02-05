/**
 * locations data that will be imported into
 * the three.js globe file. update the data here
 */

export const locations = [
  {
    lat: 28.7416,
    lon: 183,
    info: {
      jobTitle: 'Knowledge Management Apprentice',
      jobCompany: '336th Training Squadron',
      jobLocation: 'Keesler AFB - Biloxi, Mississippi',
      jobDates: '2017-2018',
      jobDescription:
        'Instrumental in web development and records management, driving the efficiency and effectiveness of information sharing and data management within the organization.',
      jobDetails: [
        {
          jobDuty: 'Web Development',
          jobBullets: [
            'Delivered tailored, one-on-one SharePoint training sessions to key representatives, promoting best practices and ensuring compliance with permissions and security standards, ultimately improving team productivity and system integrity.',
            'Successfully planned and executed multiple SharePoint projects, including the creation and management of the organization’s main site collection. Developed and deployed web applications to streamline information sharing between front-line personnel and senior leadership.',
          ],
        },
        {
          jobDuty: 'Records Management',
          jobBullets: [
            'Managed the full data lifecycle in accordance with DoD Records Management standards. Oversaw a records staging facility, ensuring compliance with records disposition schedules and maintaining seamless operations.',
            'Led a team during a comprehensive records audit, repurposing 7.9K square feet of facility space and overseeing the secure destruction of 100,000 hard-copy records, achieving 100% accountability and ensuring regulatory compliance.',
          ],
        },
      ],
      jobSkills: ['dependability', 'problem analysis', 'time management'],
      image: 'assets/patches/336.png',
    },
  }, // Mississippi
  {
    lat: 36.257,
    lon: 168,
    info: {
      jobTitle: 'Knowledge Manager I-III',
      jobCompany: '55th Communications Squadron',
      jobLocation: 'Offutt AFB - Omaha, Nebraska',
      jobDates: '2018-2021',
      jobDescription:
        'Led enterprise-level software development projects focused on cybersecurity, compliance, and secure information sharing, increasing system efficiency and data protection.',
      jobDetails: [
        {
          jobDuty: 'Software Engineering',
          jobBullets: [
            'Designed and developed the installation’s first web application to automate and track early promotion submissions. Reduced processing time by 80%, benefiting 36 organizational executives.',
            'Led a team of four in testing Air Force web applications for Section 508 compliance. Analyzed 1,000+ websites and rectified non-compliant content, ensuring accessibility and inclusion for all users.',
            'Developed a SharePoint 2016-based web application using custom list views to monitor sick employees across 32 sub-directorates in response to COVID-19. Rapidly created a tracking tool under challenging conditions, enabling CDC transmission tracing for 2,200 personnel.',
          ],
        },
        {
          jobDuty: 'Cybersecurity Liaison',
          jobBullets: [
            'Assisted in a tech refresh by receiving and distributing 1,500 pieces of IT infrastructure equipment valued at over $1.5M. Contributed to transitioning the base from local IT support to Enterprise IT as a Service (EITaaS).',
            "Improved intranet security compliance by restructuring permission groups for subordinate organizations' SharePoint collections. Coordinated with 112 content managers to safeguard 1,500 sites and protect 1.8TB of PII data.",
            'Used DoD compliant Windows PowerShell script to scan 1.7TB of Shared Drives for potential PII leaks. Gained foundational scripting skills to streamline future tasks and enhance operational efficiency.',
          ],
        },
      ],
      jobSkills: ['communication', 'customer service', 'problem solving'],
      image: 'assets/patches/55.png',
    },
  }, // Omaha
  {
    lat: 12,
    lon: 310,
    info: {
      jobTitle: 'Knowledge Manager II',
      jobCompany: '449th Air Expeditionary Group',
      jobLocation: 'Camp Lemonnier - Djibouti, Africa',
      jobDates: '2019-2020',
      jobDescription:
        'Played a critical role in web development and cybersecurity initiatives, significantly improving information sharing and network security for the organization.',
      jobDetails: [
        {
          jobDuty: 'Web Development',
          jobBullets: [
            'Developed and launched a collaborative website using SharePoint 2013, building a slide library and implementing JavaScript to automate email flows for 8 organizations. This tool streamlined the sharing of daily intelligence reports with military commanders, saving an average of 55 hours per week and establishing a foundation still in use today.',
            'Planned, developed, and implemented SharePoint-based project management tools, facilitating improved communication between leadership and operational teams, resulting in a 20% reduction in project cycle times and improved project tracking.',
          ],
        },
        {
          jobDuty: 'Cybersecurity Manager',
          jobBullets: [
            'Successfully managed classified network account access for a 500-person organization, resolving 96 application errors and ensuring on-time compliance for deployed Airmen. Demonstrated high attention to detail and precision in ensuring seamless operations.',
          ],
        },
      ],
      jobSkills: ['teamwork', 'flexibility', 'critical thinking'],
      image: 'assets/patches/449.png',
    },
  }, // Djibouti
  {
    lat: 25,
    lon: 398,
    info: {
      jobTitle: 'Data Operations Supervisor',
      jobCompany: '390th Intelligence Squadron',
      jobLocation: 'Kadena AB - Okinawa, Japan',
      jobDates: '2021 - 2023',
      jobDescription:
        'Led high-impact IT, Software Engineering, and Cybersecurity projects by delivering enterprise cloud solutions, automating workflows, and enhancing system security, directly improving operational readiness.',
      jobDetails: [
        {
          jobDuty: 'Software Engineering',
          jobBullets: [
            'Designed and developed a web-based IT trouble ticketing system that automated ticket routing and tracking, reducing lead time by 50%. Provided leadership with actionable metrics and resolved over 2,000 tickets to date, enhancing operational efficiency.',
            'Developed a SharePoint-based project management tool to track project cycles, sprint goals, and external dependencies. Improved executive decision-making and facilitated the completion of multiple IT projects exceeding $100K each.',
            'Engineered an automated 24/7 watch scheduling solution using Microsoft services, incorporating tiered user permissions. Streamlined communication for 200 personnel through mass scheduling and visual shift tracking.',
          ],
        },
        {
          jobDuty: 'Project Management',
          jobBullets: [
            'Managed a $227K tech refresh project, upgrading 250 workstations and boosting system performance by 50%. Delivered all project milestones 25% ahead of schedule, enhancing operational efficiency.',
            "Delivered IT support for 350 personnel during a partner organization's staffing gap. Resolved 100+ trouble tickets and completed multiple projects, eliminating the need for costly emergency contract technicians.",
            'Led a 5-person team to trace 1,300 fiber ports, correcting 100 faults and producing comprehensive network diagrams. Improved support capacity for 40 additional workstations and reduced trouble ticket resolution time by 10%.',
          ],
        },
        {
          jobDuty: 'Cybersecurity Liaison',
          jobBullets: [
            'Established an OSINT program from the ground up, training a four-person team to produce 83 intelligence products. Enhanced reports for the Intelligence Community and earned a Team of the Year award for exceptional contributions.',
            'Managed a $180K crypto account and decommissioned 13 hardware units two months ahead of a higher headquarters directive. Proactively mitigated end-of-life vulnerabilities, enhanced cybersecurity posture, and ensured compliance with DoD standards.',
          ],
        },
      ],
      jobSkills: ['leadership', 'creativity', 'empathy'],
      image: 'assets/patches/390.png',
    },
  }, // Okinawa
  {
    lat: 38,
    lon: 410,
    info: {
      jobTitle: 'Senior Knowledge Manager',
      jobCompany: 'DoD Special Representative Japan',
      jobLocation: 'Field Office - Japan',
      jobDates: '2023-2025',
      jobDescription:
        'Worked for a private government agency, chairing their Knowledge Management program which focused on customer obsession, thinking big picture, and delivering meaningful results and outcomes.',
      jobDetails: [
        {
          jobDuty: 'Software Engineering',
          jobBullets: ['Pending pre-publication review.'],
        },
        {
          jobDuty: 'Records Management',
          jobBullets: ['Pending pre-publication review.'],
        },
        {
          jobDuty: 'Logistics & Protocol Operations',
          jobBullets: ['Pending pre-publication review.'],
        },
      ],
      jobSkills: [
        'decision making',
        'presentation skills',
        'strategic thinking',
      ],
      image: 'assets/patches/dsrj-o.png',
    },
  }, // DSRJ
];

// locations.ts
// export const locations = [
//   {
//     lat: 28.7416,
//     lon: 183,
//     info: {
//       jobTitle: 'Information Technology Apprentice',
//       jobCompany: '336th Training Squadron',
//       jobLocation: 'Keesler AFB - Biloxi, Mississippi',
//       jobDates: '2017-2018',
//       jobDetails: [
//         {
//           jobDuty: 'SharePoint Technician',
//           jobDetails: [
//             'Created basic team sites, pages and web-parts',
//             'Managed permissions for organization of 100+ users',
//           ],
//         },
//         {
//           jobDuty: 'Records Management Student',
//           jobDetails: [
//             'Studied records disposition rules for federal records',
//             'Assisted in records staging for the organization ',
//           ],
//         },
//         {
//           jobDuty: 'Information Technology Support',
//           jobDetails: [
//             'Trained in basic IT troubleshooting',
//             'Assisted customers with collaboration management',
//           ],
//         },
//       ],
//       jobSkills: ['dependability', 'problem analysis', 'time management'],
//       image: 'assets/patches/336.png',
//     },
//   }, // Mississippi
//   {
//     lat: 36.257,
//     lon: 168,
//     info: {
//       jobTitle: 'Knowledge Management Specialist',
//       jobCompany: '55th Communications Squadron',
//       jobLocation: 'Offutt AFB - Omaha, Nebraska',
//       jobDates: '2018-2021',
//       jobDetails: [
//         {
//           jobDuty: 'SharePoint Admin',
//           jobDetails: [
//             'Project lead for development of COVID-19 tracking site and Airman promotion dashboard',
//             'Led monthly training for 200+ delegates on SharePoint best practices and security measures',
//             'Promoted organization process improvement techniques with collaboration management tools',
//           ],
//         },
//         {
//           jobDuty: 'Records Manager',
//           jobDetails: [
//             "Conducted quarterly audits to ensure compliance with record's disposition schedules",
//             'Managed data life-cycle; inventoried, destroyed and archived over 90,000 records',
//           ],
//         },
//         {
//           jobDuty: 'Cybersecurity Liaison',
//           jobDetails: [
//             'Administered AFNet domain access utilizing Information Assurance Officer (IAO) Express',
//             'JPAS experience verifying security clearance information and certification',
//           ],
//         },
//       ],
//       jobSkills: ['communication', 'customer service', 'problem solving'],
//       image: 'assets/patches/55.png',
//     },
//   }, // Omaha
//   {
//     lat: 12,
//     lon: 310,
//     info: {
//       jobTitle: 'Lead Staff Officer',
//       jobCompany: '449th Air Expeditionary Group',
//       jobLocation: 'Camp Lemonnier - Djibouti, Africa',
//       jobDates: '2019-2020',
//       jobDetails: [
//         {
//           jobDuty: 'Executive Administrator',
//           jobDetails: [
//             'Developed online mission reporting process leveraging SharePoint workflows',
//             'Researched, advanced, and promoted higher education means to 500+ Airmen',
//           ],
//         },
//         {
//           jobDuty: 'Cybersecurity Manager',
//           jobDetails: [
//             'Validated security clearance information for over 300 personnel',
//             'Managed and approved network access for deployment rotation',
//           ],
//         },
//       ],
//       jobSkills: ['teamwork', 'flexibility', 'critical thinking'],
//       image: 'assets/patches/449.png',
//     },
//   }, // Djibouti
//   {
//     lat: 25,
//     lon: 398,
//     info: {
//       jobTitle: 'Data Operations Supervisor',
//       jobCompany: '390th Intelligence Squadron',
//       jobLocation: 'Kadena AB - Okinawa, Japan',
//       jobDates: '2021 - 2023',
//       jobDetails: [
//         {
//           jobDuty: 'IT Project Management',
//           jobDetails: [
//             'Led $227,000 tech-refresh that included deployment and configuration of 250 workstations',
//             'Expanded BOCKSCAR network capabilities by installing four critical servers across multiple IT nodes',
//           ],
//         },
//         {
//           jobDuty: 'Senior SharePoint Admin',
//           jobDetails: [
//             'Developed in-house tracking application that seamlessly handled account processing, trouble tickets, change requests and project management: providing key metrics to stakeholders from the IT department',
//           ],
//         },
//         {
//           jobDuty: 'Cybersecurity and Information Assurance',
//           jobDetails: [
//             'Lead custodian on $150,000 account, validated 35 critical items for COMPUSEC regulations quarterly',
//             'Oversaw a 6-member team that handled access control of the Air Force domains/networks',
//           ],
//         },
//       ],
//       jobSkills: ['leadership', 'creativity', 'empathy'],
//       image: 'assets/patches/390.png',
//     },
//   }, // Okinawa
//   {
//     lat: 38,
//     lon: 410,
//     info: {
//       jobTitle: 'Chief Support Services',
//       jobCompany: 'DoD Special Representative Japan',
//       jobLocation: 'Field Office - Japan',
//       jobDates: '2023-2025',
//       jobDetails: [
//         {
//           jobDuty: 'SharePoint Development',
//           jobDetails: ['Pending declassification'],
//         },
//         {
//           jobDuty: 'Records Management',
//           jobDetails: ['Pending declassification'],
//         },
//         {
//           jobDuty: 'Logistics & Protocol Operations',
//           jobDetails: ['Pending declassification'],
//         },
//       ],
//       jobSkills: [
//         'decision making',
//         'presentation skills',
//         'strategic thinking',
//       ],
//       image: 'assets/patches/dsrj-o.png',
//     },
//   },
// ];
