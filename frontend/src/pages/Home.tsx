import React from 'react';
import useInView from '../hooks/useInView';

const ExperienceEntry: React.FC<{
    title: string;
    bullets: string[];
    years?: string;
    location?: string;
}> = ({ title, bullets, years, location }) => {
    const [ref, inView] = useInView<HTMLDivElement>();
    return (
        <div ref={ref} className={`exp-entry ${inView ? 'in-view' : ''}`}>
            <div className="exp-header">
                <h3>{title}</h3>
                <div className="meta">{years} • {location}</div>
            </div>
            <ul>
                {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
        </div>
    );
};

const Home: React.FC = () => {
    const [heroRef, heroInView] = useInView<HTMLDivElement>();

    const experience = [
        {
            title: 'Senior DevSecOps Engineer',
            years: '2023',
            location: 'Bangalore',
            bullets: [
                'Designed and applied secure CI/CD pipelines for cloud-native applications.',
                'Integrated security tools like OWASP ZAP, grype, osv-scanner, Sigstore Cosign, and Restler into CI/CD workflows.',
                'Managed Kubernetes clusters, enforced security policies using OPA/Gatekeeper, and implemented Istio service mesh for improving network management and security.',
                'Automated workflow to scan, detect, and triage the vulnerabilities using external datasources like NVD and First.org.',
                'Created an MCP client (TypeScript) for LLM models to communicate with MCP servers like cve_search and cve_scanner.'
            ]
        },
        {
            title: 'Full stack developer',
            years: '2021 – 2023',
            location: 'Bangalore',
            bullets: [
                'Developed RESTful APIs for scalable microservice applications.',
                'Built and optimized microservices using ExpressJS.',
                'Deployed and monitored applications on Kubernetes with FluxCD GitOps.',
                'Enforced authentication and authorization mechanisms using JWT and OAuth.'
            ]
        },
        {
            title: 'Automation Tester',
            years: '2020 – 2021',
            location: 'Bangalore',
            bullets: [
                'Designed and executed automated UI and API tests for web applications using Python and Shell.',
                'Developed test frameworks using Selenium, Playwright, JMeter, and Pytest.',
                'Automated tests in CI/CD pipelines, improving release efficiency.'
            ]
        },
        {
            title: 'AI/ML Engineer',
            years: '2020',
            location: 'Bangalore',
            bullets: [
                'Utilized and reworked the darknet model to find abnormal activities and reduced storage of empty footage.',
                'Supported face detection model development and training.',
                'Submitted PoCs for theft protection using darknet and OpenCV.'
            ]
        }
    ];

        const skills = [
            'Nodejs','React','Angular','FastAPI','Docker','Kubernetes','Flux CD','GitHub Actions','Azure','AWS',
            'Selenium','Playwright','Pytest','JMeter','OWASP ZAP','Restler','Make','CMake','Bazel','MySQL','MongoDB',
            'Linux','Shell','Typescript','Python','C++','Golang','Rego','istio','cilium','SAST','DAST','OPA/Gatekeeper','Sigstore Cosign','Grype','Trivy','osv-scanner','Git','Deep Learning','Pytorch','TensorFlow','ELK'
        ];

        const [copied, setCopied] = React.useState<string | null>(null);
        const handleCopy = async (skill: string) => {
            try {
                await navigator.clipboard.writeText(skill);
                setCopied(skill);
                setTimeout(() => setCopied(null), 1200);
            } catch (e) {
                // ignore
            }
        };

    return (
        <main className="container page-root">
            <section id="about" ref={heroRef} className={`hero ${heroInView ? 'in-view' : ''}`}>
                <div className="hero-inner">
                    <h1>Senior DevSecops Engineer</h1>
                    <p className="lead">
                        Building resilient systems and secure CI/CD pipelines with the kind of precision  <i>Stark Lab</i> wishes it had. 
                        Genius. Billionaire. Playboy. Philanthropist. Well, at least the two of them.
                    </p>
                    <div className="meta-row">
                        <span>📍 Stark Tower</span>
                        <span className="sep">•</span>
                        <span>⚡ Power Level: 9000+</span>
                    </div>
                </div>
            </section>

            <section id="experience" className="section">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    {experience.map((e, i) => (
                        <ExperienceEntry key={i} title={e.title} bullets={e.bullets} years={e.years} location={e.location} />
                    ))}
                </div>
            </section>

            <section id="skills" className="section">
                <h2 className="section-title">Skills</h2>
                        <div className="skills-grid">
                            {skills.map((s) => (
                                <button key={s} type="button" className="skill-badge" onClick={() => handleCopy(s)}>
                                    {s}
                                    {copied === s && <span className="copied">Copied</span>}
                                </button>
                            ))}
                        </div>
            </section>

            <section id="contact" className="section contact">
                <h2 className="section-title">Contact</h2>
                <p>Let's build something amazing together. Reach out for opportunities, collaborations, or just to connect!</p>
                <p>
                    📧 Email: <a href="mailto:sakthikgm2211@gmail.com">sakthikgm2211@gmail.com</a>
                </p>
                <p>
                    💼 LinkedIn: <a href="https://in.linkedin.com/in/sakthivel-palanisamy-382a64176" target="_blank" rel="noreferrer">
                        linkedin.com/in/sakthivel-palanisamy-382a64176
                    </a>
                </p>
            </section>
        </main>
    );
};

export default Home;