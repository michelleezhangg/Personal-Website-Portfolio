import { calculateDuration, displayDuration } from "@/app/utils/duration";

describe("calculateDuration", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2024-11-19"));
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("calculates duration when endMonth and endYear are provided", () => {
    expect(calculateDuration("Jan", "2022", "Jun", "2024")).toEqual({
      years: 2,
      months: 6,
    });
  });

  it("calculates duration when endMonth and endYear are not provided (Present)", () => {
    expect(calculateDuration("Jan", "2022")).toEqual({ years: 2, months: 11 });
  });

  it("calculates duration less than a year correctly", () => {
    expect(calculateDuration("Jan", "2024", "Jun", "2024")).toEqual({
      years: 0,
      months: 6,
    });
  });

  it("calculates duration when start and end months are the same", () => {
    expect(calculateDuration("Jan", "2024", "Jan", "2024")).toEqual({
      years: 0,
      months: 1,
    });
  });

  it("handles duration when end dates starts before start date", () => {
    expect(calculateDuration("Jan", "2024", "Jan", "2023")).toEqual({
      // Year
      years: 0,
      months: 0,
    });
    expect(calculateDuration("Jun", "2023", "Jan", "2023")).toEqual({
      // Month
      years: 0,
      months: 0,
    });
    expect(calculateDuration("Jun", "2024", "Jan", "2023")).toEqual({
      // Month and year
      years: 0,
      months: 0,
    });
  });
});

describe("displayDuration", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2024-11-19"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns formatted string for a multi-year duration without months", () => {
    expect(displayDuration("Jan", "2022", "Dec", "2023")).toEqual("2 years");
  });

  it("returns formatted string for a one year duration without months", () => {
    expect(displayDuration("Jan", "2022", "Dec", "2022")).toEqual("1 year");
  });

  it("returns formatted string for a multi-month duration", () => {
    expect(displayDuration("Jan", "2022", "Jun", "2022")).toEqual("6 months");
  });

  it("returns formatted string for a one month duration", () => {
    expect(displayDuration("Jan", "2022", "Jan", "2022")).toEqual("1 month");
  });

  it("returns formatted string for a multi-year and multi-month duration", () => {
    expect(displayDuration("Jan", "2022", "Jun", "2024")).toEqual(
      "2 years, 6 months",
    );
  });

  it("returns formatted string for a one year and one month duration", () => {
    expect(displayDuration("Jan", "2022", "Jan", "2023")).toEqual(
      "1 year, 1 month",
    );
  });

  it("returns formatted string for a multi-year and singular month duration", () => {
    expect(displayDuration("Jan", "2022", "Jan", "2024")).toEqual(
      "2 years, 1 month",
    );
  });

  it("returns formatted string for a singular year and multi-month duration", () => {
    expect(displayDuration("Jan", "2022", "Jun", "2023")).toEqual(
      "1 year, 6 months",
    );
  });

  it("returns formatted string for present experiences", () => {
    expect(displayDuration("Jan", "2022")).toEqual("2 years, 11 months");
  });
});
