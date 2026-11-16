export const schoolInfo = {
  name: "Mount Valley Public School",
  tagline: "Where Every Child Discovers Their Potential",
  subTagline: "Building knowledge, nurturing values and inspiring young minds for a brighter tomorrow.",
  establishedYear: "Mount Valley",
  logo: "/images/school-logo.png",
  logoOriginal: "/images/school-logo.jpg",
  contact: {
    address: "1/260A, Arasamarathottam, Arumuthampalayam, Palladam Taluk, Tamil Nadu - 641664",
    phone: "+91 99522 58987 / +91 90427 81791",
    email: "Mountvalley22@gmail.com",
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
  physicsLab: {
    src: "/images/physics-laboratory.jpg",
    alt: "Physics experimental laboratory at Mount Valley Public School",
    title: "Physics Laboratory",
    discipline: "Physics",
    badge: "Physical Sciences",
    category: "Laboratories",
    description: "Dedicated experimental benches fitted with stabilized power units, rheostats, potentiometers, resistance boxes, and optical apparatus.",
    equipment: [
      "Regulated electrical power benches",
      "Rheostats & resistance boxes",
      "Optical & measurement benches",
      "Galvanometers & electrical meters"
    ]
  },
  chemistryLab: {
    src: "/images/chemistry-laboratory.jpg",
    alt: "Chemistry laboratory with acid-resistant workstations and reagents",
    title: "Chemistry Laboratory",
    discipline: "Chemistry",
    badge: "Chemical Sciences",
    category: "Laboratories",
    description: "Acid-resistant granite workstations fitted with dedicated reagent shelves, burettes, titration stands, and chemical glassware for qualitative analysis.",
    equipment: [
      "Granite workstation benches",
      "Chemical glassware & reagent shelves",
      "Burette & titration stands",
      "Safety wash stations"
    ]
  },
  biologyLab: {
    src: "/images/biology-laboratory.jpg",
    alt: "Biology laboratory with compound microscopes and preserved specimens",
    title: "Biology Laboratory",
    discipline: "Biology",
    badge: "Life Sciences",
    category: "Laboratories",
    description: "Spacious observation benches equipped with compound microscopes, preserved biological specimens, petri dishes, and anatomical charts.",
    equipment: [
      "Compound microscopes",
      "Preserved biological specimen jars",
      "Petri dishes & glass slides",
      "Anatomical charts & models"
    ]
  },
  // Backward compatibility alias
  scienceLabInterior: {
    src: "/images/chemistry-laboratory.jpg",
    alt: "Chemistry laboratory workstations and reagents",
    title: "Chemistry Laboratory",
    category: "Laboratories",
    description: "Equipped laboratory with modern granite counters, reagent shelves, and apparatus."
  },
  scienceLaboratory: {
    src: "/images/science-laboratory.jpg",
    alt: "Science laboratory facilities with faculty",
    title: "Dedicated Science Facilities",
    category: "Laboratories",
    description: "Organized faculty-monitored laboratory environment designed for experimental scientific inquiry."
  },
  studentsLab: {
    src: "/images/biology-laboratory.jpg",
    alt: "Students actively engaged in biology laboratory experiments",
    title: "Biology Practical Sessions",
    category: "Academics",
    description: "Students in uniform actively recording observations and conducting experiments with faculty guidance."
  }
};

export const laboratoryDisciplines = [
  officialImages.physicsLab,
  officialImages.chemistryLab,
  officialImages.biologyLab,
];

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
    ...officialImages.physicsLab,
    tag: "Physics Laboratory"
  },
  {
    id: 5,
    ...officialImages.chemistryLab,
    tag: "Chemistry Laboratory"
  },
  {
    id: 6,
    ...officialImages.biologyLab,
    tag: "Biology Laboratory"
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
