export enum PLATFORM_ROUTING {
  BR1 = "br1",
  EUN1 = "eun1",
  EUW1 = "euw1",
  JP1 = "jp1",
  KR = "kr",
  LA1 = "la1",
  LA2 = "la2",
  ME1 = "me1",
  NA1 = "na1",
  OC1 = "oc1",
  TR1 = "tr1",
  RU = "ru",
  PH2 = "ph2",
  SG2 = "sg2",
  TH2 = "th2",
  TW2 = "tw2",
  VN2 = "vn2",
}

export enum REGIONAL_ROUTING {
  AMERICAS = "americas", // serves NA, BR, LAN, LAS
  ASIA = "asia", // serves KR, JP
  EUROPE = "europe", // serves EUNE, EUW, TR, ME1, RU
  SEA = "sea", // serves OCE, SG2, TW2, VN2
}

export enum ACCOUNT_ROUTING {
  AMERICAS = "americas",
  ASIA = "asia",
  EUROPE = "europe",
}

export function mapPlatformRoutingToRegionalRouting(
  platformRoutingVal: PLATFORM_ROUTING
): REGIONAL_ROUTING {
  switch (platformRoutingVal) {
    case PLATFORM_ROUTING.EUN1:
    case PLATFORM_ROUTING.EUW1:
    case PLATFORM_ROUTING.TR1:
    case PLATFORM_ROUTING.ME1:
    case PLATFORM_ROUTING.RU:
      return REGIONAL_ROUTING.EUROPE;
    case PLATFORM_ROUTING.JP1:
    case PLATFORM_ROUTING.KR:
      return REGIONAL_ROUTING.ASIA;
    case PLATFORM_ROUTING.OC1:
    case PLATFORM_ROUTING.SG2:
    case PLATFORM_ROUTING.TW2:
    case PLATFORM_ROUTING.VN2:
      return REGIONAL_ROUTING.SEA;
    default:
      return REGIONAL_ROUTING.AMERICAS;
  }
}
