import Room from '../components/Room';

export const rooms = [
  {
    id: 0,
    day: 1,
    title: "Welcome to the Haunted Mansion",
    description: "The Haunted Mansion looms before you, shrouded in fog. Each door creaks ominously, leading you deeper into a world filled with unseen dangers. These digital ghosts and ghouls—hackers, malware, and phishing—are waiting for their next victim. As you step inside, you feel a chill run down your spine.\n\nINSTRUCTIONS: To progress through the haunted house, you must use the correct cybersecurity defense in each room. Choose your items wisely, as only the right defenses will allow you to succeed and move to the next room. Good luck, and may your cybersecurity knowledge guide you through these terrors!",
    collectibleItems: [
      {
        name: "Cybersecurity Map",
        image: "map.png",
        description: "A solid cybersecurity strategy to guide you through the haunted house."
      },
      {
        name: "Expert Guide",
        image: "guide.png",
        description: "An expert partner to lead you through the dangers."
      }
    ]
  },
  {
    id: 1,
    day: 2,
    title: "The Graveyard of Data Breaches",
    description: "As you walk through the graveyard, spectral figures rise from the ground—these are the spirits of data breaches past, from Equifax to Target. They whisper of lost fortunes and stolen data, haunting those who failed to protect their assets.",
    collectibleItems: [
      {
        name: "Holy Water of Encryption",
        image: "holy-water.png",
        description: "Use encryption to protect against the resurrection of past breaches."
      },
      {
        name: "Data Audit Scroll",
        image: "scroll.png",
        description: "Perform regular data audits to secure your systems."
      }
    ]
  },
  {
    id: 2,
    day: 3,
    title: "The Phantom Phisher's Hall",
    description: "A dark, endless hallway filled with mirrors. Shadows move, and eerie voices whisper, Click here for your prize. These are the phantoms of phishing emails, always tempting you with too-good-to-be-true offers, but behind their alluring messages lies danger.",
    collectibleItems: [
      {
        name: "Warding Mirror",
        image: "mirror.png",
        description: "Employee training and email filters to deflect phishing phantoms."
      }
    ]
  },
  {
    id: 3,
    day: 4,
    title: "The Monster Lab of Malware",
    description: "You stumble into a lab, where Frankenstein-like monsters are being assembled. These creatures are malware—viruses, Trojans, and worms—that are pieced together from lines of malicious code. They are powerful, chaotic, and bent on destruction.",
    collectibleItems: [
      {
        name: "Anti-Malware Force Field",
        image: "force-field.png",
        description: "Anti-malware software to create a protective perimeter around your organization."
      }
    ]
  },
  {
    id: 4,
    day: 5,
    title: "The Crypt of Ransomware",
    description: "The crypt doors creak open, revealing the walking dead—Ransomware Revenants. They clutch your files in their bony hands, demanding ransom for their return. Like zombies, they keep coming back, ready to claim more victims.",
    collectibleItems: [
      {
        name: "Charmed Data Backup Amulet",
        image: "amulet.png",
        description: "Regular, secure backups to protect against ransomware attacks."
      }
    ]
  },
  {
    id: 5,
    day: 6,
    title: "The Library of Cursed Passwords",
    description: "You enter a dusty old library where ancient tomes glow with malevolent light. Inside the books are cursed passwords like 123456 and password. Anyone who uses them is doomed, leaving their accounts open to dark forces.",
    collectibleItems: [
      {
        name: "Magic Spellbook of Passwords",
        image: "spellbook.png",
        description: "Password managers and multi-factor authentication to break the curse of weak passwords."
      }
    ]
  },
  {
    id: 6,
    day: 7,
    title: "The Hidden Chambers of Shadow IT",
    description: "You discover hidden passageways in the mansion, leading to rooms filled with unauthorized devices and apps. The Shadow IT Wraiths haunt these rooms, unapproved and unseen by your IT team. Their presence weakens the defenses of your organization.",
    collectibleItems: [
      {
        name: "Lantern of Transparency",
        image: "lantern.png",
        description: "IT governance and monitoring tools to shine light on shadowy practices."
      }
    ]
  },
  {
    id: 7,
    day: 8,
    title: "The Castle of Vulnerabilities",
    description: "High atop the hill, the Vampire of Vulnerabilities feeds on weak points in your defenses, draining your organization's strength. Unpatched software, unsecured configurations, and outdated protocols offer him a feast.",
    collectibleItems: [
      {
        name: "Garlic Wreath of Vulnerability Management",
        image: "garlic-wreath.png",
        description: "Regular patching and system audits to drive away the vulnerability vampire."
      }
    ]
  },
  {
    id: 8,
    day: 9,
    title: "The Full Moon Room of Weak Endpoints",
    description: "By day, everything seems secure, but when the full moon rises, remote workers and personal devices turn into dangerous werewolves. These weak endpoints are easy prey for hackers, who turn them against your network.",
    collectibleItems: [
      {
        name: "Silver Bullets of EDR",
        image: "silver-bullets.png",
        description: "Endpoint Detection and Response (EDR) tools to control endpoint werewolves."
      }
    ]
  },
  {
    id: 9,
    day: 10,
    title: "The Crypt of Secrets",
    description: "The Crypt Keeper guards the secrets stored deep within your organization. Without encryption, these secrets are vulnerable to anyone who dares open the crypt. The key to the crypt is fragile, and if left unprotected, your most valuable information is at risk.",
    collectibleItems: [
      {
        name: "Iron-Strong Encryption Lock",
        image: "lock.png",
        description: "End-to-end encryption to secure the Crypt Keeper's secrets."
      }
    ]
  },
  {
    id: 10,
    day: 11,
    title: "The Ghostly Networks",
    description: "As you walk through the haunted corridors, you notice doors opening and closing by themselves—these are the Haunted Networks. They are full of invisible threats, letting malicious actors come and go as they please, unimpeded.",
    collectibleItems: [
      {
        name: "Sanctified Network Barrier",
        image: "barrier.png",
        description: "Firewalls and network segmentation to ward off network ghosts."
      }
    ]
  },
  {
    id: 11,
    day: 12,
    title: "The Tomb of Misconfigured Servers",
    description: "The mummy lies wrapped in layers of misconfigurations—its bindings represent improper settings that leave your servers vulnerable. Every time you think the problem is resolved, another layer unravels, exposing more weaknesses.",
    collectibleItems: [
      {
        name: "Book of Sacred Server Rituals",
        image: "ritual-book.png",
        description: "Server configuration management tool and proper auditing to keep the mummy bound."
      }
    ]
  },
  {
    id: 12,
    day: 13,
    title: "The Poltergeist Playroom",
    description: "Objects move by themselves, the software is glitching, and chaos reigns—these are the Poltergeists of Outdated Software. They've been abandoned, forgotten, but still linger, causing havoc with unpatched vulnerabilities.",
    collectibleItems: [
      {
        name: "Sword of Updates",
        image: "sword.png",
        description: "Automated patch management to exorcise the poltergeists of outdated software."
      }
    ]
  },
  {
    id: 13,
    day: 14,
    title: "The Zombie-Infested API Graveyard",
    description: "APIs, once useful and trusted, now rise from the grave, unattended and unsecured. These zombie APIs offer attackers an open door into your systems, their code decayed and vulnerable to exploits.",
    collectibleItems: [
      {
        name: "API Barbed Wire Fence",
        image: "barbed-wire.png",
        description: "Secure API gateways, authentication, and regular audits to contain zombie APIs."
      }
    ]
  },
  {
    id: 14,
    day: 15,
    title: "Dr. Frankenstein's Patchwork Policies",
    description: "A flash of lightning reveals a patchwork creation made of mismatched and outdated policies stitched together. Like Dr. Frankenstein's monster, this policy creation looks strong, but its weaknesses are glaring. One poorly assembled rule can cause the entire structure to fall apart, leaving your organization vulnerable to attack.",
    collectibleItems: [
      {
        name: "Unified Cybersecurity Policy Spell",
        image: "policy-spell.png",
        description: "A cohesive, well-designed cybersecurity policy to defeat the patchwork monster."
      }
    ]
  },
  {
    id: 15,
    day: 16,
    title: "The Phantom of the Compliance Opera",
    description: "You hear eerie music echoing through the halls. The Phantom of Compliance stalks your organization from the shadows, waiting for a slip-up. If you fail to comply with regulations like GDPR or HIPAA, he strikes, leaving costly fines and reputational damage in his wake.",
    collectibleItems: [
      {
        name: "Legal Contract of Protection",
        image: "contract.png",
        description: "Regular compliance audits, strong data protection policies, and thorough documentation."
      }
    ]
  },
  {
    id: 16,
    day: 17,
    title: "The Invisible Corridor of Insider Threats",
    description: "You feel a presence, but see nothing. The Invisible Man represents insider threats—employees or contractors with access to your most sensitive data who are invisible to your detection systems. Whether intentional or accidental, these insiders can cause immense damage.",
    collectibleItems: [
      {
        name: "Infrared Goggles of User Analytics",
        image: "goggles.png",
        description: "User behavior analytics, strict access controls, and employee monitoring systems."
      }
    ]
  },
  {
    id: 17,
    day: 18,
    title: "The Witch's Cauldron of Third-Party Risk",
    description: "A bubbling cauldron in the center of the room holds a dangerous concoction of third-party vendors. Each vendor adds an unknown ingredient to the brew, and without proper control, the entire potion could explode, exposing your organization to risk.",
    collectibleItems: [
      {
        name: "Silver Spoon of Vendor Management",
        image: "silver-spoon.png",
        description: "Perform due diligence on vendors, enforce strict contracts, and continuously monitor their security practices."
      }
    ]
  },
  {
    id: 18,
    day: 19,
    title: "The Grim Reaper's Crypt of Incident Response",
    description: "The Grim Reaper waits patiently in this crypt, ready to collect the souls of organizations that are unprepared for cyber incidents. Without an incident response plan, every breach becomes a fatal blow, and recovery is slow and painful.",
    collectibleItems: [
      {
        name: "Scythe of Incident Response",
        image: "scythe.png",
        description: "A well-practiced incident response plan, with clearly defined roles, rapid communication, and regular tabletop exercises."
      }
    ]
  },
  {
    id: 19,
    day: 20,
    title: "The Cursed Chamber of Rogue Employees",
    description: "In this cursed chamber, one employee has become corrupted by dark forces, acting against the organization's interests. Whether motivated by revenge or neglect, the rogue employee wreaks havoc from within, causing security breaches and data loss.",
    collectibleItems: [
      {
        name: "Charm of Access Control",
        image: "access-charm.png",
        description: "Implement strict privilege management and real-time monitoring to prevent rogue employees from causing damage."
      }
    ]
  },
  {
    id: 20,
    day: 21,
    title: "The Spectral Classroom of Poor Training",
    description: "Ghostly figures drift through the room, representing employees who haven't been trained in cybersecurity. They unknowingly open doors to malicious threats, falling for phishing scams or misconfiguring systems, leaving the organization vulnerable to attack.",
    collectibleItems: [
      {
        name: "Spell of Cybersecurity Knowledge",
        image: "knowledge-spell.png",
        description: "Regular cybersecurity training programs and phishing simulations to educate employees."
      }
    ]
  },
  {
    id: 21,
    day: 22,
    title: "The Haunted Cloud Storage Room",
    description: "Dark clouds gather overhead, swirling with unseen dangers. Your cloud storage is full of sensitive data, but without proper protection, malicious spirits can enter and steal your information, haunting your organization with data breaches and leaks.",
    collectibleItems: [
      {
        name: "Cloud Exorcism Kit",
        image: "exorcism-kit.png",
        description: "End-to-end encryption, access controls, and secure cloud configurations."
      }
    ]
  },
  {
    id: 22,
    day: 23,
    title: "The Castle Keep of Cyber Defense",
    description: "The drawbridge to your castle is down, and attackers are at the gates. Hackers and malware bombard the walls, looking for weak spots to infiltrate your digital kingdom. Without strong defenses, your castle will fall.",
    collectibleItems: [
      {
        name: "Castle Fortification Kit",
        image: "fortification-kit.png",
        description: "Firewalls, VPNs, and multi-layered security to fortify your digital castle."
      }
    ]
  },
  {
    id: 23,
    day: 24,
    title: "The Firewall of the Damned",
    description: "A barrier of flames separates your data from the hordes of damned souls—malware, ransomware, and hackers—seeking to cross into your network. If the firewall weakens or is improperly configured, the damned will break through.",
    collectibleItems: [
      {
        name: "Flame Barrier Enhancer",
        image: "flame-enhancer.png",
        description: "Tools for regularly updating and configuring your firewall, and conducting frequent audits."
      }
    ]
  },
  {
    id: 24,
    day: 25,
    title: "The Enchanted Tower of Endpoint Devices",
    description: "In the enchanted tower, each endpoint device is under a protective spell. These devices are your employees' laptops, phones, and tablets, but without proper endpoint security, they could become cursed, allowing dark forces to breach your network.",
    collectibleItems: [
      {
        name: "Endpoint Protection Spellbook",
        image: "endpoint-spellbook.png",
        description: "Endpoint security solutions, EDR tools, and MFA to cast protective enchantments over every device."
      }
    ]
  },
  {
    id: 25,
    day: 26,
    title: "The Vanishing Patch Hallway",
    description: "As you walk down the hallway, software patches appear and disappear like phantoms. Miss a patch, and you've left the door open for cyber attackers to exploit a known vulnerability. Without quick action, the phantom will strike.",
    collectibleItems: [
      {
        name: "Phantom Patch Catcher",
        image: "patch-catcher.png",
        description: "Automated patch management and regular system update tools to capture elusive patches."
      }
    ]
  },
  {
    id: 26,
    day: 27,
    title: "The Room of Zero-Day Threats",
    description: "This room is filled with the unknown—zero-day threats, vulnerabilities that haven't been discovered by anyone yet, except by the hackers lurking in the shadows. These are the most dangerous threats, as they strike without warning.",
    collectibleItems: [
      {
        name: "Eye of Vigilance",
        image: "vigilance-eye.png",
        description: "Intrusion detection systems (IDS), security monitoring, and threat intelligence tools to detect unknown threats."
      }
    ]
  },
  {
    id: 27,
    day: 28,
    title: "The Eye of Sauron (Security Monitoring)",
    description: "A giant, all-seeing eye peers into every corner of the haunted house, watching for signs of danger. This is the watchful eye of security monitoring, always vigilant, ensuring that no threat goes undetected.",
    collectibleItems: [
      {
        name: "All-Seeing Orb",
        image: "all-seeing-orb.png",
        description: "24/7 monitoring and alert systems to keep constant watch over your network."
      }
    ]
  },
  {
    id: 28,
    day: 29,
    title: "The Chamber of Backup Rituals",
    description: "A storm is brewing, and data disasters are inevitable. Only a well-cast warding spell can protect your data from total destruction. Without proper backups, your organization will be lost when the storm hits.",
    collectibleItems: [
      {
        name: "Backup Ritual Scroll",
        image: "backup-scroll.png",
        description: "Regular backup and recovery plans to protect against data loss and ensure quick recovery."
      }
    ]
  },
  {
    id: 29,
    day: 30,
    title: "The Hall of Downtime Specters",
    description: "Time slows, and ghostly figures loom—each representing a minute, hour, or day of downtime. Every second your systems are offline, your business suffers. These downtime specters can be costly and debilitating if you're not prepared.",
    collectibleItems: [
      {
        name: "Business Continuity Talisman",
        image: "continuity-talisman.png",
        description: "A business continuity plan to ward off downtime and ensure smooth operations even in the face of disasters."
      }
    ]
  },
  {
    id: 30,
    day: 31,
    title: "The Final Battle in the Nightmare Realm",
    description: "After traversing the haunted house and surviving the digital terrors, you face the final showdown—the Cyber Nightmare itself. It's a monstrous amalgamation of every threat you've faced, from phishing attacks to ransomware, demanding the ultimate test of your defenses.",
    collectibleItems: [
      {
        name: "Legendary Sword of Comprehensive Cybersecurity",
        image: "legendary-sword.png",
        description: "A combination of all your defenses—firewalls, encryption, backups, endpoint protection, monitoring—to defeat the ultimate cyber nightmare."
      }
    ]
  }
];

export default rooms;
