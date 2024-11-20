import { calculateDuration } from "@/app/utils/calculateDuration";

describe("calculateDuration", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2024-11-19"));
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("calculates duration in years and months", () => {
    expect(calculateDuration("Jan", "2022", "Jun", "2024")).toEqual({ years: 2 , months: 6 });
  });

  it("handles duration under 12 months", () => {
    expect(calculateDuration("Jan", "2022", "Jun", "2022")).toEqual({ years: 0 , months: 6 });
  });

  it("handles duration when endMonth and endYear are not provided", () => {
    expect(calculateDuration("Jan", "2022")).toEqual({ years: 2, months: 11 });
  });
});
