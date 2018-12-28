export class Constants {
  public static get Default_Country(): string {
      return 'in';
  }

  public static get Country_List(): any {
      return {
          ae: 'United Arab Emirates',
          ar: 'Argentina',
          at: 'Austria',
          au: 'Australia',
          be: 'Belgium',
          bg: 'Bulgaria',
          br: 'Brazil',
          ca: 'Canada',
          ch: 'Switzerland',
          cn: 'China',
          co: 'Colombia',
          cu: 'Cuba',
          cz: 'Czech Republic',
          de: 'Germany',
          eg: 'Egypt',
          fr: 'France',
          gb: 'United Kingdom',
          gr: 'Greece',
          hk: 'Hong Kong',
          hu: 'Hungary',
          id: 'Indonesia',
          ie: 'Ireland',
          il: 'Israel',
          in: 'India',
          it: 'Italy',
          jp: 'Japan',
          kr: 'South Korea',
          lt: 'Lithuania',
          lv: 'Latvia',
          ma: 'Morocco',
          mx: 'Mexico',
          my: 'Malaysia',
          ng: 'Nigeria',
          nl: 'Netherlands',
          no: 'Norway',
          nz: 'New Zealand',
          ph: 'Philippines',
          pl: 'Poland',
          pt: 'Portugal',
          ro: 'Romania',
          rs: 'Serbia',
          ru: 'Russia',
          sa: 'Saudi Arabia',
          se: 'Sweden',
          sg: 'Singapore',
          si: 'Slovenia',
          sk: 'Slovakia',
          th: 'Thailand',
          tr: 'Turkey',
          tw: 'Taiwan',
          ua: 'Ukraine',
          us: 'United States',
          ve: 'Venezuela',
          za: 'South Africa',
      };
  }

  public static get Category_List(): any {
    return [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology'
    ];
  }

  public static get API_Key(): string {
    return '694ddcf91f8843d59ab96bd8155af3bc';
  }

  public static get API_URL(): string {
    return 'https://newsapi.org/';
  }

  public static get Weather_URL(): string {
    return 'https://api.openweathermap.org/data/2.5/weather';
  }

  public static get Weather_API_KEy(): string {
    return 'f28487f8c21f3b7ac81955f595eb13c2';
  }
}
