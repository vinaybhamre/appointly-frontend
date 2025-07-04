import googleCalendarLogo from "@/assets/google-calendar.svg";
import googleMeetLogo from "@/assets/google-meet.svg";
import outlookCalendarLogo from "@/assets/microsoft-outlook.svg";
import microsoftTeamsLogo from "@/assets/microsoft-teams.svg";
import zoomLogo from "@/assets/zoom.svg";

export enum IntegrationAppEnum {
  GOOGLE_MEET_AND_CALENDAR = "GOOGLE_MEET_AND_CALENDAR",
  ZOOM_MEETING = "ZOOM_MEETING",
  MICROSOFT_TEAMS = "MICROSOFT_TEAMS",
  OUTLOOK_CALENDAR = "OUTLOOK_CALENDAR",
}

export const IntegrationLogos: Record<IntegrationAppType, string | string[]> = {
  GOOGLE_MEET_AND_CALENDAR: [googleMeetLogo, googleCalendarLogo],
  ZOOM_MEETING: zoomLogo,
  MICROSOFT_TEAMS: microsoftTeamsLogo,
  OUTLOOK_CALENDAR: outlookCalendarLogo,
};
export type IntegrationAppType =
  | "GOOGLE_MEET_AND_CALENDAR"
  | "ZOOM_MEETING"
  | "MICROSOFT_TEAMS"
  | "OUTLOOK_CALENDAR";

export type IntegrationTitleType =
  | "Google Meet & Calendar"
  | "Zoom"
  | "Microsoft Teams"
  | "Outlook Calendar";

// Integration Descriptions
export const IntegrationDescriptions: Record<IntegrationAppType, string> = {
  GOOGLE_MEET_AND_CALENDAR:
    "Include Google Meet details in your Appointly events and sync with Google Calendar.",
  ZOOM_MEETING: "Include Zoom details in your Appointly events.",
  MICROSOFT_TEAMS:
    "Microsoft Teams integration for video conferencing and collaboration.",
  OUTLOOK_CALENDAR:
    "Outlook Calendar integration for scheduling and reminders.",
};

export enum VideoConferencingPlatform {
  GOOGLE_MEET_AND_CALENDAR = IntegrationAppEnum.GOOGLE_MEET_AND_CALENDAR,
  ZOOM_MEETING = IntegrationAppEnum.ZOOM_MEETING,
  MICROSOFT_TEAMS = IntegrationAppEnum.MICROSOFT_TEAMS,
}

export const locationOptions = [
  {
    label: "Google Meet",
    value: VideoConferencingPlatform.GOOGLE_MEET_AND_CALENDAR,
    logo: IntegrationLogos.GOOGLE_MEET_AND_CALENDAR?.[0],
    isAvailable: true,
  },
  {
    label: "Zoom",
    value: VideoConferencingPlatform.ZOOM_MEETING,
    logo: IntegrationLogos.ZOOM_MEETING,
    isAvailable: false,
  },
  {
    label: "Microsoft",
    value: VideoConferencingPlatform.MICROSOFT_TEAMS,
    logo: IntegrationLogos.MICROSOFT_TEAMS,
    isAvailable: false,
  },
];
