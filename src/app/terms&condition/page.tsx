import React from 'react'
import PrivacyPolicyHero from './../../components/privacyPolicy/privacy-policy-hero';
import { PrivacyPolicy } from './../../components/privacyPolicy/privacy-policy';
import { Navbar } from './../../components/navbar';
import { SiteFooter } from './../../components/site-footer';
import TermsConditionHero from './../../components/terms-condition/terms-condition-hero';
import {TermsConditions} from './../../components/terms-condition/terms-condition';


 const page = () => {
  return (
    <div className="min-h-dvh w-full bg-background">
        <Navbar />
        <TermsConditionHero />
        <TermsConditions />
        <SiteFooter />
    </div>
  )
}

export default page;