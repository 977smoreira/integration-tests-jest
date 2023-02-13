export const partialEntity = {
  formData: {
    emailCheckResult: { valid: true },
  },
  userProperties: {
    isBlackListed: false,
    availabilityInfo: expect.any(Array),
  },
  phoneNumber: "+49157512345",
  phoneNumbers: [
    {
      number: "+49157512345",
      type: "UNKNOWN",
    },
  ],
};
