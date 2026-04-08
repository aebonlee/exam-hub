/**
 * DreamIT Exam Hub - 사이트 설정 파일
 * 자격증 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'exam-hub',
  name: 'DreamIT Exam Hub',
  nameKo: '드림아이티 자격증학습사이트',
  description: 'DreamIT Exam Hub - 자격증 학습사이트 허브. 정보처리기사, SQLD, 리눅스마스터 등 5개 자격증 학습 플랫폼',
  url: 'https://exam-hub.dreamitbiz.com',
  dbPrefix: 'exh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Exam', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#B45309',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'orange', color: '#B45309' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'blue', color: '#0046C8' },
    { name: 'purple', color: '#8B1AC8' },
  ],

  categories: [
    { id: 'it-cert', name: 'IT자격증', nameEn: 'IT Certifications', icon: 'fa-solid fa-certificate', path: '/courses/it-cert' },
    { id: 'expert-cert', name: '전문가 자격증', nameEn: 'Expert Certifications', icon: 'fa-solid fa-user-graduate', path: '/courses/expert-cert' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.itCert', path: '/courses/it-cert', activePath: '/courses/it-cert',
      dropdown: [
        { path: '/courses/eip', labelKey: 'site.nav.eip' },
        { path: '/courses/sqld', labelKey: 'site.nav.sqld' },
        { path: '/courses/linux-master', labelKey: 'site.nav.linuxMaster' },
        { path: '/courses/computer-skill', labelKey: 'site.nav.computerSkill' },
        { path: '/courses/biz-visual', labelKey: 'site.nav.bizVisual' },
      ]
    },
    {
      labelKey: 'site.nav.expertCert', path: '/courses/expert-cert', activePath: '/courses/expert-cert',
      dropdown: [
        { path: '/courses/career-counselor', labelKey: 'site.nav.careerCounselor' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/it-cert', labelKey: 'site.nav.itCert' },
    { path: '/courses/expert-cert', labelKey: 'site.nav.expertCert' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'DreamIT Career Hub', url: 'https://career-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    {
      id: 'eip', name: '정보처리기사', nameEn: 'Engineer Information Processing', url: 'https://eip.dreamitbiz.com',
      icon: 'fa-solid fa-award', color: '#2563EB', category: 'it-cert',
      description: '정보처리기사 필기·실기 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Engineer Information Processing written and practical exams.',
      techStack: ['소프트웨어공학', '데이터베이스', '네트워크', '정보보안'], difficulty: 'intermediate',
      curriculum: ['소프트웨어 설계', '소프트웨어 개발', '데이터베이스 구축', '프로그래밍 언어 활용', '정보시스템 구축관리'],
      curriculumEn: ['Software design', 'Software development', 'Database construction', 'Programming language utilization', 'Information system management'],
      features: ['기출문제 풀이', '모의고사', '핵심 요약'],
      featuresEn: ['Past exam practice', 'Mock exams', 'Key summaries'],
      target: '정보처리기사 수험생', targetEn: 'EIP exam candidates',
    },
    {
      id: 'sqld', name: 'SQLD', nameEn: 'SQL Developer', url: 'https://sqld.dreamitbiz.com',
      icon: 'fa-solid fa-database', color: '#059669', category: 'it-cert',
      description: 'SQL 개발자 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the SQL Developer certification exam.',
      techStack: ['SQL', '데이터모델링', '성능최적화', 'ERD'], difficulty: 'intermediate',
      curriculum: ['데이터 모델링의 이해', 'SQL 기본', 'SQL 활용', '관리 구문', '성능 최적화'],
      curriculumEn: ['Understanding data modeling', 'SQL basics', 'SQL utilization', 'Management syntax', 'Performance optimization'],
      features: ['기출문제 풀이', 'SQL 실습', '핵심 이론 정리'],
      featuresEn: ['Past exam practice', 'SQL practice', 'Key theory review'],
      target: 'SQLD 수험생, DB 개발자 지망생', targetEn: 'SQLD candidates, aspiring DB developers',
    },
    {
      id: 'linux-master', name: '리눅스마스터', nameEn: 'Linux Master', url: 'https://linux-study.dreamitbiz.com',
      icon: 'fa-brands fa-linux', color: '#FCC624', category: 'it-cert',
      description: '리눅스마스터 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Linux Master certification exam.',
      techStack: ['리눅스', '셸스크립트', '서버관리', '네트워크'], difficulty: 'intermediate',
      curriculum: ['리눅스 기본 명령어와 파일시스템', '사용자/그룹 관리', '셸 스크립트 작성', '네트워크 설정과 관리', '서비스 및 보안 관리'],
      curriculumEn: ['Linux commands and filesystem', 'User/group management', 'Shell scripting', 'Network configuration', 'Service and security management'],
      features: ['기출문제 풀이', '실습 환경 제공', '핵심 요약'],
      featuresEn: ['Past exam practice', 'Practice environment', 'Key summaries'],
      target: '리눅스마스터 수험생, 시스템 관리자 지망생', targetEn: 'Linux Master candidates, aspiring system administrators',
    },
    {
      id: 'computer-skill', name: '컴퓨터활용능력', nameEn: 'Computer Skills', url: '#',
      icon: 'fa-solid fa-desktop', color: '#7C3AED', category: 'it-cert',
      description: '컴퓨터활용능력 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Computer Skills certification exam.',
      techStack: ['스프레드시트', '데이터베이스', '컴퓨터일반', '실기'], difficulty: 'beginner',
      curriculum: ['컴퓨터 일반 이론', '스프레드시트 실무', '데이터베이스 실무', '실기 실습', '기출문제 분석'],
      curriculumEn: ['Computer general theory', 'Spreadsheet practice', 'Database practice', 'Practical exam practice', 'Past exam analysis'],
      features: ['기출문제 풀이', '실기 시뮬레이션', '핵심 이론 정리'],
      featuresEn: ['Past exam practice', 'Practical exam simulation', 'Key theory review'],
      target: '컴퓨터활용능력 수험생', targetEn: 'Computer Skills certification candidates',
    },
    {
      id: 'biz-visual', name: '경영정보시각화', nameEn: 'Business Info Visualization', url: '#',
      icon: 'fa-solid fa-chart-pie', color: '#DC2626', category: 'it-cert',
      description: '경영정보시각화 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Business Information Visualization certification exam.',
      techStack: ['데이터시각화', 'BI', '대시보드', '비즈니스분석'], difficulty: 'intermediate',
      curriculum: ['경영정보 시각화 개론', '데이터 수집과 정제', '시각화 도구 활용', '대시보드 설계', '실전 프로젝트'],
      curriculumEn: ['Introduction to business info visualization', 'Data collection and cleaning', 'Visualization tool usage', 'Dashboard design', 'Practical project'],
      features: ['시각화 실습', '대시보드 제작', '사례 분석'],
      featuresEn: ['Visualization practice', 'Dashboard creation', 'Case analysis'],
      target: '경영정보시각화 수험생, 데이터 분석가 지망생', targetEn: 'Biz visualization candidates, aspiring data analysts',
    },
    {
      id: 'career-counselor', name: '직업상담사', nameEn: 'Career Counselor', url: 'https://jobpath.dreamitbiz.com',
      icon: 'fa-solid fa-user-tie', color: '#0369A1', category: 'expert-cert',
      description: '직업상담사 자격증 시험을 체계적으로 준비합니다.',
      descriptionEn: 'Systematically prepare for the Career Counselor certification exam.',
      techStack: ['직업상담', '고용정보', '노동법', '심리검사'], difficulty: 'intermediate',
      curriculum: ['직업상담학', '직업심리학', '직업정보론', '노동시장론', '노동관계법규'],
      curriculumEn: ['Career counseling', 'Vocational psychology', 'Occupational information', 'Labor market theory', 'Labor relations law'],
      features: ['기출문제 풀이', '모의고사', '핵심 요약'],
      featuresEn: ['Past exam practice', 'Mock exams', 'Key summaries'],
      target: '직업상담사 수험생, 고용서비스 종사자', targetEn: 'Career counselor candidates, employment service workers',
    },
  ],
};

export default site;
