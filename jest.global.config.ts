export default async () => {
  // Mock timezone and location for tests
  process.env.TZ = 'Australia/Sydney';
  process.env.LANG = 'en_AU.UTF-8';
  process.env.LC_COLLATE = process.env.LANG;
  process.env.LC_CTYPE = process.env.LANG;
  process.env.LC_MESSAGES = process.env.LANG;
  process.env.LC_MONETARY = process.env.LANG;
  process.env.LC_NUMERIC = process.env.LANG;
  process.env.LC_TIME = process.env.LANG;
  process.env.LC_ALL = process.env.LANG;
};
