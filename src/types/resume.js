export const Resume = {
  basics: {
    name: "",
    label: "",
    email: "",
    phone: "",
    status: "",
    resume_url: "",
    url: "",
    summary: "",
    information: {
      location: "",
      yearsOfExperience: "",
      availability: "",
      relocation: "",
      remote: "",
    },
    profiles: [
      {
        network: "",
        username: "",
        url: "",
        icon: "",
      },
    ],
    image: "",
  },
  work: [
    {
      company: "",
      summary: "",
      logo_url: "",
      location: "",
      url: "",
      logo: "",
      tenure: "",
      bullets: [],
      positions: [
        {
          position: "",
          startDate: "",
          endDate: "",
          summary: "",
        },
      ],
    },
  ],
  projects: [
    {
      name: "",
      summary: "",
      url: "",
      repo: {
        url: "",
        private: false,
        access: "",
        icon: "",
      },
      image_url: "",
      bullets: [],
      keywords: [],
    },
  ],
  education: [
    {
      institution: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
      gpa: "",
      courses: [],
    },
  ],
  references: [
    {
      name: "",
      position: "",
      company: "",
      email: "",
      phone: "",
      linkedin: "",
      relationship: "",
      reference_type: "",
    },
  ],
  recommendations: [
    {
      name: "",
      position: "",
      company: "",
      email: "",
      linkedin: "",
      summary: "",
    },
  ],
  skills: {
    languages: [],
    technologies: [],
    services: [],
    tools: [],
  },
  softSkills: [],
};

export const ResumeState = {
  resume: null,
  initialized: false,
};
