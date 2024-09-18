import Introduction from '../components/rooms/Introduction';
import DataBreachGraveyard from '../components/rooms/DataBreachGraveyard';
import PhishingPhantoms from '../components/rooms/PhishingPhantoms';
import MalwareMonsters from '../components/rooms/MalwareMonsters';
import RansomwareRevenants from '../components/rooms/RansomwareRevenants';
import CursedPasswords from '../components/rooms/CursedPasswords';
import ShadowITWraiths from '../components/rooms/ShadowITWraiths';
import VampireVulnerabilities from '../components/rooms/VampireVulnerabilities';
import WeakEndpointWerewolves from '../components/rooms/WeakEndpointWerewolves';
import CryptKeeperEncryption from '../components/rooms/CryptKeeperEncryption';
import HauntedNetworks from '../components/rooms/HauntedNetworks';
import MisconfiguredServerMummy from '../components/rooms/MisconfiguredServerMummy';
import OutdatedSoftwarePoltergeists from '../components/rooms/OutdatedSoftwarePoltergeists';
import ZombieAPIs from '../components/rooms/ZombieAPIs';
import FrankensteinPolicy from '../components/rooms/FrankensteinPolicy';
import CompliancePhantom from '../components/rooms/CompliancePhantom';
import InsiderThreatInvisibleMan from '../components/rooms/InsiderThreatInvisibleMan';
import ThirdPartyRiskWitchBrew from '../components/rooms/ThirdPartyRiskWitchBrew';
import IncidentResponseGrimReaper from '../components/rooms/IncidentResponseGrimReaper';
import RogueEmployeeCurse from '../components/rooms/RogueEmployeeCurse';
import PoorTrainingSpecter from '../components/rooms/PoorTrainingSpecter';
import UnsecureCloudExorcism from '../components/rooms/UnsecureCloudExorcism';
import CyberCastleFortification from '../components/rooms/CyberCastleFortification';
import FirewallOfTheDamned from '../components/rooms/FirewallOfTheDamned';
import EndpointSecurityEnchantment from '../components/rooms/EndpointSecurityEnchantment';
import PhantomPatch from '../components/rooms/PhantomPatch';
import ZeroDayThreatRoom from '../components/rooms/ZeroDayThreatRoom';
import SecurityMonitoringEye from '../components/rooms/SecurityMonitoringEye';
import BackupRecoveryWardingSpells from '../components/rooms/BackupRecoveryWardingSpells';
import DowntimeGhost from '../components/rooms/DowntimeGhost';
import FinalBattleCyberNightmare from '../components/rooms/FinalBattleCyberNightmare';

export const rooms = [
  { 
    id: 0, 
    name: 'Introduction', 
    component: Introduction,
    description: 'Welcome to the Haunted Mansion of Cyber Terrors. Each door leads you deeper into a world filled with unseen digital dangers.',
    challenge: 'Create a strong password to enter the mansion safely.'
  },
  { 
    id: 1, 
    name: 'Data Breach Graveyard', 
    component: DataBreachGraveyard,
    description: 'Walk through the graveyard of past data breaches, where spectral figures rise from the ground, whispering of lost fortunes and stolen data.',
    challenge: 'Implement encryption to protect sensitive data from breaches.'
  },
  { 
    id: 2, 
    name: 'Phishing Phantoms', 
    component: PhishingPhantoms,
    description: 'Navigate through a dark, endless hallway filled with mirrors, where shadows move and eerie voices whisper tempting offers.',
    challenge: 'Identify and avoid a phishing attempt.'
  },
  { 
    id: 3, 
    name: 'Malware Monsters', 
    component: MalwareMonsters,
    description: 'Enter a lab where Frankenstein-like monsters of malware are being assembled from lines of malicious code.',
    challenge: 'Deploy effective anti-malware defenses.'
  },
  { 
    id: 4, 
    name: 'Ransomware Revenants', 
    component: RansomwareRevenants,
    description: 'Face the walking dead of Ransomware Revenants in a crypt, clutching your files and demanding ransom.',
    challenge: 'Implement a robust backup strategy to counter ransomware threats.'
  },
  { 
    id: 5, 
    name: 'Cursed Passwords', 
    component: CursedPasswords,
    description: 'Enter a dusty old library where ancient tomes glow with cursed passwords, dooming anyone who uses them.',
    challenge: 'Implement a secure password policy and multi-factor authentication.'
  },
  { 
    id: 6, 
    name: 'Shadow IT Wraiths', 
    component: ShadowITWraiths,
    description: 'Discover hidden passageways filled with unauthorized devices and apps, haunted by Shadow IT Wraiths.',
    challenge: 'Develop and enforce an IT governance policy to manage shadow IT.'
  },
  { 
    id: 7, 
    name: 'Vampire of Vulnerabilities', 
    component: VampireVulnerabilities,
    description: 'Confront the Vampire of Vulnerabilities, feeding on weak points in your defenses.',
    challenge: 'Implement a vulnerability management program to drive away the vampire.'
  },
  { 
    id: 8, 
    name: 'Werewolf of Weak Endpoints', 
    component: WeakEndpointWerewolves,
    description: 'Face the Full Moon Room where remote workers and personal devices turn into dangerous werewolves.',
    challenge: 'Deploy endpoint detection and response (EDR) tools to control the werewolves.'
  },
  { 
    id: 9, 
    name: 'Crypt Keeper of Encryption', 
    component: CryptKeeperEncryption,
    description: 'Meet the Crypt Keeper guarding the secrets stored deep within your organization.',
    challenge: 'Implement end-to-end encryption to secure sensitive data.'
  },
  { 
    id: 10, 
    name: 'Haunted Networks', 
    component: HauntedNetworks,
    description: 'Walk through haunted corridors where doors open and close by themselves, representing unsecured networks.',
    challenge: 'Set up firewalls and network segmentation to secure the haunted networks.'
  },
  { 
    id: 11, 
    name: 'Mummy of Misconfigured Servers', 
    component: MisconfiguredServerMummy,
    description: 'Unwrap the layers of a mummy representing misconfigured servers and their vulnerabilities.',
    challenge: 'Implement proper server configuration management and auditing.'
  },
  { 
    id: 12, 
    name: 'Poltergeists of Outdated Software', 
    component: OutdatedSoftwarePoltergeists,
    description: 'Experience chaos in a room where objects move by themselves due to outdated software poltergeists.',
    challenge: 'Implement an automated patch management system to exorcise the poltergeists.'
  },
  { 
    id: 13, 
    name: 'Zombie APIs', 
    component: ZombieAPIs,
    description: 'Navigate through a graveyard of once-useful APIs now rising as unsecured zombies.',
    challenge: 'Secure and manage APIs to prevent the zombie horde from breaching your defenses.'
  },
  { 
    id: 14, 
    name: 'Frankenstein Policy', 
    component: FrankensteinPolicy,
    description: 'Witness a patchwork creation of mismatched and outdated security policies.',
    challenge: 'Create a cohesive and up-to-date cybersecurity policy.'
  },
  { 
    id: 15, 
    name: 'Phantom of Compliance', 
    component: CompliancePhantom,
    description: 'Hear eerie music as the Phantom of Compliance stalks your organization from the shadows.',
    challenge: 'Implement a comprehensive compliance program to appease the Phantom.'
  },
  { 
    id: 16, 
    name: 'Invisible Man of Insider Threats', 
    component: InsiderThreatInvisibleMan,
    description: 'Sense an unseen presence representing the danger of insider threats.',
    challenge: 'Implement user behavior analytics and access controls to reveal the Invisible Man.'
  },
  { 
    id: 17, 
    name: 'Witch\'s Brew of Third-Party Risk', 
    component: ThirdPartyRiskWitchBrew,
    description: 'Encounter a bubbling cauldron holding a dangerous concoction of third-party vendors.',
    challenge: 'Develop a third-party risk management program to control the witch\'s brew.'
  },
  { 
    id: 18, 
    name: 'Grim Reaper of Incident Response', 
    component: IncidentResponseGrimReaper,
    description: 'Face the Grim Reaper waiting to collect the souls of unprepared organizations.',
    challenge: 'Create and practice an incident response plan to ward off the Grim Reaper.'
  },
  { 
    id: 19, 
    name: 'Curse of the Rogue Employee', 
    component: RogueEmployeeCurse,
    description: 'Enter a cursed chamber where one employee has turned against the organization.',
    challenge: 'Implement strict access controls and monitoring to lift the curse.'
  },
  { 
    id: 20, 
    name: 'Specter of Poor Training', 
    component: PoorTrainingSpecter,
    description: 'Encounter ghostly figures representing employees who haven\'t been trained in cybersecurity.',
    challenge: 'Develop and implement a comprehensive cybersecurity training program.'
  },
  { 
    id: 21, 
    name: 'Exorcism of the Unsecure Cloud', 
    component: UnsecureCloudExorcism,
    description: 'Face dark clouds swirling with unseen dangers in your cloud storage.',
    challenge: 'Perform a digital exorcism by implementing cloud security best practices.'
  },
  { 
    id: 22, 
    name: 'Fortifying the Cyber Castle', 
    component: CyberCastleFortification,
    description: 'Defend your digital kingdom as attackers bombard the walls of your cyber castle.',
    challenge: 'Implement a multi-layered security strategy to fortify your cyber castle.'
  },
  { 
    id: 23, 
    name: 'Firewall of the Damned', 
    component: FirewallOfTheDamned,
    description: 'Maintain a barrier of flames separating your data from hordes of damned souls seeking to breach your network.',
    challenge: 'Configure and maintain a robust firewall to keep the damned at bay.'
  },
  { 
    id: 24, 
    name: 'Enchantment of Endpoint Security', 
    component: EndpointSecurityEnchantment,
    description: 'Visit the enchanted tower where each endpoint device is under a protective spell.',
    challenge: 'Cast protective enchantments by implementing comprehensive endpoint security solutions.'
  },
  { 
    id: 25, 
    name: 'Phantom Patch', 
    component: PhantomPatch,
    description: 'Chase elusive software patches that appear and disappear like phantoms.',
    challenge: 'Implement an effective patch management system to capture the phantom patches.'
  },
  { 
    id: 26, 
    name: 'Room of Zero-Day Threats', 
    component: ZeroDayThreatRoom,
    description: 'Enter a room filled with unknown zero-day threats lurking in the shadows.',
    challenge: 'Develop a strategy to detect and mitigate unknown threats.'
  },
  { 
    id: 27, 
    name: 'Eye of Security Monitoring', 
    component: SecurityMonitoringEye,
    description: 'Face the all-seeing eye of security monitoring, watching for signs of danger.',
    challenge: 'Implement a 24/7 security monitoring system to keep the eye vigilant.'
  },
  { 
    id: 28, 
    name: 'Warding Spells of Backup and Recovery', 
    component: BackupRecoveryWardingSpells,
    description: 'Learn to cast warding spells to protect your data from total destruction.',
    challenge: 'Implement a comprehensive backup and disaster recovery plan.'
  },
  { 
    id: 29, 
    name: 'Ghost of Downtime', 
    component: DowntimeGhost,
    description: 'Confront spectral figures representing costly periods of system downtime.',
    challenge: 'Develop a business continuity plan to banish the ghost of downtime.'
  },
  { 
    id: 30, 
    name: 'Final Battle: Cyber Nightmare', 
    component: FinalBattleCyberNightmare,
    description: 'Face the ultimate Cyber Nightmare, a monstrous amalgamation of all previous threats.',
    challenge: 'Deploy your comprehensive cybersecurity strategy to defeat the Cyber Nightmare.'
  }
];

export default rooms;
