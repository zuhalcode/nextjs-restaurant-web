module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {},
  },
  variants: {},
  future: {},
  experimental: {},
  resolveMatches: (input) => {
    if (typeof input !== "string") {
      return [];
    }

    return glob.sync(input, { nodir: true });
  },
};
