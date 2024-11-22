import { displayDate } from "@/app/utils/displayDate";

describe("displayDate", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns empty string if end date is before start date", () => {
    expect(displayDate("Jan", "2023", "Jan", "2022")).toEqual(""); // Year
    expect(displayDate("Feb", "2023", "Jan", "2023")).toEqual(""); // Month
    expect(displayDate("Feb", "2023", "Jan", "2022")).toEqual(""); // Month and year
  });

  it("returns formatted string when endMonth and endYear are not provided (Present)", () => {
    expect(displayDate("Jan", "2023")).toEqual("Jan 2023 - Present");
  });

  it("returns formatted string when start date and end dates are the same", () => {
    expect(displayDate("Jan", "2023", "Jan", "2023")).toEqual("Jan 2023");
  });

  it("returns formatted string when start date and end dates are different", () => {
    expect(displayDate("Jan", "2020", "Feb", "2023")).toEqual(
      "Jan 2020 - Feb 2023",
    );
  });
});
