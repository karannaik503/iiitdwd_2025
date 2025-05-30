import { NavigationItem } from '@/types/navigation';

const navigationData: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
    items: []
  },
  {
    title: 'Institute',
    href: '/institute',
    items: [
      {
        title: 'About Us',
        href: '/about',
        meta: { disableLayout: true }
      },
      {
        title: 'Campus',
        href: '/institute/campus',
        items: [
          { title: 'How to reach', href: '/how-to-reach' },
          {
            title: 'Amenities',
            href: '/amenities'
          },
          { title: 'Video of campus', href: '/campus-video' }
        ]
      },
      { title: 'Events / Awards', href: '/events' },
      { title: 'Contact', href: '/contact' },
      {
        title: 'Careers',
        href: '/careers'
      },
      { title: 'Tenders', href: '/tenders' }
    ]
  },
  {
    title: 'Admissions',
    href: '/admission',
    meta: { disableLayout: true },
    items: [
      {
        title: 'B.Tech',
        href: '/admission/b-tech'
      },
      {
        title: 'M.Tech',
        href: '/admission/m-tech'
      },
      {
        title: 'Phd',
        href: '/admission/phd'
      },
      {
        title: 'Fees',
        href: '/admission/fees'
      }
    ]
  },
  {
    title: 'Administration',
    href: '/administration',
    items: [
      { title: 'Visitor', href: '/visitor' },
      { title: 'Chairperson', href: '/chairperson' },
      {
        title: 'Board of Governors',
        href: '/governing-bodies/board'
      },
      { title: 'Director', href: '/director' },
      { title: 'The Senate', href: '/governing-bodies/senate' },
      { title: 'Finance Committee', href: '/governing-bodies/financial' },
      {
        title: 'Building & Works Committee',
        href: '/governing-bodies/building'
      },
      { title: 'Registrar', href: '/registrar' },
      { title: 'Deans', href: '/deans' },
      { title: 'Head of Departments', href: '/hods' },
      {
        title: 'Career Guidance Cell',
        href: '/cgc',
        meta: { disableLayout: false }
      },
      {
        title: 'Public disclosures',
        href: '/disclosures',
        items: [{ title: 'RTI', href: 'https://iiitdwd.ac.in/pdfs/RTI.pdf' }]
      }
    ]
  },
  {
    title: 'Academics',
    href: '/academics',
    items: [
      { title: 'Programmes', href: '/academics/programmes' },
      // { title: 'Calendar', href: '/academics/calendar' },
      { title: 'Departments', href: '/academics/departments' },
      {
        title: 'Faculty',
        href: '/academics/faculty',
        meta: { disableLayout: false }
      },
      { title: 'Research', href: '/academics/research' },
      {
        title: 'Curriculum',
        href: 'https://iiitdwd.ac.in/docs/Curricula_16May23.pdf'
      },
      { title: 'Convocation / Conclave', href: '/academics/convocation' },
      { title: 'NIRF', href: '/academics/nirf' },
      { title: 'Online', href: 'https://online.iiitdwd.ac.in/' }
    ]
  },
  {
    title: 'Student life',
    href: '/student-life',
    items: [
      { title: 'Overview', href: '/student-life/overview' },
      { title: 'Hostel', href: '/student-life/hostel' },
      {
        title: 'IIC and Clubs',
        href: '/student-life/clubs',
        items: [
          { title: 'Tech clubs', href: '/student-life/clubs/tech' },
          { title: 'Non Tech clubs', href: '/student-life/clubs/non-tech' },
          { title: 'Sports club', href: '/student-life/clubs/sports' },
          { title: 'Cultural club', href: '/student-life/clubs/cultural' }
        ]
      },
      { title: 'NSS', href: '/student-life/nss' },
      { title: 'NCC', href: '/student-life/ncc' },
      { title: 'Sports and games', href: '/student-life/sports' },
      {
        title: 'Anti ragging',
        href: 'https://iiitdwd.ac.in/docs/Anti_Ragging_Information.pdf'
      },
      {
        title: 'Achievements',
        href: '/student-life/achievements'
      }
    ]
  },
  {
    title: 'Placements',
    href: '/placements',
    items: [
      { title: 'Why Recruit Us?', href: '/placements/#why-recruit-us' },
      // { title: 'Placement Procedures', href: '/placements/procedures' },
      {
        title: 'Placement Brochure',
        href: 'https://iiitdwd.ac.in/docs/brochure_cgc.pdf'
      },
      {
        title: 'Placement Statistics',
        href: '/placements/#placement-statistics'
      },
      { title: 'Our Recruiters', href: '/placements/#previous-recruiters' },
      // { title: 'Batch Graduating 2025-26', href: '/placements/batch-2025-26' },
      // { title: 'Internships', href: '/placements/internships' },
      // { title: 'Industry Outreach', href: '/placements/industry-outreach' },
      // { title: 'Our Startups', href: '/placements/startups' },
      // { title: 'Startup Fair 2024', href: '/placements/startup-fair-2024' },
      { title: 'Higher Studies', href: '/placements/#higher-studies' },
      {
        title: 'Alumni Testimonials',
        href: '/alumni-testimonials'
      },
      { title: 'Contact T&P', href: '/placements/#contact' }
    ]
  }
];

export default navigationData;
