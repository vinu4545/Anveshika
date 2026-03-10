import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  linkedin: string;
};

type Domain = {
  name: string;
  members: Member[];
};

const teamDomains: Domain[] = [
  {
    name: "Administration Domain",
    members: [
      { name: "Gargi Chakurkar", role: "President", linkedin: "https://linkedin.com/in/gargi-chakurkar" },
      { name: "Satyen Katagale", role: "Vice President", linkedin: "https://linkedin.com/in/satyen-katagale" },
    ],
  },
  {
    name: "Management Domain",
    members: [
      { name: "Nayan Ghige", role: "Lead", linkedin: "https://linkedin.com/in/nayan-ghige" },
      { name: "Aanchal Goyal", role: "Co-Lead", linkedin: "https://linkedin.com/in/aanchal-goyal" },
      { name: "Gauri Shukla", role: "Co-Lead", linkedin: "https://linkedin.com/in/gauri-shukla" },
      { name: "Ranjit Beldar", role: "Coordinator", linkedin: "https://linkedin.com/in/ranjit-beldar" },
      { name: "Paras Bugate", role: "Coordinator", linkedin: "https://linkedin.com/in/paras-bugate" },
      { name: "Aditya Shete", role: "Coordinator", linkedin: "https://linkedin.com/in/aditya-shete" },
      { name: "Akshata Biradar", role: "Coordinator", linkedin: "https://linkedin.com/in/akshata-biradar" },
      { name: "Atharva Pardeshi", role: "Coordinator", linkedin: "https://linkedin.com/in/atharva-pardeshi" },
    ],
  },
  {
    name: "Research Domain",
    members: [
      { name: "Mohak Dhore", role: "Lead", linkedin: "https://linkedin.com/in/mohak-dhore" },
      { name: "Hardik Waghunde", role: "Coordinator", linkedin: "https://linkedin.com/in/hardik-waghunde" },
      { name: "Tejas Bhute", role: "Coordinator", linkedin: "https://linkedin.com/in/tejas-bhute" },
      { name: "Jiten Bandawar", role: "Coordinator", linkedin: "https://linkedin.com/in/jiten-bandawar" },
      { name: "Sanika Patil", role: "Coordinator", linkedin: "https://linkedin.com/in/sanika-patil" },
    ],
  },
  {
    name: "Technical Domain",
    members: [
      { name: "Vaishnavi Deshmukh", role: "Lead", linkedin: "https://linkedin.com/in/vaishnavi-deshmukh" },
      { name: "Vinay Gaddam", role: "Lead", linkedin: "https://linkedin.com/in/vinay-gaddam" },
      { name: "Yash Bhavsar", role: "Co-Lead", linkedin: "https://linkedin.com/in/yash-bhavsar" },
      { name: "Utkarsh Choughule", role: "Co-Lead", linkedin: "https://linkedin.com/in/utkarsh-choughule" },
      { name: "Samruddhi Patbhaje", role: "Coordinator", linkedin: "https://linkedin.com/in/samruddhi-patbhaje" },
      { name: "Mansi Vedpathak", role: "Coordinator", linkedin: "https://linkedin.com/in/mansi-vedpathak" },
      { name: "Neha Patil", role: "Coordinator", linkedin: "https://linkedin.com/in/neha-patil" },
      { name: "Rushabh Patwa", role: "Coordinator", linkedin: "https://linkedin.com/in/rushabh-patwa" },
    ],
  },
  {
    name: "Public Relations Domain",
    members: [
      { name: "Divyanshu Patil", role: "Lead", linkedin: "https://linkedin.com/in/divyanshu-patil" },
      { name: "Nikita Gadilkar", role: "Co-Lead", linkedin: "https://linkedin.com/in/nikita-gadilkar" },
      { name: "Komal Patil", role: "Co-Lead", linkedin: "https://linkedin.com/in/komal-patil" },
      { name: "Ayush Kaple", role: "Coordinator", linkedin: "https://linkedin.com/in/ayush-kaple" },
      { name: "Shruti Bobade", role: "Coordinator", linkedin: "https://linkedin.com/in/shruti-bobade" },
    ],
  },
  {
    name: "Documentation Domain",
    members: [
      { name: "Shruti Samshette", role: "Lead", linkedin: "https://linkedin.com/in/shruti-samshette" },
      { name: "Gauri Bhakare", role: "Co-Lead", linkedin: "https://linkedin.com/in/gauri-bhakare" },
      { name: "Anjani Komalwar", role: "Coordinator", linkedin: "https://linkedin.com/in/anjani-komalwar" },
      { name: "Sania Tippe", role: "Coordinator", linkedin: "https://linkedin.com/in/sania-tippe" },
    ],
  },
  {
    name: "Design Domain",
    members: [
      { name: "Snehal Ithape", role: "Lead", linkedin: "https://linkedin.com/in/snehal-ithape" },
      { name: "Bhargavi Kulkarni", role: "Co-Lead", linkedin: "https://linkedin.com/in/bhargavi-kulkarni" },
      { name: "Kalyani Ghodke", role: "Coordinator", linkedin: "https://linkedin.com/in/kalyani-ghodke" },
    ],
  },
  {
    name: "Cultural Domain",
    members: [
      { name: "Shreetej Patil", role: "Lead", linkedin: "https://linkedin.com/in/shreetej-patil" },
      { name: "Suhani Jain", role: "Co-Lead", linkedin: "https://linkedin.com/in/suhani-jain" },
      { name: "Aarya Badave", role: "Coordinator", linkedin: "https://linkedin.com/in/aarya-badave" },
      { name: "Vighnesh Poinkar", role: "Coordinator", linkedin: "https://linkedin.com/in/vighnesh-poinkar" },
      { name: "Aashay Parate", role: "Coordinator", linkedin: "https://linkedin.com/in/aashay-parate" },
      { name: "Gajanan Sawal", role: "Coordinator", linkedin: "https://linkedin.com/in/gajanan-sawal" },
    ],
  },
  {
    name: "Media Domain",
    members: [
      { name: "Rehaan Shaikh", role: "Lead", linkedin: "https://linkedin.com/in/rehaan-shaikh" },
      { name: "Chaitanya Dandekar", role: "Co-Lead", linkedin: "https://linkedin.com/in/chaitanya-dandekar" },
      { name: "Nikhil Disale", role: "Coordinator", linkedin: "https://linkedin.com/in/nikhil-disale" },
      { name: "Sumit Zade", role: "Coordinator", linkedin: "https://linkedin.com/in/sumit-zade" },
    ],
  },
  {
    name: "Treasurer Domain",
    members: [
      { name: "Deep Patel", role: "Lead", linkedin: "https://linkedin.com/in/deep-patel" },
      { name: "Ayush Phutke", role: "Co-Lead", linkedin: "https://linkedin.com/in/ayush-phutke" },
    ],
  },
  {
    name: "Logistics Domain",
    members: [
      { name: "Ved Borole", role: "Lead", linkedin: "https://linkedin.com/in/ved-borole" },
      { name: "Harshvardhan Chavan", role: "Co-Lead", linkedin: "https://linkedin.com/in/harshvardhan-chavan" },
      { name: "Rupesh Dubile", role: "Coordinator", linkedin: "https://linkedin.com/in/rupesh-dubile" },
    ],
  },
];

const avatarColors = [
  "from-saffron-light to-gold-light",
  "from-deep-blue-light to-saffron",
  "from-saffron to-gold",
  "from-deep-blue to-deep-blue-light",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="relative min-h-screen pt-24 pb-16">

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="sanskrit-text text-primary/70 mb-3 text-sm md:text-base">
              "अन्वेषिका — जिज्ञासा से नेतृत्व तक"
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Core Team</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              A diverse team of student leaders, innovators, and cultural ambassadors who drive Anveshika&apos;s
              vision — from research and technology to design, outreach, and vibrant campus culture.
            </p>
          </motion.div>

          <div className="space-y-10">
            {teamDomains.map((domain, domainIndex) => (
              <section key={domain.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: domainIndex * 0.05 }}
                  className="mb-6 flex items-center justify-between gap-4"
                >
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold gradient-text">
                      {domain.name}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      Collaborating to bring IKS-inspired initiatives to life.
                    </p>
                  </div>
                  <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Anveshika Team
                  </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {domain.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      className="group relative glass-card rounded-3xl p-5 lg:p-6 overflow-hidden hover-lift flex flex-col h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.1 + memberIndex * 0.05 }}
                    >
                      {/* Glow ring */}
                      <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-saffron/30 via-gold/20 to-deep-blue/40 blur-xl" />
                      </div>

                      <motion.div
                        className="relative flex flex-col h-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 6 + memberIndex,
                          delay: memberIndex * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        {/* Image frame / avatar placeholder */}
                        <div className="relative mb-4">
                          <div
                            className={`w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr ${
                              avatarColors[(domainIndex + memberIndex) % avatarColors.length]
                            } flex items-center justify-center`}
                          >
                            <span className="text-2xl md:text-3xl font-semibold text-background/90 tracking-wide">
                              {getInitials(member.name)}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center text-center">
                          <h3 className="text-base md:text-lg font-semibold text-foreground">
                            {member.name}
                          </h3>
                          <p className="text-sm md:text-base font-display text-primary/80 mt-1">
                            {member.role}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <p className="text-[11px] md:text-xs text-muted-foreground max-w-[70%]">
                            Passionate about blending heritage, technology, and impactful student initiatives.
                          </p>

                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1, y: -2, rotate: -3 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/60 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors overflow-hidden"
                          >
                            <span className="absolute inset-0 bg-gradient-to-tr from-saffron/20 via-transparent to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Linkedin className="w-4 h-4 relative z-10" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;

