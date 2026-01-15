import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Cloud,
  Zap,
  Server,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * DESIGN PHILOSOPHY: Minimalist Technical Modern with DevOps Theme
 * - Monochrome palette with orange accent (#ff6b35)
 * - Swiss style typography with Courier Prime for headings
 * - Asymmetric layout with generous whitespace
 * - DevOps themed background images and visual elements
 * - Subtle animations on scroll
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Important: GitHub Pages / Vite base path compatible prefix
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-lg font-bold text-orange-600">JR</div>
          <div className="flex gap-8">
            <a
              href="#experience"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${base}images/devops-hero-bg.png`}
            alt="DevOps background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left: Photo */}
            <div className="flex justify-center animate-fade-in flex-shrink-0">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <img
                  src={`${base}images/profile.jpg`}
                  alt="Jocelyn RAKOTOMALALA"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-orange-600 hover:shadow-orange-600/50 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Center: Content */}
            <div className="flex-1 space-y-8 animate-fade-in max-w-md">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-bold rounded-full">
                    DevOps Engineer
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 leading-tight">
                  Jocelyn
                  <br />
                  RAKOTOMALALA
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400"></div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed max-w-md font-light">
                Administrateur Système DevOps spécialisé dans l'automatisation, la conteneurisation et
                l'infrastructure as code. Je transforme les déploiements complexes en pipelines fiables
                et efficaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="mailto:rakotomalala.jocelyn@yahoo.fr"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail size={20} />
                  Me contacter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-400 text-gray-900 font-bold hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Voir CV
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="flex gap-6 pt-6">
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors hover:scale-110 duration-300">
                  <Github size={28} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors hover:scale-110 duration-300">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:flex justify-center flex-shrink-0">
              <div className="relative w-80 h-96">
                <img
                  src={`${base}images/hero-background.png`}
                  alt="Circuit pattern"
                  className="w-full h-full object-cover rounded-lg opacity-90 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8+", label: "Années d'expérience" },
              { value: "20+", label: "Technologies maîtrisées" },
              { value: "6", label: "Postes occupés" },
              { value: "3", label: "Pays d'expérience" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                <div className="text-4xl font-bold text-orange-600">{stat.value}</div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src={`${base}images/automation-pattern.png`}
            alt="Automation pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Expérience</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400"></div>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
              <div className="md:col-span-1">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">Dec 2024 - Avr 2025</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">4 mois</div>
              </div>
              <div className="md:col-span-3 border-l-4 border-orange-600 pl-8 pb-8 hover:pl-10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stage en DevOps</h3>
                <p className="text-lg text-orange-600 font-bold mb-4">InnovQube, Paris</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Automatisation des déploiements et mise en place de pipelines CI/CD avec Jenkins et GitLab pour automatiser
                  le processus de build, test et déploiement des applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Jenkins", "GitLab CI", "CI/CD"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
              <div className="md:col-span-1">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">Mai 2023 - Juil 2024</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">1 an</div>
              </div>
              <div className="md:col-span-3 border-l-4 border-orange-600 pl-8 pb-8 hover:pl-10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Administrateur Système et Réseau</h3>
                <p className="text-lg text-orange-600 font-bold mb-4">Itech, Paris</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gestion complète de l'infrastructure système, administration des serveurs Windows et Linux, mise en place
                  de solutions de backup et maintenance des systèmes critiques.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Linux", "Windows Server", "Backup"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
              <div className="md:col-span-1">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">Nov 2019 - Avr 2023</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">3 ans+</div>
              </div>
              <div className="md:col-span-3 border-l-4 border-orange-600 pl-8 pb-8 hover:pl-10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Administrateur Poste de Travail</h3>
                <p className="text-lg text-orange-600 font-bold mb-4">Groupe VITAL, Paris</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Infogérance de clients multiples, déploiement SCCM/MECM, gestion Intune et Autopilot, intégration et
                  déploiement des mises à jour Windows 10, gestion des packages applicatifs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SCCM", "Intune", "Autopilot", "Windows 10"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
              <div className="md:col-span-1">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">Juil 2016 - Juil 2018</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">2 ans</div>
              </div>
              <div className="md:col-span-3 border-l-4 border-orange-600 pl-8 hover:pl-10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Administrateur Système et Réseau</h3>
                <p className="text-lg text-orange-600 font-bold mb-4">Henri Fraise Fils, Madagascar</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Administration complète de l'infrastructure, gestion du parc informatique, support technique et maintenance
                  des systèmes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Infrastructure", "Support IT"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Skills Section with Background */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={`${base}images/skills-bg.png`}
            alt="Skills background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Compétences</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Infrastructure & DevOps */}
            <div className="space-y-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <Code2 className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Infrastructure & DevOps</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300 text-gray-800 text-sm rounded-lg hover:border-orange-600 hover:shadow-md transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Systèmes d'Exploitation */}
            <div className="space-y-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <Server className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Systèmes d'Exploitation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["Linux (Ubuntu, Debian)", "Windows Server", "Windows 10/11", "ESXi", "Hyper-V"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300 text-gray-800 text-sm rounded-lg hover:border-orange-600 hover:shadow-md transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & Monitoring */}
            <div className="space-y-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <Cloud className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Cloud & Monitoring</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Microsoft Azure", "Office 365", "Prometheus", "Grafana", "Zabbix"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300 text-gray-800 text-sm rounded-lg hover:border-orange-600 hover:shadow-md transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scripting & Outils */}
            <div className="space-y-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <Zap className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Scripting & Outils</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["PowerShell", "Bash", "Python", "YAML", "SCCM", "Intune", "Veeam"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300 text-gray-800 text-sm rounded-lg hover:border-orange-600 hover:shadow-md transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Education Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src={`${base}images/infrastructure-bg.png`}
            alt="Infrastructure background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Formation</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400"></div>
          </div>

          <div className="space-y-8">
            {[
              { period: "Depuis Mai 2025", title: "Administrateur Système DevOps - Niveau 6", company: "G2R, Paris" },
              { period: "2011 - 2014", title: "Licence en Informatique", company: "Institut de Formation Technique (IFT), Madagascar" },
              { period: "2010", title: "Baccalauréat Série D", company: "Lycée Saint-Pierre Canisius, Madagascar - Mention Bien" },
            ].map((edu, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                <div className="md:col-span-1">
                  <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">{edu.period}</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                  <p className="text-lg text-orange-600 font-bold">{edu.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={`${base}images/devops-hero-bg.png`}
            alt="DevOps pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4">Parlons de votre projet</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vous cherchez un administrateur système DevOps pour automatiser votre infrastructure et optimiser vos déploiements ? Contactez-moi pour discuter de vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:rakotomalala.jocelyn@yahoo.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail size={20} />
              rakotomalala.jocelyn@yahoo.fr
            </a>
            <a
              href="tel:+33766587374"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-orange-600 text-orange-400 font-bold hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={20} />
              +33 7 66 58 73 74
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors hover:scale-110 duration-300">
              <Github size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors hover:scale-110 duration-300">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8 px-4 sm:px-6 lg:px-8 text-center text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 Jocelyn RAKOTOMALALA. Tous droits réservés. | Administrateur Système DevOps</p>
        </div>
      </footer>
    </div>
  );
}
