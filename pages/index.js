import Typewriter from 'typewriter-effect';

import Head from "next/head";

import Navbar from "../components/Navbar";
import Social from "../components/Social";
import LinkButton from "../components/LinkButton";

// Styling TODO: add colours to headers, add background, add wrappers for sections
export default function Home() {
  return (
    <div>
      <Head>
        <title>David Ordovskiy | OrdSec</title>
        <meta name="description" content="David Ordovskiy | OrdSec | Aspiring Cybersecurity Professional" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-gray-100 min-h-screen pt-10 pb-4 md:px-20 lg:px-40">

        <section>
          {/* headshot, header, social */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between items-center">
            <div className="flex justify-center lg:basis-1/3 lg:flex-1">
              <img className="rounded-r-full w-60 md:w-80" src="/img/headshot.jpg" alt="" />
            </div>
            <div className="text-center p-10 lg:basis-1/3 lg:flex-1">
              <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl">David Ordovskiy</h2>
              <h3 className="text-xl py-2 mb-4 md:text-2xl">
                <Typewriter
                  options={{
                    strings: [
                      'Aspiring Cybersecurity Professional',
                      'Programmer',
                      'Classical musician',
                      'Photographer',
                      'Educator',
                      'Shiba Inu dad'
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
                    delay: 75,
                    deleteSpeed: 15
                  }}
                />
              </h3>
              <LinkButton dest="/bio" value="Find out more" newTab={false} />
            </div>
          </div>
          
          <Social />
        </section>

        <section className="m-8">
          <h2 className="text-2xl mb-4 text-center md:text-3xl md:mb-6">My Tech Skills</h2>
          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap">
            <div className="bg-white shadow-lg p-4 rounded-xl basis-1/3 flex-1">
              <h3 className="p-2 text-xl lg:text-2xl">Offensive Security</h3>
              <ul className="list-disc px-2 pb-2 mx-4 lg:text-lg">
                <li>Web app penetration testing: IDOR, XSS, CSRF, SSRF, SQLi, path traversal, hash cracking, brute-forcing passwords, directory busting</li>
                <li>Knowledge of tools: nmap, Nessus, nikto, Wireshark, Burp Suite, Metasploit, Hydra, John the Ripper, ffuf, DirBuster</li>
                <li>Protocol enumeration and exploitation: FTP, Telnet, SSH, NFS, SMB, MySQL</li>
                <li>Various OSINT techniques, Google dorking</li>
                <li>Linux privilege escalation</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-xl basis-1/3 flex-1">
              <h3 className="p-2 text-xl lg:text-2xl">Defensive Security</h3>
              <ul className="list-disc px-2 pb-2 mx-4 lg:text-lg">
                <li>Endpoint security and hardening: firewalls, antiviruses, anti-malware; monitoring with Snort</li>
                <li>ELK Stack</li>
                <li>IoC analysis, log analysis, threat analysis, threat research</li>
                <li>Knowledge of OWASP Top 10, Lockheed Martin Cyber Kill Chain, Diamond Model, MITRE ATT&CK</li>
                <li>Knowledge of security frameworks: NIST, ISO 27001, PCI DSS</li>
                <li>Password management (LastPass); experience with PKI</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-xl basis-1/3 flex-1">
              <h3 className="p-2 text-xl lg:text-2xl">IT</h3>
              <ul className="list-disc px-2 pb-2 mx-4 lg:text-lg">
                <li>Extensive OS knowledge: Linux, Windows, MacOS</li>
                <li>OS Virtualization</li>
                <li>Cloud services: Linode, AWS</li>
                <li>Familiarity with protocols: TCP/UDP; HTTP, FTP, ICMP, ARP, DNS</li>
                <li>Packet analysis with Wireshark</li>
                <li>LAN management, subnetting</li>
                <li>App deployment: AWS, Heroku; Ansible, Travis CI</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-xl basis-1/3 flex-1">
              <h3 className="p-2 text-xl lg:text-2xl">Programming</h3>
              <ul className="list-disc px-2 pb-2 mx-4 lg:text-lg">
                <li>Experience with programming languages: Python, JavaScript, Ruby, C, BASH</li>
                <li>Full-stack application development: Next.js, React, MERN Stack, SCSS, Tailwind</li>
                <li>Scripting in Python, BASH</li>
                <li>Hands-on experience with various data structures and algorithms</li>
                <li>TDD, test suites with RSpec and Jest</li>
                <li>VCS: Git, GitHub</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
