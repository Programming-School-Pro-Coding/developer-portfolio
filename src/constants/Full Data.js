export const SITE_URL = "https://programming-school-contribution.vercel.app/";
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = "Programing_Pro";
export const BRAND_NAME = "PGSM";
export const SITE_NAME_MULTILINE = ["PGSM", "Conf"];
export const SITE_NAME = `PGSM Conf`;
export const META_DESCRIPTION =
  "This is an open source portfolio that React.js developers can clone, deploy, and fully customize for his/her portfolio(projects)";
export const TWEET_TEXT = META_DESCRIPTION;

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = "Copyright © 2022 Programming School Inc.";

export const CODE_OF_CONDUCT =
  "https://github.com/Programing-School/developer-portfolio/blob/main/CODE_OF_CONDUCT.md";
export const REPO =
  "https://github.com/Programing-School/developer-portfolio";
