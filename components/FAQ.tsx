import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Code, Calendar, MapPin, Trophy, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqData: FAQCategory[] = [
    {
      title: "General Questions",
      items: [
        {
          question: "Who can sign up?",
          answer: "All students, age 18 and older, from any college or university are welcome to sign up to compete.",
          icon: <Users className="w-5 h-5" />
        },
        {
          question: "Is there an experience level requirement?",
          answer: "There is no experience level required to participate! From beginners to experienced, HackFest is for you!",
          icon: <Code className="w-5 h-5" />
        },
        {
          question: "Do I need to be a coder to compete?",
          answer: "You don't have to be at all! A great team has a diverse variety of members with different strengths and skills. Your background can vary from creative abilities, to strong communication and presentation skills.",
          icon: <Code className="w-5 h-5" />
        },
        {
          question: "Do I have to pay to register?",
          answer: "No, it is completely free to register and compete in HackFest!",
          icon: <Trophy className="w-5 h-5" />
        },
        {
          question: "What if I don't have a team? Can I compete solo?",
          answer: "If you do not have a team, no worries! We will place you with team members based on your skill set to balance the team.",
          icon: <Users className="w-5 h-5" />
        },
        {
          question: "Can I compete virtually?",
          answer: "No, all members must check in in person.",
          icon: <MapPin className="w-5 h-5" />
        },
        {
          question: "Do I need to stay for the entire duration of the event?",
          answer: "You are not required to stay on-site for the entirety of the 3 days of HackFest. However, all members must be present for check-in on Friday, November 14th, and during judging after submissions on Sunday, November 16th.",
          icon: <Calendar className="w-5 h-5" />
        },
        {
          question: "Is the hackathon MLH certified?",
          answer: "No, we are extremely grateful for our sponsor companies for supporting us and this event.",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Event Detail Questions",
      items: [
        {
          question: "When is HackFest?",
          answer: "HackFest will begin Friday, November 14th, and end on Sunday, November 16th.",
          icon: <Calendar className="w-5 h-5" />
        },
        {
          question: "Where is HackFest?",
          answer: "Hackfest will be hosted on Rutgers-Newark campus. Building locations will be communicated to registered members in coming days.",
          icon: <MapPin className="w-5 h-5" />
        },
        {
          question: "Does it cost money to attend?",
          answer: "No! HackFest is free for our attendees.",
          icon: <Trophy className="w-5 h-5" />
        },
        {
          question: "What should I bring?",
          answer: "HackFest attendees should bring a form of identification and necessary coding supplies, such as a laptop, charger, and any hardware deemed necessary.",
          icon: <HelpCircle className="w-5 h-5" />
        },
        {
          question: "Will there be food offered?",
          answer: "Yes! (Details TBD.)",
          icon: <HelpCircle className="w-5 h-5" />
        },
        {
          question: "Do you offer parking permits?",
          answer: "Answer TBD.",
          icon: <MapPin className="w-5 h-5" />
        },
        {
          question: "Do you offer travel reimbursements?",
          answer: "No, we do not offer reimbursements for travel costs.",
          icon: <MapPin className="w-5 h-5" />
        },
        {
          question: "Do you offer software platform waivers?",
          answer: "As there are no platform requirements, we do not offer waivers for software or application subscriptions.",
          icon: <Code className="w-5 h-5" />
        },
        {
          question: "What shouldn't I bring?",
          answer: "Members must adhere to standard campus policies. Weapons, firearms, alcohol, and drugs are strictly prohibited on campus.",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Competition Questions",
      items: [
        {
          question: "What coding language do I have to code in?",
          answer: "Any coding language you are comfortable with! The purpose of HackFest is to bring ideas into fruition and innovate; therefore, there is no specific coding language required.",
          icon: <Code className="w-5 h-5" />
        },
        {
          question: "Can I use an old project?",
          answer: "No! HackFest is a competition to create something original, creative, and new over the course of the event. You are allowed to use open-source resources and third-party APIs with proper citations.",
          icon: <Trophy className="w-5 h-5" />
        },
        {
          question: "How many people will be in a team?",
          answer: "Teams will generally be grouped with 3-5 people per team.",
          icon: <Users className="w-5 h-5" />
        },
        {
          question: "How do I submit my project?",
          answer: "Answer TBD.",
          icon: <HelpCircle className="w-5 h-5" />
        },
        {
          question: "Is there a full rule list?",
          answer: "Answer TBD.",
          icon: <HelpCircle className="w-5 h-5" />
        },
        {
          question: "What type of projects can I submit?",
          answer: "You can create TBD.",
          icon: <Trophy className="w-5 h-5" />
        },
        {
          question: "What is the competition prize?",
          answer: "There is a $3,500 prize pool! 1st place prize is $2,000, 2nd place prize is $1,000 and 3rd place prize is $500.",
          icon: <Trophy className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 mb-4"
            style={{ fontFamily: 'Chakra Petch, sans-serif' }}
          >
            HACKFEST FAQ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Grid - 3 Columns in a Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* All 3 Categories */}
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 p-6 shadow-xl"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-chakra flex items-center gap-2">
                {category.items[0].icon}
                {category.title}
              </h3>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={itemIndex}
                      className="border border-purple-400/20 rounded-lg overflow-hidden bg-gray-800/30"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-purple-400/10 transition-colors"
                      >
                        <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                          {item.icon}
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-3 text-gray-300 text-sm border-t border-purple-400/20 bg-gray-900/30">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 p-8 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 mb-4 font-chakra">
              Have More Questions?
            </h3>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns, or would like more event information, please reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cyan-400">
              <a 
                href="mailto:girlswhocoderun@gmail.com"
                className="hover:text-purple-400 transition-colors font-semibold underline decoration-cyan-400/50 hover:decoration-purple-400/50"
              >
                girlswhocoderun@gmail.com
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a 
                href="mailto:csdevelopers.run@gmail.com"
                className="hover:text-purple-400 transition-colors font-semibold underline decoration-cyan-400/50 hover:decoration-purple-400/50"
              >
                csdevelopers.run@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

