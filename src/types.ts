export interface Inquiry {
  id: string;
  timestamp: string;
  companyName: string;
  website: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  format: "Reality Scan" | "Reality Check" | "Vurder hvilket format der er relevant";
  status: "new" | "reviewed";
}

export interface ReportSample {
  id: string;
  title: string;
  industry: string;
  situation: string;
  gaze: {
    observation: string;
    interpretation: string;
    hypothesis: string;
  };
}

export interface ReportChapter {
  num: string;
  title: string;
  description: string;
  deliverable: string;
}
