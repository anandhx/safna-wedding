export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  dateISO: string;
  islamicDate: string;
  time: string;
  lunchDetail?: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  mapsSearchUrl: string;
  badge: string;
}

export interface FamilySide {
  side: "bride" | "groom";
  title: string;
  candidateName: string;
  qualifications: string;
  relationshipTitle: string;
  fatherInfo: string;
  additionalInfo: string;
  issuedBy?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  tag: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahEnglish: string;
  quranVerseArabic: string;
  quranVerseEnglish: string;
  invitationArabic: string;
  bride: {
    fullName: string;
    arabicName: string;
    qualifications: string;
    shortName: string;
  };
  groom: {
    fullName: string;
    arabicName: string;
    qualifications: string;
    shortName: string;
  };
  monogram: string;
  dateSummary: string;
  islamicDateSummary: string;
  locationSummary: string;
  locationMapsUrl: string;
  targetDateTimeISO: string;
  mainInvitationMessage: {
    heading: string;
    headingArabic: string;
    invitationBy: string;
    body: string;
    eventInvite: string;
    eventInviteArabic: string;
  };
  events: WeddingEvent[];
  families: {
    bride: FamilySide;
    groom: FamilySide;
  };
  closing: {
    title: string;
    duaArabic: string;
    duaTranslation: string;
    message: string;
    compliments: string;
    sbtFamilyCompliments: string;
  };
  shareDetails: {
    title: string;
    messageText: string;
  };
  qrCode: {
    imageSrc: string;
    title: string;
    caption: string;
  };
}

export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the name of Allah, the Most Beneficent, the Most Merciful",
  quranVerseArabic:
    "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  quranVerseEnglish:
    "And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy. (Qur’an 30:21)",
  invitationArabic:
    "بِبَرَكَاتٍ وَدَعَوَاتٍ فِي قُلُوبِنَا، نَدْعُوكُمْ بِكُلِّ فَرَحٍ لِتَشْهَدُوا الِاتِّحَادَ الْمُبَارَكَ لِرُوحَيْنِ قُدِّرَ لَهُمَا أَنْ يَكُونَا وَاحِدًا — صَفْنَا وَأَفْرَاس أَحْمَد",
  bride: {
    fullName: "Safna S",
    arabicName: "صَفْنَا",
    qualifications: "",
    shortName: "Safna",
  },
  groom: {
    fullName: "Afras Ahammed MS",
    arabicName: "أَفْرَاس أَحْمَد",
    qualifications: "",
    shortName: "Afras",
  },
  monogram: "SA",
  dateSummary: "15 November 2026",
  islamicDateSummary: "Sunday · 11:30 AM – 12:00 PM",
  locationSummary: "Safa Convention Center, Thonnakkal Mangalapuram",
  locationMapsUrl: "https://share.google/mFIgsQIpxDN6UbxX3",
  targetDateTimeISO: "2026-11-15T11:30:00+05:30",
  mainInvitationMessage: {
    heading: "Save Our Date",
    headingArabic: "احْفَظُوا تَارِيخَنَا",
    invitationBy: "With blessings & prayers",
    body: "With the blessings and prayers in our hearts, we joyfully invite you to witness the blessed union of two souls destined to be one.",
    eventInvite:
      "Join us on Sunday, 15 November 2026, between 11:30 AM and 12:00 PM at Safa Convention Center, Thonnakkal Mangalapuram.",
    eventInviteArabic:
      "نَدْعُوكُمْ يَوْمَ الْأَحَدِ ١٥ نُوفَمْبِر ٢٠٢٦ مِنَ السَّاعَةِ ١١:٣٠ صَبَاحًا إِلَى ١٢:٠٠ ظُهْرًا فِي مَرْكَزِ صَفَا لِلْمُؤْتَمَرَاتِ، ثُونَاكَّال مَنْغَلَابُورَم",
  },
  events: [
    {
      id: "wedding",
      name: "Wedding Ceremony",
      subTitle: "The Blessed Union",
      date: "Sunday, 15 November 2026",
      dateISO: "2026-11-15",
      islamicDate: "",
      time: "Between 11:30 AM and 12:00 PM",
      venue: "Safa Convention Center",
      address: "Thonnakkal Mangalapuram",
      city: "Thonnakkal",
      state: "Kerala",
      country: "India",
      mapsSearchUrl: "https://share.google/mFIgsQIpxDN6UbxX3",
      badge: "Save Our Date",
    },
  ],
  families: {
    bride: {
      side: "bride",
      title: "Bride's Family",
      candidateName: "Safna S",
      qualifications: "",
      relationshipTitle: "",
      fatherInfo: "",
      additionalInfo: "",
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: "Afras Ahammed MS",
      qualifications: "",
      relationshipTitle: "",
      fatherInfo: "",
      additionalInfo: "",
    },
  },
  closing: {
    title: "With Heartfelt Gratitude & Duas",
    duaArabic:
      "بَارَكَ اللَّهُ لِصَفْنَا وَأَفْرَاس، وَبَارَكَ عَلَيْهِمَا، وَجَمَعَ بَيْنَهُمَا فِي خَيْرٍ",
    duaTranslation:
      "“May Allah bless Safna and Afras, shower His blessings upon them, and unite them both in goodness.”",
    message:
      "Thank you for being part of Safna & Afras’s celebration. Your presence and duas mean so much to our families. May Allah bless this union with love, mercy, peace, and barakah.",
    compliments: "With best compliments from Relatives & Friends",
    sbtFamilyCompliments: "Safna & Afras",
  },
  shareDetails: {
    title: "Wedding Invitation — Safna S & Afras Ahammed MS",
    messageText:
      "Save Our Date — Safna S & Afras Ahammed MS\n\nSunday, 15 November 2026\nBetween 11:30 AM and 12:00 PM\nSafa Convention Center, Thonnakkal Mangalapuram\n\nWith the blessings and prayers in our hearts, we joyfully invite you to witness the blessed union of two souls destined to be one.",
  },
  qrCode: {
    imageSrc: "/images/invitation-card.jpg",
    title: "Wedding Invitation Card",
    caption: "Scan the QR on the invitation card for details and directions.",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "invitation-card",
    title: "Save Our Date Card",
    caption:
      "Official Save Our Date invitation for Safna S & Afras Ahammed MS.",
    src: "/images/invitation-card.jpg",
    alt: "Safna S & Afras Ahammed MS Save Our Date wedding invitation card",
    tag: "Invitation",
  },
];
