import React from 'react'
import PrivacyPolicyHero from './../../components/privacyPolicy/privacy-policy-hero';
import { PrivacyPolicy } from './../../components/privacyPolicy/privacy-policy';
import { Navbar } from './../../components/navbar';
import { SiteFooter } from './../../components/site-footer';

 const page = () => {
  return (
    <div>
        <Navbar  />
        <PrivacyPolicyHero />
        <PrivacyPolicy />
        <SiteFooter />
    </div>
  )
}

export default page;