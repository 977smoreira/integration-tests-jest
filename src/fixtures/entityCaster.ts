import { ObjectId } from "mongodb";

export const entityCaster = {
  _id: expect.any(ObjectId),
  analytics: {
    browserLanguage: "de-DE",
    fbclid: "",
    fbp: "n/a",
    gclid: "",
    impressionId: "",
    ipAddress: "1.1.1.1",
    msclkid: "",
    obClickId:
      "v1-e170392c29a54fc2bcf22d9ba1c0205c-00212fccfa946efbb044aff51ecc45c50e-gezgknzrgy4wmllfmztdiljugzqwellbhe3tqljqhe4wcojwmm2tintdmi",
    optimizelyCampaignId: "21546250766",
    optimizelyExperimentId: "21526111182",
    optimizelyVariationId: "21522531086",
    optimizelyVisitorId: "oeu1650107335982r0.15848933725141934",
    screenResolution: "320x578",
    tbClickId: "",
    userAgent:
      "Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.61 Mobile Safari/537.36",
    utmCampaign: "tCPA_DE_GEE_ACQ_DIS_OUT_MOB_STSA01_IMG_FEB3W",
    utmContent: "",
    utmMedium: "display",
    utmSource: "outbrain",
    utmTerm: "DE_gofeminin.de (gofeminin.de GmbH)_News",
    zmpbid: "",
  },
  createdAt: expect.any(Date),
  emailAddress: "db@sonova.com",
  firstName: "test",
  formData: {
    captchaRiskScore: "N/A",
    flow: 5,
    formId: "lead_form_default",
    formName: "Standard Lead Form",
    formVersion: "v9",
    isQualified: true,
    marketingCode: "O30733",
    pageHostName: "fragebogen.geers.de",
    pagePath: "/hoergeraete-testen-sta/",
    pageUrl:
      "https://fragebogen.geers.de/hoergeraete-testen-sta/?utm_campaign=tCPA_DE_GEE_ACQ_DIS_OUT_MOB_STSA01_IMG_FEB3W&utm_source=outbrain&utm_medium=display&utm_term=DE_gofeminin.de+%28gofeminin.de+GmbH%29_News&utm_title=%24%7Bcity%7D%24%3A+GEERS+sucht+700+Testh%C3%B6rer+vor+1972+geboren&_ad_placement=DE_gofeminin.de+%28gofeminin.de+GmbH%29&ob_click_id=v1-e170392c29a54fc2bcf22d9ba1c0205c-00212fccfa946efbb044aff51ecc45c50e-gezgknzrgy4wmllfmztdiljugzqwellbhe3tqljqhe4wcojwmm2tintdmi&dicbo=v1-e170392c29a54fc2bcf22d9ba1c0205c-00212fccfa946efbb044aff51ecc45c50e-gezgknzrgy4wmllfmztdiljugzqwellbhe3tqljqhe4wcojwmm2tintdmi",
    priority: "1F",
    qualification: 1,
    conversionProbability: {
      label: "low",
      priority: "Non Scoring Model",
      score: "5.5",
    },
    questionnaire: {
      bucket: "T1",
      checkHEANecessity: "MYSELF",
      checkTVLoud: "AGREE",
      dailyRestriction: "NOT_AT_ALL",
      findsConversationsSoft: true,
      hadATestInTheLast12Months: false,
      hasENTPrescription: false,
      hasHearingAid: false,
      isAestheticImportant: "VERY_IMPORTANT",
      isAwareAboutReimbursement: false,
      isOld: true,
      mumbleConversation: "AGREE",
      sufferOfTinnitus: false,
      understandingOthers: "AGREE",
      userAge: "44",
      wgClickId: "",
      whichInsuranceType: "STATUTORY",
    },
    emailCheckResult: { valid: true },
  },
  id: expect.any(String),
  lastName: "sinayra",
  phoneNumber: expect.any(String),
  phoneNumbers: expect.any(Array),
  status: "UPDATED",
  systemProperties: {
    requestId: expect.any(String),
  },
  updatedAt: expect.any(Date),
  userProperties: {
    device: "mobile",
    emailMarketingAccepted: false,
    emailMarketingUpdateAt: 1653943475,
    emailTargetingAccepted: false,
    gender: "F",
    ipAddress: "1.1.1.1",
    availabilityInfo: expect.any(Array),
    isBlackListed: expect.any(Boolean),
  },
};
