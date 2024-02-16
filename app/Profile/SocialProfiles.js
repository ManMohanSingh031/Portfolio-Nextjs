"use client";
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub, FaHackerrank, FaFacebook} from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from "react-icons/si";
const SocialProfiles = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manmohansingh031/', icon: <FaLinkedinIn size={100} /> },
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub size={100} /> },
    { name: 'LeetCode', url: 'https://leetcode.com/yourusername/', icon: <SiLeetcode size={100} /> },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/yourusername', icon: <SiCodechef size={100} /> },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/yourusername', icon: <FaHackerrank size={100} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/yourusername/', icon: <FaInstagram size={100} /> },
    { name: 'Facebook', url: 'https://www.instagram.com/yourusername/', icon: <FaFacebook size={100} /> },
  ];

export default SocialProfiles;