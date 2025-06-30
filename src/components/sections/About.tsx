import React, { useState } from 'react';
import { Award, Users, Rocket, Target, MapPin, Calendar, Coffee, Heart, Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { TeamMember } from '../../types';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: t('about.stats.clients'), value: '8+' },
    { icon: Rocket, label: t('about.stats.projects'), value: '25+' },
    { icon: Award, label: t('about.stats.awards'), value: '3+' },
    { icon: Target, label: t('about.stats.experience'), value: '5+' }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Chen',
      role: t('about.team.alex.role'),
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: t('about.team.alex.bio'),
      fullBio: t('about.team.alex.fullBio'),
      expertise: [
        t('about.team.alex.expertise1'),
        t('about.team.alex.expertise2'),
        t('about.team.alex.expertise3'),
        t('about.team.alex.expertise4')
      ],
      achievements: [
        t('about.team.alex.achievement1'),
        t('about.team.alex.achievement2'),
        t('about.team.alex.achievement3'),
        t('about.team.alex.achievement4')
      ],
      location: 'San Francisco, CA',
      joinedDate: '2018',
      personalInterests: [
        t('about.team.alex.interest1'),
        t('about.team.alex.interest2'),
        t('about.team.alex.interest3'),
        t('about.team.alex.interest4')
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      favoriteQuote: t('about.team.alex.quote'),
      workingStyle: t('about.team.alex.workingStyle')
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: t('about.team.sarah.role'),
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: t('about.team.sarah.bio'),
      fullBio: t('about.team.sarah.fullBio'),
      expertise: [
        t('about.team.sarah.expertise1'),
        t('about.team.sarah.expertise2'),
        t('about.team.sarah.expertise3'),
        t('about.team.sarah.expertise4')
      ],
      achievements: [
        t('about.team.sarah.achievement1'),
        t('about.team.sarah.achievement2'),
        t('about.team.sarah.achievement3'),
        t('about.team.sarah.achievement4')
      ],
      location: 'Austin, TX',
      joinedDate: '2019',
      personalInterests: [
        t('about.team.sarah.interest1'),
        t('about.team.sarah.interest2'),
        t('about.team.sarah.interest3'),
        t('about.team.sarah.interest4')
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      favoriteQuote: t('about.team.sarah.quote'),
      workingStyle: t('about.team.sarah.workingStyle')
    },
    {
      id: 3,
      name: 'David Kumar',
      role: t('about.team.david.role'),
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: t('about.team.david.bio'),
      fullBio: t('about.team.david.fullBio'),
      expertise: [
        t('about.team.david.expertise1'),
        t('about.team.david.expertise2'),
        t('about.team.david.expertise3'),
        t('about.team.david.expertise4')
      ],
      achievements: [
        t('about.team.david.achievement1'),
        t('about.team.david.achievement2'),
        t('about.team.david.achievement3'),
        t('about.team.david.achievement4')
      ],
      location: 'New York, NY',
      joinedDate: '2020',
      personalInterests: [
        t('about.team.david.interest1'),
        t('about.team.david.interest2'),
        t('about.team.david.interest3'),
        t('about.team.david.interest4')
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      favoriteQuote: t('about.team.david.quote'),
      workingStyle: t('about.team.david.workingStyle')
    },
    {
      id: 4,
      name: 'Maya Patel',
      role: t('about.team.maya.role'),
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: t('about.team.maya.bio'),
      fullBio: t('about.team.maya.fullBio'),
      expertise: [
        t('about.team.maya.expertise1'),
        t('about.team.maya.expertise2'),
        t('about.team.maya.expertise3'),
        t('about.team.maya.expertise4')
      ],
      achievements: [
        t('about.team.maya.achievement1'),
        t('about.team.maya.achievement2'),
        t('about.team.maya.achievement3'),
        t('about.team.maya.achievement4')
      ],
      location: 'Los Angeles, CA',
      joinedDate: '2019',
      personalInterests: [
        t('about.team.maya.interest1'),
        t('about.team.maya.interest2'),
        t('about.team.maya.interest3'),
        t('about.team.maya.interest4')
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      favoriteQuote: t('about.team.maya.quote'),
      workingStyle: t('about.team.maya.workingStyle')
    }
  ];

  const cultureValues = [
    {
      title: t('about.culture.innovation.title'),
      description: t('about.culture.innovation.description'),
      icon: Rocket,
      examples: [
        t('about.culture.innovation.example1'),
        t('about.culture.innovation.example2'),
        t('about.culture.innovation.example3')
      ]
    },
    {
      title: t('about.culture.excellence.title'),
      description: t('about.culture.excellence.description'),
      icon: Award,
      examples: [
        t('about.culture.excellence.example1'),
        t('about.culture.excellence.example2'),
        t('about.culture.excellence.example3')
      ]
    },
    {
      title: t('about.culture.partnership.title'),
      description: t('about.culture.partnership.description'),
      icon: Users,
      examples: [
        t('about.culture.partnership.example1'),
        t('about.culture.partnership.example2'),
        t('about.culture.partnership.example3')
      ]
    },
    {
      title: t('about.culture.balance.title'),
      description: t('about.culture.balance.description'),
      icon: Heart,
      examples: [
        t('about.culture.balance.example1'),
        t('about.culture.balance.example2'),
        t('about.culture.balance.example3')
      ]
    }
  ];

  const openMemberProfile = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeMemberProfile = () => {
    setSelectedMember(null);
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('about.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              Premium Events Solution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Mission Statement */}
        <div className="bg-gray-950/50 rounded-3xl p-12 mb-16 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">{t('about.mission.title')}</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "{t('about.mission.text')}"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">{t('about.team.title')}</h3>
          <p className="text-gray-300 text-lg">{t('about.team.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center cursor-pointer" onClick={() => openMemberProfile(member)}>
              <div className="relative mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-accent-500/20 group-hover:border-accent-500 transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links Preview */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">{member.name}</h4>
              <p className="text-accent-500 font-medium mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
              
              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.expertise?.slice(0, 2).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-500 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="text-accent-500 hover:text-accent-400 text-sm font-medium transition-colors duration-300">
                {t('about.team.viewProfile')} →
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced Culture & Values Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">{t('about.culture.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-gray-950/50 rounded-2xl p-8 border border-white/10 hover:border-accent-500/30 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors duration-300">{value.title}</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">{value.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 font-medium">{t('about.culture.inPractice')}:</p>
                      <ul className="space-y-1">
                        {value.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture Highlights */}
        <div className="bg-gradient-to-r from-accent-500/10 to-purple-600/10 rounded-3xl p-12 border border-accent-500/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">{t('about.life.title')}</h3>
            <p className="text-gray-300 text-lg">{t('about.life.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Coffee className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">{t('about.life.coffee.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.life.coffee.description')}</p>
            </div>
            <div className="text-center">
              <Rocket className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">{t('about.life.innovation.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.life.innovation.description')}</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">{t('about.life.balance.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.life.balance.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Team Member Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-accent-500/20 to-purple-600/20 p-8 rounded-t-2xl">
              <button
                onClick={closeMemberProfile}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent-500/30"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                  <p className="text-accent-500 text-xl font-medium mb-4">{selectedMember.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <div className="flex items-center space-x-1 text-gray-300 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedMember.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{t('about.team.joined')} {selectedMember.joinedDate}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3 justify-center md:justify-start">
                    <a href={selectedMember.socialLinks?.linkedin} className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.socialLinks?.twitter} className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-all duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.socialLinks?.github} className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('about.team.aboutPerson')} {selectedMember.name.split(' ')[0]}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedMember.fullBio}</p>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('about.team.expertise')}</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedMember.expertise?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-500 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('about.team.achievements')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMember.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-4">
                      <Award className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Interests */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('about.team.interests')}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.personalInterests?.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-white/10 rounded-full text-gray-300 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote & Working Style */}
              <div className="bg-gradient-to-r from-accent-500/10 to-purple-600/10 rounded-xl p-6 border border-accent-500/20">
                <blockquote className="text-white text-lg italic mb-4">
                  "{selectedMember.favoriteQuote}"
                </blockquote>
                <div>
                  <h4 className="text-accent-500 font-semibold mb-2">{t('about.team.workingStyle')}:</h4>
                  <p className="text-gray-300 text-sm">{selectedMember.workingStyle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;