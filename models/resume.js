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
        additional: [String],
      },
    ],

    skills: {
      technical: [String], // ["JavaScript", "Python", "React"]
      languages: [String], // ["English", "Spanish"]
      soft: [String], // ["Leadership", "Communication"]
    },

    settings: {
      template: { type: String, default: "modern" },
      primaryColor: String,
      isDefault: { type: Boolean, default: false }, // primary resume?
    },

    title: { type: String, default: "My Resume" }, // user can name different versions
  },
  { timestamps: true }
);

// create the model for resumes and expose it to our app
export const Resume = mongoose.model("Resume", resumeSchema);
