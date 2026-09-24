import abdulPortrait from '../Abdul Samad Aurakzai.jpeg'
import haziqPortrait from '../haziq saleem.jpeg'
import imranPortrait from '../imran ali.jpeg'
import shaheerPortrait from '../shaheer pic.jpeg'

import imranIgnite from '../imran ali cert.jpeg'
import imranAoc2024 from '../imran ali cert2.jpeg'
import shaheerPjpt from '../shaheer PJPT.jpeg'
import shaheerCrtom from '../shaheer crtom.jpeg'
import shaheerDante from '../shaheer dante.jpeg'
import shaheerZephyr from '../shaheer zephyr.jpeg'

export const linkedin = 'https://www.linkedin.com/company/cyb3r-l0gs/'

export const members = [
  {
    name: 'Shaheer Siddiqui',
    handle: 'shaheer',
    role: 'Red Team & Web Security',
    image: shaheerPortrait,
    linkedin: 'https://www.linkedin.com/in/shaheer-siddiqui-714412247/',
    summary:
      'Penetration tester focused on web applications, Active Directory, network security, and practical red-team operations.',
    skills: ['Web Security', 'Active Directory', 'Red Teaming'],
    credentials: ['PJPT', 'PT1', 'CRTOM', 'CEH', 'Google Cybersecurity'],
    signal: 'PCC 2025 qualifier · IMHackathon runner-up',
  },
  {
    name: 'Abdul Samad Aurakzai',
    handle: 'abdulsamad57',
    role: 'Web, API & Network Security',
    image: abdulPortrait,
    linkedin: 'https://www.linkedin.com/in/abdulsamad57/',
    summary:
      'Junior penetration tester and security researcher working across web, API, network, and AI-assisted security testing.',
    skills: ['API Security', 'Bug Bounty', 'Network Pentesting'],
    credentials: ['eJPT', 'PT1', 'CNSP', 'ISC2 CC', 'Google Cybersecurity'],
    signal: 'AsefaSec pentester · HackerOne researcher',
  },
  {
    name: 'Haziq Saleem',
    handle: 'haziq-saleem',
    role: 'Web Exploitation & OSINT',
    image: haziqPortrait,
    linkedin: 'https://www.linkedin.com/in/haziq-saleem-934655270/',
    summary:
      'Security enthusiast building hands-on depth in web exploitation, open-source intelligence, and competitive CTF problem solving.',
    skills: ['OSINT', 'SQL Injection', 'Web Exploitation'],
    credentials: ['OSINT Foundations', 'Cybersecurity Awareness'],
    signal: 'Holmes CTF · Hack4Bug CTF',
  },
  {
    name: 'Muhammad Imran Ali',
    handle: 'imran-ali',
    role: 'OSINT & Security Research',
    image: imranPortrait,
    linkedin: 'https://www.linkedin.com/in/muhammad-imran-ali-awan/',
    summary:
      'Cybersecurity researcher and OSINT analyst focused on reconnaissance, vulnerability assessment, and custom security tooling.',
    skills: ['Threat Intel', 'Reconnaissance', 'Security Research'],
    credentials: ['THM Jr Penetration Tester', 'Cyber Security 360', 'Advent of Cyber'],
    signal: 'Top 1% TryHackMe · Founder, DARKSCAN',
  },
]

export const capabilities = [
  {
    number: '01',
    title: 'Web & API',
    text: 'Breaking authorization assumptions, tracing data flows, and validating exploitable web and API weaknesses.',
    tags: ['IDOR', 'XSS', 'SQLi', 'Business logic'],
  },
  {
    number: '02',
    title: 'Network & AD',
    text: 'Mapping exposed services, chaining misconfigurations, and navigating Windows and Linux environments.',
    tags: ['Enumeration', 'AD', 'Privilege escalation', 'Pivoting'],
  },
  {
    number: '03',
    title: 'OSINT & Recon',
    text: 'Turning fragmented public data into attack-surface intelligence and high-confidence investigative leads.',
    tags: ['OSINT', 'Asset discovery', 'Threat intel', 'Profiling'],
  },
  {
    number: '04',
    title: 'AI Security',
    text: 'Exploring AI-powered attack surfaces and using automation to accelerate practical security research.',
    tags: ['Prompt security', 'Automation', 'ML', 'Tooling'],
  },
]

export const credentials = [
  { title: 'Practical Junior Penetration Tester', issuer: 'TCM Security', image: shaheerPjpt },
  { title: 'Certified Red Team Operations Management', issuer: 'RedTeamLeaders', image: shaheerCrtom },
  { title: 'DANTE Pro Lab', issuer: 'Hack The Box', image: shaheerDante },
  { title: 'ZEPHYR Pro Lab', issuer: 'Hack The Box', image: shaheerZephyr },
  { title: 'Digital Pakistan Cybersecurity Hackathon', issuer: 'Ignite', image: imranIgnite },
  { title: 'Advent of Cyber 2024', issuer: 'TryHackMe', image: imranAoc2024 },
]
