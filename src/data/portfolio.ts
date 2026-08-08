export type Experience = {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date | 'present' | null;
  location?: string;
  highlights: string[];
};

export type Portfolio = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  resumeUrl?: string;
  social?: Record<string, string>;
  about?: string;
  interests?: string[];
  experience?: Experience[];
  projects?: any[];
  skills?: any[];
  certifications?: any[];
};

export const portfolio: Portfolio = {
  name: "Shreeraam G",
  role: "Software Engineer",
  tagline:
    "Backend engineer who likes building scalable systems and clean code.",
  email: "shreeram0312@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/shreeraamg",
    linkedin: "https://linkedin.com/in/shreeraam",
  },

  about: `Software engineer with two years of hands-on experience in back-end development.
Driven by a strong curiosity to learn, a focus on writing clean and reliable code,
and a willingness to take on new challenges. I enjoy building scalable,
event-driven systems in fast-paced collaborative environments.`,

  interests: ["System Design", "Clean Code", "Event-Driven Architecture"],

  experience: [
    {
      company: "Tata Consultancy Services",
      role: "System Engineer",
      startDate: new Date("2024-03-01"),
      endDate: 'present',
      location: "Chennai",
      highlights: [
        "Built an event-driven data reconciliation microservice using Kafka and KSQL to automatically validate upstream data against MongoDB records, eliminating manual reconciliation and enabling automated alerting for discrepancies.",
        "Consolidated 60+ IBM ACE integration interfaces into a unified Spring Boot microservice, replacing per-interface codebases and images with Helm-templated environment variables and ConfigMap-rendered XSD/XSL files, eliminating new-codebase and new-image overhead per interface.",
        "Designed a centralised Gradle BOM and a convention plugin to abstract version management, configuration, and build logic across 10 repositories (80+ microservices), cutting version upgrade effort by 60% and eliminating repeated per-service boilerplate.",
        "Created an AI agent using GitHub Copilot that generates Bruno API collections and automated tests from Swagger files, eliminating manual API collection authoring and enabling automated post-deployment validation in CI/CD.",
        "Eliminated CI/CD workflow duplication across 10 repositories by engineering reusable composite GitHub Actions and callable workflows with dynamic inputs and caching, cutting workflow code by 40% and build time by 30% across 150+ workflows.",
        "Optimised MongoDB aggregation pipelines with targeted indexing, reducing API response times by 70%.",
        "Introduced Testcontainers-based integration testing with production-mirrored environments, catching environment-specific bugs pre-release and improving deployment confidence.",
      ],
    },
  ],

  projects: [
    {
      name: "Life Grid",
      description: "A GitHub-contribution-graph style life and age tracker used as a browser homepage.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/shreeraamg/life-grid",
      liveUrl: "https://life-grid-sigma.vercel.app/",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
          invert: true,
        },
        { name: "Micronaut", icon: "" },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "Helm",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg",
        },
        {
          name: "Terraform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        },
        {
          name: "GitHub Actions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        },
        {
          name: "Apigee",
          icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gcp-apigee-api-platform/default.svg",
        },
      ],
    },
    {
      category: "Messaging & Streaming",
      items: [
        {
          name: "Kafka",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
          invert: true,
        },
        {
          name: "Confluent",
          icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/confluent/default.svg",
          invert: true,
        },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          invert: true,
        },
        {
          name: "Jira",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
        {
          name: "GitHub Copilot",
          icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github-copilot/default.svg",
        },
        {
          name: "Sonar",
          icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/sonarqube-cloud/default.svg",
        },
        {
          name: "Gradle",
          icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gradle/default.svg",
        },
        {
          name: "IntelliJ IDEA",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ],

  certifications: [
    {
      name: "GH-300: GitHub Copilot",
      issuer: "GitHub",
      year: "2026",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-gb/shreeraamg/B5C07F6DBF83195F?sharingId=C1AEA47DA68654E4",
    },
    {
      name: "GH-900: GitHub Foundations",
      issuer: "GitHub",
      year: "2026",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-in/shreeraamg/21E346361B79191E?sharingId=C1AEA47DA68654E4",
    },
    {
      name: "Relational to Document Model",
      issuer: "MongoDB",
      year: "2025",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      credentialUrl: "https://www.credly.com/badges/831bfe1c-3af1-469a-b8e2-3c331889a0d7/public_url",
    },
    {
      name: "AZ-500: Azure Security Engineer Associate",
      issuer: "Microsoft",
      year: "2025",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-in/shreeraamg/63D9CD29B95DA053?sharingId=C1AEA47DA68654E4",
    },
    {
      name: "100x Devs Full Stack Web Development",
      issuer: "100xDevs",
      year: "2024",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      credentialUrl: "",
    },
  ],
};
