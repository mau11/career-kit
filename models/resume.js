import mongoose from "mongoose";

// define the schema for our resume model
const resumeSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // personal info
    firstName: { type: String, required: true },
    middleInitial: String,
    lastName: { type: String, required: true },
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    website: String,
    linkedIn: String,
    github: String,
    portfolio: String,

    // summary
    summary: String,

    // work experience (array of jobs)
    experience: [
      {
        jobTitle: String,
        company: String,
        location: String,
        startDate: Date,
        endDate: Date,
        currentJob: { type: Boolean, default: false },
        responsibilities: [String], // array of bullet points
      },
    ],

    // education (array of schools)
    education: [
      {
        degree: String,
        major: String,
        minor: String,
        school: String,
        location: String,
        graduationDate: Date,
        gpa: Number,
        honors: [String], // ["Summa Cum Laude", "Dean's List"]
        relevantCoursework: [String],
      },
    ],

    skills: {
      technical: [String], // ["JavaScript", "Python", "React"]
      languages: [String], // ["English", "Spanish"]
      soft: [String], // ["Leadership", "Communication"]
      tools: [String], // ["Git", "Docker", "Figma"]
    },

    projects: [
      {
        name: String,
        description: String,
        technologies: [String],
        url: String,
        githubUrl: String,
        startDate: Date,
        endDate: Date,
      },
    ],

    publications: [
      {
        title: String,
        publisher: String,
        publicationDate: Date,
        url: String,
        authors: [String],
        description: String,
      },
    ],

    volunteer: [
      {
        role: String,
        organization: String,
        location: String,
        startDate: Date,
        endDate: Date,
        currentRole: { type: Boolean, default: false },
        description: String,
      },
    ],

    settings: {
      template: { type: String, default: "modern" },
      primaryColor: { type: String, default: "black" },
      fontSize: { type: String, default: "medium" },
      sectionsOrder: [String], // ["summary", "experience", "education", "skills"]
      hiddenSections: [String], // sections user wants to hide
    },

    title: { type: String, default: "My Resume" }, // user can name different versions
    isDefault: { type: Boolean, default: false }, // primary resume?
  },
  { timestamps: true }
);

// create the model for resumes and expose it to our app
export const Resume = mongoose.model("Resume", resumeSchema);
