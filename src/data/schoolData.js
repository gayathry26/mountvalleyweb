export const schoolInfo = {
  name: "Mount Valley Public School",
  tagline: "Where Every Child Discovers Their Potential",
  subTagline: "Building knowledge, nurturing values and inspiring young minds for a brighter tomorrow.",
  establishedYear: "Mount Valley",
  logo: "/images/school-logo.png",
  logoOriginal: "/images/school-logo.jpg",
  contact: {
    address: "Arasamara Thottam, Arumuthampalayam, Palladam Taluk, Tamil Nadu - 641664",
    phone: "+91 99522 58987",
    email: "mountvalley21@gmail.com",
    officeHours: "Monday – Saturday: 8:30 AM – 4:30 PM",
  },
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  }
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Campus Life", path: "/campus-life" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact Us", path: "/contact" },
];

export const officialImages = {
  building: {
    src: "/images/school-building.jpg",
    alt: "Mount Valley Public School building exterior",
    title: "School Campus Building",
    category: "Campus",
    description: "Modern, purpose-built academic building of Mount Valley Public School."
  },
  entrance: {
    src: "/images/school-entrance.jpg",
    alt: "Mount Valley Public School grand entrance gate",
    title: "School Entrance Gate",
    category: "Campus",
    description: "Welcoming main entrance gate connecting the campus to students and visitors."
  },
  classroom: {
    src: "/images/classroom-environment.jpg",
    alt: "Classroom learning environment at Mount Valley Public School",
    title: "Engaging Classroom Learning",
    category: "Academics",
    description: "Spacious, well-ventilated classroom with dedicated student workspaces and illustrative wall charts."
  },
  scienceLabInterior: {
    src: "/images/science-lab-interior.jpg",
    alt: "Science laboratory interior and workstations",
    title: "Science & Chemistry Laboratory",
    category: "Infrastructure",
    description: "Equipped laboratory with modern granite counters, reagent shelves, and apparatus."
  },
  scienceLaboratory: {
    src: "/images/science-laboratory.jpg",
    alt: "Science laboratory facilities with faculty",
    title: "Dedicated Science Facilities",
    category: "Infrastructure",
    description: "Fully organized laboratory environment designed for experimental scientific inquiry."
  },
  physicsLab: {
    src: "/images/physics-laboratory.jpg",
    alt: "Physics laboratory with experimental apparatus and faculty",
    title: "Physics Experimental Lab",
    category: "Infrastructure",
    description: "Specialized physics lab tables with electrical benches, rheostats, and optical apparatus."
  },
  studentsLab: {
    src: "/images/students-laboratory.jpg",
    alt: "Students actively engaged in laboratory experiments",
    title: "Practical Learning in Action",
    category: "Academics",
    description: "Students in uniform actively recording observations and conducting experiments with faculty guidance."
  }
};

export const galleryItems = [
  {
    id: 1,
    ...officialImages.building,
    tag: "Campus Architecture"
  },
  {
    id: 2,
    ...officialImages.entrance,
    tag: "Campus Gates"
  },
  {
    id: 3,
    ...officialImages.classroom,
    tag: "Classroom Education"
  },
  {
    id: 4,
    ...officialImages.studentsLab,
    tag: "Student Laboratory Sessions"
  },
  {
    id: 5,
    ...officialImages.scienceLabInterior,
    tag: "Chemistry & Science Facilities"
  },
  {
    id: 6,
    ...officialImages.physicsLab,
    tag: "Physics Laboratory"
  },
  {
    id: 7,
    ...officialImages.scienceLaboratory,
    tag: "Faculty & Lab Environment"
  }
];

export const corePillars = [
  {
    title: "Quality Education",
    desc: "A balanced educational curriculum designed to foster academic rigor, inquiry, and intellectual curiosity.",
    icon: "GraduationCap"
  },
  {
    title: "Student Development",
    desc: "Nurturing character, confidence, teamwork, and responsible citizenship through meaningful daily learning.",
    icon: "Users"
  },
  {
    title: "Practical Learning",
    desc: "Dedicated physical science and physics laboratories offering hands-on experimental experiences.",
    icon: "FlaskConical"
  },
  {
    title: "Supportive Environment",
    desc: "Safe, disciplined, and inclusive campus where students receive close mentorship from dedicated educators.",
    icon: "ShieldCheck"
  }
];

